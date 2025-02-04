function initializePrivacyControls() {
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
            tag: 'https://www.clarity.ms/tag/f4v1091lex',
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
 
 
    const originalSetAttribute = Element.prototype.setAttribute
 
 
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
        if (!categories || categories.length === 0) {
            return true
        }
        const cookieName = 'privyConsent'
        const defaultConsent = {
            NECESSARY: true,
            FUNCTIONAL: false,
            ANALYTICS: false,
            MARKETING: false,
            OTHERS: false
        }
 
 
        function getConsentData(source) {
            try {
                return JSON.parse(source)
            } catch {
                return null
            }
        }
 
 
        function checkConsent(consentObject) {
            return (
                consentObject &&
                categories.every((category) => consentObject[category] === true)
            )
        }
 
 
        return (
            checkConsent(getConsentData(localStorage.getItem(cookieName))) ||
            checkConsent(
                getConsentData(
                    document.cookie
                        .split('; ')
                        .find((row) => row.startsWith(`${cookieName}=`))
                        ?.split('=')[1]
                )
            ) ||
            checkConsent(defaultConsent)
        )
    }
 
 
    function handleTags(element) {
        const url = element.src || element.getAttribute('src') || ''
        if (!url) {
            return
        }
        const tagDetails = getUrlDetails(url)
        if (!hasUserConsent(tagDetails.categories)) {
            element.setAttribute('data-src', url)
            element.removeAttribute('src')
            if (tagDetails.type === 'script') {
                element.setAttribute('type', 'text/plain')
            }
        }
    }
 
 
    Element.prototype.setAttribute = function (name, value) {
        if (
            name === 'src' &&
            monitoredElements.includes(this.tagName.toLowerCase())
        ) {
            const tagDetails = getUrlDetails(value)
            if (!hasUserConsent(tagDetails.categories)) {
                originalSetAttribute.call(this, 'data-src', value)
                // eslint-disable-next-line max-depth
                if (this.tagName.toLowerCase() === 'script') {
                    originalSetAttribute.call(this, 'type', 'text/plain')
                    return
                }
            }
        }
        originalSetAttribute.call(this, name, value)
    }
 
 
    const style = document.createElement('style')
    style.textContent = `
        iframe[data-src]:not([src]), img[data-src]:not([src]), embed[data-src]:not([src]) {
            display: block !important; background: #f0f0f0 !important;
            border: 1px solid #ccc !important; padding: 20px !important;
            text-align: center !important; min-height: 100px !important;
        }
        iframe[data-src]:not([src])::before, img[data-src]:not([src])::before, embed[data-src]:not([src])::before {
            content: "Content blocked pending consent" !important;
            display: block !important; color: #666 !important;
        }
    `
    document.head.appendChild(style)
 
 
    function processExistingElements() {
        monitoredElements.forEach((tag) => {
            document.querySelectorAll(tag).forEach((element) => {
                handleTags(element)
            })
        })
    }
 
 
    function setupPrivacyObserver() {
        new MutationObserver((mutations) => {
            mutations.forEach(({ addedNodes, type, attributeName, target }) => {
                addedNodes.forEach(
                    (node) =>
                        monitoredElements.includes(
                            node.tagName?.toLowerCase()
                        ) && handleTags(node)
                )
                if (
                    type === 'attributes' &&
                    (attributeName === 'src' || attributeName === 'type')
                ) {
                    handleTags(target)
                }
            })
        }).observe(document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['src', 'type']
        })
    }
 
 
    processExistingElements()
    setupPrivacyObserver()
    console.log('Privacy controls initialized')
 }
 
 
 window.updatePrivacyConsent = function (consentObject) {
    localStorage.setItem('privyConsent', JSON.stringify(consentObject))
    initializePrivacyControls()
 }
  