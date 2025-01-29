;(function () {
    // Configuration
    const nonScriptElements = ['embed', 'iframe', 'img']
    const monitoredElements = [...nonScriptElements, 'script']
    const tagsList = [
        {
            tag: 'https://www.googletagmanager.com/gtag/js?id=G-KWC0VKDZKW&l=dataLayer&cx=c&gtm=45He51n0h1v9199743789za200',
            categories: ['NECESSARY'],
            type: 'script'
        },
        {
            tag: 'https://www.googletagmanager.com/gtm.js?id=GTM-KS3M7CSF',
            categories: ['MARKETING'],
            type: 'script'
        },
        {
            tag: 'https://js.hsforms.net/forms/embed/v2.js',
            categories: ['MARKETING'],
            type: 'script'
        },
        {
            tag: 'https://platform.twitter.com/widgets.js',
            categories: ['ANALYTICS'],
            type: 'script'
        },
        {
            tag: 'https://www.youtube.com/embed/',
            categories: ['ANALYTICS'],
            type: 'iframe'
        },
        {
            tag: 'https://open.spotify.com/embed/',
            categories: ['ANALYTICS', 'FUNCTIONAL'],
            type: 'iframe'
        }
    ]

    // Store original Element prototype methods
    const originalSetAttribute = Element.prototype.setAttribute
    const originalSetAttributeNS = Element.prototype.setAttributeNS

    // Override setAttribute
    Element.prototype.setAttribute = function (name, value) {
        if (
            name === 'src' &&
            monitoredElements.includes(this.tagName.toLowerCase())
        ) {
            const tagDetails = getUrlDetails(value)
            if (!hasUserConsent(tagDetails.categories)) {
                console.log(`Blocking src setting for ${this.tagName}:`, value)
                originalSetAttribute.call(this, 'data-src', value)
                return
            }
        }
        originalSetAttribute.call(this, name, value)
    }

    // Override setAttributeNS
    Element.prototype.setAttributeNS = function (namespace, name, value) {
        if (
            name === 'src' &&
            monitoredElements.includes(this.tagName.toLowerCase())
        ) {
            const tagDetails = getUrlDetails(value)
            if (!hasUserConsent(tagDetails.categories)) {
                console.log(
                    `Blocking src setting (NS) for ${this.tagName}:`,
                    value
                )
                originalSetAttributeNS.call(this, namespace, 'data-src', value)
                return
            }
        }
        originalSetAttributeNS.call(this, namespace, name, value)
    }

    // Add default styling for blocked elements
    const style = document.createElement('style')
    style.textContent = `
        iframe[data-src]:not([src]), 
        img[data-src]:not([src]), 
        embed[data-src]:not([src]) {
            display: block !important;
            background: #f0f0f0 !important;
            border: 1px solid #ccc !important;
            padding: 20px !important;
            text-align: center !important;
            min-height: 100px !important;
            position: relative !important;
        }
        
        iframe[data-src]:not([src])::before, 
        img[data-src]:not([src])::before,
        embed[data-src]:not([src])::before {
            content: "Content blocked pending consent" !important;
            display: block !important;
            color: #666 !important;
            font-family: sans-serif !important;
        }
    `
    document.head.appendChild(style)

    // Utility Functions
    function findMatchingTag(url) {
        return tagsList.find((item) => url.includes(item.tag)) || null
    }

    function getUrlDetails(url) {
        const tagDetails = findMatchingTag(url) || {}
        return {
            categories: tagDetails.categories || [],
            type: tagDetails.type || ''
        }
    }

    function hasUserConsent(categories) {
        if (!categories || categories.length === 0) return true

        const cookieName = 'privyConsent'
        const defaultConsent = {
            NECESSARY: true,
            FUNCTIONAL: false,
            ANALYTICS: false,
            MARKETING: false,
            OTHERS: false
        }

        function checkConsent(consentObject) {
            if (!consentObject) return false
            return categories.every(
                (category) => consentObject[category] === true
            )
        }

        function getConsentData(source) {
            try {
                return JSON.parse(source)
            } catch (error) {
                console.error('Error parsing consent data:', error)
                return null
            }
        }

        const localStorageConsent = localStorage.getItem(cookieName)
        const cookieConsent = document.cookie
            .split('; ')
            .find((row) => row.startsWith(`${cookieName}=`))

        return (
            checkConsent(getConsentData(localStorageConsent)) ||
            checkConsent(
                cookieConsent
                    ? getConsentData(cookieConsent.split('=')[1])
                    : null
            ) ||
            checkConsent(defaultConsent)
        )
    }

    // Core Processing Functions
    function processElement(element) {
        const url =
            element.getAttribute('src') || element.getAttribute('data-src')
        if (!url) return

        const tagDetails = getUrlDetails(url)
        if (!hasUserConsent(tagDetails.categories)) {
            if (element.hasAttribute('src')) {
                const originalSrc = element.getAttribute('src')
                element.removeAttribute('src')
                element.setAttribute('data-src', originalSrc)
            }
        } else if (
            element.hasAttribute('data-src') &&
            !element.hasAttribute('src')
        ) {
            const originalSrc = element.getAttribute('data-src')
            element.setAttribute('src', originalSrc)
        }
    }

    function processAllElements() {
        monitoredElements.forEach((tag) => {
            document.querySelectorAll(tag).forEach(processElement)
        })
    }

    // Mutation Observer Setup
    function setupPrivacyObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // Handle added nodes
                mutation.addedNodes.forEach((node) => {
                    if (
                        node.nodeType === 1 &&
                        monitoredElements.includes(node.tagName.toLowerCase())
                    ) {
                        processElement(node)
                    }
                })

                // Handle attribute changes
                if (
                    mutation.type === 'attributes' &&
                    (mutation.attributeName === 'src' ||
                        mutation.attributeName === 'data-src')
                ) {
                    processElement(mutation.target)
                }
            })
        })

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'data-src']
        })
    }

    // Initialize when DOM is ready
    function initialize() {
        processAllElements()
        setupPrivacyObserver()
        console.log('Privacy controls initialized')
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize)
    } else {
        initialize()
    }

    // Export consent update function to global scope
    window.updatePrivacyConsent = function (consentObject) {
        // Save consent
        localStorage.setItem('privyConsent', JSON.stringify(consentObject))

        // Reprocess all elements with new consent settings
        processAllElements()
    }
})()
