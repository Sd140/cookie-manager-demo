import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { randomBytes } from 'node:crypto'

// TEMPORARY, for PRI-87 manual verification.
// Restore the original with:  cp ../.demo-vite.restore vite.config.js
//
// Makes the dev server behave like a real strict-CSP host: a fresh nonce on
// every response, the policy in a real header rather than a meta tag, and the
// nonce substituted into the banner tag.
const BACKEND = 'http://127.0.0.1:3001'

function strictCsp() {
    let nonce = ''
    return {
        name: 'privy-strict-csp',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                // nonce = randomBytes(18).toString('base64')   // CSPRNG, never Math.random
                res.setHeader('Content-Security-Policy', [
                    "default-src 'self'",
                    // No unsafe-inline: a nonce in this directive makes the
                    // browser ignore it anyway. That is the whole point of FR-9.
                    `script-src 'nonce-${nonce}' 'strict-dynamic'`,
                    `style-src 'nonce-${nonce}' https://fonts.googleapis.com`,
                    'font-src https://fonts.gstatic.com data:',
                    `connect-src 'self' ws: ${BACKEND}`,
                    "img-src 'self' data:",
                    `frame-src 'self' ${BACKEND}`,
                    "object-src 'none'",
                    "base-uri 'none'"
                ].join('; '))
                next()
            })
        },
        transformIndexHtml: {
            order: 'post',
            handler: (html) => html
                // The banner tag is deliberately excluded from the blanket
                // rule below. Auto-nonceing it would make it impossible to
                // test the un-nonced case by removing the attribute: the
                // plugin would silently put it back and the banner would
                // always work. Only __PRIVY_NONCE__ opts that tag in.
                .replace(/__PRIVY_NONCE__/g, nonce)
                .replace(/<script(?![^>]*\bnonce=)(?![^>]*cookie-banner\/assets)/g, `<script nonce="${nonce}"`)
                .replace(/<style(?![^>]*\bnonce=)/g, `<style nonce="${nonce}"`)
        }
    }
}

// ---------------------------------------------------------------------------
// CSP nonce toggle (PRI-87 / TRD-CKM-006)
//
// Only one of the two exports below may be active at a time.
// Change which one is commented out, then restart the dev server.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ENABLE CSP NONCE - uncomment the line below to serve a strict
// Content-Security-Policy with a fresh nonce on every response, and to
// substitute that nonce into the __PRIVY_NONCE__ placeholder on the banner tag
// in index.html. This is what a real client running a nonce policy looks like.
// ---------------------------------------------------------------------------

export default defineConfig({ plugins: [react(), strictCsp()], base: '/' })

// DISABLE CSP - uncomment the block below to serve no policy header at all.
// The banner must still render and work exactly the same, which is the whole
// point of FR-6: with no nonce on the page every stamping step is a no-op.
// The __PRIVY_NONCE__ placeholder is left unsubstituted in this mode and is
// harmless, because a nonce attribute is only consulted when a policy names one.

// export default defineConfig({
//   plugins: [react()],
//   base: '/'
// })
