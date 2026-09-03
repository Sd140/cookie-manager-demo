/**
 * Creates one real route per language path spelling, so QA can test banner
 * language auto-selection (PRI-88) on the deployed site.
 *
 * Why this exists: GitHub Pages serves static files with no rewrite config, so
 * https://cookie-manager.sanketsaboo.com/hindi/ is a 404 unless a file exists
 * there. The banner reads the first path segment of whatever URL the page is
 * served at, so without a file the page never loads and no rule ever runs.
 *
 * Two things are produced after `vite build`:
 *
 *   dist/<segment>/index.html  a real 200 for every accepted spelling
 *   dist/404.html              Pages' fallback for everything else, which keeps
 *                              the requested URL, so the fall-through cases
 *                              (/foobar/, /br/, /products/hindi/) still render
 *                              and QA can confirm they open the default
 *
 * Each file is a copy of the built index.html, so it carries the hashed asset
 * references. A hand-written file under public/ would ship dev-only /src/
 * paths and render blank.
 *
 * This list is only the set of paths that need to exist. Which language a
 * segment means is the banner's business, so no mapping is kept here.
 * Regenerate the list when the product ships a new language, from the backend:
 *
 *   node --input-type=module -e "const m = await import('./services/banner/template_utils.js'); \
 *     console.log(Object.keys(m.buildPathLanguageAliases()).join(' '))"
 *
 * Note br and st are deliberately absent. ISO assigns those to Breton and
 * Sesotho, so the banner refuses them as input and Bodo and Santhali are
 * reached by brx and sat. Leaving them out means QA can check that
 * /br/ falls through to the default. See TRD-CKM-001 section 3.1.
 */
import { mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const LANGUAGE_SEGMENTS = [
  'english', 'en',
  'assamese', 'as',
  'bengali', 'bangla', 'bn',
  'bodo', 'brx',
  'dogri', 'doi',
  'konkani', 'gom',
  'gujarati', 'gu',
  'hindi', 'hi',
  'kannada', 'kn',
  'maithili', 'mai',
  'malayalam', 'ml',
  'manipuri', 'meitei', 'mni-mtei',
  'marathi', 'mr',
  'nepali', 'ne',
  'oriya', 'odia', 'or',
  'punjabi', 'panjabi', 'pa',
  'sanskrit', 'sa',
  'sindhi', 'sd',
  'santhali', 'santali', 'sat',
  'tamil', 'ta',
  'telugu', 'te',
  'urdu', 'ur',
  'kashmiri', 'ks'
]

const DIST = resolve(process.cwd(), 'dist')
const SOURCE = join(DIST, 'index.html')

if (!existsSync(SOURCE)) {
  console.error(`make-language-routes: ${SOURCE} not found. Run vite build first.`)
  process.exit(1)
}

// The list is fixed in this file, but the values become directory names, so
// each one is checked rather than trusted.
const SAFE_SEGMENT = /^[a-z0-9][a-z0-9-]*$/

for (const segment of LANGUAGE_SEGMENTS) {
  if (!SAFE_SEGMENT.test(segment)) {
    console.error(`make-language-routes: refusing unsafe segment ${JSON.stringify(segment)}`)
    process.exit(1)
  }
  const dir = join(DIST, segment)
  mkdirSync(dir, { recursive: true })
  copyFileSync(SOURCE, join(dir, 'index.html'))
}

// Everything that is not a language path: Pages serves this and leaves the URL
// alone, so the banner still sees the segment and falls through to the default.
copyFileSync(SOURCE, join(DIST, '404.html'))

console.log(`make-language-routes: ${LANGUAGE_SEGMENTS.length} routes, plus 404.html`)
