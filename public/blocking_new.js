/* eslint-disable prefer-destructuring */
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
        tag: 'https://www.youtube.com/embed/MS5jByTX_pk?si\x3dH0EcHQpMyJdEWyPy',
        categories: ['ANALYTICS'],
        type: 'iframe'
    },
    {
        tag: 'https://www.youtube.com/embed/rYb4JNGShOM?si=K3yUbeStbhNIMYNJ',
        categories: ['ANALYTICS'],
        type: 'iframe'
    },
    {
        tag: 'https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P',
        categories: ['ANALYTICS', 'FUNCTIONAL'],
        type: 'iframe'
    }
]
/**
 * Finds the object matching a given URL in the list.
 *
 * @param {Array} tagsList - The array of objects containing tags and categories.
 * @param {string} url - The URL to match with the 'tag' field.
 * @returns {Object|null} - The matched object or null if no match is found.
 */
function findMatchingTag(url) {
    const data = tagsList.find((item) => item.tag === url) || null
    console.log('findMatchingTag', data)
    return data
}

/**
 * Retrieves privacy categories for a given URL.
 * @param {string} url - The URL to categorize.
 * @returns {Array} An array containing categories.
 */
function getUrlDetails(url) {
    const tagDetails = findMatchingTag(url) || {}
    const results = {
        categories: tagDetails['categories'] || [],
        type: tagDetails['type'] || ''
    }
    console.log('getUrlDetails', results)

    return results
}
/**
 * Checks if the user has consented to specific privacy categories.
 * It checks localStorage, then cookies, and falls back to default consent.
 *
 * @param {Array} categories - The list of category IDs to check.
 * @returns {boolean} True if the user has consented to the specified categories, false otherwise.
 */
function hasUserConsent(categories) {
    if (!categories || categories.length === 0) {
        console.log('No categories')
        return true
    } // If no categories are provided, consider consent granted.

    const cookieName = 'privyConsent'
    const defaultConsent = {
        NECESSARY: true,
        FUNCTIONAL: false,
        ANALYTICS: false,
        MARKETING: false,
        OTHERS: false
    }

    // Function to check if the user consented to the specified categories
    function checkConsent(consentObject) {
        if (!consentObject) {
            console.error('Consent object is null or undefined')
            return false // Return false if consentObject is null or undefined
        }
        const results = categories.every(function (category) {
            return consentObject[category] === true
        })
        console.log('checkConsent', results)
        return results
    }

    // Helper function to safely parse consent data from a source
    function getConsentData(source) {
        try {
            return JSON.parse(source)
        } catch (error) {
            console.error('Error parsing consent data:', error)
            return null
        }
    }

    // Function to check localStorage and return the result
    function checkLocalStorage() {
        const localStorageValue = localStorage.getItem(cookieName)
        const results = localStorageValue
            ? getConsentData(localStorageValue)
            : null
        console.log('checkLocalStorage', results)
        return results
    }

    // Function to check cookies and return the result
    function checkCookies() {
        const cookieValue = document.cookie.split('; ').find(function (row) {
            return row.startsWith(`${cookieName}=`)
        })
        const results = cookieValue
            ? getConsentData(cookieValue.split('=')[1])
            : null
        console.log('checkCookies', results)
        return results
    }

    // Try to get consent data from localStorage, cookies, or fall back to default
    return (
        checkConsent(checkLocalStorage()) ||
        checkConsent(checkCookies()) ||
        checkConsent(defaultConsent)
    )
}

/**
 * Adds privacy-related classes to an element based on its categories.
 * @param {HTMLElement} element - The element to modify.
 * @param {Object} categories - The privacy categories associated with the element.
 */
function addPrivacyClasses(element, categories) {
    if (categories.length) {
        element.classList.add(
            ...categories.map((category) => `privy-cmp-category-${category}`)
        )
    }
}

/**
 * Handles media elements (img, iframe, embed) for privacy compliance.
 * @param {HTMLElement} element - The media element to process.
 */
function handleTags(element) {
    const url = element.src || ''
    const tagDetails = getUrlDetails(url)
    const categories = tagDetails['categories']
    const type = tagDetails['type']
    console.log('handleTags', url, tagDetails, type, categories)
    if (categories.length > 0) {
        addPrivacyClasses(element, categories)
    }
    if (!hasUserConsent(categories)) {
        const originalSrc = element.src
        if (type === 'script') {
            console.log('Script blocking...')
            element.type = 'text/plain'
            console.log(`Script blocked: ${url}`, type, categories)
        } else if (nonScriptElements.includes(type)) {
            element.removeAttribute('src')
            element.setAttribute('data-src', originalSrc)
            console.log(`Media element blocked: ${url}`, type, categories)
        } else {
            console.log('Not a valid type')
        }
    }
    if (
        element.tagName.toLowerCase() === 'iframe' &&
        url.includes('youtube.com')
    ) {
        console.log('YouTube iframe detected, blocking...')
        element.setAttribute('data-src', url)
        element.removeAttribute('src')
    }
}
/**
 * Processes all monitored elements in the DOM and rewrites their `type` or `src`.
 */
function processExistingElements() {
    monitoredElements.forEach((tag) => {
        document.querySelectorAll(tag).forEach((element) => {
            handleTags(element)
        })
    })
}
/**
 * Sets up a MutationObserver to monitor DOM changes for compliance.
 */
function setupPrivacyObserver() {
    // Process all monitored elements already present in the DOM
    processExistingElements()
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Handle added nodes
            mutation.addedNodes.forEach((node) => {
                if (
                    node.nodeType === 1 &&
                    monitoredElements.includes(node.tagName.toLowerCase())
                ) {
                    console.log('Add Nodes', node)
                    handleTags(node)
                }
            })

            // Handle attribute changes
            if (mutation.attributeName === 'src') {
                const element = mutation.target
                console.log('Handle attribute changes', element)
                handleTags(element)
            }
        })
    })

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src']
    })

    console.log('Privacy observer initialized.')
}

// Initialize the privacy observer
// Override document.createElement
// function createElementWithPrivacyLogic(originalCreateElement) {
//     return function (...args) {
//         const element = originalCreateElement(...args)

//         // Apply privacy logic if it's a monitored element
//         if (monitoredElements.includes(args[0]?.toLowerCase())) {
//             handleTags(element) // Apply privacy logic at creation time
//         }

//         return element
//     }
// }

// // Using the enhanced createElement function
// // prettier-ignore
// (function () {
//     const originalCreateElement = document.createElement.bind(document)
//     document.createElement = createElementWithPrivacyLogic(
//         originalCreateElement
//     )
// })()

setupPrivacyObserver()
