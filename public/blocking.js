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
       tag: 'https://privy-cookie-manager.idfy.com/ext/cookie-banner/76e7bf3c-564f-4769-9c59-91ebada9eeaa',
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
       tag: 'https://www.youtube.com/embed/MS5jByTX_pk?si=H0EcHQpMyJdEWyPy',
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


// /**
//  * Checks if the user has consented to all specified categories in the consent object.
//  *
//  * @param {Object} consentObject - The consent object to check against.
//  * @param {Array} categories - The list of category IDs to check.
//  * @returns {boolean} True if the user has consented to all specified categories, false otherwise.
//  */
// function checkConsent(consentObject, categories) {
//     if (!categories || categories.length === 0) {
//         return true // If no categories are provided, consider consent granted by default.
//     }
//     return categories.every((category) => consentObject[category] === true)
// }


// /**
//  * Checks if the user has consented to specific privacy categories.
//  * First checks a cookie with the name 'privyConsent', and if not found, checks local storage.
//  *
//  * @param {Array} categories - The list of category IDs to check.
//  * @returns {boolean} True if the user has consented, false otherwise.
//  */
// function hasUserConsent(categories) {
//     if (!categories || categories.length === 0) {
//         return true
//     }
//     const cookieName = 'privyConsent'
//     const defaultConsent = {
//         NECESSARY: true,
//         FUNCTIONAL: false,
//         ANALYTICS: false,
//         MARKETING: false
//     }


//     // First, check local storage for the value
//     const localStorageValue = localStorage.getItem(cookieName)
//     console.log('localStorageValue', localStorageValue)
//     if (localStorageValue) {
//         try {
//             const parsedLocalStorageValue = JSON.parse(localStorageValue)
//             const allConsentGranted = Object.values(
//                 parsedLocalStorageValue
//             ).every((consent) => consent === true)
//             return allConsentGranted // Returns true if all consents are granted, otherwise false.
//         } catch (error) {
//             console.error(
//                 'Error parsing privyConsent from localStorage:',
//                 error
//             )
//         }
//     }


//     // If not found in local storage, check cookies
//     const allCookies = document.cookie.split('; ')
//     const cookieValue = allCookies.find((row) =>
//         row.startsWith(`${cookieName}=`)
//     )
//     console.log('cookieValue', cookieValue)
//     if (cookieValue) {
//         try {
//             const parsedCookieValue = JSON.parse(cookieValue.split('=')[1])
//             const allConsentGranted = Object.values(parsedCookieValue).every(
//                 (consent) => consent === true
//             )
//             return allConsentGranted // Returns true if all consents are granted, otherwise false.
//         } catch (error) {
//             console.error('Error parsing privyConsent cookie:', error)
//         }
//     }
//     const allConsentGranted = Object.values(defaultConsent).every(
//         (consent) => consent === true
//     )
//     return allConsentGranted
// }


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
}
/**
* Sets up a MutationObserver to monitor DOM changes for compliance.
*/
function setupPrivacyObserver() {
   // Process all monitored elements already present in the DOM
   monitoredElements.forEach((tag) => {
       document.querySelectorAll(tag).forEach((element) => {
           handleTags(element) // Apply your privacy-related logic to each element
       })
   })
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
setupPrivacyObserver()
