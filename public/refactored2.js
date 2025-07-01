 const cookieName = 'euconsent'
        const categorizedCookies = {};
        const IAB_TCF_VENDOR_URL = "https://ab0d-123-252-193-78.ngrok-free.app/ext/cookie-banner/api/v1/iab-tcf/"
        const tagsList = [];
        /* eslint-disable */
;(() => {
    var e = {
            59: (e, t, n) => {
                'use strict'
                var r
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentIDs = void 0)
                var o = n(9941),
                    i = (function () {
                        function e() {}
                        return (
                            (e.ID_TO_KEY = [
                                o.Segment.CORE,
                                o.Segment.VENDORS_DISCLOSED,
                                o.Segment.VENDORS_ALLOWED,
                                o.Segment.PUBLISHER_TC
                            ]),
                            (e.KEY_TO_ID =
                                (((r = {})[o.Segment.CORE] = 0),
                                (r[o.Segment.VENDORS_DISCLOSED] = 1),
                                (r[o.Segment.VENDORS_ALLOWED] = 2),
                                (r[o.Segment.PUBLISHER_TC] = 3),
                                r)),
                            e
                        )
                    })()
                t.SegmentIDs = i
            },
            450: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            643: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentSequence = void 0)
                var r = n(1636)
                t.SegmentSequence = function (e, t) {
                    if (((this[1] = [r.Segment.CORE]), (this[2] = [r.Segment.CORE]), 2 === e.version))
                        if (e.isServiceSpecific) this[2].push(r.Segment.PUBLISHER_TC)
                        else {
                            var n = !(!t || !t.isForVendors)
                            ;(n && !0 !== e[r.Fields.supportOOB]) || this[2].push(r.Segment.VENDORS_DISCLOSED),
                                n &&
                                    (e[r.Fields.supportOOB] &&
                                        e[r.Fields.vendorsAllowed].size > 0 &&
                                        this[2].push(r.Segment.VENDORS_ALLOWED),
                                    this[2].push(r.Segment.PUBLISHER_TC))
                        }
                }
            },
            668: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            743: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1129: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1201: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1636: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(4011), t),
                    o(n(9459), t),
                    o(n(7351), t),
                    o(n(3531), t),
                    o(n(8473), t),
                    o(n(9174), t),
                    o(n(3605), t),
                    o(n(4242), t),
                    o(n(1129), t),
                    o(n(9034), t),
                    o(n(9941), t),
                    o(n(59), t),
                    o(n(4665), t),
                    o(n(9864), t)
            },
            1692: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(7637), t),
                    o(n(7389), t),
                    o(n(9457), t),
                    o(n(5518), t)
            },
            1700: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BooleanEncoder = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.encode = function (e) {
                            return String(Number(e))
                        }),
                        (e.decode = function (e) {
                            return '1' === e
                        }),
                        e
                    )
                })()
                t.BooleanEncoder = n
            },
            1978: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            2105: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            2630: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SemanticPreEncoder = void 0)
                var r = n(1692),
                    o = n(1636),
                    i = (function () {
                        function e() {}
                        return (
                            (e.process = function (e, t) {
                                var n = e.gvl
                                if (!n) throw new r.EncodingError('Unable to encode TCModel without a GVL')
                                if (!n.isReady)
                                    throw new r.EncodingError(
                                        'Unable to encode TCModel tcModel.gvl.readyPromise is not resolved'
                                    )
                                ;((e = e.clone()).consentLanguage = n.language.toUpperCase()),
                                    (null == t ? void 0 : t.version) > 0 &&
                                    (null == t ? void 0 : t.version) <= this.processor.length
                                        ? (e.version = t.version)
                                        : (e.version = this.processor.length)
                                var o = e.version - 1
                                if (!this.processor[o]) throw new r.EncodingError('Invalid version: '.concat(e.version))
                                return this.processor[o](e, n)
                            }),
                            (e.processor = [
                                function (e) {
                                    return e
                                },
                                function (e, t) {
                                    ;(e.publisherRestrictions.gvl = t), e.purposeLegitimateInterests.unset(1)
                                    var n = new Map()
                                    return (
                                        n.set('legIntPurposes', e.vendorLegitimateInterests),
                                        n.set('purposes', e.vendorConsents),
                                        n.forEach(function (n, r) {
                                            n.forEach(function (i, s) {
                                                if (i) {
                                                    var c = t.vendors[s]
                                                    if (!c || c.deletedDate) n.unset(s)
                                                    else if (0 === c[r].length)
                                                        if (
                                                            'legIntPurposes' === r &&
                                                            0 === c.purposes.length &&
                                                            0 === c.legIntPurposes.length &&
                                                            c.specialPurposes.length > 0
                                                        );
                                                        else if (e.isServiceSpecific)
                                                            if (0 === c.flexiblePurposes.length) n.unset(s)
                                                            else {
                                                                for (
                                                                    var u = e.publisherRestrictions.getRestrictions(s),
                                                                        a = !1,
                                                                        l = 0,
                                                                        p = u.length;
                                                                    l < p && !a;
                                                                    l++
                                                                )
                                                                    a =
                                                                        (u[l].restrictionType ===
                                                                            o.RestrictionType.REQUIRE_CONSENT &&
                                                                            'purposes' === r) ||
                                                                        (u[l].restrictionType ===
                                                                            o.RestrictionType.REQUIRE_LI &&
                                                                            'legIntPurposes' === r)
                                                                a || n.unset(s)
                                                            }
                                                        else n.unset(s)
                                                }
                                            })
                                        }),
                                        e.vendorsDisclosed.set(t.vendors),
                                        e
                                    )
                                }
                            ]),
                            e
                        )
                    })()
                t.SemanticPreEncoder = i
            },
            3358: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.LangEncoder = void 0)
                var r = n(9887),
                    o = n(1692),
                    i = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
                                    i = e.charCodeAt(1) - 65
                                if (n < 0 || n > 25 || i < 0 || i > 25)
                                    throw new o.EncodingError('invalid language code: '.concat(e))
                                if (t % 2 == 1)
                                    throw new o.EncodingError('numBits must be even, '.concat(t, ' is not valid'))
                                return (t /= 2), r.IntEncoder.encode(n, t) + r.IntEncoder.encode(i, t)
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length || e.length % 2)
                                    throw new o.DecodingError('invalid bit length for language')
                                var n = e.length / 2,
                                    i = r.IntEncoder.decode(e.slice(0, n), n) + 65,
                                    s = r.IntEncoder.decode(e.slice(n), n) + 65
                                return String.fromCharCode(i) + String.fromCharCode(s)
                            }),
                            e
                        )
                    })()
                t.LangEncoder = i
            },
            3531: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            3576: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCModel = void 0)
                var i = n(9067),
                    s = n(1692),
                    c = n(7485),
                    u = n(1636),
                    a = (function (e) {
                        function t(t) {
                            var n = e.call(this) || this
                            return (
                                (n.isServiceSpecific_ = !1),
                                (n.supportOOB_ = !0),
                                (n.useNonStandardStacks_ = !1),
                                (n.purposeOneTreatment_ = !1),
                                (n.publisherCountryCode_ = 'AA'),
                                (n.version_ = 2),
                                (n.consentScreen_ = 0),
                                (n.policyVersion_ = 2),
                                (n.consentLanguage_ = 'EN'),
                                (n.cmpId_ = 0),
                                (n.cmpVersion_ = 0),
                                (n.vendorListVersion_ = 0),
                                (n.numCustomPurposes_ = 0),
                                (n.specialFeatureOptins = new u.Vector()),
                                (n.purposeConsents = new u.Vector()),
                                (n.purposeLegitimateInterests = new u.Vector()),
                                (n.publisherConsents = new u.Vector()),
                                (n.publisherLegitimateInterests = new u.Vector()),
                                (n.publisherCustomConsents = new u.Vector()),
                                (n.publisherCustomLegitimateInterests = new u.Vector()),
                                (n.vendorConsents = new u.Vector()),
                                (n.vendorLegitimateInterests = new u.Vector()),
                                (n.vendorsDisclosed = new u.Vector()),
                                (n.vendorsAllowed = new u.Vector()),
                                (n.publisherRestrictions = new u.PurposeRestrictionVector()),
                                t && (n.gvl = t),
                                n.updated(),
                                n
                            )
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t.prototype, 'gvl', {
                                get: function () {
                                    return this.gvl_
                                },
                                set: function (e) {
                                    c.GVL.isInstanceOf(e) || (e = new c.GVL(e)),
                                        (this.gvl_ = e),
                                        (this.publisherRestrictions.gvl = e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'cmpId', {
                                get: function () {
                                    return this.cmpId_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > 1)))
                                        throw new s.TCModelError('cmpId', e)
                                    this.cmpId_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'cmpVersion', {
                                get: function () {
                                    return this.cmpVersion_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                                        throw new s.TCModelError('cmpVersion', e)
                                    this.cmpVersion_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'consentScreen', {
                                get: function () {
                                    return this.consentScreen_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                                        throw new s.TCModelError('consentScreen', e)
                                    this.consentScreen_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'consentLanguage', {
                                get: function () {
                                    return this.consentLanguage_
                                },
                                set: function (e) {
                                    this.consentLanguage_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'publisherCountryCode', {
                                get: function () {
                                    return this.publisherCountryCode_
                                },
                                set: function (e) {
                                    if (!/^([A-z]){2}$/.test(e)) throw new s.TCModelError('publisherCountryCode', e)
                                    this.publisherCountryCode_ = e.toUpperCase()
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'vendorListVersion', {
                                get: function () {
                                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                                },
                                set: function (e) {
                                    if ((e = 0 | Number(e)) < 0) throw new s.TCModelError('vendorListVersion', e)
                                    this.vendorListVersion_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'policyVersion', {
                                get: function () {
                                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                                },
                                set: function (e) {
                                    if (((this.policyVersion_ = parseInt(e, 10)), this.policyVersion_ < 0))
                                        throw new s.TCModelError('policyVersion', e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'version', {
                                get: function () {
                                    return this.version_
                                },
                                set: function (e) {
                                    this.version_ = parseInt(e, 10)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'isServiceSpecific', {
                                get: function () {
                                    return this.isServiceSpecific_
                                },
                                set: function (e) {
                                    this.isServiceSpecific_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'useNonStandardStacks', {
                                get: function () {
                                    return this.useNonStandardStacks_
                                },
                                set: function (e) {
                                    this.useNonStandardStacks_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'supportOOB', {
                                get: function () {
                                    return this.supportOOB_
                                },
                                set: function (e) {
                                    this.supportOOB_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'purposeOneTreatment', {
                                get: function () {
                                    return this.purposeOneTreatment_
                                },
                                set: function (e) {
                                    this.purposeOneTreatment_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.setAllVendorConsents = function () {
                                this.vendorConsents.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorConsents = function () {
                                this.vendorConsents.empty()
                            }),
                            (t.prototype.setAllVendorsDisclosed = function () {
                                this.vendorsDisclosed.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorsDisclosed = function () {
                                this.vendorsDisclosed.empty()
                            }),
                            (t.prototype.setAllVendorsAllowed = function () {
                                this.vendorsAllowed.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorsAllowed = function () {
                                this.vendorsAllowed.empty()
                            }),
                            (t.prototype.setAllVendorLegitimateInterests = function () {
                                this.vendorLegitimateInterests.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorLegitimateInterests = function () {
                                this.vendorLegitimateInterests.empty()
                            }),
                            (t.prototype.setAllPurposeConsents = function () {
                                this.purposeConsents.set(this.gvl.purposes)
                            }),
                            (t.prototype.unsetAllPurposeConsents = function () {
                                this.purposeConsents.empty()
                            }),
                            (t.prototype.setAllPurposeLegitimateInterests = function () {
                                this.purposeLegitimateInterests.set(this.gvl.purposes)
                            }),
                            (t.prototype.unsetAllPurposeLegitimateInterests = function () {
                                this.purposeLegitimateInterests.empty()
                            }),
                            (t.prototype.setAllSpecialFeatureOptins = function () {
                                this.specialFeatureOptins.set(this.gvl.specialFeatures)
                            }),
                            (t.prototype.unsetAllSpecialFeatureOptins = function () {
                                this.specialFeatureOptins.empty()
                            }),
                            (t.prototype.setAll = function () {
                                this.setAllVendorConsents(),
                                    this.setAllPurposeLegitimateInterests(),
                                    this.setAllSpecialFeatureOptins(),
                                    this.setAllPurposeConsents(),
                                    this.setAllVendorLegitimateInterests()
                            }),
                            (t.prototype.unsetAll = function () {
                                this.unsetAllVendorConsents(),
                                    this.unsetAllPurposeLegitimateInterests(),
                                    this.unsetAllSpecialFeatureOptins(),
                                    this.unsetAllPurposeConsents(),
                                    this.unsetAllVendorLegitimateInterests()
                            }),
                            Object.defineProperty(t.prototype, 'numCustomPurposes', {
                                get: function () {
                                    var e = this.numCustomPurposes_
                                    if ('object' == typeof this.customPurposes) {
                                        var t = Object.keys(this.customPurposes).sort(function (e, t) {
                                            return Number(e) - Number(t)
                                        })
                                        e = parseInt(t.pop(), 10)
                                    }
                                    return e
                                },
                                set: function (e) {
                                    if (((this.numCustomPurposes_ = parseInt(e, 10)), this.numCustomPurposes_ < 0))
                                        throw new s.TCModelError('numCustomPurposes', e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.updated = function () {
                                var e = new Date(),
                                    t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
                                ;(this.created = t), (this.lastUpdated = t)
                            }),
                            (t.consentLanguages = c.GVL.consentLanguages),
                            t
                        )
                    })(i.Cloneable)
                t.TCModel = a
            },
            3605: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__values) ||
                        function (e) {
                            var t = 'function' == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0
                            if (n) return n.call(e)
                            if (e && 'number' == typeof e.length)
                                return {
                                    next: function () {
                                        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                                    }
                                }
                            throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
                        },
                    s =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = 'function' == typeof Symbol && e[Symbol.iterator]
                            if (!n) return e
                            var r,
                                o,
                                i = n.call(e),
                                s = []
                            try {
                                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        },
                    c =
                        (this && this.__spreadArray) ||
                        function (e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                    (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
                            return e.concat(r || Array.prototype.slice.call(t))
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestrictionVector = void 0)
                var u = n(9174),
                    a = n(4011),
                    l = n(9034),
                    p = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this
                            return (t.bitLength = 0), (t.map = new Map()), t
                        }
                        return (
                            o(t, e),
                            (t.prototype.has = function (e) {
                                return this.map.has(e)
                            }),
                            (t.prototype.isOkToHave = function (e, t, n) {
                                var r,
                                    o = !0
                                if (null === (r = this.gvl) || void 0 === r ? void 0 : r.vendors) {
                                    var i = this.gvl.vendors[n]
                                    if (i)
                                        if (e === l.RestrictionType.NOT_ALLOWED)
                                            o = i.legIntPurposes.includes(t) || i.purposes.includes(t)
                                        else if (i.flexiblePurposes.length)
                                            switch (e) {
                                                case l.RestrictionType.REQUIRE_CONSENT:
                                                    o = i.flexiblePurposes.includes(t) && i.legIntPurposes.includes(t)
                                                    break
                                                case l.RestrictionType.REQUIRE_LI:
                                                    o = i.flexiblePurposes.includes(t) && i.purposes.includes(t)
                                            }
                                        else o = !1
                                    else o = !1
                                }
                                return o
                            }),
                            (t.prototype.add = function (e, t) {
                                if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                                    var n = t.hash
                                    this.has(n) || (this.map.set(n, new a.BinarySearchTree()), (this.bitLength = 0)),
                                        this.map.get(n).add(e)
                                }
                            }),
                            (t.prototype.restrictPurposeToLegalBasis = function (e) {
                                for (
                                    var t = this.gvl.vendorIds,
                                        n = e.hash,
                                        r = (function () {
                                            var e, n, r
                                            try {
                                                for (var o = i(t), s = o.next(); !s.done; s = o.next()) r = s.value
                                            } catch (t) {
                                                e = { error: t }
                                            } finally {
                                                try {
                                                    s && !s.done && (n = o.return) && n.call(o)
                                                } finally {
                                                    if (e) throw e.error
                                                }
                                            }
                                            return r
                                        })(),
                                        o = c([], s(Array(r).keys()), !1).map(function (e) {
                                            return e + 1
                                        }),
                                        u = 1;
                                    u <= r;
                                    u++
                                )
                                    this.has(n) || (this.map.set(n, a.BinarySearchTree.build(o)), (this.bitLength = 0)),
                                        this.map.get(n).add(u)
                            }),
                            (t.prototype.getVendors = function (e) {
                                var t = []
                                if (e) {
                                    var n = e.hash
                                    this.has(n) && (t = this.map.get(n).get())
                                } else {
                                    var r = new Set()
                                    this.map.forEach(function (e) {
                                        e.get().forEach(function (e) {
                                            r.add(e)
                                        })
                                    }),
                                        (t = Array.from(r))
                                }
                                return t
                            }),
                            (t.prototype.getRestrictionType = function (e, t) {
                                var n
                                return (
                                    this.getRestrictions(e).forEach(function (e) {
                                        e.purposeId === t &&
                                            (void 0 === n || n > e.restrictionType) &&
                                            (n = e.restrictionType)
                                    }),
                                    n
                                )
                            }),
                            (t.prototype.vendorHasRestriction = function (e, t) {
                                for (var n = !1, r = this.getRestrictions(e), o = 0; o < r.length && !n; o++)
                                    n = t.isSameAs(r[o])
                                return n
                            }),
                            (t.prototype.getMaxVendorId = function () {
                                var e = 0
                                return (
                                    this.map.forEach(function (t) {
                                        e = Math.max(t.max(), e)
                                    }),
                                    e
                                )
                            }),
                            (t.prototype.getRestrictions = function (e) {
                                var t = []
                                return (
                                    this.map.forEach(function (n, r) {
                                        e
                                            ? n.contains(e) && t.push(u.PurposeRestriction.unHash(r))
                                            : t.push(u.PurposeRestriction.unHash(r))
                                    }),
                                    t
                                )
                            }),
                            (t.prototype.getPurposes = function () {
                                var e = new Set()
                                return (
                                    this.map.forEach(function (t, n) {
                                        e.add(u.PurposeRestriction.unHash(n).purposeId)
                                    }),
                                    Array.from(e)
                                )
                            }),
                            (t.prototype.remove = function (e, t) {
                                var n = t.hash,
                                    r = this.map.get(n)
                                r && (r.remove(e), r.isEmpty() && (this.map.delete(n), (this.bitLength = 0)))
                            }),
                            Object.defineProperty(t.prototype, 'gvl', {
                                get: function () {
                                    return this.gvl_
                                },
                                set: function (e) {
                                    var t = this
                                    this.gvl_ ||
                                        ((this.gvl_ = e),
                                        this.map.forEach(function (e, n) {
                                            var r = u.PurposeRestriction.unHash(n)
                                            e.get().forEach(function (n) {
                                                t.isOkToHave(r.restrictionType, r.purposeId, n) || e.remove(n)
                                            })
                                        }))
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isEmpty = function () {
                                return 0 === this.map.size
                            }),
                            Object.defineProperty(t.prototype, 'numRestrictions', {
                                get: function () {
                                    return this.map.size
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t
                        )
                    })(n(9067).Cloneable)
                t.PurposeRestrictionVector = p
            },
            4011: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BinarySearchTree = void 0)
                var i = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this
                        return (t.root = null), t
                    }
                    return (
                        o(t, e),
                        (t.prototype.getRoot = function () {
                            return this.root
                        }),
                        (t.prototype.isEmpty = function () {
                            return !this.root
                        }),
                        (t.prototype.add = function (e) {
                            var t,
                                n = { value: e, left: null, right: null }
                            if (this.isEmpty()) this.root = n
                            else
                                for (t = this.root; ; )
                                    if (e < t.value) {
                                        if (null === t.left) {
                                            t.left = n
                                            break
                                        }
                                        t = t.left
                                    } else {
                                        if (!(e > t.value)) break
                                        if (null === t.right) {
                                            t.right = n
                                            break
                                        }
                                        t = t.right
                                    }
                        }),
                        (t.prototype.get = function () {
                            for (var e = [], t = this.root; t; )
                                if (t.left) {
                                    for (var n = t.left; n.right && n.right != t; ) n = n.right
                                    n.right == t
                                        ? ((n.right = null), e.push(t.value), (t = t.right))
                                        : ((n.right = t), (t = t.left))
                                } else e.push(t.value), (t = t.right)
                            return e
                        }),
                        (t.prototype.contains = function (e) {
                            for (var t = !1, n = this.root; n; ) {
                                if (n.value === e) {
                                    t = !0
                                    break
                                }
                                e > n.value ? (n = n.right) : e < n.value && (n = n.left)
                            }
                            return t
                        }),
                        (t.prototype.min = function (e) {
                            var t
                            for (void 0 === e && (e = this.root); e; )
                                e.left ? (e = e.left) : ((t = e.value), (e = null))
                            return t
                        }),
                        (t.prototype.max = function (e) {
                            var t
                            for (void 0 === e && (e = this.root); e; )
                                e.right ? (e = e.right) : ((t = e.value), (e = null))
                            return t
                        }),
                        (t.prototype.remove = function (e, t) {
                            void 0 === t && (t = this.root)
                            for (var n = null, r = 'left'; t; )
                                if (e < t.value) (n = t), (t = t.left), (r = 'left')
                                else if (e > t.value) (n = t), (t = t.right), (r = 'right')
                                else {
                                    if (t.left || t.right)
                                        if (t.left)
                                            if (t.right) {
                                                var o = this.min(t.right)
                                                this.remove(o, t.right), (t.value = o)
                                            } else n ? (n[r] = t.left) : (this.root = t.left)
                                        else n ? (n[r] = t.right) : (this.root = t.right)
                                    else n ? (n[r] = null) : (this.root = null)
                                    t = null
                                }
                        }),
                        (t.build = function (e) {
                            if (e && 0 !== e.length) {
                                if (1 === e.length) return (n = new t()).add(e[0]), n
                                var n,
                                    r = e.length >> 1
                                ;(n = new t()).add(e[r])
                                var o = n.getRoot()
                                if (o) {
                                    if (r + 1 < e.length) {
                                        var i = t.build(e.slice(r + 1))
                                        o.right = i ? i.getRoot() : null
                                    }
                                    if (r - 1 > 0) {
                                        var s = t.build(e.slice(0, r - 1))
                                        o.left = s ? s.getRoot() : null
                                    }
                                }
                                return n
                            }
                            return null
                        }),
                        t
                    )
                })(n(9067).Cloneable)
                t.BinarySearchTree = i
            },
            4106: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.VectorEncodingType = void 0),
                    ((n = t.VectorEncodingType || (t.VectorEncodingType = {}))[(n.FIELD = 0)] = 'FIELD'),
                    (n[(n.RANGE = 1)] = 'RANGE')
            },
            4242: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.DeviceDisclosureStorageAccessType = void 0),
                    ((n = t.DeviceDisclosureStorageAccessType || (t.DeviceDisclosureStorageAccessType = {})).COOKIE =
                        'cookie'),
                    (n.WEB = 'web'),
                    (n.APP = 'app')
            },
            4259: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), o(n(9882), t), o(n(643), t), o(n(668), t)
            },
            4665: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                r,
                                o,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1]
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                }
                            return (
                                (i = { next: c(0), throw: c(1), return: c(2) }),
                                'function' == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this
                                    }),
                                i
                            )
                            function c(i) {
                                return function (c) {
                                    return (function (i) {
                                        if (n) throw new TypeError('Generator is already executing.')
                                        for (; s; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (o =
                                                            2 & i[0]
                                                                ? r.return
                                                                : i[0]
                                                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                                                : r.next) &&
                                                        !(o = o.call(r, i[1])).done)
                                                )
                                                    return o
                                                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = i
                                                        break
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: i[1],
                                                                done: !1
                                                            }
                                                        )
                                                    case 5:
                                                        s.label++, (r = i[1]), (i = [0])
                                                        continue
                                                    case 7:
                                                        ;(i = s.ops.pop()), s.trys.pop()
                                                        continue
                                                    default:
                                                        if (
                                                            !(
                                                                (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                                                                (6 !== i[0] && 2 !== i[0])
                                                            )
                                                        ) {
                                                            s = 0
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                            s.label = i[1]
                                                            break
                                                        }
                                                        if (6 === i[0] && s.label < o[1]) {
                                                            ;(s.label = o[1]), (o = i)
                                                            break
                                                        }
                                                        if (o && s.label < o[2]) {
                                                            ;(s.label = o[2]), s.ops.push(i)
                                                            break
                                                        }
                                                        o[2] && s.ops.pop(), s.trys.pop()
                                                        continue
                                                }
                                                i = t.call(e, s)
                                            } catch (e) {
                                                ;(i = [6, e]), (r = 0)
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & i[0]) throw i[1]
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    })([i, c])
                                }
                            }
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Vector = void 0)
                var s = n(9067),
                    c = n(1692),
                    u = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this
                            return (t.bitLength = 0), (t.maxId_ = 0), (t.set_ = new Set()), t
                        }
                        return (
                            o(t, e),
                            (t.prototype[Symbol.iterator] = function () {
                                var e
                                return i(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            ;(e = 1), (t.label = 1)
                                        case 1:
                                            return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4]
                                        case 2:
                                            t.sent(), (t.label = 3)
                                        case 3:
                                            return e++, [3, 1]
                                        case 4:
                                            return [2]
                                    }
                                })
                            }),
                            (t.prototype.values = function () {
                                return this.set_.values()
                            }),
                            Object.defineProperty(t.prototype, 'maxId', {
                                get: function () {
                                    return this.maxId_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.has = function (e) {
                                return this.set_.has(e)
                            }),
                            (t.prototype.unset = function (e) {
                                var t = this
                                Array.isArray(e)
                                    ? e.forEach(function (e) {
                                          return t.unset(e)
                                      })
                                    : 'object' == typeof e
                                    ? this.unset(
                                          Object.keys(e).map(function (e) {
                                              return Number(e)
                                          })
                                      )
                                    : (this.set_.delete(Number(e)),
                                      (this.bitLength = 0),
                                      e === this.maxId &&
                                          ((this.maxId_ = 0),
                                          this.set_.forEach(function (e) {
                                              t.maxId_ = Math.max(t.maxId, e)
                                          })))
                            }),
                            (t.prototype.isIntMap = function (e) {
                                var t = this
                                return (
                                    'object' == typeof e &&
                                    Object.keys(e).every(function (n) {
                                        var r = Number.isInteger(parseInt(n, 10))
                                        return (r = r && t.isValidNumber(e[n].id)) && void 0 !== e[n].name
                                    })
                                )
                            }),
                            (t.prototype.isValidNumber = function (e) {
                                return parseInt(e, 10) > 0
                            }),
                            (t.prototype.isSet = function (e) {
                                var t = !1
                                return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
                            }),
                            (t.prototype.set = function (e) {
                                var t = this
                                if (Array.isArray(e))
                                    e.forEach(function (e) {
                                        return t.set(e)
                                    })
                                else if (this.isSet(e)) this.set(Array.from(e))
                                else if (this.isIntMap(e))
                                    this.set(
                                        Object.keys(e).map(function (e) {
                                            return Number(e)
                                        })
                                    )
                                else {
                                    if (!this.isValidNumber(e))
                                        throw new c.TCModelError(
                                            'set()',
                                            e,
                                            'must be positive integer array, positive integer, Set<number>, or IntMap'
                                        )
                                    this.set_.add(e), (this.maxId_ = Math.max(this.maxId, e)), (this.bitLength = 0)
                                }
                            }),
                            (t.prototype.empty = function () {
                                this.set_ = new Set()
                            }),
                            (t.prototype.forEach = function (e) {
                                for (var t = 1; t <= this.maxId; t++) e(this.has(t), t)
                            }),
                            Object.defineProperty(t.prototype, 'size', {
                                get: function () {
                                    return this.set_.size
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.setAll = function (e) {
                                this.set(e)
                            }),
                            t
                        )
                    })(s.Cloneable)
                t.Vector = u
            },
            4688: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            5014: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            5134: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentEncoder = void 0)
                var r = n(6493),
                    o = n(6314),
                    i = n(8566),
                    s = n(4259),
                    c = n(1692),
                    u = n(7351),
                    a = n(1636),
                    l = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n,
                                    s = this
                                try {
                                    n = this.fieldSequence[String(e.version)][t]
                                } catch (n) {
                                    throw new c.EncodingError(
                                        'Unable to encode version: '.concat(e.version, ', segment: ').concat(t)
                                    )
                                }
                                var l = ''
                                t !== a.Segment.CORE &&
                                    (l = i.IntEncoder.encode(a.SegmentIDs.KEY_TO_ID[t], o.BitLength.segmentType))
                                var p = (0, i.FieldEncoderMap)()
                                return (
                                    n.forEach(function (n) {
                                        var r = e[n],
                                            i = p[n],
                                            a = o.BitLength[n]
                                        void 0 === a &&
                                            s.isPublisherCustom(n) &&
                                            (a = Number(e[u.Fields.numCustomPurposes]))
                                        try {
                                            l += i.encode(r, a)
                                        } catch (e) {
                                            throw new c.EncodingError(
                                                'Error encoding '.concat(t, '->').concat(n, ': ').concat(e.message)
                                            )
                                        }
                                    }),
                                    r.Base64Url.encode(l)
                                )
                            }),
                            (e.decode = function (e, t, n) {
                                var s = this,
                                    l = r.Base64Url.decode(e),
                                    p = 0
                                n === a.Segment.CORE &&
                                    (t.version = i.IntEncoder.decode(
                                        l.substr(p, o.BitLength[u.Fields.version]),
                                        o.BitLength[u.Fields.version]
                                    )),
                                    n !== a.Segment.CORE && (p += o.BitLength.segmentType)
                                var d = this.fieldSequence[String(t.version)][n],
                                    f = (0, i.FieldEncoderMap)()
                                return (
                                    d.forEach(function (e) {
                                        var n = f[e],
                                            r = o.BitLength[e]
                                        if (
                                            (void 0 === r &&
                                                s.isPublisherCustom(e) &&
                                                (r = Number(t[u.Fields.numCustomPurposes])),
                                            0 !== r)
                                        ) {
                                            var a = l.substr(p, r)
                                            if (
                                                (n === i.VendorVectorEncoder
                                                    ? (t[e] = n.decode(a, t.version))
                                                    : (t[e] = n.decode(a, r)),
                                                Number.isInteger(r))
                                            )
                                                p += r
                                            else {
                                                if (!Number.isInteger(t[e].bitLength)) throw new c.DecodingError(e)
                                                p += t[e].bitLength
                                            }
                                        }
                                    }),
                                    t
                                )
                            }),
                            (e.isPublisherCustom = function (e) {
                                return 0 === e.indexOf('publisherCustom')
                            }),
                            (e.fieldSequence = new s.FieldSequence()),
                            e
                        )
                    })()
                t.SegmentEncoder = l
            },
            5518: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCModelError = void 0)
                var o = (function (e) {
                    function t(t, n, r) {
                        void 0 === r && (r = '')
                        var o =
                            e.call(this, 'invalid value '.concat(n, ' passed for ').concat(t, ' ').concat(r)) || this
                        return (o.name = 'TCModelError'), o
                    }
                    return r(t, e), t
                })(Error)
                t.TCModelError = o
            },
            5792: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            6070: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Json = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.absCall = function (e, t, n, r) {
                            return new Promise(function (o, i) {
                                var s = new XMLHttpRequest()
                                ;(s.withCredentials = n),
                                    s.addEventListener('load', function () {
                                        if (s.readyState == XMLHttpRequest.DONE)
                                            if (s.status >= 200 && s.status < 300) {
                                                var e = s.response
                                                if ('string' == typeof e)
                                                    try {
                                                        e = JSON.parse(e)
                                                    } catch (e) {}
                                                o(e)
                                            } else
                                                i(
                                                    new Error(
                                                        'HTTP Status: '
                                                            .concat(s.status, ' response type: ')
                                                            .concat(s.responseType)
                                                    )
                                                )
                                    }),
                                    s.addEventListener('error', function () {
                                        i(new Error('error'))
                                    }),
                                    s.addEventListener('abort', function () {
                                        i(new Error('aborted'))
                                    }),
                                    null === t ? s.open('GET', e, !0) : s.open('POST', e, !0),
                                    (s.responseType = 'json'),
                                    (s.timeout = r),
                                    (s.ontimeout = function () {
                                        i(new Error('Timeout ' + r + 'ms ' + e))
                                    }),
                                    s.send(t)
                            })
                        }),
                        (e.post = function (e, t, n, r) {
                            return (
                                void 0 === n && (n = !1),
                                void 0 === r && (r = 0),
                                this.absCall(e, JSON.stringify(t), n, r)
                            )
                        }),
                        (e.fetch = function (e, t, n) {
                            return void 0 === t && (t = !1), void 0 === n && (n = 0), this.absCall(e, null, t, n)
                        }),
                        e
                    )
                })()
                t.Json = n
            },
            6206: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(6909), t),
                    o(n(1692), t),
                    o(n(1636), t),
                    o(n(9067), t),
                    o(n(7485), t),
                    o(n(6070), t),
                    o(n(3576), t),
                    o(n(9676), t)
            },
            6314: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BitLength = void 0)
                var r = n(1636),
                    o = (function () {
                        function e() {}
                        var t, n, o, i, s, c, u, a, l, p, d, f, h, v, g, y, b, _
                        return (
                            (t = r.Fields.cmpId),
                            (n = r.Fields.cmpVersion),
                            (o = r.Fields.consentLanguage),
                            (i = r.Fields.consentScreen),
                            (s = r.Fields.created),
                            (c = r.Fields.isServiceSpecific),
                            (u = r.Fields.lastUpdated),
                            (a = r.Fields.policyVersion),
                            (l = r.Fields.publisherCountryCode),
                            (p = r.Fields.publisherLegitimateInterests),
                            (d = r.Fields.publisherConsents),
                            (f = r.Fields.purposeConsents),
                            (h = r.Fields.purposeLegitimateInterests),
                            (v = r.Fields.purposeOneTreatment),
                            (g = r.Fields.specialFeatureOptins),
                            (y = r.Fields.useNonStandardStacks),
                            (b = r.Fields.vendorListVersion),
                            (_ = r.Fields.version),
                            (e[t] = 12),
                            (e[n] = 12),
                            (e[o] = 12),
                            (e[i] = 6),
                            (e[s] = 36),
                            (e[c] = 1),
                            (e[u] = 36),
                            (e[a] = 6),
                            (e[l] = 12),
                            (e[p] = 24),
                            (e[d] = 24),
                            (e[f] = 24),
                            (e[h] = 24),
                            (e[v] = 1),
                            (e[g] = 12),
                            (e[y] = 1),
                            (e[b] = 12),
                            (e[_] = 6),
                            (e.anyBoolean = 1),
                            (e.encodingType = 1),
                            (e.maxId = 16),
                            (e.numCustomPurposes = 6),
                            (e.numEntries = 12),
                            (e.numRestrictions = 12),
                            (e.purposeId = 6),
                            (e.restrictionType = 2),
                            (e.segmentType = 3),
                            (e.singleOrRange = 1),
                            (e.vendorId = 16),
                            e
                        )
                    })()
                t.BitLength = o
            },
            6493: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Base64Url = void 0)
                var r = n(1692),
                    o = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                if (!/^[0-1]+$/.test(e)) throw new r.EncodingError('Invalid bitField')
                                var t = e.length % this.LCM
                                e += t ? '0'.repeat(this.LCM - t) : ''
                                for (var n = '', o = 0; o < e.length; o += this.BASIS)
                                    n += this.DICT[parseInt(e.substr(o, this.BASIS), 2)]
                                return n
                            }),
                            (e.decode = function (e) {
                                if (!/^[A-Za-z0-9\-_]+$/.test(e))
                                    throw new r.DecodingError('Invalidly encoded Base64URL string')
                                for (var t = '', n = 0; n < e.length; n++) {
                                    var o = this.REVERSE_DICT.get(e[n]).toString(2)
                                    t += '0'.repeat(this.BASIS - o.length) + o
                                }
                                return t
                            }),
                            (e.DICT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'),
                            (e.REVERSE_DICT = new Map([
                                ['A', 0],
                                ['B', 1],
                                ['C', 2],
                                ['D', 3],
                                ['E', 4],
                                ['F', 5],
                                ['G', 6],
                                ['H', 7],
                                ['I', 8],
                                ['J', 9],
                                ['K', 10],
                                ['L', 11],
                                ['M', 12],
                                ['N', 13],
                                ['O', 14],
                                ['P', 15],
                                ['Q', 16],
                                ['R', 17],
                                ['S', 18],
                                ['T', 19],
                                ['U', 20],
                                ['V', 21],
                                ['W', 22],
                                ['X', 23],
                                ['Y', 24],
                                ['Z', 25],
                                ['a', 26],
                                ['b', 27],
                                ['c', 28],
                                ['d', 29],
                                ['e', 30],
                                ['f', 31],
                                ['g', 32],
                                ['h', 33],
                                ['i', 34],
                                ['j', 35],
                                ['k', 36],
                                ['l', 37],
                                ['m', 38],
                                ['n', 39],
                                ['o', 40],
                                ['p', 41],
                                ['q', 42],
                                ['r', 43],
                                ['s', 44],
                                ['t', 45],
                                ['u', 46],
                                ['v', 47],
                                ['w', 48],
                                ['x', 49],
                                ['y', 50],
                                ['z', 51],
                                ['0', 52],
                                ['1', 53],
                                ['2', 54],
                                ['3', 55],
                                ['4', 56],
                                ['5', 57],
                                ['6', 58],
                                ['7', 59],
                                ['8', 60],
                                ['9', 61],
                                ['-', 62],
                                ['_', 63]
                            ])),
                            (e.BASIS = 6),
                            (e.LCM = 24),
                            e
                        )
                    })()
                t.Base64Url = o
            },
            6577: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.VendorVectorEncoder = void 0)
                var r = n(1636),
                    o = n(6909),
                    i = n(9887),
                    s = n(1700),
                    c = n(9871),
                    u = n(4106),
                    a = n(1692),
                    l = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                var t,
                                    n = [],
                                    r = [],
                                    c = i.IntEncoder.encode(e.maxId, o.BitLength.maxId),
                                    a = '',
                                    l = o.BitLength.maxId + o.BitLength.encodingType,
                                    p = l + e.maxId,
                                    d = 2 * o.BitLength.vendorId + o.BitLength.singleOrRange + o.BitLength.numEntries,
                                    f = l + o.BitLength.numEntries
                                return (
                                    e.forEach(function (i, c) {
                                        ;(a += s.BooleanEncoder.encode(i)),
                                            (t = e.maxId > d && f < p) &&
                                                i &&
                                                (e.has(c + 1)
                                                    ? 0 === r.length &&
                                                      (r.push(c),
                                                      (f += o.BitLength.singleOrRange),
                                                      (f += o.BitLength.vendorId))
                                                    : (r.push(c), (f += o.BitLength.vendorId), n.push(r), (r = [])))
                                    }),
                                    t
                                        ? ((c += String(u.VectorEncodingType.RANGE)), (c += this.buildRangeEncoding(n)))
                                        : ((c += String(u.VectorEncodingType.FIELD)), (c += a)),
                                    c
                                )
                            }),
                            (e.decode = function (e, t) {
                                var n,
                                    l = 0,
                                    p = i.IntEncoder.decode(e.substr(l, o.BitLength.maxId), o.BitLength.maxId)
                                l += o.BitLength.maxId
                                var d = i.IntEncoder.decode(e.charAt(l), o.BitLength.encodingType)
                                if (((l += o.BitLength.encodingType), d === u.VectorEncodingType.RANGE)) {
                                    if (((n = new r.Vector()), 1 === t)) {
                                        if ('1' === e.substr(l, 1))
                                            throw new a.DecodingError('Unable to decode default consent=1')
                                        l++
                                    }
                                    var f = i.IntEncoder.decode(
                                        e.substr(l, o.BitLength.numEntries),
                                        o.BitLength.numEntries
                                    )
                                    l += o.BitLength.numEntries
                                    for (var h = 0; h < f; h++) {
                                        var v = s.BooleanEncoder.decode(e.charAt(l))
                                        l += o.BitLength.singleOrRange
                                        var g = i.IntEncoder.decode(
                                            e.substr(l, o.BitLength.vendorId),
                                            o.BitLength.vendorId
                                        )
                                        if (((l += o.BitLength.vendorId), v)) {
                                            var y = i.IntEncoder.decode(
                                                e.substr(l, o.BitLength.vendorId),
                                                o.BitLength.vendorId
                                            )
                                            l += o.BitLength.vendorId
                                            for (var b = g; b <= y; b++) n.set(b)
                                        } else n.set(g)
                                    }
                                } else {
                                    var _ = e.substr(l, p)
                                    ;(l += p), (n = c.FixedVectorEncoder.decode(_, p))
                                }
                                return (n.bitLength = l), n
                            }),
                            (e.buildRangeEncoding = function (e) {
                                var t = e.length,
                                    n = i.IntEncoder.encode(t, o.BitLength.numEntries)
                                return (
                                    e.forEach(function (e) {
                                        var t = 1 === e.length
                                        ;(n += s.BooleanEncoder.encode(!t)),
                                            (n += i.IntEncoder.encode(e[0], o.BitLength.vendorId)),
                                            t || (n += i.IntEncoder.encode(e[1], o.BitLength.vendorId))
                                    }),
                                    n
                                )
                            }),
                            e
                        )
                    })()
                t.VendorVectorEncoder = l
            },
            6900: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            6909: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(6493), t),
                    o(n(6314), t),
                    o(n(4688), t),
                    o(n(5134), t),
                    o(n(2630), t),
                    o(n(8566), t),
                    o(n(4259), t)
            },
            6947: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestrictionVectorEncoder = void 0)
                var r = n(6314),
                    o = n(1700),
                    i = n(1692),
                    s = n(9887),
                    c = n(1636),
                    u = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                var t = s.IntEncoder.encode(e.numRestrictions, r.BitLength.numRestrictions)
                                return (
                                    e.isEmpty() ||
                                        e.getRestrictions().forEach(function (n) {
                                            ;(t += s.IntEncoder.encode(n.purposeId, r.BitLength.purposeId)),
                                                (t += s.IntEncoder.encode(
                                                    n.restrictionType,
                                                    r.BitLength.restrictionType
                                                ))
                                            for (
                                                var i = e.getVendors(n),
                                                    c = i.length,
                                                    u = 0,
                                                    a = 0,
                                                    l = '',
                                                    p = function (t) {
                                                        var n = i[t]
                                                        0 === a && (u++, (a = n))
                                                        var p = i[c - 1],
                                                            d = e.gvl.vendorIds
                                                        if (
                                                            t === c - 1 ||
                                                            i[t + 1] >
                                                                (function (e) {
                                                                    for (; ++e <= p && !d.has(e); );
                                                                    return e
                                                                })(n)
                                                        ) {
                                                            var f = !(n === a)
                                                            ;(l += o.BooleanEncoder.encode(f)),
                                                                (l += s.IntEncoder.encode(a, r.BitLength.vendorId)),
                                                                f &&
                                                                    (l += s.IntEncoder.encode(n, r.BitLength.vendorId)),
                                                                (a = 0)
                                                        }
                                                    },
                                                    d = 0;
                                                d < c;
                                                d++
                                            )
                                                p(d)
                                            ;(t += s.IntEncoder.encode(u, r.BitLength.numEntries)), (t += l)
                                        }),
                                    t
                                )
                            }),
                            (e.decode = function (e) {
                                var t = 0,
                                    n = new c.PurposeRestrictionVector(),
                                    u = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.numRestrictions),
                                        r.BitLength.numRestrictions
                                    )
                                t += r.BitLength.numRestrictions
                                for (var a = 0; a < u; a++) {
                                    var l = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.purposeId),
                                        r.BitLength.purposeId
                                    )
                                    t += r.BitLength.purposeId
                                    var p = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.restrictionType),
                                        r.BitLength.restrictionType
                                    )
                                    t += r.BitLength.restrictionType
                                    var d = new c.PurposeRestriction(l, p),
                                        f = s.IntEncoder.decode(
                                            e.substr(t, r.BitLength.numEntries),
                                            r.BitLength.numEntries
                                        )
                                    t += r.BitLength.numEntries
                                    for (var h = 0; h < f; h++) {
                                        var v = o.BooleanEncoder.decode(e.substr(t, r.BitLength.anyBoolean))
                                        t += r.BitLength.anyBoolean
                                        var g = s.IntEncoder.decode(
                                            e.substr(t, r.BitLength.vendorId),
                                            r.BitLength.vendorId
                                        )
                                        if (((t += r.BitLength.vendorId), v)) {
                                            var y = s.IntEncoder.decode(
                                                e.substr(t, r.BitLength.vendorId),
                                                r.BitLength.vendorId
                                            )
                                            if (((t += r.BitLength.vendorId), y < g))
                                                throw new i.DecodingError(
                                                    'Invalid RangeEntry: endVendorId '
                                                        .concat(y, ' is less than ')
                                                        .concat(g)
                                                )
                                            for (var b = g; b <= y; b++) n.add(b, d)
                                        } else n.add(g, d)
                                    }
                                }
                                return (n.bitLength = t), n
                            }),
                            e
                        )
                    })()
                t.PurposeRestrictionVectorEncoder = u
            },
            7351: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Fields = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.cmpId = 'cmpId'),
                        (e.cmpVersion = 'cmpVersion'),
                        (e.consentLanguage = 'consentLanguage'),
                        (e.consentScreen = 'consentScreen'),
                        (e.created = 'created'),
                        (e.supportOOB = 'supportOOB'),
                        (e.isServiceSpecific = 'isServiceSpecific'),
                        (e.lastUpdated = 'lastUpdated'),
                        (e.numCustomPurposes = 'numCustomPurposes'),
                        (e.policyVersion = 'policyVersion'),
                        (e.publisherCountryCode = 'publisherCountryCode'),
                        (e.publisherCustomConsents = 'publisherCustomConsents'),
                        (e.publisherCustomLegitimateInterests = 'publisherCustomLegitimateInterests'),
                        (e.publisherLegitimateInterests = 'publisherLegitimateInterests'),
                        (e.publisherConsents = 'publisherConsents'),
                        (e.publisherRestrictions = 'publisherRestrictions'),
                        (e.purposeConsents = 'purposeConsents'),
                        (e.purposeLegitimateInterests = 'purposeLegitimateInterests'),
                        (e.purposeOneTreatment = 'purposeOneTreatment'),
                        (e.specialFeatureOptins = 'specialFeatureOptins'),
                        (e.useNonStandardStacks = 'useNonStandardStacks'),
                        (e.vendorConsents = 'vendorConsents'),
                        (e.vendorLegitimateInterests = 'vendorLegitimateInterests'),
                        (e.vendorListVersion = 'vendorListVersion'),
                        (e.vendorsAllowed = 'vendorsAllowed'),
                        (e.vendorsDisclosed = 'vendorsDisclosed'),
                        (e.version = 'version'),
                        e
                    )
                })()
                t.Fields = n
            },
            7389: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.EncodingError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'EncodingError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.EncodingError = o
            },
            7485: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__awaiter) ||
                        function (e, t, n, r) {
                            return new (n || (n = Promise))(function (o, i) {
                                function s(e) {
                                    try {
                                        u(r.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }
                                function c(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }
                                function u(e) {
                                    var t
                                    e.done
                                        ? o(e.value)
                                        : ((t = e.value),
                                          t instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t)
                                                })).then(s, c)
                                }
                                u((r = r.apply(e, t || [])).next())
                            })
                        },
                    s =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                r,
                                o,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1]
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                }
                            return (
                                (i = { next: c(0), throw: c(1), return: c(2) }),
                                'function' == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this
                                    }),
                                i
                            )
                            function c(i) {
                                return function (c) {
                                    return (function (i) {
                                        if (n) throw new TypeError('Generator is already executing.')
                                        for (; s; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (o =
                                                            2 & i[0]
                                                                ? r.return
                                                                : i[0]
                                                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                                                : r.next) &&
                                                        !(o = o.call(r, i[1])).done)
                                                )
                                                    return o
                                                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = i
                                                        break
                                                    case 4:
                                                        return (
                                                            s.label++,
                                                            {
                                                                value: i[1],
                                                                done: !1
                                                            }
                                                        )
                                                    case 5:
                                                        s.label++, (r = i[1]), (i = [0])
                                                        continue
                                                    case 7:
                                                        ;(i = s.ops.pop()), s.trys.pop()
                                                        continue
                                                    default:
                                                        if (
                                                            !(
                                                                (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                                                                (6 !== i[0] && 2 !== i[0])
                                                            )
                                                        ) {
                                                            s = 0
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                            s.label = i[1]
                                                            break
                                                        }
                                                        if (6 === i[0] && s.label < o[1]) {
                                                            ;(s.label = o[1]), (o = i)
                                                            break
                                                        }
                                                        if (o && s.label < o[2]) {
                                                            ;(s.label = o[2]), s.ops.push(i)
                                                            break
                                                        }
                                                        o[2] && s.ops.pop(), s.trys.pop()
                                                        continue
                                                }
                                                i = t.call(e, s)
                                            } catch (e) {
                                                ;(i = [6, e]), (r = 0)
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & i[0]) throw i[1]
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    })([i, c])
                                }
                            }
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GVL = void 0)
                var c = n(9067),
                    u = n(1692),
                    a = n(6070),
                    l = n(1636),
                    p = (function (e) {
                        function t(n) {
                            var r = e.call(this) || this
                            ;(r.isReady_ = !1), (r.isLatest = !1)
                            var o = t.baseUrl
                            if (((r.lang_ = t.DEFAULT_LANGUAGE), r.isVendorList(n)))
                                r.populate(n), (r.readyPromise = Promise.resolve())
                            else {
                                if (!o) throw new u.GVLError('must specify GVL.baseUrl before loading GVL json')
                                if (n > 0) {
                                    var i = n
                                    t.CACHE.has(i)
                                        ? (r.populate(t.CACHE.get(i)), (r.readyPromise = Promise.resolve()))
                                        : ((o += t.versionedFilename.replace('[VERSION]', String(i))),
                                          (r.readyPromise = r.fetchJson(o)))
                                } else
                                    t.CACHE.has(t.LATEST_CACHE_KEY)
                                        ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),
                                          (r.readyPromise = Promise.resolve()))
                                        : ((r.isLatest = !0), (r.readyPromise = r.fetchJson(o + t.latestFilename)))
                            }
                            return r
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t, 'baseUrl', {
                                get: function () {
                                    return this.baseUrl_
                                },
                                set: function (e) {
                                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
                                        throw new u.GVLError(
                                            'Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache'
                                        )
                                    e.length > 0 && '/' !== e[e.length - 1] && (e += '/'), (this.baseUrl_ = e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.emptyLanguageCache = function (e) {
                                var n = !1
                                return (
                                    void 0 === e && t.LANGUAGE_CACHE.size > 0
                                        ? ((t.LANGUAGE_CACHE = new Map()), (n = !0))
                                        : 'string' == typeof e &&
                                          this.consentLanguages.has(e.toUpperCase()) &&
                                          (t.LANGUAGE_CACHE.delete(e.toUpperCase()), (n = !0)),
                                    n
                                )
                            }),
                            (t.emptyCache = function (e) {
                                var n = !1
                                return (
                                    Number.isInteger(e) && e >= 0
                                        ? (t.CACHE.delete(e), (n = !0))
                                        : void 0 === e && ((t.CACHE = new Map()), (n = !0)),
                                    n
                                )
                            }),
                            (t.prototype.cacheLanguage = function () {
                                t.LANGUAGE_CACHE.has(this.lang_) ||
                                    t.LANGUAGE_CACHE.set(this.lang_, {
                                        purposes: this.purposes,
                                        specialPurposes: this.specialPurposes,
                                        features: this.features,
                                        specialFeatures: this.specialFeatures,
                                        stacks: this.stacks
                                    })
                            }),
                            (t.prototype.fetchJson = function (e) {
                                return i(this, void 0, void 0, function () {
                                    var t, n
                                    return s(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    r.trys.push([0, 2, , 3]), (t = this.populate), [4, a.Json.fetch(e)]
                                                )
                                            case 1:
                                                return t.apply(this, [r.sent()]), [3, 3]
                                            case 2:
                                                throw ((n = r.sent()), new u.GVLError(n.message))
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }),
                            (t.prototype.getJson = function () {
                                return JSON.parse(
                                    JSON.stringify({
                                        gvlSpecificationVersion: this.gvlSpecificationVersion,
                                        vendorListVersion: this.vendorListVersion,
                                        tcfPolicyVersion: this.tcfPolicyVersion,
                                        lastUpdated: this.lastUpdated,
                                        purposes: this.purposes,
                                        specialPurposes: this.specialPurposes,
                                        features: this.features,
                                        specialFeatures: this.specialFeatures,
                                        stacks: this.stacks,
                                        vendors: this.fullVendorList
                                    })
                                )
                            }),
                            (t.prototype.changeLanguage = function (e) {
                                return i(this, void 0, void 0, function () {
                                    var n, r, o, i, c
                                    return s(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                if (((n = e.toUpperCase()), !t.consentLanguages.has(n))) return [3, 6]
                                                if (n === this.lang_) return [3, 5]
                                                if (((this.lang_ = n), !t.LANGUAGE_CACHE.has(n))) return [3, 1]
                                                for (o in (r = t.LANGUAGE_CACHE.get(n)))
                                                    r.hasOwnProperty(o) && (this[o] = r[o])
                                                return [3, 5]
                                            case 1:
                                                ;(i = t.baseUrl + t.languageFilename.replace('[LANG]', e)),
                                                    (s.label = 2)
                                            case 2:
                                                return s.trys.push([2, 4, , 5]), [4, this.fetchJson(i)]
                                            case 3:
                                                return s.sent(), this.cacheLanguage(), [3, 5]
                                            case 4:
                                                throw (
                                                    ((c = s.sent()),
                                                    new u.GVLError('unable to load language: ' + c.message))
                                                )
                                            case 5:
                                                return [3, 7]
                                            case 6:
                                                throw new u.GVLError('unsupported language '.concat(e))
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }),
                            Object.defineProperty(t.prototype, 'language', {
                                get: function () {
                                    return this.lang_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isVendorList = function (e) {
                                return void 0 !== e && void 0 !== e.vendors
                            }),
                            (t.prototype.populate = function (e) {
                                ;(this.purposes = e.purposes),
                                    (this.specialPurposes = e.specialPurposes),
                                    (this.features = e.features),
                                    (this.specialFeatures = e.specialFeatures),
                                    (this.stacks = e.stacks),
                                    this.isVendorList(e) &&
                                        ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
                                        (this.tcfPolicyVersion = e.tcfPolicyVersion),
                                        (this.vendorListVersion = e.vendorListVersion),
                                        (this.lastUpdated = e.lastUpdated),
                                        'string' == typeof this.lastUpdated &&
                                            (this.lastUpdated = new Date(this.lastUpdated)),
                                        (this.vendors_ = e.vendors),
                                        (this.fullVendorList = e.vendors),
                                        this.mapVendors(),
                                        (this.isReady_ = !0),
                                        this.isLatest && t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()),
                                        t.CACHE.has(this.vendorListVersion) ||
                                            t.CACHE.set(this.vendorListVersion, this.getJson())),
                                    this.cacheLanguage()
                            }),
                            (t.prototype.mapVendors = function (e) {
                                var t = this
                                ;(this.byPurposeVendorMap = {}),
                                    (this.bySpecialPurposeVendorMap = {}),
                                    (this.byFeatureVendorMap = {}),
                                    (this.bySpecialFeatureVendorMap = {}),
                                    Object.keys(this.purposes).forEach(function (e) {
                                        t.byPurposeVendorMap[e] = {
                                            legInt: new Set(),
                                            consent: new Set(),
                                            flexible: new Set()
                                        }
                                    }),
                                    Object.keys(this.specialPurposes).forEach(function (e) {
                                        t.bySpecialPurposeVendorMap[e] = new Set()
                                    }),
                                    Object.keys(this.features).forEach(function (e) {
                                        t.byFeatureVendorMap[e] = new Set()
                                    }),
                                    Object.keys(this.specialFeatures).forEach(function (e) {
                                        t.bySpecialFeatureVendorMap[e] = new Set()
                                    }),
                                    Array.isArray(e) ||
                                        (e = Object.keys(this.fullVendorList).map(function (e) {
                                            return +e
                                        })),
                                    (this.vendorIds = new Set(e)),
                                    (this.vendors_ = e.reduce(function (e, n) {
                                        var r = t.vendors_[String(n)]
                                        return (
                                            r &&
                                                void 0 === r.deletedDate &&
                                                (r.purposes.forEach(function (e) {
                                                    t.byPurposeVendorMap[String(e)].consent.add(n)
                                                }),
                                                r.specialPurposes.forEach(function (e) {
                                                    t.bySpecialPurposeVendorMap[String(e)].add(n)
                                                }),
                                                r.legIntPurposes.forEach(function (e) {
                                                    t.byPurposeVendorMap[String(e)].legInt.add(n)
                                                }),
                                                r.flexiblePurposes &&
                                                    r.flexiblePurposes.forEach(function (e) {
                                                        t.byPurposeVendorMap[String(e)].flexible.add(n)
                                                    }),
                                                r.features.forEach(function (e) {
                                                    t.byFeatureVendorMap[String(e)].add(n)
                                                }),
                                                r.specialFeatures.forEach(function (e) {
                                                    t.bySpecialFeatureVendorMap[String(e)].add(n)
                                                }),
                                                (e[n] = r)),
                                            e
                                        )
                                    }, {}))
                            }),
                            (t.prototype.getFilteredVendors = function (e, t, n, r) {
                                var o = this,
                                    i = e.charAt(0).toUpperCase() + e.slice(1),
                                    s = {}
                                return (
                                    ('purpose' === e && n
                                        ? this['by' + i + 'VendorMap'][String(t)][n]
                                        : this['by' + (r ? 'Special' : '') + i + 'VendorMap'][String(t)]
                                    ).forEach(function (e) {
                                        s[String(e)] = o.vendors[String(e)]
                                    }),
                                    s
                                )
                            }),
                            (t.prototype.getVendorsWithConsentPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'consent')
                            }),
                            (t.prototype.getVendorsWithLegIntPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'legInt')
                            }),
                            (t.prototype.getVendorsWithFlexiblePurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'flexible')
                            }),
                            (t.prototype.getVendorsWithSpecialPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, void 0, !0)
                            }),
                            (t.prototype.getVendorsWithFeature = function (e) {
                                return this.getFilteredVendors('feature', e)
                            }),
                            (t.prototype.getVendorsWithSpecialFeature = function (e) {
                                return this.getFilteredVendors('feature', e, void 0, !0)
                            }),
                            Object.defineProperty(t.prototype, 'vendors', {
                                get: function () {
                                    return this.vendors_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.narrowVendorsTo = function (e) {
                                this.mapVendors(e)
                            }),
                            Object.defineProperty(t.prototype, 'isReady', {
                                get: function () {
                                    return this.isReady_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.clone = function () {
                                var e = new t(this.getJson())
                                return this.lang_ !== t.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e
                            }),
                            (t.isInstanceOf = function (e) {
                                return 'object' == typeof e && 'function' == typeof e.narrowVendorsTo
                            }),
                            (t.LANGUAGE_CACHE = new Map()),
                            (t.CACHE = new Map()),
                            (t.LATEST_CACHE_KEY = 0),
                            (t.DEFAULT_LANGUAGE = 'EN'),
                            (t.consentLanguages = new l.ConsentLanguages()),
                            (t.latestFilename = 'vendor-list.json'),
                            (t.versionedFilename = 'archives/vendor-list-v[VERSION].json'),
                            (t.languageFilename = 'purposes-[LANG].json'),
                            t
                        )
                    })(c.Cloneable)
                t.GVL = p
            },
            7637: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.DecodingError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'DecodingError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.DecodingError = o
            },
            7746: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.DateEncoder = void 0)
                var r = n(9887),
                    o = n(1692),
                    i = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                return r.IntEncoder.encode(Math.round(e.getTime() / 100), t)
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length) throw new o.DecodingError('invalid bit length')
                                var n = new Date()
                                return n.setTime(100 * r.IntEncoder.decode(e, t)), n
                            }),
                            e
                        )
                    })()
                t.DateEncoder = i
            },
            7816: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            8120: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FieldEncoderMap = void 0)
                var r = n(1636),
                    o = n(1700),
                    i = n(7746),
                    s = n(9871),
                    c = n(9887),
                    u = n(3358),
                    a = n(6947),
                    l = n(6577)
                t.FieldEncoderMap = function () {
                    var e
                    return (
                        ((e = {})[r.Fields.version] = c.IntEncoder),
                        (e[r.Fields.created] = i.DateEncoder),
                        (e[r.Fields.lastUpdated] = i.DateEncoder),
                        (e[r.Fields.cmpId] = c.IntEncoder),
                        (e[r.Fields.cmpVersion] = c.IntEncoder),
                        (e[r.Fields.consentScreen] = c.IntEncoder),
                        (e[r.Fields.consentLanguage] = u.LangEncoder),
                        (e[r.Fields.vendorListVersion] = c.IntEncoder),
                        (e[r.Fields.policyVersion] = c.IntEncoder),
                        (e[r.Fields.isServiceSpecific] = o.BooleanEncoder),
                        (e[r.Fields.useNonStandardStacks] = o.BooleanEncoder),
                        (e[r.Fields.specialFeatureOptins] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeLegitimateInterests] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeOneTreatment] = o.BooleanEncoder),
                        (e[r.Fields.publisherCountryCode] = u.LangEncoder),
                        (e[r.Fields.vendorConsents] = l.VendorVectorEncoder),
                        (e[r.Fields.vendorLegitimateInterests] = l.VendorVectorEncoder),
                        (e[r.Fields.publisherRestrictions] = a.PurposeRestrictionVectorEncoder),
                        (e.segmentType = c.IntEncoder),
                        (e[r.Fields.vendorsDisclosed] = l.VendorVectorEncoder),
                        (e[r.Fields.vendorsAllowed] = l.VendorVectorEncoder),
                        (e[r.Fields.publisherConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.publisherLegitimateInterests] = s.FixedVectorEncoder),
                        (e[r.Fields.numCustomPurposes] = c.IntEncoder),
                        (e[r.Fields.publisherCustomConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.publisherCustomLegitimateInterests] = s.FixedVectorEncoder),
                        e
                    )
                }
            },
            8473: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            8566: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(1700), t),
                    o(n(7746), t),
                    o(n(8120), t),
                    o(n(9871), t),
                    o(n(9887), t),
                    o(n(3358), t),
                    o(n(6947), t),
                    o(n(4106), t),
                    o(n(6577), t)
            },
            9034: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.RestrictionType = void 0),
                    ((n = t.RestrictionType || (t.RestrictionType = {}))[(n.NOT_ALLOWED = 0)] = 'NOT_ALLOWED'),
                    (n[(n.REQUIRE_CONSENT = 1)] = 'REQUIRE_CONSENT'),
                    (n[(n.REQUIRE_LI = 2)] = 'REQUIRE_LI')
            },
            9067: function (e, t) {
                'use strict'
                var n =
                    (this && this.__values) ||
                    function (e) {
                        var t = 'function' == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0
                        if (n) return n.call(e)
                        if (e && 'number' == typeof e.length)
                            return {
                                next: function () {
                                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                                }
                            }
                        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Cloneable = void 0)
                var r = (function () {
                    function e() {}
                    return (
                        (e.prototype.clone = function () {
                            var e = this,
                                t = new this.constructor()
                            return (
                                Object.keys(this).forEach(function (n) {
                                    var r = e.deepClone(e[n])
                                    void 0 !== r && (t[n] = r)
                                }),
                                t
                            )
                        }),
                        (e.prototype.deepClone = function (e) {
                            var t,
                                r,
                                o = typeof e
                            if ('number' === o || 'string' === o || 'boolean' === o) return e
                            if (null !== e && 'object' === o) {
                                if ('function' == typeof e.clone) return e.clone()
                                if (e instanceof Date) return new Date(e.getTime())
                                if (void 0 !== e[Symbol.iterator]) {
                                    var i = []
                                    try {
                                        for (var s = n(e), c = s.next(); !c.done; c = s.next()) {
                                            var u = c.value
                                            i.push(this.deepClone(u))
                                        }
                                    } catch (e) {
                                        t = { error: e }
                                    } finally {
                                        try {
                                            c && !c.done && (r = s.return) && r.call(s)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                    }
                                    return e instanceof Array ? i : new e.constructor(i)
                                }
                                var a = {}
                                for (var l in e) e.hasOwnProperty(l) && (a[l] = this.deepClone(e[l]))
                                return a
                            }
                        }),
                        e
                    )
                })()
                t.Cloneable = r
            },
            9174: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestriction = void 0)
                var i = n(9067),
                    s = n(1692),
                    c = n(9034),
                    u = (function (e) {
                        function t(t, n) {
                            var r = e.call(this) || this
                            return void 0 !== t && (r.purposeId = t), void 0 !== n && (r.restrictionType = n), r
                        }
                        return (
                            o(t, e),
                            (t.unHash = function (e) {
                                var n = e.split(this.hashSeparator),
                                    r = new t()
                                if (2 !== n.length) throw new s.TCModelError('hash', e)
                                return (r.purposeId = parseInt(n[0], 10)), (r.restrictionType = parseInt(n[1], 10)), r
                            }),
                            Object.defineProperty(t.prototype, 'hash', {
                                get: function () {
                                    if (!this.isValid()) throw new Error('cannot hash invalid PurposeRestriction')
                                    return ''
                                        .concat(this.purposeId)
                                        .concat(t.hashSeparator)
                                        .concat(this.restrictionType)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'purposeId', {
                                get: function () {
                                    return this.purposeId_
                                },
                                set: function (e) {
                                    this.purposeId_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isValid = function () {
                                return (
                                    Number.isInteger(this.purposeId) &&
                                    this.purposeId > 0 &&
                                    (this.restrictionType === c.RestrictionType.NOT_ALLOWED ||
                                        this.restrictionType === c.RestrictionType.REQUIRE_CONSENT ||
                                        this.restrictionType === c.RestrictionType.REQUIRE_LI)
                                )
                            }),
                            (t.prototype.isSameAs = function (e) {
                                return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
                            }),
                            (t.hashSeparator = '-'),
                            t
                        )
                    })(i.Cloneable)
                t.PurposeRestriction = u
            },
            9457: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GVLError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'GVLError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.GVLError = o
            },
            9459: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.ConsentLanguages = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.prototype.has = function (t) {
                            return e.langSet.has(t)
                        }),
                        (e.prototype.forEach = function (t) {
                            e.langSet.forEach(t)
                        }),
                        Object.defineProperty(e.prototype, 'size', {
                            get: function () {
                                return e.langSet.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        (e.langSet = new Set([
                            'BG',
                            'CA',
                            'CS',
                            'DA',
                            'DE',
                            'EL',
                            'EN',
                            'ES',
                            'ET',
                            'FI',
                            'FR',
                            'HR',
                            'HU',
                            'IT',
                            'JA',
                            'LT',
                            'LV',
                            'MT',
                            'NL',
                            'NO',
                            'PL',
                            'PT',
                            'RO',
                            'RU',
                            'SK',
                            'SL',
                            'SV',
                            'TR',
                            'ZH'
                        ])),
                        e
                    )
                })()
                t.ConsentLanguages = n
            },
            9676: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCString = void 0)
                var r = n(6909),
                    o = n(1636),
                    i = n(9887),
                    s = n(3576),
                    c = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n,
                                    o = ''
                                return (
                                    (e = r.SemanticPreEncoder.process(e, t)),
                                    (n = Array.isArray(null == t ? void 0 : t.segments)
                                        ? t.segments
                                        : new r.SegmentSequence(e, t)['' + e.version]).forEach(function (t, i) {
                                        var s = ''
                                        i < n.length - 1 && (s = '.'), (o += r.SegmentEncoder.encode(e, t) + s)
                                    }),
                                    o
                                )
                            }),
                            (e.decode = function (e, t) {
                                var n = e.split('.'),
                                    c = n.length
                                t || (t = new s.TCModel())
                                for (var u = 0; u < c; u++) {
                                    var a = n[u],
                                        l = r.Base64Url.decode(a.charAt(0)).substr(0, r.BitLength.segmentType),
                                        p =
                                            o.SegmentIDs.ID_TO_KEY[
                                                i.IntEncoder.decode(l, r.BitLength.segmentType).toString()
                                            ]
                                    r.SegmentEncoder.decode(a, t, p)
                                }
                                return t
                            }),
                            e
                        )
                    })()
                t.TCString = c
            },
            9864: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(1201), t),
                    o(n(743), t),
                    o(n(5014), t),
                    o(n(1978), t),
                    o(n(2105), t),
                    o(n(450), t),
                    o(n(6900), t),
                    o(n(7816), t),
                    o(n(5792), t)
            },
            9871: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FixedVectorEncoder = void 0)
                var r = n(1700),
                    o = n(1692),
                    i = n(1636),
                    s = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                for (var n = '', o = 1; o <= t; o++) n += r.BooleanEncoder.encode(e.has(o))
                                return n
                            }),
                            (e.decode = function (e, t) {
                                if (e.length !== t) throw new o.DecodingError('bitfield encoding length mismatch')
                                for (var n = new i.Vector(), s = 1; s <= t; s++)
                                    r.BooleanEncoder.decode(e[s - 1]) && n.set(s)
                                return (n.bitLength = e.length), n
                            }),
                            e
                        )
                    })()
                t.FixedVectorEncoder = s
            },
            9882: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FieldSequence = void 0)
                var r = n(1636)
                t.FieldSequence = function () {
                    var e, t
                    ;(this[1] =
                        (((e = {})[r.Segment.CORE] = [
                            r.Fields.version,
                            r.Fields.created,
                            r.Fields.lastUpdated,
                            r.Fields.cmpId,
                            r.Fields.cmpVersion,
                            r.Fields.consentScreen,
                            r.Fields.consentLanguage,
                            r.Fields.vendorListVersion,
                            r.Fields.purposeConsents,
                            r.Fields.vendorConsents
                        ]),
                        e)),
                        (this[2] =
                            (((t = {})[r.Segment.CORE] = [
                                r.Fields.version,
                                r.Fields.created,
                                r.Fields.lastUpdated,
                                r.Fields.cmpId,
                                r.Fields.cmpVersion,
                                r.Fields.consentScreen,
                                r.Fields.consentLanguage,
                                r.Fields.vendorListVersion,
                                r.Fields.policyVersion,
                                r.Fields.isServiceSpecific,
                                r.Fields.useNonStandardStacks,
                                r.Fields.specialFeatureOptins,
                                r.Fields.purposeConsents,
                                r.Fields.purposeLegitimateInterests,
                                r.Fields.purposeOneTreatment,
                                r.Fields.publisherCountryCode,
                                r.Fields.vendorConsents,
                                r.Fields.vendorLegitimateInterests,
                                r.Fields.publisherRestrictions
                            ]),
                            (t[r.Segment.PUBLISHER_TC] = [
                                r.Fields.publisherConsents,
                                r.Fields.publisherLegitimateInterests,
                                r.Fields.numCustomPurposes,
                                r.Fields.publisherCustomConsents,
                                r.Fields.publisherCustomLegitimateInterests
                            ]),
                            (t[r.Segment.VENDORS_ALLOWED] = [r.Fields.vendorsAllowed]),
                            (t[r.Segment.VENDORS_DISCLOSED] = [r.Fields.vendorsDisclosed]),
                            t))
                }
            },
            9887: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntEncoder = void 0)
                var r = n(1692),
                    o = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n
                                if (
                                    ('string' == typeof e && (e = parseInt(e, 10)),
                                    (n = e.toString(2)).length > t || e < 0)
                                )
                                    throw new r.EncodingError(''.concat(e, ' too large to encode into ').concat(t))
                                return n.length < t && (n = '0'.repeat(t - n.length) + n), n
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length) throw new r.DecodingError('invalid bit length')
                                return parseInt(e, 2)
                            }),
                            e
                        )
                    })()
                t.IntEncoder = o
            },
            9941: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Segment = void 0),
                    ((n = t.Segment || (t.Segment = {})).CORE = 'core'),
                    (n.VENDORS_DISCLOSED = 'vendorsDisclosed'),
                    (n.VENDORS_ALLOWED = 'vendorsAllowed'),
                    (n.PUBLISHER_TC = 'publisherTC')
            }
        },
        t = {}
    window.IABTcf = (function n(r) {
        var o = t[r]
        if (void 0 !== o) return o.exports
        var i = (t[r] = { exports: {} })
        return e[r].call(i.exports, i, i.exports, n), i.exports
    })(6206)
})()
;(() => {
    var e = {
            59: (e, t, n) => {
                'use strict'
                var r
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentIDs = void 0)
                var o = n(9941),
                    i = (function () {
                        function e() {}
                        return (
                            (e.ID_TO_KEY = [
                                o.Segment.CORE,
                                o.Segment.VENDORS_DISCLOSED,
                                o.Segment.VENDORS_ALLOWED,
                                o.Segment.PUBLISHER_TC
                            ]),
                            (e.KEY_TO_ID =
                                (((r = {})[o.Segment.CORE] = 0),
                                (r[o.Segment.VENDORS_DISCLOSED] = 1),
                                (r[o.Segment.VENDORS_ALLOWED] = 2),
                                (r[o.Segment.PUBLISHER_TC] = 3),
                                r)),
                            e
                        )
                    })()
                t.SegmentIDs = i
            },
            450: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            643: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentSequence = void 0)
                var r = n(1636)
                t.SegmentSequence = function (e, t) {
                    if (((this[1] = [r.Segment.CORE]), (this[2] = [r.Segment.CORE]), 2 === e.version))
                        if (e.isServiceSpecific) this[2].push(r.Segment.PUBLISHER_TC)
                        else {
                            var n = !(!t || !t.isForVendors)
                            ;(n && !0 !== e[r.Fields.supportOOB]) || this[2].push(r.Segment.VENDORS_DISCLOSED),
                                n &&
                                    (e[r.Fields.supportOOB] &&
                                        e[r.Fields.vendorsAllowed].size > 0 &&
                                        this[2].push(r.Segment.VENDORS_ALLOWED),
                                    this[2].push(r.Segment.PUBLISHER_TC))
                        }
                }
            },
            668: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            712: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), o(n(4634), t), o(n(7220), t), o(n(786), t)
            },
            743: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            786: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.EventStatus = void 0),
                    ((n = t.EventStatus || (t.EventStatus = {})).TC_LOADED = 'tcloaded'),
                    (n.CMP_UI_SHOWN = 'cmpuishown'),
                    (n.USER_ACTION_COMPLETE = 'useractioncomplete')
            },
            854: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1129: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1201: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            1553: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(8301), t),
                    o(n(7770), t),
                    o(n(7421), t),
                    o(n(5798), t),
                    o(n(6984), t)
            },
            1636: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(4011), t),
                    o(n(9459), t),
                    o(n(7351), t),
                    o(n(3531), t),
                    o(n(854), t),
                    o(n(9174), t),
                    o(n(3605), t),
                    o(n(4242), t),
                    o(n(1129), t),
                    o(n(9034), t),
                    o(n(9941), t),
                    o(n(59), t),
                    o(n(4665), t),
                    o(n(9864), t)
            },
            1692: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(7637), t),
                    o(n(7389), t),
                    o(n(9457), t),
                    o(n(5518), t)
            },
            1700: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BooleanEncoder = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.encode = function (e) {
                            return String(Number(e))
                        }),
                        (e.decode = function (e) {
                            return '1' === e
                        }),
                        e
                    )
                })()
                t.BooleanEncoder = n
            },
            1978: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            2023: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = 'function' == typeof Symbol && e[Symbol.iterator]
                            if (!n) return e
                            var r,
                                o,
                                i = n.call(e),
                                s = []
                            try {
                                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        },
                    o =
                        (this && this.__spreadArray) ||
                        function (e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                    (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
                            return e.concat(r || Array.prototype.slice.call(t))
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.CallResponder = t.API_KEY = void 0)
                var i = n(8731),
                    s = n(9022),
                    c = n(8336),
                    u = n(8301),
                    a = n(4226)
                t.API_KEY = '__tcfapi'
                var l = (function () {
                    function e(e) {
                        if (e) {
                            var n = i.TCFCommand.ADD_EVENT_LISTENER
                            if (null == e ? void 0 : e[n])
                                throw new Error(
                                    'Built-In Custom Commmand for '
                                        .concat(n, ' not allowed: Use ')
                                        .concat(i.TCFCommand.GET_TC_DATA, ' instead')
                                )
                            if (((n = i.TCFCommand.REMOVE_EVENT_LISTENER), null == e ? void 0 : e[n]))
                                throw new Error('Built-In Custom Commmand for '.concat(n, ' not allowed'))
                            ;(null == e ? void 0 : e[i.TCFCommand.GET_TC_DATA]) &&
                                ((e[i.TCFCommand.ADD_EVENT_LISTENER] = e[i.TCFCommand.GET_TC_DATA]),
                                (e[i.TCFCommand.REMOVE_EVENT_LISTENER] = e[i.TCFCommand.GET_TC_DATA])),
                                (this.customCommands = e)
                        }
                        try {
                            this.callQueue = window[t.API_KEY]() || []
                        } catch (e) {
                            this.callQueue = []
                        } finally {
                            ;(window[t.API_KEY] = this.apiCall.bind(this)), this.purgeQueuedCalls()
                        }
                    }
                    return (
                        (e.prototype.apiCall = function (e, t, n) {
                            for (var l, p = [], d = 3; d < arguments.length; d++) p[d - 3] = arguments[d]
                            if ('string' != typeof e) n(null, !1)
                            else if (a.SupportedVersions.has(t)) {
                                if ('function' != typeof n) throw new Error('invalid callback function')
                                c.CmpApiModel.disabled
                                    ? n(new u.Disabled(), !1)
                                    : this.isCustomCommand(e) || this.isBuiltInCommand(e)
                                    ? this.isCustomCommand(e) && !this.isBuiltInCommand(e)
                                        ? (l = this.customCommands)[e].apply(l, o([n], r(p), !1))
                                        : e === i.TCFCommand.PING
                                        ? this.isCustomCommand(e)
                                            ? new s.CommandMap[e](this.customCommands[e], p[0], null, n)
                                            : new s.CommandMap[e](n, p[0])
                                        : void 0 === c.CmpApiModel.tcModel
                                        ? this.callQueue.push(o([e, t, n], r(p), !1))
                                        : this.isCustomCommand(e) && this.isBuiltInCommand(e)
                                        ? new s.CommandMap[e](this.customCommands[e], p[0], null, n)
                                        : new s.CommandMap[e](n, p[0])
                                    : n(null, !1)
                            } else n(null, !1)
                        }),
                        (e.prototype.purgeQueuedCalls = function () {
                            var e = this.callQueue
                            ;(this.callQueue = []),
                                e.forEach(function (e) {
                                    window[t.API_KEY].apply(window, o([], r(e), !1))
                                })
                        }),
                        (e.prototype.isCustomCommand = function (e) {
                            return this.customCommands && 'function' == typeof this.customCommands[e]
                        }),
                        (e.prototype.isBuiltInCommand = function (e) {
                            return void 0 !== s.CommandMap[e]
                        }),
                        e
                    )
                })()
                t.CallResponder = l
            },
            2105: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            2281: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GetTCDataCommand = void 0)
                var i = n(3802),
                    s = n(1553),
                    c = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                this.throwIfParamInvalid(),
                                    this.invokeCallback(new s.TCData(this.param, this.listenerId))
                            }),
                            (t.prototype.throwIfParamInvalid = function () {
                                if (
                                    !(
                                        void 0 === this.param ||
                                        (Array.isArray(this.param) && this.param.every(Number.isInteger))
                                    )
                                )
                                    throw new Error('Invalid Parameter')
                            }),
                            t
                        )
                    })(i.Command)
                t.GetTCDataCommand = c
            },
            2630: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SemanticPreEncoder = void 0)
                var r = n(1692),
                    o = n(1636),
                    i = (function () {
                        function e() {}
                        return (
                            (e.process = function (e, t) {
                                var n = e.gvl
                                if (!n) throw new r.EncodingError('Unable to encode TCModel without a GVL')
                                if (!n.isReady)
                                    throw new r.EncodingError(
                                        'Unable to encode TCModel tcModel.gvl.readyPromise is not resolved'
                                    )
                                ;((e = e.clone()).consentLanguage = n.language.toUpperCase()),
                                    (null == t ? void 0 : t.version) > 0 &&
                                    (null == t ? void 0 : t.version) <= this.processor.length
                                        ? (e.version = t.version)
                                        : (e.version = this.processor.length)
                                var o = e.version - 1
                                if (!this.processor[o]) throw new r.EncodingError('Invalid version: '.concat(e.version))
                                return this.processor[o](e, n)
                            }),
                            (e.processor = [
                                function (e) {
                                    return e
                                },
                                function (e, t) {
                                    ;(e.publisherRestrictions.gvl = t), e.purposeLegitimateInterests.unset(1)
                                    var n = new Map()
                                    return (
                                        n.set('legIntPurposes', e.vendorLegitimateInterests),
                                        n.set('purposes', e.vendorConsents),
                                        n.forEach(function (n, r) {
                                            n.forEach(function (i, s) {
                                                if (i) {
                                                    var c = t.vendors[s]
                                                    if (!c || c.deletedDate) n.unset(s)
                                                    else if (0 === c[r].length)
                                                        if (
                                                            'legIntPurposes' === r &&
                                                            0 === c.purposes.length &&
                                                            0 === c.legIntPurposes.length &&
                                                            c.specialPurposes.length > 0
                                                        );
                                                        else if (e.isServiceSpecific)
                                                            if (0 === c.flexiblePurposes.length) n.unset(s)
                                                            else {
                                                                for (
                                                                    var u = e.publisherRestrictions.getRestrictions(s),
                                                                        a = !1,
                                                                        l = 0,
                                                                        p = u.length;
                                                                    l < p && !a;
                                                                    l++
                                                                )
                                                                    a =
                                                                        (u[l].restrictionType ===
                                                                            o.RestrictionType.REQUIRE_CONSENT &&
                                                                            'purposes' === r) ||
                                                                        (u[l].restrictionType ===
                                                                            o.RestrictionType.REQUIRE_LI &&
                                                                            'legIntPurposes' === r)
                                                                a || n.unset(s)
                                                            }
                                                        else n.unset(s)
                                                }
                                            })
                                        }),
                                        e.vendorsDisclosed.set(t.vendors),
                                        e
                                    )
                                }
                            ]),
                            e
                        )
                    })()
                t.SemanticPreEncoder = i
            },
            2765: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.API_KEY = void 0),
                    o(n(8731), t),
                    o(n(1553), t),
                    o(n(712), t),
                    o(n(6857), t),
                    o(n(8336), t),
                    o(n(6744), t)
                var i = n(2023)
                Object.defineProperty(t, 'API_KEY', {
                    enumerable: !0,
                    get: function () {
                        return i.API_KEY
                    }
                })
            },
            3358: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.LangEncoder = void 0)
                var r = n(9887),
                    o = n(1692),
                    i = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
                                    i = e.charCodeAt(1) - 65
                                if (n < 0 || n > 25 || i < 0 || i > 25)
                                    throw new o.EncodingError('invalid language code: '.concat(e))
                                if (t % 2 == 1)
                                    throw new o.EncodingError('numBits must be even, '.concat(t, ' is not valid'))
                                return (t /= 2), r.IntEncoder.encode(n, t) + r.IntEncoder.encode(i, t)
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length || e.length % 2)
                                    throw new o.DecodingError('invalid bit length for language')
                                var n = e.length / 2,
                                    i = r.IntEncoder.decode(e.slice(0, n), n) + 65,
                                    s = r.IntEncoder.decode(e.slice(n), n) + 65
                                return String.fromCharCode(i) + String.fromCharCode(s)
                            }),
                            e
                        )
                    })()
                t.LangEncoder = i
            },
            3531: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            3576: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCModel = void 0)
                var i = n(9067),
                    s = n(1692),
                    c = n(7485),
                    u = n(1636),
                    a = (function (e) {
                        function t(t) {
                            var n = e.call(this) || this
                            return (
                                (n.isServiceSpecific_ = !1),
                                (n.supportOOB_ = !0),
                                (n.useNonStandardStacks_ = !1),
                                (n.purposeOneTreatment_ = !1),
                                (n.publisherCountryCode_ = 'AA'),
                                (n.version_ = 2),
                                (n.consentScreen_ = 0),
                                (n.policyVersion_ = 2),
                                (n.consentLanguage_ = 'EN'),
                                (n.cmpId_ = 0),
                                (n.cmpVersion_ = 0),
                                (n.vendorListVersion_ = 0),
                                (n.numCustomPurposes_ = 0),
                                (n.specialFeatureOptins = new u.Vector()),
                                (n.purposeConsents = new u.Vector()),
                                (n.purposeLegitimateInterests = new u.Vector()),
                                (n.publisherConsents = new u.Vector()),
                                (n.publisherLegitimateInterests = new u.Vector()),
                                (n.publisherCustomConsents = new u.Vector()),
                                (n.publisherCustomLegitimateInterests = new u.Vector()),
                                (n.vendorConsents = new u.Vector()),
                                (n.vendorLegitimateInterests = new u.Vector()),
                                (n.vendorsDisclosed = new u.Vector()),
                                (n.vendorsAllowed = new u.Vector()),
                                (n.publisherRestrictions = new u.PurposeRestrictionVector()),
                                t && (n.gvl = t),
                                n.updated(),
                                n
                            )
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t.prototype, 'gvl', {
                                get: function () {
                                    return this.gvl_
                                },
                                set: function (e) {
                                    c.GVL.isInstanceOf(e) || (e = new c.GVL(e)),
                                        (this.gvl_ = e),
                                        (this.publisherRestrictions.gvl = e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'cmpId', {
                                get: function () {
                                    return this.cmpId_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > 1)))
                                        throw new s.TCModelError('cmpId', e)
                                    this.cmpId_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'cmpVersion', {
                                get: function () {
                                    return this.cmpVersion_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                                        throw new s.TCModelError('cmpVersion', e)
                                    this.cmpVersion_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'consentScreen', {
                                get: function () {
                                    return this.consentScreen_
                                },
                                set: function (e) {
                                    if (((e = Number(e)), !(Number.isInteger(e) && e > -1)))
                                        throw new s.TCModelError('consentScreen', e)
                                    this.consentScreen_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'consentLanguage', {
                                get: function () {
                                    return this.consentLanguage_
                                },
                                set: function (e) {
                                    this.consentLanguage_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'publisherCountryCode', {
                                get: function () {
                                    return this.publisherCountryCode_
                                },
                                set: function (e) {
                                    if (!/^([A-z]){2}$/.test(e)) throw new s.TCModelError('publisherCountryCode', e)
                                    this.publisherCountryCode_ = e.toUpperCase()
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'vendorListVersion', {
                                get: function () {
                                    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_
                                },
                                set: function (e) {
                                    if ((e = 0 | Number(e)) < 0) throw new s.TCModelError('vendorListVersion', e)
                                    this.vendorListVersion_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'policyVersion', {
                                get: function () {
                                    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_
                                },
                                set: function (e) {
                                    if (((this.policyVersion_ = parseInt(e, 10)), this.policyVersion_ < 0))
                                        throw new s.TCModelError('policyVersion', e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'version', {
                                get: function () {
                                    return this.version_
                                },
                                set: function (e) {
                                    this.version_ = parseInt(e, 10)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'isServiceSpecific', {
                                get: function () {
                                    return this.isServiceSpecific_
                                },
                                set: function (e) {
                                    this.isServiceSpecific_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'useNonStandardStacks', {
                                get: function () {
                                    return this.useNonStandardStacks_
                                },
                                set: function (e) {
                                    this.useNonStandardStacks_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'supportOOB', {
                                get: function () {
                                    return this.supportOOB_
                                },
                                set: function (e) {
                                    this.supportOOB_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'purposeOneTreatment', {
                                get: function () {
                                    return this.purposeOneTreatment_
                                },
                                set: function (e) {
                                    this.purposeOneTreatment_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.setAllVendorConsents = function () {
                                this.vendorConsents.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorConsents = function () {
                                this.vendorConsents.empty()
                            }),
                            (t.prototype.setAllVendorsDisclosed = function () {
                                this.vendorsDisclosed.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorsDisclosed = function () {
                                this.vendorsDisclosed.empty()
                            }),
                            (t.prototype.setAllVendorsAllowed = function () {
                                this.vendorsAllowed.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorsAllowed = function () {
                                this.vendorsAllowed.empty()
                            }),
                            (t.prototype.setAllVendorLegitimateInterests = function () {
                                this.vendorLegitimateInterests.set(this.gvl.vendors)
                            }),
                            (t.prototype.unsetAllVendorLegitimateInterests = function () {
                                this.vendorLegitimateInterests.empty()
                            }),
                            (t.prototype.setAllPurposeConsents = function () {
                                this.purposeConsents.set(this.gvl.purposes)
                            }),
                            (t.prototype.unsetAllPurposeConsents = function () {
                                this.purposeConsents.empty()
                            }),
                            (t.prototype.setAllPurposeLegitimateInterests = function () {
                                this.purposeLegitimateInterests.set(this.gvl.purposes)
                            }),
                            (t.prototype.unsetAllPurposeLegitimateInterests = function () {
                                this.purposeLegitimateInterests.empty()
                            }),
                            (t.prototype.setAllSpecialFeatureOptins = function () {
                                this.specialFeatureOptins.set(this.gvl.specialFeatures)
                            }),
                            (t.prototype.unsetAllSpecialFeatureOptins = function () {
                                this.specialFeatureOptins.empty()
                            }),
                            (t.prototype.setAll = function () {
                                this.setAllVendorConsents(),
                                    this.setAllPurposeLegitimateInterests(),
                                    this.setAllSpecialFeatureOptins(),
                                    this.setAllPurposeConsents(),
                                    this.setAllVendorLegitimateInterests()
                            }),
                            (t.prototype.unsetAll = function () {
                                this.unsetAllVendorConsents(),
                                    this.unsetAllPurposeLegitimateInterests(),
                                    this.unsetAllSpecialFeatureOptins(),
                                    this.unsetAllPurposeConsents(),
                                    this.unsetAllVendorLegitimateInterests()
                            }),
                            Object.defineProperty(t.prototype, 'numCustomPurposes', {
                                get: function () {
                                    var e = this.numCustomPurposes_
                                    if ('object' == typeof this.customPurposes) {
                                        var t = Object.keys(this.customPurposes).sort(function (e, t) {
                                            return Number(e) - Number(t)
                                        })
                                        e = parseInt(t.pop(), 10)
                                    }
                                    return e
                                },
                                set: function (e) {
                                    if (((this.numCustomPurposes_ = parseInt(e, 10)), this.numCustomPurposes_ < 0))
                                        throw new s.TCModelError('numCustomPurposes', e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.updated = function () {
                                var e = new Date(),
                                    t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()))
                                ;(this.created = t), (this.lastUpdated = t)
                            }),
                            (t.consentLanguages = c.GVL.consentLanguages),
                            t
                        )
                    })(i.Cloneable)
                t.TCModel = a
            },
            3605: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__values) ||
                        function (e) {
                            var t = 'function' == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0
                            if (n) return n.call(e)
                            if (e && 'number' == typeof e.length)
                                return {
                                    next: function () {
                                        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                                    }
                                }
                            throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
                        },
                    s =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = 'function' == typeof Symbol && e[Symbol.iterator]
                            if (!n) return e
                            var r,
                                o,
                                i = n.call(e),
                                s = []
                            try {
                                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        },
                    c =
                        (this && this.__spreadArray) ||
                        function (e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                    (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
                            return e.concat(r || Array.prototype.slice.call(t))
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestrictionVector = void 0)
                var u = n(9174),
                    a = n(4011),
                    l = n(9034),
                    p = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this
                            return (t.bitLength = 0), (t.map = new Map()), t
                        }
                        return (
                            o(t, e),
                            (t.prototype.has = function (e) {
                                return this.map.has(e)
                            }),
                            (t.prototype.isOkToHave = function (e, t, n) {
                                var r,
                                    o = !0
                                if (null === (r = this.gvl) || void 0 === r ? void 0 : r.vendors) {
                                    var i = this.gvl.vendors[n]
                                    if (i)
                                        if (e === l.RestrictionType.NOT_ALLOWED)
                                            o = i.legIntPurposes.includes(t) || i.purposes.includes(t)
                                        else if (i.flexiblePurposes.length)
                                            switch (e) {
                                                case l.RestrictionType.REQUIRE_CONSENT:
                                                    o = i.flexiblePurposes.includes(t) && i.legIntPurposes.includes(t)
                                                    break
                                                case l.RestrictionType.REQUIRE_LI:
                                                    o = i.flexiblePurposes.includes(t) && i.purposes.includes(t)
                                            }
                                        else o = !1
                                    else o = !1
                                }
                                return o
                            }),
                            (t.prototype.add = function (e, t) {
                                if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
                                    var n = t.hash
                                    this.has(n) || (this.map.set(n, new a.BinarySearchTree()), (this.bitLength = 0)),
                                        this.map.get(n).add(e)
                                }
                            }),
                            (t.prototype.restrictPurposeToLegalBasis = function (e) {
                                for (
                                    var t = this.gvl.vendorIds,
                                        n = e.hash,
                                        r = (function () {
                                            var e, n, r
                                            try {
                                                for (var o = i(t), s = o.next(); !s.done; s = o.next()) r = s.value
                                            } catch (t) {
                                                e = { error: t }
                                            } finally {
                                                try {
                                                    s && !s.done && (n = o.return) && n.call(o)
                                                } finally {
                                                    if (e) throw e.error
                                                }
                                            }
                                            return r
                                        })(),
                                        o = c([], s(Array(r).keys()), !1).map(function (e) {
                                            return e + 1
                                        }),
                                        u = 1;
                                    u <= r;
                                    u++
                                )
                                    this.has(n) || (this.map.set(n, a.BinarySearchTree.build(o)), (this.bitLength = 0)),
                                        this.map.get(n).add(u)
                            }),
                            (t.prototype.getVendors = function (e) {
                                var t = []
                                if (e) {
                                    var n = e.hash
                                    this.has(n) && (t = this.map.get(n).get())
                                } else {
                                    var r = new Set()
                                    this.map.forEach(function (e) {
                                        e.get().forEach(function (e) {
                                            r.add(e)
                                        })
                                    }),
                                        (t = Array.from(r))
                                }
                                return t
                            }),
                            (t.prototype.getRestrictionType = function (e, t) {
                                var n
                                return (
                                    this.getRestrictions(e).forEach(function (e) {
                                        e.purposeId === t &&
                                            (void 0 === n || n > e.restrictionType) &&
                                            (n = e.restrictionType)
                                    }),
                                    n
                                )
                            }),
                            (t.prototype.vendorHasRestriction = function (e, t) {
                                for (var n = !1, r = this.getRestrictions(e), o = 0; o < r.length && !n; o++)
                                    n = t.isSameAs(r[o])
                                return n
                            }),
                            (t.prototype.getMaxVendorId = function () {
                                var e = 0
                                return (
                                    this.map.forEach(function (t) {
                                        e = Math.max(t.max(), e)
                                    }),
                                    e
                                )
                            }),
                            (t.prototype.getRestrictions = function (e) {
                                var t = []
                                return (
                                    this.map.forEach(function (n, r) {
                                        e
                                            ? n.contains(e) && t.push(u.PurposeRestriction.unHash(r))
                                            : t.push(u.PurposeRestriction.unHash(r))
                                    }),
                                    t
                                )
                            }),
                            (t.prototype.getPurposes = function () {
                                var e = new Set()
                                return (
                                    this.map.forEach(function (t, n) {
                                        e.add(u.PurposeRestriction.unHash(n).purposeId)
                                    }),
                                    Array.from(e)
                                )
                            }),
                            (t.prototype.remove = function (e, t) {
                                var n = t.hash,
                                    r = this.map.get(n)
                                r && (r.remove(e), r.isEmpty() && (this.map.delete(n), (this.bitLength = 0)))
                            }),
                            Object.defineProperty(t.prototype, 'gvl', {
                                get: function () {
                                    return this.gvl_
                                },
                                set: function (e) {
                                    var t = this
                                    this.gvl_ ||
                                        ((this.gvl_ = e),
                                        this.map.forEach(function (e, n) {
                                            var r = u.PurposeRestriction.unHash(n)
                                            e.get().forEach(function (n) {
                                                t.isOkToHave(r.restrictionType, r.purposeId, n) || e.remove(n)
                                            })
                                        }))
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isEmpty = function () {
                                return 0 === this.map.size
                            }),
                            Object.defineProperty(t.prototype, 'numRestrictions', {
                                get: function () {
                                    return this.map.size
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t
                        )
                    })(n(9067).Cloneable)
                t.PurposeRestrictionVector = p
            },
            3802: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Command = void 0)
                var n = (function () {
                    function e(e, t, n, r) {
                        ;(this.success = !0), Object.assign(this, { callback: e, listenerId: n, param: t, next: r })
                        try {
                            this.respond()
                        } catch (e) {
                            this.invokeCallback(null)
                        }
                    }
                    return (
                        (e.prototype.invokeCallback = function (e) {
                            var t = null !== e
                            'function' == typeof this.next ? this.callback(this.next, e, t) : this.callback(e, t)
                        }),
                        e
                    )
                })()
                t.Command = n
            },
            4011: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BinarySearchTree = void 0)
                var i = (function (e) {
                    function t() {
                        var t = (null !== e && e.apply(this, arguments)) || this
                        return (t.root = null), t
                    }
                    return (
                        o(t, e),
                        (t.prototype.getRoot = function () {
                            return this.root
                        }),
                        (t.prototype.isEmpty = function () {
                            return !this.root
                        }),
                        (t.prototype.add = function (e) {
                            var t,
                                n = { value: e, left: null, right: null }
                            if (this.isEmpty()) this.root = n
                            else
                                for (t = this.root; ; )
                                    if (e < t.value) {
                                        if (null === t.left) {
                                            t.left = n
                                            break
                                        }
                                        t = t.left
                                    } else {
                                        if (!(e > t.value)) break
                                        if (null === t.right) {
                                            t.right = n
                                            break
                                        }
                                        t = t.right
                                    }
                        }),
                        (t.prototype.get = function () {
                            for (var e = [], t = this.root; t; )
                                if (t.left) {
                                    for (var n = t.left; n.right && n.right != t; ) n = n.right
                                    n.right == t
                                        ? ((n.right = null), e.push(t.value), (t = t.right))
                                        : ((n.right = t), (t = t.left))
                                } else e.push(t.value), (t = t.right)
                            return e
                        }),
                        (t.prototype.contains = function (e) {
                            for (var t = !1, n = this.root; n; ) {
                                if (n.value === e) {
                                    t = !0
                                    break
                                }
                                e > n.value ? (n = n.right) : e < n.value && (n = n.left)
                            }
                            return t
                        }),
                        (t.prototype.min = function (e) {
                            var t
                            for (void 0 === e && (e = this.root); e; )
                                e.left ? (e = e.left) : ((t = e.value), (e = null))
                            return t
                        }),
                        (t.prototype.max = function (e) {
                            var t
                            for (void 0 === e && (e = this.root); e; )
                                e.right ? (e = e.right) : ((t = e.value), (e = null))
                            return t
                        }),
                        (t.prototype.remove = function (e, t) {
                            void 0 === t && (t = this.root)
                            for (var n = null, r = 'left'; t; )
                                if (e < t.value) (n = t), (t = t.left), (r = 'left')
                                else if (e > t.value) (n = t), (t = t.right), (r = 'right')
                                else {
                                    if (t.left || t.right)
                                        if (t.left)
                                            if (t.right) {
                                                var o = this.min(t.right)
                                                this.remove(o, t.right), (t.value = o)
                                            } else n ? (n[r] = t.left) : (this.root = t.left)
                                        else n ? (n[r] = t.right) : (this.root = t.right)
                                    else n ? (n[r] = null) : (this.root = null)
                                    t = null
                                }
                        }),
                        (t.build = function (e) {
                            if (e && 0 !== e.length) {
                                if (1 === e.length) return (n = new t()).add(e[0]), n
                                var n,
                                    r = e.length >> 1
                                ;(n = new t()).add(e[r])
                                var o = n.getRoot()
                                if (o) {
                                    if (r + 1 < e.length) {
                                        var i = t.build(e.slice(r + 1))
                                        o.right = i ? i.getRoot() : null
                                    }
                                    if (r - 1 > 0) {
                                        var s = t.build(e.slice(0, r - 1))
                                        o.left = s ? s.getRoot() : null
                                    }
                                }
                                return n
                            }
                            return null
                        }),
                        t
                    )
                })(n(9067).Cloneable)
                t.BinarySearchTree = i
            },
            4106: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.VectorEncodingType = void 0),
                    ((n = t.VectorEncodingType || (t.VectorEncodingType = {}))[(n.FIELD = 0)] = 'FIELD'),
                    (n[(n.RANGE = 1)] = 'RANGE')
            },
            4226: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SupportedVersions = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.has = function (e) {
                            return 'string' == typeof e && (e = Number(e)), this.set_.has(e)
                        }),
                        (e.set_ = new Set([0, 2, void 0, null])),
                        e
                    )
                })()
                t.SupportedVersions = n
            },
            4242: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.DeviceDisclosureStorageAccessType = void 0),
                    ((n = t.DeviceDisclosureStorageAccessType || (t.DeviceDisclosureStorageAccessType = {})).COOKIE =
                        'cookie'),
                    (n.WEB = 'web'),
                    (n.APP = 'app')
            },
            4259: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), o(n(9882), t), o(n(643), t), o(n(668), t)
            },
            4634: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.CmpStatus = void 0),
                    ((n = t.CmpStatus || (t.CmpStatus = {})).STUB = 'stub'),
                    (n.LOADING = 'loading'),
                    (n.LOADED = 'loaded'),
                    (n.ERROR = 'error')
            },
            4665: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                r,
                                o,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1]
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                }
                            return (
                                (i = { next: c(0), throw: c(1), return: c(2) }),
                                'function' == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this
                                    }),
                                i
                            )
                            function c(i) {
                                return function (c) {
                                    return (function (i) {
                                        if (n) throw new TypeError('Generator is already executing.')
                                        for (; s; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (o =
                                                            2 & i[0]
                                                                ? r.return
                                                                : i[0]
                                                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                                                : r.next) &&
                                                        !(o = o.call(r, i[1])).done)
                                                )
                                                    return o
                                                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = i
                                                        break
                                                    case 4:
                                                        return s.label++, { value: i[1], done: !1 }
                                                    case 5:
                                                        s.label++, (r = i[1]), (i = [0])
                                                        continue
                                                    case 7:
                                                        ;(i = s.ops.pop()), s.trys.pop()
                                                        continue
                                                    default:
                                                        if (
                                                            !(
                                                                (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                                                                (6 !== i[0] && 2 !== i[0])
                                                            )
                                                        ) {
                                                            s = 0
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                            s.label = i[1]
                                                            break
                                                        }
                                                        if (6 === i[0] && s.label < o[1]) {
                                                            ;(s.label = o[1]), (o = i)
                                                            break
                                                        }
                                                        if (o && s.label < o[2]) {
                                                            ;(s.label = o[2]), s.ops.push(i)
                                                            break
                                                        }
                                                        o[2] && s.ops.pop(), s.trys.pop()
                                                        continue
                                                }
                                                i = t.call(e, s)
                                            } catch (e) {
                                                ;(i = [6, e]), (r = 0)
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & i[0]) throw i[1]
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    })([i, c])
                                }
                            }
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Vector = void 0)
                var s = n(9067),
                    c = n(1692),
                    u = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this
                            return (t.bitLength = 0), (t.maxId_ = 0), (t.set_ = new Set()), t
                        }
                        return (
                            o(t, e),
                            (t.prototype[Symbol.iterator] = function () {
                                var e
                                return i(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            ;(e = 1), (t.label = 1)
                                        case 1:
                                            return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4]
                                        case 2:
                                            t.sent(), (t.label = 3)
                                        case 3:
                                            return e++, [3, 1]
                                        case 4:
                                            return [2]
                                    }
                                })
                            }),
                            (t.prototype.values = function () {
                                return this.set_.values()
                            }),
                            Object.defineProperty(t.prototype, 'maxId', {
                                get: function () {
                                    return this.maxId_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.has = function (e) {
                                return this.set_.has(e)
                            }),
                            (t.prototype.unset = function (e) {
                                var t = this
                                Array.isArray(e)
                                    ? e.forEach(function (e) {
                                          return t.unset(e)
                                      })
                                    : 'object' == typeof e
                                    ? this.unset(
                                          Object.keys(e).map(function (e) {
                                              return Number(e)
                                          })
                                      )
                                    : (this.set_.delete(Number(e)),
                                      (this.bitLength = 0),
                                      e === this.maxId &&
                                          ((this.maxId_ = 0),
                                          this.set_.forEach(function (e) {
                                              t.maxId_ = Math.max(t.maxId, e)
                                          })))
                            }),
                            (t.prototype.isIntMap = function (e) {
                                var t = this
                                return (
                                    'object' == typeof e &&
                                    Object.keys(e).every(function (n) {
                                        var r = Number.isInteger(parseInt(n, 10))
                                        return (r = r && t.isValidNumber(e[n].id)) && void 0 !== e[n].name
                                    })
                                )
                            }),
                            (t.prototype.isValidNumber = function (e) {
                                return parseInt(e, 10) > 0
                            }),
                            (t.prototype.isSet = function (e) {
                                var t = !1
                                return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t
                            }),
                            (t.prototype.set = function (e) {
                                var t = this
                                if (Array.isArray(e))
                                    e.forEach(function (e) {
                                        return t.set(e)
                                    })
                                else if (this.isSet(e)) this.set(Array.from(e))
                                else if (this.isIntMap(e))
                                    this.set(
                                        Object.keys(e).map(function (e) {
                                            return Number(e)
                                        })
                                    )
                                else {
                                    if (!this.isValidNumber(e))
                                        throw new c.TCModelError(
                                            'set()',
                                            e,
                                            'must be positive integer array, positive integer, Set<number>, or IntMap'
                                        )
                                    this.set_.add(e), (this.maxId_ = Math.max(this.maxId, e)), (this.bitLength = 0)
                                }
                            }),
                            (t.prototype.empty = function () {
                                this.set_ = new Set()
                            }),
                            (t.prototype.forEach = function (e) {
                                for (var t = 1; t <= this.maxId; t++) e(this.has(t), t)
                            }),
                            Object.defineProperty(t.prototype, 'size', {
                                get: function () {
                                    return this.set_.size
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.setAll = function (e) {
                                this.set(e)
                            }),
                            t
                        )
                    })(s.Cloneable)
                t.Vector = u
            },
            4688: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            5014: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            5134: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.SegmentEncoder = void 0)
                var r = n(6493),
                    o = n(6314),
                    i = n(8566),
                    s = n(4259),
                    c = n(1692),
                    u = n(7351),
                    a = n(1636),
                    l = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n,
                                    s = this
                                try {
                                    n = this.fieldSequence[String(e.version)][t]
                                } catch (n) {
                                    throw new c.EncodingError(
                                        'Unable to encode version: '.concat(e.version, ', segment: ').concat(t)
                                    )
                                }
                                var l = ''
                                t !== a.Segment.CORE &&
                                    (l = i.IntEncoder.encode(a.SegmentIDs.KEY_TO_ID[t], o.BitLength.segmentType))
                                var p = (0, i.FieldEncoderMap)()
                                return (
                                    n.forEach(function (n) {
                                        var r = e[n],
                                            i = p[n],
                                            a = o.BitLength[n]
                                        void 0 === a &&
                                            s.isPublisherCustom(n) &&
                                            (a = Number(e[u.Fields.numCustomPurposes]))
                                        try {
                                            l += i.encode(r, a)
                                        } catch (e) {
                                            throw new c.EncodingError(
                                                'Error encoding '.concat(t, '->').concat(n, ': ').concat(e.message)
                                            )
                                        }
                                    }),
                                    r.Base64Url.encode(l)
                                )
                            }),
                            (e.decode = function (e, t, n) {
                                var s = this,
                                    l = r.Base64Url.decode(e),
                                    p = 0
                                n === a.Segment.CORE &&
                                    (t.version = i.IntEncoder.decode(
                                        l.substr(p, o.BitLength[u.Fields.version]),
                                        o.BitLength[u.Fields.version]
                                    )),
                                    n !== a.Segment.CORE && (p += o.BitLength.segmentType)
                                var d = this.fieldSequence[String(t.version)][n],
                                    f = (0, i.FieldEncoderMap)()
                                return (
                                    d.forEach(function (e) {
                                        var n = f[e],
                                            r = o.BitLength[e]
                                        if (
                                            (void 0 === r &&
                                                s.isPublisherCustom(e) &&
                                                (r = Number(t[u.Fields.numCustomPurposes])),
                                            0 !== r)
                                        ) {
                                            var a = l.substr(p, r)
                                            if (
                                                (n === i.VendorVectorEncoder
                                                    ? (t[e] = n.decode(a, t.version))
                                                    : (t[e] = n.decode(a, r)),
                                                Number.isInteger(r))
                                            )
                                                p += r
                                            else {
                                                if (!Number.isInteger(t[e].bitLength)) throw new c.DecodingError(e)
                                                p += t[e].bitLength
                                            }
                                        }
                                    }),
                                    t
                                )
                            }),
                            (e.isPublisherCustom = function (e) {
                                return 0 === e.indexOf('publisherCustom')
                            }),
                            (e.fieldSequence = new s.FieldSequence()),
                            e
                        )
                    })()
                t.SegmentEncoder = l
            },
            5518: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCModelError = void 0)
                var o = (function (e) {
                    function t(t, n, r) {
                        void 0 === r && (r = '')
                        var o =
                            e.call(this, 'invalid value '.concat(n, ' passed for ').concat(t, ' ').concat(r)) || this
                        return (o.name = 'TCModelError'), o
                    }
                    return r(t, e), t
                })(Error)
                t.TCModelError = o
            },
            5792: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            5798: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Response = void 0)
                var r = n(8336)
                t.Response = function () {
                    ;(this.cmpId = r.CmpApiModel.cmpId),
                        (this.cmpVersion = r.CmpApiModel.cmpVersion),
                        (this.gdprApplies = r.CmpApiModel.gdprApplies),
                        (this.tcfPolicyVersion = r.CmpApiModel.tcfPolicyVersion)
                }
            },
            6070: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Json = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.absCall = function (e, t, n, r) {
                            return new Promise(function (o, i) {
                                var s = new XMLHttpRequest()
                                ;(s.withCredentials = n),
                                    s.addEventListener('load', function () {
                                        if (s.readyState == XMLHttpRequest.DONE)
                                            if (s.status >= 200 && s.status < 300) {
                                                var e = s.response
                                                if ('string' == typeof e)
                                                    try {
                                                        e = JSON.parse(e)
                                                    } catch (e) {}
                                                o(e)
                                            } else
                                                i(
                                                    new Error(
                                                        'HTTP Status: '
                                                            .concat(s.status, ' response type: ')
                                                            .concat(s.responseType)
                                                    )
                                                )
                                    }),
                                    s.addEventListener('error', function () {
                                        i(new Error('error'))
                                    }),
                                    s.addEventListener('abort', function () {
                                        i(new Error('aborted'))
                                    }),
                                    null === t ? s.open('GET', e, !0) : s.open('POST', e, !0),
                                    (s.responseType = 'json'),
                                    (s.timeout = r),
                                    (s.ontimeout = function () {
                                        i(new Error('Timeout ' + r + 'ms ' + e))
                                    }),
                                    s.send(t)
                            })
                        }),
                        (e.post = function (e, t, n, r) {
                            return (
                                void 0 === n && (n = !1),
                                void 0 === r && (r = 0),
                                this.absCall(e, JSON.stringify(t), n, r)
                            )
                        }),
                        (e.fetch = function (e, t, n) {
                            return void 0 === t && (t = !1), void 0 === n && (n = 0), this.absCall(e, null, t, n)
                        }),
                        e
                    )
                })()
                t.Json = n
            },
            6133: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            6206: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(6909), t),
                    o(n(1692), t),
                    o(n(1636), t),
                    o(n(9067), t),
                    o(n(7485), t),
                    o(n(6070), t),
                    o(n(3576), t),
                    o(n(9676), t)
            },
            6314: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.BitLength = void 0)
                var r = n(1636),
                    o = (function () {
                        function e() {}
                        var t, n, o, i, s, c, u, a, l, p, d, f, h, v, y, m, g, _
                        return (
                            (t = r.Fields.cmpId),
                            (n = r.Fields.cmpVersion),
                            (o = r.Fields.consentLanguage),
                            (i = r.Fields.consentScreen),
                            (s = r.Fields.created),
                            (c = r.Fields.isServiceSpecific),
                            (u = r.Fields.lastUpdated),
                            (a = r.Fields.policyVersion),
                            (l = r.Fields.publisherCountryCode),
                            (p = r.Fields.publisherLegitimateInterests),
                            (d = r.Fields.publisherConsents),
                            (f = r.Fields.purposeConsents),
                            (h = r.Fields.purposeLegitimateInterests),
                            (v = r.Fields.purposeOneTreatment),
                            (y = r.Fields.specialFeatureOptins),
                            (m = r.Fields.useNonStandardStacks),
                            (g = r.Fields.vendorListVersion),
                            (_ = r.Fields.version),
                            (e[t] = 12),
                            (e[n] = 12),
                            (e[o] = 12),
                            (e[i] = 6),
                            (e[s] = 36),
                            (e[c] = 1),
                            (e[u] = 36),
                            (e[a] = 6),
                            (e[l] = 12),
                            (e[p] = 24),
                            (e[d] = 24),
                            (e[f] = 24),
                            (e[h] = 24),
                            (e[v] = 1),
                            (e[y] = 12),
                            (e[m] = 1),
                            (e[g] = 12),
                            (e[_] = 6),
                            (e.anyBoolean = 1),
                            (e.encodingType = 1),
                            (e.maxId = 16),
                            (e.numCustomPurposes = 6),
                            (e.numEntries = 12),
                            (e.numRestrictions = 12),
                            (e.purposeId = 6),
                            (e.restrictionType = 2),
                            (e.segmentType = 3),
                            (e.singleOrRange = 1),
                            (e.vendorId = 16),
                            e
                        )
                    })()
                t.BitLength = o
            },
            6493: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Base64Url = void 0)
                var r = n(1692),
                    o = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                if (!/^[0-1]+$/.test(e)) throw new r.EncodingError('Invalid bitField')
                                var t = e.length % this.LCM
                                e += t ? '0'.repeat(this.LCM - t) : ''
                                for (var n = '', o = 0; o < e.length; o += this.BASIS)
                                    n += this.DICT[parseInt(e.substr(o, this.BASIS), 2)]
                                return n
                            }),
                            (e.decode = function (e) {
                                if (!/^[A-Za-z0-9\-_]+$/.test(e))
                                    throw new r.DecodingError('Invalidly encoded Base64URL string')
                                for (var t = '', n = 0; n < e.length; n++) {
                                    var o = this.REVERSE_DICT.get(e[n]).toString(2)
                                    t += '0'.repeat(this.BASIS - o.length) + o
                                }
                                return t
                            }),
                            (e.DICT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'),
                            (e.REVERSE_DICT = new Map([
                                ['A', 0],
                                ['B', 1],
                                ['C', 2],
                                ['D', 3],
                                ['E', 4],
                                ['F', 5],
                                ['G', 6],
                                ['H', 7],
                                ['I', 8],
                                ['J', 9],
                                ['K', 10],
                                ['L', 11],
                                ['M', 12],
                                ['N', 13],
                                ['O', 14],
                                ['P', 15],
                                ['Q', 16],
                                ['R', 17],
                                ['S', 18],
                                ['T', 19],
                                ['U', 20],
                                ['V', 21],
                                ['W', 22],
                                ['X', 23],
                                ['Y', 24],
                                ['Z', 25],
                                ['a', 26],
                                ['b', 27],
                                ['c', 28],
                                ['d', 29],
                                ['e', 30],
                                ['f', 31],
                                ['g', 32],
                                ['h', 33],
                                ['i', 34],
                                ['j', 35],
                                ['k', 36],
                                ['l', 37],
                                ['m', 38],
                                ['n', 39],
                                ['o', 40],
                                ['p', 41],
                                ['q', 42],
                                ['r', 43],
                                ['s', 44],
                                ['t', 45],
                                ['u', 46],
                                ['v', 47],
                                ['w', 48],
                                ['x', 49],
                                ['y', 50],
                                ['z', 51],
                                ['0', 52],
                                ['1', 53],
                                ['2', 54],
                                ['3', 55],
                                ['4', 56],
                                ['5', 57],
                                ['6', 58],
                                ['7', 59],
                                ['8', 60],
                                ['9', 61],
                                ['-', 62],
                                ['_', 63]
                            ])),
                            (e.BASIS = 6),
                            (e.LCM = 24),
                            e
                        )
                    })()
                t.Base64Url = o
            },
            6577: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.VendorVectorEncoder = void 0)
                var r = n(1636),
                    o = n(6909),
                    i = n(9887),
                    s = n(1700),
                    c = n(9871),
                    u = n(4106),
                    a = n(1692),
                    l = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                var t,
                                    n = [],
                                    r = [],
                                    c = i.IntEncoder.encode(e.maxId, o.BitLength.maxId),
                                    a = '',
                                    l = o.BitLength.maxId + o.BitLength.encodingType,
                                    p = l + e.maxId,
                                    d = 2 * o.BitLength.vendorId + o.BitLength.singleOrRange + o.BitLength.numEntries,
                                    f = l + o.BitLength.numEntries
                                return (
                                    e.forEach(function (i, c) {
                                        ;(a += s.BooleanEncoder.encode(i)),
                                            (t = e.maxId > d && f < p) &&
                                                i &&
                                                (e.has(c + 1)
                                                    ? 0 === r.length &&
                                                      (r.push(c),
                                                      (f += o.BitLength.singleOrRange),
                                                      (f += o.BitLength.vendorId))
                                                    : (r.push(c), (f += o.BitLength.vendorId), n.push(r), (r = [])))
                                    }),
                                    t
                                        ? ((c += String(u.VectorEncodingType.RANGE)), (c += this.buildRangeEncoding(n)))
                                        : ((c += String(u.VectorEncodingType.FIELD)), (c += a)),
                                    c
                                )
                            }),
                            (e.decode = function (e, t) {
                                var n,
                                    l = 0,
                                    p = i.IntEncoder.decode(e.substr(l, o.BitLength.maxId), o.BitLength.maxId)
                                l += o.BitLength.maxId
                                var d = i.IntEncoder.decode(e.charAt(l), o.BitLength.encodingType)
                                if (((l += o.BitLength.encodingType), d === u.VectorEncodingType.RANGE)) {
                                    if (((n = new r.Vector()), 1 === t)) {
                                        if ('1' === e.substr(l, 1))
                                            throw new a.DecodingError('Unable to decode default consent=1')
                                        l++
                                    }
                                    var f = i.IntEncoder.decode(
                                        e.substr(l, o.BitLength.numEntries),
                                        o.BitLength.numEntries
                                    )
                                    l += o.BitLength.numEntries
                                    for (var h = 0; h < f; h++) {
                                        var v = s.BooleanEncoder.decode(e.charAt(l))
                                        l += o.BitLength.singleOrRange
                                        var y = i.IntEncoder.decode(
                                            e.substr(l, o.BitLength.vendorId),
                                            o.BitLength.vendorId
                                        )
                                        if (((l += o.BitLength.vendorId), v)) {
                                            var m = i.IntEncoder.decode(
                                                e.substr(l, o.BitLength.vendorId),
                                                o.BitLength.vendorId
                                            )
                                            l += o.BitLength.vendorId
                                            for (var g = y; g <= m; g++) n.set(g)
                                        } else n.set(y)
                                    }
                                } else {
                                    var _ = e.substr(l, p)
                                    ;(l += p), (n = c.FixedVectorEncoder.decode(_, p))
                                }
                                return (n.bitLength = l), n
                            }),
                            (e.buildRangeEncoding = function (e) {
                                var t = e.length,
                                    n = i.IntEncoder.encode(t, o.BitLength.numEntries)
                                return (
                                    e.forEach(function (e) {
                                        var t = 1 === e.length
                                        ;(n += s.BooleanEncoder.encode(!t)),
                                            (n += i.IntEncoder.encode(e[0], o.BitLength.vendorId)),
                                            t || (n += i.IntEncoder.encode(e[1], o.BitLength.vendorId))
                                    }),
                                    n
                                )
                            }),
                            e
                        )
                    })()
                t.VendorVectorEncoder = l
            },
            6744: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            6857: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.CmpApi = void 0)
                var r = n(8336),
                    o = n(712),
                    i = n(2023),
                    s = n(6206),
                    c = (function () {
                        function e(e, t, n, o) {
                            void 0 === n && (n = !1),
                                (this.numUpdates = 0),
                                this.throwIfInvalidInt(e, 'cmpId', 2),
                                this.throwIfInvalidInt(t, 'cmpVersion', 0),
                                (r.CmpApiModel.cmpId = e),
                                (r.CmpApiModel.cmpVersion = t),
                                (r.CmpApiModel.tcfPolicyVersion = 2),
                                (this.isServiceSpecific = !!n),
                                (this.callResponder = new i.CallResponder(o))
                        }
                        return (
                            (e.prototype.throwIfInvalidInt = function (e, t, n) {
                                if (!('number' == typeof e && Number.isInteger(e) && e >= n))
                                    throw new Error('Invalid '.concat(t, ': ').concat(e))
                            }),
                            (e.prototype.update = function (e, t) {
                                if ((void 0 === t && (t = !1), r.CmpApiModel.disabled))
                                    throw new Error('CmpApi Disabled')
                                ;(r.CmpApiModel.cmpStatus = o.CmpStatus.LOADED),
                                    t
                                        ? ((r.CmpApiModel.displayStatus = o.DisplayStatus.VISIBLE),
                                          (r.CmpApiModel.eventStatus = o.EventStatus.CMP_UI_SHOWN))
                                        : void 0 === r.CmpApiModel.tcModel
                                        ? ((r.CmpApiModel.displayStatus = o.DisplayStatus.DISABLED),
                                          (r.CmpApiModel.eventStatus = o.EventStatus.TC_LOADED))
                                        : ((r.CmpApiModel.displayStatus = o.DisplayStatus.HIDDEN),
                                          (r.CmpApiModel.eventStatus = o.EventStatus.USER_ACTION_COMPLETE)),
                                    (r.CmpApiModel.gdprApplies = null !== e),
                                    r.CmpApiModel.gdprApplies
                                        ? ('' === e
                                              ? ((r.CmpApiModel.tcModel = new s.TCModel()),
                                                (r.CmpApiModel.tcModel.cmpId = r.CmpApiModel.cmpId),
                                                (r.CmpApiModel.tcModel.cmpVersion = r.CmpApiModel.cmpVersion))
                                              : (r.CmpApiModel.tcModel = s.TCString.decode(e)),
                                          (r.CmpApiModel.tcModel.isServiceSpecific = this.isServiceSpecific),
                                          (r.CmpApiModel.tcfPolicyVersion = Number(
                                              r.CmpApiModel.tcModel.policyVersion
                                          )),
                                          (r.CmpApiModel.tcString = e))
                                        : (r.CmpApiModel.tcModel = null),
                                    0 === this.numUpdates
                                        ? this.callResponder.purgeQueuedCalls()
                                        : r.CmpApiModel.eventQueue.exec(),
                                    this.numUpdates++
                            }),
                            (e.prototype.disable = function () {
                                ;(r.CmpApiModel.disabled = !0), (r.CmpApiModel.cmpStatus = o.CmpStatus.ERROR)
                            }),
                            e
                        )
                    })()
                t.CmpApi = c
            },
            6900: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            6909: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(6493), t),
                    o(n(6314), t),
                    o(n(4688), t),
                    o(n(5134), t),
                    o(n(2630), t),
                    o(n(8566), t),
                    o(n(4259), t)
            },
            6947: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestrictionVectorEncoder = void 0)
                var r = n(6314),
                    o = n(1700),
                    i = n(1692),
                    s = n(9887),
                    c = n(1636),
                    u = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e) {
                                var t = s.IntEncoder.encode(e.numRestrictions, r.BitLength.numRestrictions)
                                return (
                                    e.isEmpty() ||
                                        e.getRestrictions().forEach(function (n) {
                                            ;(t += s.IntEncoder.encode(n.purposeId, r.BitLength.purposeId)),
                                                (t += s.IntEncoder.encode(
                                                    n.restrictionType,
                                                    r.BitLength.restrictionType
                                                ))
                                            for (
                                                var i = e.getVendors(n),
                                                    c = i.length,
                                                    u = 0,
                                                    a = 0,
                                                    l = '',
                                                    p = function (t) {
                                                        var n = i[t]
                                                        0 === a && (u++, (a = n))
                                                        var p = i[c - 1],
                                                            d = e.gvl.vendorIds
                                                        if (
                                                            t === c - 1 ||
                                                            i[t + 1] >
                                                                (function (e) {
                                                                    for (; ++e <= p && !d.has(e); );
                                                                    return e
                                                                })(n)
                                                        ) {
                                                            var f = !(n === a)
                                                            ;(l += o.BooleanEncoder.encode(f)),
                                                                (l += s.IntEncoder.encode(a, r.BitLength.vendorId)),
                                                                f &&
                                                                    (l += s.IntEncoder.encode(n, r.BitLength.vendorId)),
                                                                (a = 0)
                                                        }
                                                    },
                                                    d = 0;
                                                d < c;
                                                d++
                                            )
                                                p(d)
                                            ;(t += s.IntEncoder.encode(u, r.BitLength.numEntries)), (t += l)
                                        }),
                                    t
                                )
                            }),
                            (e.decode = function (e) {
                                var t = 0,
                                    n = new c.PurposeRestrictionVector(),
                                    u = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.numRestrictions),
                                        r.BitLength.numRestrictions
                                    )
                                t += r.BitLength.numRestrictions
                                for (var a = 0; a < u; a++) {
                                    var l = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.purposeId),
                                        r.BitLength.purposeId
                                    )
                                    t += r.BitLength.purposeId
                                    var p = s.IntEncoder.decode(
                                        e.substr(t, r.BitLength.restrictionType),
                                        r.BitLength.restrictionType
                                    )
                                    t += r.BitLength.restrictionType
                                    var d = new c.PurposeRestriction(l, p),
                                        f = s.IntEncoder.decode(
                                            e.substr(t, r.BitLength.numEntries),
                                            r.BitLength.numEntries
                                        )
                                    t += r.BitLength.numEntries
                                    for (var h = 0; h < f; h++) {
                                        var v = o.BooleanEncoder.decode(e.substr(t, r.BitLength.anyBoolean))
                                        t += r.BitLength.anyBoolean
                                        var y = s.IntEncoder.decode(
                                            e.substr(t, r.BitLength.vendorId),
                                            r.BitLength.vendorId
                                        )
                                        if (((t += r.BitLength.vendorId), v)) {
                                            var m = s.IntEncoder.decode(
                                                e.substr(t, r.BitLength.vendorId),
                                                r.BitLength.vendorId
                                            )
                                            if (((t += r.BitLength.vendorId), m < y))
                                                throw new i.DecodingError(
                                                    'Invalid RangeEntry: endVendorId '
                                                        .concat(m, ' is less than ')
                                                        .concat(y)
                                                )
                                            for (var g = y; g <= m; g++) n.add(g, d)
                                        } else n.add(y, d)
                                    }
                                }
                                return (n.bitLength = t), n
                            }),
                            e
                        )
                    })()
                t.PurposeRestrictionVectorEncoder = u
            },
            6984: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = 'function' == typeof Symbol && e[Symbol.iterator]
                            if (!n) return e
                            var r,
                                o,
                                i = n.call(e),
                                s = []
                            try {
                                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        },
                    s =
                        (this && this.__spreadArray) ||
                        function (e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                    (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
                            return e.concat(r || Array.prototype.slice.call(t))
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCData = void 0)
                var c = n(8336),
                    u = (function (e) {
                        function t(t, n) {
                            var r = e.call(this) || this
                            if (
                                ((r.eventStatus = c.CmpApiModel.eventStatus),
                                (r.cmpStatus = c.CmpApiModel.cmpStatus),
                                (r.listenerId = n),
                                c.CmpApiModel.gdprApplies)
                            ) {
                                var o = c.CmpApiModel.tcModel
                                ;(r.tcString = c.CmpApiModel.tcString),
                                    (r.isServiceSpecific = o.isServiceSpecific),
                                    (r.useNonStandardStacks = o.useNonStandardStacks),
                                    (r.purposeOneTreatment = o.purposeOneTreatment),
                                    (r.publisherCC = o.publisherCountryCode),
                                    (r.outOfBand = {
                                        allowedVendors: r.createVectorField(o.vendorsAllowed, t),
                                        disclosedVendors: r.createVectorField(o.vendorsDisclosed, t)
                                    }),
                                    (r.purpose = {
                                        consents: r.createVectorField(o.purposeConsents),
                                        legitimateInterests: r.createVectorField(o.purposeLegitimateInterests)
                                    }),
                                    (r.vendor = {
                                        consents: r.createVectorField(o.vendorConsents, t),
                                        legitimateInterests: r.createVectorField(o.vendorLegitimateInterests, t)
                                    }),
                                    (r.specialFeatureOptins = r.createVectorField(o.specialFeatureOptins)),
                                    (r.publisher = {
                                        consents: r.createVectorField(o.publisherConsents),
                                        legitimateInterests: r.createVectorField(o.publisherLegitimateInterests),
                                        customPurpose: {
                                            consents: r.createVectorField(o.publisherCustomConsents),
                                            legitimateInterests: r.createVectorField(
                                                o.publisherCustomLegitimateInterests
                                            )
                                        },
                                        restrictions: r.createRestrictions(o.publisherRestrictions)
                                    })
                            }
                            return r
                        }
                        return (
                            o(t, e),
                            (t.prototype.createRestrictions = function (e) {
                                var t = {}
                                if (e.numRestrictions > 0)
                                    for (
                                        var n = e.getMaxVendorId(),
                                            r = function (n) {
                                                var r = n.toString()
                                                e.getRestrictions(n).forEach(function (e) {
                                                    var n = e.purposeId.toString()
                                                    t[n] || (t[n] = {}), (t[n][r] = e.restrictionType)
                                                })
                                            },
                                            o = 1;
                                        o <= n;
                                        o++
                                    )
                                        r(o)
                                return t
                            }),
                            (t.prototype.createVectorField = function (e, t) {
                                return t
                                    ? t.reduce(function (t, n) {
                                          return (t[String(n)] = e.has(Number(n))), t
                                      }, {})
                                    : s([], i(e), !1).reduce(function (e, t) {
                                          return (e[t[0].toString(10)] = t[1]), e
                                      }, {})
                            }),
                            t
                        )
                    })(n(5798).Response)
                t.TCData = u
            },
            7101: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.AddEventListenerCommand = void 0)
                var i = n(8336),
                    s = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                ;(this.listenerId = i.CmpApiModel.eventQueue.add({
                                    callback: this.callback,
                                    param: this.param,
                                    next: this.next
                                })),
                                    e.prototype.respond.call(this)
                            }),
                            t
                        )
                    })(n(2281).GetTCDataCommand)
                t.AddEventListenerCommand = s
            },
            7220: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.DisplayStatus = void 0),
                    ((n = t.DisplayStatus || (t.DisplayStatus = {})).VISIBLE = 'visible'),
                    (n.HIDDEN = 'hidden'),
                    (n.DISABLED = 'disabled')
            },
            7351: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Fields = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.cmpId = 'cmpId'),
                        (e.cmpVersion = 'cmpVersion'),
                        (e.consentLanguage = 'consentLanguage'),
                        (e.consentScreen = 'consentScreen'),
                        (e.created = 'created'),
                        (e.supportOOB = 'supportOOB'),
                        (e.isServiceSpecific = 'isServiceSpecific'),
                        (e.lastUpdated = 'lastUpdated'),
                        (e.numCustomPurposes = 'numCustomPurposes'),
                        (e.policyVersion = 'policyVersion'),
                        (e.publisherCountryCode = 'publisherCountryCode'),
                        (e.publisherCustomConsents = 'publisherCustomConsents'),
                        (e.publisherCustomLegitimateInterests = 'publisherCustomLegitimateInterests'),
                        (e.publisherLegitimateInterests = 'publisherLegitimateInterests'),
                        (e.publisherConsents = 'publisherConsents'),
                        (e.publisherRestrictions = 'publisherRestrictions'),
                        (e.purposeConsents = 'purposeConsents'),
                        (e.purposeLegitimateInterests = 'purposeLegitimateInterests'),
                        (e.purposeOneTreatment = 'purposeOneTreatment'),
                        (e.specialFeatureOptins = 'specialFeatureOptins'),
                        (e.useNonStandardStacks = 'useNonStandardStacks'),
                        (e.vendorConsents = 'vendorConsents'),
                        (e.vendorLegitimateInterests = 'vendorLegitimateInterests'),
                        (e.vendorListVersion = 'vendorListVersion'),
                        (e.vendorsAllowed = 'vendorsAllowed'),
                        (e.vendorsDisclosed = 'vendorsDisclosed'),
                        (e.version = 'version'),
                        e
                    )
                })()
                t.Fields = n
            },
            7389: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.EncodingError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'EncodingError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.EncodingError = o
            },
            7421: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Ping = void 0)
                var i = n(8336),
                    s = (function (e) {
                        function t() {
                            var t = e.call(this) || this
                            return (
                                (t.cmpLoaded = !0),
                                (t.cmpStatus = i.CmpApiModel.cmpStatus),
                                (t.displayStatus = i.CmpApiModel.displayStatus),
                                (t.apiVersion = String(i.CmpApiModel.apiVersion)),
                                i.CmpApiModel.tcModel &&
                                    i.CmpApiModel.tcModel.vendorListVersion &&
                                    (t.gvlVersion = +i.CmpApiModel.tcModel.vendorListVersion),
                                t
                            )
                        }
                        return o(t, e), t
                    })(n(5798).Response)
                t.Ping = s
            },
            7483: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GetInAppTCDataCommand = void 0)
                var i = n(2281),
                    s = n(1553),
                    c = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                this.throwIfParamInvalid(), this.invokeCallback(new s.InAppTCData(this.param))
                            }),
                            t
                        )
                    })(i.GetTCDataCommand)
                t.GetInAppTCDataCommand = c
            },
            7485: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__awaiter) ||
                        function (e, t, n, r) {
                            return new (n || (n = Promise))(function (o, i) {
                                function s(e) {
                                    try {
                                        u(r.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }
                                function c(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }
                                function u(e) {
                                    var t
                                    e.done
                                        ? o(e.value)
                                        : ((t = e.value),
                                          t instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t)
                                                })).then(s, c)
                                }
                                u((r = r.apply(e, t || [])).next())
                            })
                        },
                    s =
                        (this && this.__generator) ||
                        function (e, t) {
                            var n,
                                r,
                                o,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & o[0]) throw o[1]
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                }
                            return (
                                (i = { next: c(0), throw: c(1), return: c(2) }),
                                'function' == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this
                                    }),
                                i
                            )
                            function c(i) {
                                return function (c) {
                                    return (function (i) {
                                        if (n) throw new TypeError('Generator is already executing.')
                                        for (; s; )
                                            try {
                                                if (
                                                    ((n = 1),
                                                    r &&
                                                        (o =
                                                            2 & i[0]
                                                                ? r.return
                                                                : i[0]
                                                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                                                : r.next) &&
                                                        !(o = o.call(r, i[1])).done)
                                                )
                                                    return o
                                                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                                                    case 0:
                                                    case 1:
                                                        o = i
                                                        break
                                                    case 4:
                                                        return s.label++, { value: i[1], done: !1 }
                                                    case 5:
                                                        s.label++, (r = i[1]), (i = [0])
                                                        continue
                                                    case 7:
                                                        ;(i = s.ops.pop()), s.trys.pop()
                                                        continue
                                                    default:
                                                        if (
                                                            !(
                                                                (o = (o = s.trys).length > 0 && o[o.length - 1]) ||
                                                                (6 !== i[0] && 2 !== i[0])
                                                            )
                                                        ) {
                                                            s = 0
                                                            continue
                                                        }
                                                        if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                                                            s.label = i[1]
                                                            break
                                                        }
                                                        if (6 === i[0] && s.label < o[1]) {
                                                            ;(s.label = o[1]), (o = i)
                                                            break
                                                        }
                                                        if (o && s.label < o[2]) {
                                                            ;(s.label = o[2]), s.ops.push(i)
                                                            break
                                                        }
                                                        o[2] && s.ops.pop(), s.trys.pop()
                                                        continue
                                                }
                                                i = t.call(e, s)
                                            } catch (e) {
                                                ;(i = [6, e]), (r = 0)
                                            } finally {
                                                n = o = 0
                                            }
                                        if (5 & i[0]) throw i[1]
                                        return { value: i[0] ? i[1] : void 0, done: !0 }
                                    })([i, c])
                                }
                            }
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GVL = void 0)
                var c = n(9067),
                    u = n(1692),
                    a = n(6070),
                    l = n(1636),
                    p = (function (e) {
                        function t(n) {
                            var r = e.call(this) || this
                            ;(r.isReady_ = !1), (r.isLatest = !1)
                            var o = t.baseUrl
                            if (((r.lang_ = t.DEFAULT_LANGUAGE), r.isVendorList(n)))
                                r.populate(n), (r.readyPromise = Promise.resolve())
                            else {
                                if (!o) throw new u.GVLError('must specify GVL.baseUrl before loading GVL json')
                                if (n > 0) {
                                    var i = n
                                    t.CACHE.has(i)
                                        ? (r.populate(t.CACHE.get(i)), (r.readyPromise = Promise.resolve()))
                                        : ((o += t.versionedFilename.replace('[VERSION]', String(i))),
                                          (r.readyPromise = r.fetchJson(o)))
                                } else
                                    t.CACHE.has(t.LATEST_CACHE_KEY)
                                        ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),
                                          (r.readyPromise = Promise.resolve()))
                                        : ((r.isLatest = !0), (r.readyPromise = r.fetchJson(o + t.latestFilename)))
                            }
                            return r
                        }
                        return (
                            o(t, e),
                            Object.defineProperty(t, 'baseUrl', {
                                get: function () {
                                    return this.baseUrl_
                                },
                                set: function (e) {
                                    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
                                        throw new u.GVLError(
                                            'Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache'
                                        )
                                    e.length > 0 && '/' !== e[e.length - 1] && (e += '/'), (this.baseUrl_ = e)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.emptyLanguageCache = function (e) {
                                var n = !1
                                return (
                                    void 0 === e && t.LANGUAGE_CACHE.size > 0
                                        ? ((t.LANGUAGE_CACHE = new Map()), (n = !0))
                                        : 'string' == typeof e &&
                                          this.consentLanguages.has(e.toUpperCase()) &&
                                          (t.LANGUAGE_CACHE.delete(e.toUpperCase()), (n = !0)),
                                    n
                                )
                            }),
                            (t.emptyCache = function (e) {
                                var n = !1
                                return (
                                    Number.isInteger(e) && e >= 0
                                        ? (t.CACHE.delete(e), (n = !0))
                                        : void 0 === e && ((t.CACHE = new Map()), (n = !0)),
                                    n
                                )
                            }),
                            (t.prototype.cacheLanguage = function () {
                                t.LANGUAGE_CACHE.has(this.lang_) ||
                                    t.LANGUAGE_CACHE.set(this.lang_, {
                                        purposes: this.purposes,
                                        specialPurposes: this.specialPurposes,
                                        features: this.features,
                                        specialFeatures: this.specialFeatures,
                                        stacks: this.stacks
                                    })
                            }),
                            (t.prototype.fetchJson = function (e) {
                                return i(this, void 0, void 0, function () {
                                    var t, n
                                    return s(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    r.trys.push([0, 2, , 3]), (t = this.populate), [4, a.Json.fetch(e)]
                                                )
                                            case 1:
                                                return t.apply(this, [r.sent()]), [3, 3]
                                            case 2:
                                                throw ((n = r.sent()), new u.GVLError(n.message))
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            }),
                            (t.prototype.getJson = function () {
                                return JSON.parse(
                                    JSON.stringify({
                                        gvlSpecificationVersion: this.gvlSpecificationVersion,
                                        vendorListVersion: this.vendorListVersion,
                                        tcfPolicyVersion: this.tcfPolicyVersion,
                                        lastUpdated: this.lastUpdated,
                                        purposes: this.purposes,
                                        specialPurposes: this.specialPurposes,
                                        features: this.features,
                                        specialFeatures: this.specialFeatures,
                                        stacks: this.stacks,
                                        vendors: this.fullVendorList
                                    })
                                )
                            }),
                            (t.prototype.changeLanguage = function (e) {
                                return i(this, void 0, void 0, function () {
                                    var n, r, o, i, c
                                    return s(this, function (s) {
                                        switch (s.label) {
                                            case 0:
                                                if (((n = e.toUpperCase()), !t.consentLanguages.has(n))) return [3, 6]
                                                if (n === this.lang_) return [3, 5]
                                                if (((this.lang_ = n), !t.LANGUAGE_CACHE.has(n))) return [3, 1]
                                                for (o in (r = t.LANGUAGE_CACHE.get(n)))
                                                    r.hasOwnProperty(o) && (this[o] = r[o])
                                                return [3, 5]
                                            case 1:
                                                ;(i = t.baseUrl + t.languageFilename.replace('[LANG]', e)),
                                                    (s.label = 2)
                                            case 2:
                                                return s.trys.push([2, 4, , 5]), [4, this.fetchJson(i)]
                                            case 3:
                                                return s.sent(), this.cacheLanguage(), [3, 5]
                                            case 4:
                                                throw (
                                                    ((c = s.sent()),
                                                    new u.GVLError('unable to load language: ' + c.message))
                                                )
                                            case 5:
                                                return [3, 7]
                                            case 6:
                                                throw new u.GVLError('unsupported language '.concat(e))
                                            case 7:
                                                return [2]
                                        }
                                    })
                                })
                            }),
                            Object.defineProperty(t.prototype, 'language', {
                                get: function () {
                                    return this.lang_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isVendorList = function (e) {
                                return void 0 !== e && void 0 !== e.vendors
                            }),
                            (t.prototype.populate = function (e) {
                                ;(this.purposes = e.purposes),
                                    (this.specialPurposes = e.specialPurposes),
                                    (this.features = e.features),
                                    (this.specialFeatures = e.specialFeatures),
                                    (this.stacks = e.stacks),
                                    this.isVendorList(e) &&
                                        ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
                                        (this.tcfPolicyVersion = e.tcfPolicyVersion),
                                        (this.vendorListVersion = e.vendorListVersion),
                                        (this.lastUpdated = e.lastUpdated),
                                        'string' == typeof this.lastUpdated &&
                                            (this.lastUpdated = new Date(this.lastUpdated)),
                                        (this.vendors_ = e.vendors),
                                        (this.fullVendorList = e.vendors),
                                        this.mapVendors(),
                                        (this.isReady_ = !0),
                                        this.isLatest && t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()),
                                        t.CACHE.has(this.vendorListVersion) ||
                                            t.CACHE.set(this.vendorListVersion, this.getJson())),
                                    this.cacheLanguage()
                            }),
                            (t.prototype.mapVendors = function (e) {
                                var t = this
                                ;(this.byPurposeVendorMap = {}),
                                    (this.bySpecialPurposeVendorMap = {}),
                                    (this.byFeatureVendorMap = {}),
                                    (this.bySpecialFeatureVendorMap = {}),
                                    Object.keys(this.purposes).forEach(function (e) {
                                        t.byPurposeVendorMap[e] = {
                                            legInt: new Set(),
                                            consent: new Set(),
                                            flexible: new Set()
                                        }
                                    }),
                                    Object.keys(this.specialPurposes).forEach(function (e) {
                                        t.bySpecialPurposeVendorMap[e] = new Set()
                                    }),
                                    Object.keys(this.features).forEach(function (e) {
                                        t.byFeatureVendorMap[e] = new Set()
                                    }),
                                    Object.keys(this.specialFeatures).forEach(function (e) {
                                        t.bySpecialFeatureVendorMap[e] = new Set()
                                    }),
                                    Array.isArray(e) ||
                                        (e = Object.keys(this.fullVendorList).map(function (e) {
                                            return +e
                                        })),
                                    (this.vendorIds = new Set(e)),
                                    (this.vendors_ = e.reduce(function (e, n) {
                                        var r = t.vendors_[String(n)]
                                        return (
                                            r &&
                                                void 0 === r.deletedDate &&
                                                (r.purposes.forEach(function (e) {
                                                    t.byPurposeVendorMap[String(e)].consent.add(n)
                                                }),
                                                r.specialPurposes.forEach(function (e) {
                                                    t.bySpecialPurposeVendorMap[String(e)].add(n)
                                                }),
                                                r.legIntPurposes.forEach(function (e) {
                                                    t.byPurposeVendorMap[String(e)].legInt.add(n)
                                                }),
                                                r.flexiblePurposes &&
                                                    r.flexiblePurposes.forEach(function (e) {
                                                        t.byPurposeVendorMap[String(e)].flexible.add(n)
                                                    }),
                                                r.features.forEach(function (e) {
                                                    t.byFeatureVendorMap[String(e)].add(n)
                                                }),
                                                r.specialFeatures.forEach(function (e) {
                                                    t.bySpecialFeatureVendorMap[String(e)].add(n)
                                                }),
                                                (e[n] = r)),
                                            e
                                        )
                                    }, {}))
                            }),
                            (t.prototype.getFilteredVendors = function (e, t, n, r) {
                                var o = this,
                                    i = e.charAt(0).toUpperCase() + e.slice(1),
                                    s = {}
                                return (
                                    ('purpose' === e && n
                                        ? this['by' + i + 'VendorMap'][String(t)][n]
                                        : this['by' + (r ? 'Special' : '') + i + 'VendorMap'][String(t)]
                                    ).forEach(function (e) {
                                        s[String(e)] = o.vendors[String(e)]
                                    }),
                                    s
                                )
                            }),
                            (t.prototype.getVendorsWithConsentPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'consent')
                            }),
                            (t.prototype.getVendorsWithLegIntPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'legInt')
                            }),
                            (t.prototype.getVendorsWithFlexiblePurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, 'flexible')
                            }),
                            (t.prototype.getVendorsWithSpecialPurpose = function (e) {
                                return this.getFilteredVendors('purpose', e, void 0, !0)
                            }),
                            (t.prototype.getVendorsWithFeature = function (e) {
                                return this.getFilteredVendors('feature', e)
                            }),
                            (t.prototype.getVendorsWithSpecialFeature = function (e) {
                                return this.getFilteredVendors('feature', e, void 0, !0)
                            }),
                            Object.defineProperty(t.prototype, 'vendors', {
                                get: function () {
                                    return this.vendors_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.narrowVendorsTo = function (e) {
                                this.mapVendors(e)
                            }),
                            Object.defineProperty(t.prototype, 'isReady', {
                                get: function () {
                                    return this.isReady_
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.clone = function () {
                                var e = new t(this.getJson())
                                return this.lang_ !== t.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e
                            }),
                            (t.isInstanceOf = function (e) {
                                return 'object' == typeof e && 'function' == typeof e.narrowVendorsTo
                            }),
                            (t.LANGUAGE_CACHE = new Map()),
                            (t.CACHE = new Map()),
                            (t.LATEST_CACHE_KEY = 0),
                            (t.DEFAULT_LANGUAGE = 'EN'),
                            (t.consentLanguages = new l.ConsentLanguages()),
                            (t.latestFilename = 'vendor-list.json'),
                            (t.versionedFilename = 'archives/vendor-list-v[VERSION].json'),
                            (t.languageFilename = 'purposes-[LANG].json'),
                            t
                        )
                    })(c.Cloneable)
                t.GVL = p
            },
            7637: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.DecodingError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'DecodingError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.DecodingError = o
            },
            7746: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.DateEncoder = void 0)
                var r = n(9887),
                    o = n(1692),
                    i = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                return r.IntEncoder.encode(Math.round(e.getTime() / 100), t)
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length) throw new o.DecodingError('invalid bit length')
                                var n = new Date()
                                return n.setTime(100 * r.IntEncoder.decode(e, t)), n
                            }),
                            e
                        )
                    })()
                t.DateEncoder = i
            },
            7770: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        }),
                    i =
                        (this && this.__read) ||
                        function (e, t) {
                            var n = 'function' == typeof Symbol && e[Symbol.iterator]
                            if (!n) return e
                            var r,
                                o,
                                i = n.call(e),
                                s = []
                            try {
                                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; ) s.push(r.value)
                            } catch (e) {
                                o = { error: e }
                            } finally {
                                try {
                                    r && !r.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            return s
                        },
                    s =
                        (this && this.__spreadArray) ||
                        function (e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++)
                                    (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]))
                            return e.concat(r || Array.prototype.slice.call(t))
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.InAppTCData = void 0)
                var c = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return delete n.outOfBand, n
                    }
                    return (
                        o(t, e),
                        (t.prototype.createVectorField = function (e) {
                            return s([], i(e), !1).reduce(function (e, t) {
                                return e + (t[1] ? '1' : '0')
                            }, '')
                        }),
                        (t.prototype.createRestrictions = function (e) {
                            var t = {}
                            if (e.numRestrictions > 0) {
                                var n = e.getMaxVendorId()
                                e.getRestrictions().forEach(function (e) {
                                    t[e.purposeId.toString()] = '_'.repeat(n)
                                })
                                for (
                                    var r = function (n) {
                                            var r = n + 1
                                            e.getRestrictions(r).forEach(function (e) {
                                                var r = e.restrictionType.toString(),
                                                    o = e.purposeId.toString(),
                                                    i = t[o].substr(0, n),
                                                    s = t[o].substr(n + 1)
                                                t[o] = i + r + s
                                            })
                                        },
                                        o = 0;
                                    o < n;
                                    o++
                                )
                                    r(o)
                            }
                            return t
                        }),
                        t
                    )
                })(n(6984).TCData)
                t.InAppTCData = c
            },
            7816: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 })
            },
            8004: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GetVendorListCommand = void 0)
                var i = n(8336),
                    s = n(3802),
                    c = n(6206),
                    u = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                var e,
                                    t = this,
                                    n = i.CmpApiModel.tcModel,
                                    r = n.vendorListVersion
                                void 0 === this.param && (this.param = r),
                                    (e = this.param === r && n.gvl ? n.gvl : new c.GVL(this.param)).readyPromise.then(
                                        function () {
                                            t.invokeCallback(e.getJson())
                                        }
                                    )
                            }),
                            t
                        )
                    })(s.Command)
                t.GetVendorListCommand = u
            },
            8114: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.RemoveEventListenerCommand = void 0)
                var i = n(8336),
                    s = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                this.invokeCallback(i.CmpApiModel.eventQueue.remove(this.param))
                            }),
                            t
                        )
                    })(n(3802).Command)
                t.RemoveEventListenerCommand = s
            },
            8120: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FieldEncoderMap = void 0)
                var r = n(1636),
                    o = n(1700),
                    i = n(7746),
                    s = n(9871),
                    c = n(9887),
                    u = n(3358),
                    a = n(6947),
                    l = n(6577)
                t.FieldEncoderMap = function () {
                    var e
                    return (
                        ((e = {})[r.Fields.version] = c.IntEncoder),
                        (e[r.Fields.created] = i.DateEncoder),
                        (e[r.Fields.lastUpdated] = i.DateEncoder),
                        (e[r.Fields.cmpId] = c.IntEncoder),
                        (e[r.Fields.cmpVersion] = c.IntEncoder),
                        (e[r.Fields.consentScreen] = c.IntEncoder),
                        (e[r.Fields.consentLanguage] = u.LangEncoder),
                        (e[r.Fields.vendorListVersion] = c.IntEncoder),
                        (e[r.Fields.policyVersion] = c.IntEncoder),
                        (e[r.Fields.isServiceSpecific] = o.BooleanEncoder),
                        (e[r.Fields.useNonStandardStacks] = o.BooleanEncoder),
                        (e[r.Fields.specialFeatureOptins] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeLegitimateInterests] = s.FixedVectorEncoder),
                        (e[r.Fields.purposeOneTreatment] = o.BooleanEncoder),
                        (e[r.Fields.publisherCountryCode] = u.LangEncoder),
                        (e[r.Fields.vendorConsents] = l.VendorVectorEncoder),
                        (e[r.Fields.vendorLegitimateInterests] = l.VendorVectorEncoder),
                        (e[r.Fields.publisherRestrictions] = a.PurposeRestrictionVectorEncoder),
                        (e.segmentType = c.IntEncoder),
                        (e[r.Fields.vendorsDisclosed] = l.VendorVectorEncoder),
                        (e[r.Fields.vendorsAllowed] = l.VendorVectorEncoder),
                        (e[r.Fields.publisherConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.publisherLegitimateInterests] = s.FixedVectorEncoder),
                        (e[r.Fields.numCustomPurposes] = c.IntEncoder),
                        (e[r.Fields.publisherCustomConsents] = s.FixedVectorEncoder),
                        (e[r.Fields.publisherCustomLegitimateInterests] = s.FixedVectorEncoder),
                        e
                    )
                }
            },
            8301: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Disabled = void 0)
                var i = n(5798),
                    s = n(712),
                    c = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this
                            return (t.cmpStatus = s.CmpStatus.ERROR), t
                        }
                        return o(t, e), t
                    })(i.Response)
                t.Disabled = c
            },
            8336: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.CmpApiModel = void 0)
                var r = n(712),
                    o = n(9154),
                    i = (function () {
                        function e() {}
                        return (
                            (e.reset = function () {
                                delete this.cmpId,
                                    delete this.cmpVersion,
                                    delete this.eventStatus,
                                    delete this.gdprApplies,
                                    delete this.tcModel,
                                    delete this.tcString,
                                    delete this.tcfPolicyVersion,
                                    (this.cmpStatus = r.CmpStatus.LOADING),
                                    (this.disabled = !1),
                                    (this.displayStatus = r.DisplayStatus.HIDDEN),
                                    this.eventQueue.clear()
                            }),
                            (e.apiVersion = '2'),
                            (e.eventQueue = new o.EventListenerQueue()),
                            (e.cmpStatus = r.CmpStatus.LOADING),
                            (e.disabled = !1),
                            (e.displayStatus = r.DisplayStatus.HIDDEN),
                            e
                        )
                    })()
                t.CmpApiModel = i
            },
            8450: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PingCommand = void 0)
                var i = n(1553),
                    s = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this
                        }
                        return (
                            o(t, e),
                            (t.prototype.respond = function () {
                                this.invokeCallback(new i.Ping())
                            }),
                            t
                        )
                    })(n(3802).Command)
                t.PingCommand = s
            },
            8473: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.TCFCommand = void 0),
                    ((n = t.TCFCommand || (t.TCFCommand = {})).PING = 'ping'),
                    (n.GET_TC_DATA = 'getTCData'),
                    (n.GET_IN_APP_TC_DATA = 'getInAppTCData'),
                    (n.GET_VENDOR_LIST = 'getVendorList'),
                    (n.ADD_EVENT_LISTENER = 'addEventListener'),
                    (n.REMOVE_EVENT_LISTENER = 'removeEventListener')
            },
            8566: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(1700), t),
                    o(n(7746), t),
                    o(n(8120), t),
                    o(n(9871), t),
                    o(n(9887), t),
                    o(n(3358), t),
                    o(n(6947), t),
                    o(n(4106), t),
                    o(n(6577), t)
            },
            8731: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }), o(n(8473), t), o(n(6133), t)
            },
            9022: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.CommandMap = void 0)
                var r = n(8450),
                    o = n(2281),
                    i = n(7483),
                    s = n(8004),
                    c = n(7101),
                    u = n(8114),
                    a = n(8473),
                    l = (function () {
                        function e() {}
                        var t, n, l, p, d, f
                        return (
                            (t = a.TCFCommand.PING),
                            (n = a.TCFCommand.GET_TC_DATA),
                            (l = a.TCFCommand.GET_IN_APP_TC_DATA),
                            (p = a.TCFCommand.GET_VENDOR_LIST),
                            (d = a.TCFCommand.ADD_EVENT_LISTENER),
                            (f = a.TCFCommand.REMOVE_EVENT_LISTENER),
                            (e[t] = r.PingCommand),
                            (e[n] = o.GetTCDataCommand),
                            (e[l] = i.GetInAppTCDataCommand),
                            (e[p] = s.GetVendorListCommand),
                            (e[d] = c.AddEventListenerCommand),
                            (e[f] = u.RemoveEventListenerCommand),
                            e
                        )
                    })()
                t.CommandMap = l
            },
            9034: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.RestrictionType = void 0),
                    ((n = t.RestrictionType || (t.RestrictionType = {}))[(n.NOT_ALLOWED = 0)] = 'NOT_ALLOWED'),
                    (n[(n.REQUIRE_CONSENT = 1)] = 'REQUIRE_CONSENT'),
                    (n[(n.REQUIRE_LI = 2)] = 'REQUIRE_LI')
            },
            9067: function (e, t) {
                'use strict'
                var n =
                    (this && this.__values) ||
                    function (e) {
                        var t = 'function' == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0
                        if (n) return n.call(e)
                        if (e && 'number' == typeof e.length)
                            return {
                                next: function () {
                                    return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                                }
                            }
                        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
                    }
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.Cloneable = void 0)
                var r = (function () {
                    function e() {}
                    return (
                        (e.prototype.clone = function () {
                            var e = this,
                                t = new this.constructor()
                            return (
                                Object.keys(this).forEach(function (n) {
                                    var r = e.deepClone(e[n])
                                    void 0 !== r && (t[n] = r)
                                }),
                                t
                            )
                        }),
                        (e.prototype.deepClone = function (e) {
                            var t,
                                r,
                                o = typeof e
                            if ('number' === o || 'string' === o || 'boolean' === o) return e
                            if (null !== e && 'object' === o) {
                                if ('function' == typeof e.clone) return e.clone()
                                if (e instanceof Date) return new Date(e.getTime())
                                if (void 0 !== e[Symbol.iterator]) {
                                    var i = []
                                    try {
                                        for (var s = n(e), c = s.next(); !c.done; c = s.next()) {
                                            var u = c.value
                                            i.push(this.deepClone(u))
                                        }
                                    } catch (e) {
                                        t = { error: e }
                                    } finally {
                                        try {
                                            c && !c.done && (r = s.return) && r.call(s)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                    }
                                    return e instanceof Array ? i : new e.constructor(i)
                                }
                                var a = {}
                                for (var l in e) e.hasOwnProperty(l) && (a[l] = this.deepClone(e[l]))
                                return a
                            }
                        }),
                        e
                    )
                })()
                t.Cloneable = r
            },
            9154: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.EventListenerQueue = void 0)
                var r = n(2281),
                    o = (function () {
                        function e() {
                            ;(this.eventQueue = new Map()), (this.queueNumber = 0)
                        }
                        return (
                            (e.prototype.add = function (e) {
                                return this.eventQueue.set(this.queueNumber, e), this.queueNumber++
                            }),
                            (e.prototype.remove = function (e) {
                                return this.eventQueue.delete(e)
                            }),
                            (e.prototype.exec = function () {
                                this.eventQueue.forEach(function (e, t) {
                                    new r.GetTCDataCommand(e.callback, e.param, t, e.next)
                                })
                            }),
                            (e.prototype.clear = function () {
                                ;(this.queueNumber = 0), this.eventQueue.clear()
                            }),
                            Object.defineProperty(e.prototype, 'size', {
                                get: function () {
                                    return this.eventQueue.size
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e
                        )
                    })()
                t.EventListenerQueue = o
            },
            9174: function (e, t, n) {
                'use strict'
                var r,
                    o =
                        (this && this.__extends) ||
                        ((r = function (e, t) {
                            return (r =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function n() {
                                this.constructor = e
                            }
                            r(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.PurposeRestriction = void 0)
                var i = n(9067),
                    s = n(1692),
                    c = n(9034),
                    u = (function (e) {
                        function t(t, n) {
                            var r = e.call(this) || this
                            return void 0 !== t && (r.purposeId = t), void 0 !== n && (r.restrictionType = n), r
                        }
                        return (
                            o(t, e),
                            (t.unHash = function (e) {
                                var n = e.split(this.hashSeparator),
                                    r = new t()
                                if (2 !== n.length) throw new s.TCModelError('hash', e)
                                return (r.purposeId = parseInt(n[0], 10)), (r.restrictionType = parseInt(n[1], 10)), r
                            }),
                            Object.defineProperty(t.prototype, 'hash', {
                                get: function () {
                                    if (!this.isValid()) throw new Error('cannot hash invalid PurposeRestriction')
                                    return ''
                                        .concat(this.purposeId)
                                        .concat(t.hashSeparator)
                                        .concat(this.restrictionType)
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'purposeId', {
                                get: function () {
                                    return this.purposeId_
                                },
                                set: function (e) {
                                    this.purposeId_ = e
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.isValid = function () {
                                return (
                                    Number.isInteger(this.purposeId) &&
                                    this.purposeId > 0 &&
                                    (this.restrictionType === c.RestrictionType.NOT_ALLOWED ||
                                        this.restrictionType === c.RestrictionType.REQUIRE_CONSENT ||
                                        this.restrictionType === c.RestrictionType.REQUIRE_LI)
                                )
                            }),
                            (t.prototype.isSameAs = function (e) {
                                return this.purposeId === e.purposeId && this.restrictionType === e.restrictionType
                            }),
                            (t.hashSeparator = '-'),
                            t
                        )
                    })(i.Cloneable)
                t.PurposeRestriction = u
            },
            9457: function (e, t) {
                'use strict'
                var n,
                    r =
                        (this && this.__extends) ||
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }),
                        function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError(
                                    'Class extends value ' + String(t) + ' is not a constructor or null'
                                )
                            function r() {
                                this.constructor = e
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
                        })
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.GVLError = void 0)
                var o = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this
                        return (n.name = 'GVLError'), n
                    }
                    return r(t, e), t
                })(Error)
                t.GVLError = o
            },
            9459: (e, t) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.ConsentLanguages = void 0)
                var n = (function () {
                    function e() {}
                    return (
                        (e.prototype.has = function (t) {
                            return e.langSet.has(t)
                        }),
                        (e.prototype.forEach = function (t) {
                            e.langSet.forEach(t)
                        }),
                        Object.defineProperty(e.prototype, 'size', {
                            get: function () {
                                return e.langSet.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        (e.langSet = new Set([
                            'BG',
                            'CA',
                            'CS',
                            'DA',
                            'DE',
                            'EL',
                            'EN',
                            'ES',
                            'ET',
                            'FI',
                            'FR',
                            'HR',
                            'HU',
                            'IT',
                            'JA',
                            'LT',
                            'LV',
                            'MT',
                            'NL',
                            'NO',
                            'PL',
                            'PT',
                            'RO',
                            'RU',
                            'SK',
                            'SL',
                            'SV',
                            'TR',
                            'ZH'
                        ])),
                        e
                    )
                })()
                t.ConsentLanguages = n
            },
            9676: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.TCString = void 0)
                var r = n(6909),
                    o = n(1636),
                    i = n(9887),
                    s = n(3576),
                    c = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n,
                                    o = ''
                                return (
                                    (e = r.SemanticPreEncoder.process(e, t)),
                                    (n = Array.isArray(null == t ? void 0 : t.segments)
                                        ? t.segments
                                        : new r.SegmentSequence(e, t)['' + e.version]).forEach(function (t, i) {
                                        var s = ''
                                        i < n.length - 1 && (s = '.'), (o += r.SegmentEncoder.encode(e, t) + s)
                                    }),
                                    o
                                )
                            }),
                            (e.decode = function (e, t) {
                                var n = e.split('.'),
                                    c = n.length
                                t || (t = new s.TCModel())
                                for (var u = 0; u < c; u++) {
                                    var a = n[u],
                                        l = r.Base64Url.decode(a.charAt(0)).substr(0, r.BitLength.segmentType),
                                        p =
                                            o.SegmentIDs.ID_TO_KEY[
                                                i.IntEncoder.decode(l, r.BitLength.segmentType).toString()
                                            ]
                                    r.SegmentEncoder.decode(a, t, p)
                                }
                                return t
                            }),
                            e
                        )
                    })()
                t.TCString = c
            },
            9864: function (e, t, n) {
                'use strict'
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n),
                                      Object.defineProperty(e, r, {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n]
                                          }
                                      })
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n])
                              }),
                    o =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                        }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    o(n(1201), t),
                    o(n(743), t),
                    o(n(5014), t),
                    o(n(1978), t),
                    o(n(2105), t),
                    o(n(450), t),
                    o(n(6900), t),
                    o(n(7816), t),
                    o(n(5792), t)
            },
            9871: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FixedVectorEncoder = void 0)
                var r = n(1700),
                    o = n(1692),
                    i = n(1636),
                    s = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                for (var n = '', o = 1; o <= t; o++) n += r.BooleanEncoder.encode(e.has(o))
                                return n
                            }),
                            (e.decode = function (e, t) {
                                if (e.length !== t) throw new o.DecodingError('bitfield encoding length mismatch')
                                for (var n = new i.Vector(), s = 1; s <= t; s++)
                                    r.BooleanEncoder.decode(e[s - 1]) && n.set(s)
                                return (n.bitLength = e.length), n
                            }),
                            e
                        )
                    })()
                t.FixedVectorEncoder = s
            },
            9882: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.FieldSequence = void 0)
                var r = n(1636)
                t.FieldSequence = function () {
                    var e, t
                    ;(this[1] =
                        (((e = {})[r.Segment.CORE] = [
                            r.Fields.version,
                            r.Fields.created,
                            r.Fields.lastUpdated,
                            r.Fields.cmpId,
                            r.Fields.cmpVersion,
                            r.Fields.consentScreen,
                            r.Fields.consentLanguage,
                            r.Fields.vendorListVersion,
                            r.Fields.purposeConsents,
                            r.Fields.vendorConsents
                        ]),
                        e)),
                        (this[2] =
                            (((t = {})[r.Segment.CORE] = [
                                r.Fields.version,
                                r.Fields.created,
                                r.Fields.lastUpdated,
                                r.Fields.cmpId,
                                r.Fields.cmpVersion,
                                r.Fields.consentScreen,
                                r.Fields.consentLanguage,
                                r.Fields.vendorListVersion,
                                r.Fields.policyVersion,
                                r.Fields.isServiceSpecific,
                                r.Fields.useNonStandardStacks,
                                r.Fields.specialFeatureOptins,
                                r.Fields.purposeConsents,
                                r.Fields.purposeLegitimateInterests,
                                r.Fields.purposeOneTreatment,
                                r.Fields.publisherCountryCode,
                                r.Fields.vendorConsents,
                                r.Fields.vendorLegitimateInterests,
                                r.Fields.publisherRestrictions
                            ]),
                            (t[r.Segment.PUBLISHER_TC] = [
                                r.Fields.publisherConsents,
                                r.Fields.publisherLegitimateInterests,
                                r.Fields.numCustomPurposes,
                                r.Fields.publisherCustomConsents,
                                r.Fields.publisherCustomLegitimateInterests
                            ]),
                            (t[r.Segment.VENDORS_ALLOWED] = [r.Fields.vendorsAllowed]),
                            (t[r.Segment.VENDORS_DISCLOSED] = [r.Fields.vendorsDisclosed]),
                            t))
                }
            },
            9887: (e, t, n) => {
                'use strict'
                Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntEncoder = void 0)
                var r = n(1692),
                    o = (function () {
                        function e() {}
                        return (
                            (e.encode = function (e, t) {
                                var n
                                if (
                                    ('string' == typeof e && (e = parseInt(e, 10)),
                                    (n = e.toString(2)).length > t || e < 0)
                                )
                                    throw new r.EncodingError(''.concat(e, ' too large to encode into ').concat(t))
                                return n.length < t && (n = '0'.repeat(t - n.length) + n), n
                            }),
                            (e.decode = function (e, t) {
                                if (t !== e.length) throw new r.DecodingError('invalid bit length')
                                return parseInt(e, 2)
                            }),
                            e
                        )
                    })()
                t.IntEncoder = o
            },
            9941: (e, t) => {
                'use strict'
                var n
                Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Segment = void 0),
                    ((n = t.Segment || (t.Segment = {})).CORE = 'core'),
                    (n.VENDORS_DISCLOSED = 'vendorsDisclosed'),
                    (n.VENDORS_ALLOWED = 'vendorsAllowed'),
                    (n.PUBLISHER_TC = 'publisherTC')
            }
        },
        t = {}
    window.IABTcfAPI = (function n(r) {
        var o = t[r]
        if (void 0 !== o) return o.exports
        var i = (t[r] = { exports: {} })
        return e[r].call(i.exports, i, i.exports, n), i.exports
    })(2765)
})()
 // IAB TCF Core Modules
        /* eslint-disable */
let gvl = {}
let cmpApi = null

const { CmpApi } = window.IABTcfAPI

;(function () {
    const makeStub = () => {
        const TCF_LOCATOR_NAME = '__tcfapiLocator'
        const queue = []
        const currentWindow = window
        let frameLocator = currentWindow
        let cmpFrame
        let gdprApplies

        function addFrame() {
            const doc = currentWindow.document
            const otherCMP = !!currentWindow.frames[TCF_LOCATOR_NAME]

            if (!otherCMP) {
                if (doc.body) {
                    const iframe = doc.createElement('iframe')

                    iframe.style.cssText = 'display:none'
                    iframe.name = TCF_LOCATOR_NAME
                    doc.body.appendChild(iframe)
                } else {
                    setTimeout(addFrame, 5)
                }
            }

            return !otherCMP
        }

        function tcfAPIHandler(...args) {
            if (!args.length) {
                /**
                 * shortcut to get the queue when the full CMP
                 * implementation loads; it can call tcfapiHandler()
                 * with no arguments to get the queued arguments
                 */

                return queue
            } else if (args[0] === 'setGdprApplies') {
                /**
                 * shortcut to set gdprApplies if the publisher
                 * knows that they apply GDPR rules to all
                 * traffic (see the section on "What does the
                 * gdprApplies value mean" for more
                 */
                if (args.length > 3 && parseInt(args[1], 10) === 2 && typeof args[3] === 'boolean') {
                    gdprApplies = args[3]

                    if (typeof args[2] === 'function') {
                        args[2]('set', true)
                    }
                }
            } else if (args[0] === 'ping') {
                /**
                 * Only supported method; give PingReturn
                 * object as response
                 */
                if (typeof args[2] === 'function') {
                    args[2]({
                        gdprApplies: gdprApplies,
                        cmpLoaded: false,
                        cmpStatus: 'stub'
                    })
                }
            } else {
                /**
                 * some other method, just queue it for the
                 * full CMP implementation to deal with
                 */
                queue.push(args)
            }
        }

        function postMessageEventHandler(event) {
            const msgIsString = typeof event.data === 'string'
            let json = {}

            if (msgIsString) {
                try {
                    /**
                     * Try to parse the data from the event.  This is important
                     * to have in a try/catch because often messages may come
                     * through that are not JSON
                     */
                    json = JSON.parse(event.data)
                } catch (ignore) {}
            } else {
                json = event.data
            }

            const payload = typeof json === 'object' && json !== null ? json.__tcfapiCall : null

            if (payload) {
                let eventSource = event?.source
                window.__tcfapi(
                    payload.command,
                    payload.version,
                    function (retValue, success) {
                        let returnMsg = {
                            __tcfapiReturn: {
                                returnValue: retValue,
                                success: success,
                                callId: payload.callId
                            }
                        }

                        if (eventSource && eventSource.postMessage) {
                            eventSource.postMessage(msgIsString ? JSON.stringify(returnMsg) : returnMsg, '*')
                        }
                    },
                    payload.parameter
                )
                eventSource = null
            }
        }

        /**
         * Iterate up to the top window checking for an already-created
         * "__tcfapilLocator" frame on every level. If one exists already then we are
         * not the master CMP and will not queue commands.
         */
        while (frameLocator) {
            try {
                if (frameLocator.frames[TCF_LOCATOR_NAME]) {
                    cmpFrame = frameLocator
                    break
                }
            } catch (ignore) {}

            // if we're at the top and no cmpFrame
            if (frameLocator === currentWindow.top) {
                break
            }

            // Move up
            frameLocator = frameLocator.parent
        }

        if (!cmpFrame) {
            // we have recur'd up the windows and have found no __tcfapiLocator frame
            addFrame()
            currentWindow.__tcfapi = tcfAPIHandler
            currentWindow.addEventListener('message', postMessageEventHandler, false)
        }
    }

    if (typeof module !== 'undefined') {
        module.exports = makeStub
    } else {
        makeStub()
    }
})()
async function loadGVL() {
    IABTcf.GVL.baseUrl = IAB_TCF_VENDOR_URL
    gvl = new IABTcf.GVL()

    try {
        await gvl.readyPromise
        window.__GVL__ = gvl
        cmpApi = new CmpApi(CMPDATA['cmp_id'], CMPDATA['cmp_version'], true)
        // cmpApi.cmpStatus = 'loaded'
        // cmpApi.displayStatus = 'visible'
        console.log('CmpApi created:', cmpApi)
        const existingConsent = getCookieDetails(cookieName, false)
        if (existingConsent) {
            console.log('Existing consent found:', existingConsent)
            try {
                cmpApi.update(existingConsent, true)
            } catch (err) {
                console.error('Invalid TC String: ', err)
                cmpApi.update('', true)
            }
        } else {
            // instead if '' if we use null that means gdpr is set to false
            cmpApi.update('', true)
        }
        // Notify CMP ready
        makeIABBanner()

        // cmpApi.eventStatus = 'tcloaded'
        try {
            const tcfapiQueue = window.__tcfapi()
            // window.__tcfapi = realTCFAPIImplementation;
            tcfapiQueue.forEach((args) => window.__tcfapi.apply(null, args))
        } catch (error) {
            console.warn('apply queue', error)
        }
        console.log('GVL loaded successfully, CMP ready')
    } catch (err) {
        console.error('GVL failed', err)
        // makeIABBanner()
    }
}
function makeIABBanner() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', showBanner)
    } else {
        showBanner()
    }
}
// Set consent data using TCModel and encoded TC string
function setIABTCFConsent(gvl, consents) {
    // Ensure GVL and consent data are provided
    if (!gvl || !consents) {
        console.warn('GVL or consents missing')
        return
    }

    // Create a new Transparency & Consent model using the loaded Global Vendor List
    const model = new IABTcf.TCModel(gvl)

    // Mandatory fields required for a valid TC string
    model.cmpId = CMPDATA['cmp_id'] // Replace with your registered CMP ID from IAB
    model.cmpVersion = CMPDATA['cmp_version'] // Version of your CMP UI
    model.vendorListVersion = gvl.vendorListVersion // From loaded GVL
    model.policyVersion = gvl.tcfPolicyVersion // Also from GVL
    model.consentLanguage = 'EN' // ISO 639-1 language code
    model.publisherCountryCode = 'US' // ISO 3166-1 alpha-2 country code

    // Optional flags to describe the scope and nature of your CMP
    model.isServiceSpecific = true // true = consent applies to this service only
    model.supportOOB = false // true = supports Out-of-Band consent
    model.useNonStandardStacks = false // true = using custom stacks in UI

    // Destructure and fall back to empty arrays in case values are missing
    const {
        purposes = [],
        legitimatePurposes = [],
        specialFeatures = [],
        vendors = [],
        legitimateVendors = []
    } = consents

    // Set user consent for purposes (Purposes 1–10 from GVL)
    model.purposeConsents.set(purposes)

    // Set consent for vendors
    model.vendorConsents.set(vendors)

    // Set legitimate interest purposes
    model.purposeLegitimateInterests.set(legitimatePurposes)

    // Set legitimate interest vendors
    model.vendorLegitimateInterests.set(legitimateVendors)

    // Set opt-in for special features (e.g., precise geolocation)
    model.specialFeatureOptins.set(specialFeatures)

    // Encode the model into a TC string
    const encoded = IABTcf.TCString.encode(model, { isForVendors: true })
    console.log('TC String:', encoded)

    // Decode the TC string for debugging/validation
    const decodedModel = IABTcf.TCString.decode(encoded, gvl)
    console.log('Decoded TC Model:', decodedModel)
    cmpApi.update(encoded, false)
    setCookieOnBrowser(encoded, cookieName)
    // Optionally expose the TC string + decoded model on the window for debugging/testing
    window.__TCF_CONSENT__ = {
        tcString: encoded,
        model: decodedModel
    }
}

// Kick off loading
loadGVL()

// document.addEventListener('DOMContentLoaded', () => {
//   loadGVL();
// });
 // IAB TCF Initialization
        const CMPDATA = {
        cmp_id: 2,
        cmp_version: 1
        }
        const CONSENT_URL= 'http://localhost:3000/ext/cookie-banner/api/v1/consent/8c25669844d6/ac321ced-a7db-48eb-bac6-6680b4009845'
        /* eslint-disable */

function createToggle(id, consentType, classes = '', toggle = false, isHidden = false) {
    return `
        <input
            type="checkbox"
            id="${id}"
            class="toggle-switch-privy-cmp-AE1VSVI8T5 iab-consent-privy-cmp-AE1VSVI8T5 ${classes} "
            data-iab-consent="${consentType}"
            ${toggle ? 'checked' : ''}
        >
        <label for="${id}" class="toggle-label-privy-cmp-AE1VSVI8T5 
        ${isHidden ? 'hide-privy-cmp-AE1VSVI8T5' : ''}">
        </label>
    `
}

function submitIabConsent(actionButton) {
    const consentData = {
        purposes: [],
        legitimatePurposes: [],
        specialPurposes: [],
        features: [],
        specialFeatures: [],
        vendors: [],
        legitimateVendors: []
    }

    console.log('actionButton', actionButton)

    if (actionButton === 'all') {
        collectConsentData('.iab-consent-privy-cmp-AE1VSVI8T5', consentData)
    } else if (actionButton === 'save') {
        collectConsentData('.iab-consent-privy-cmp-AE1VSVI8T5:checked', consentData)
    } else if (actionButton === 'necessary') {
        console.log('Only necessary cookies allowed — optional consents skipped.')
    }

    setIABTCFConsent(gvl, consentData)
    toggleBanner('hide')
    console.log('user consent', consentData)
}
function iabtcfConsent() {
    const tc_string = getCookieDetails(cookieName)
    setConsentedBannerId(bannerId)
    fetch(CONSENT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_preference: { 'iabtcf': true },
            sid: getSessionId(),
            data_principal_id: getPrivyDataPrincipalId(),
            tc_string: tc_string,
            submission_type: agreedCategories
        })
    })
        .then((response) => {
            console.log('submit response', response)
            if (!response.ok) {
                throw new Error('Failed to submit consent')
            }
            return response.json()
        })
        .catch((error) => {
            console.error('Error submitting consent:', error)
        })

    location.reload()
}
function collectConsentData(selector, consentData) {
    document.querySelectorAll(selector).forEach((input) => {
        const dataAttribute = input.getAttribute('data-iab-consent')
        const agreedConsent = input.id

        const idParts = agreedConsent.split('-')
        const idOnly = idParts.length > 1 ? parseInt(idParts[1], 10) : null

        if (idOnly !== null && consentData.hasOwnProperty(dataAttribute)) {
            consentData[dataAttribute].push(idOnly)
            console.log('agreed iab consent:', dataAttribute, idOnly)
        }
    })
}

/* eslint-disable-next-line max-params */
function renderFeatureSection(title, description, featuresMap, type, vendorsMap, toggle, isHidden) {
    let sectionHtml = `
    <div class="${type}-section-privy-cmp-AE1VSVI8T5">
      <div class="iab-type-title-privy-cmp-AE1VSVI8T5">${title}</div>
      <div class="iab-type-desc-privy-cmp-AE1VSVI8T5">${description}</div>
  `

    for (const [id, feature] of Object.entries(featuresMap)) {
        const featureId = `${type}-${id}`
        const featureName = feature.name
        const featureDesc = feature.description

        // Collect vendors that declare this feature
        const vendorsHTML = getVendorsLinkedToItem(feature.id, gvl, type)

        sectionHtml += `
      <div class="dropdown-wrapper-privy-cmp-AE1VSVI8T5">
        <div class="dropdown-title-privy-cmp-AE1VSVI8T5">
          <div>
            <div class="dropdown-arrow-privy-cmp-AE1VSVI8T5 rotated-privy-cmp-AE1VSVI8T5">^</div>
            <div class="dropdown-name-privy-cmp-AE1VSVI8T5">${featureName}</div>
          </div>
          ${createToggle(featureId, type, '', toggle, isHidden)}
        </div>
        <div class="iab-dropdown-content-privy-cmp-AE1VSVI8T5 hide-privy-cmp-AE1VSVI8T5">
          <div class="iab-desc-privy-cmp-AE1VSVI8T5">${featureDesc}</div>
          <div class="iab-vendors-privy-cmp-AE1VSVI8T5">
          ${renderVendorChips(vendorsHTML)}
          </div>
        </div>
      </div>
    `
    }

    sectionHtml += '</div>' // close section
    return sectionHtml
}

function renderFeatures(gvl) {
    if (!gvl || typeof gvl !== 'object') {
        console.warn('Invalid GVL passed to renderFeatures')
        return ''
    }

    const features = gvl.features || {}
    const specialFeatures = gvl.specialFeatures || {}
    const vendorsMap = gvl.vendors_ || {}
    // prettier-ignore
    return `
    <div class="sub-tab-privy-cmp-AE1VSVI8T5" data-tab-content="features">
      ${renderFeatureSection(
        'Features',
        'Features are a use of the data that you have already agreed to share with us',
        features,
        'features',
        vendorsMap,
        true,
        true
    )}
      ${renderFeatureSection(
        'Special Features',
        'Special Features are processing purposes that require your explicit consent',
        specialFeatures,
        'specialFeatures',
        vendorsMap,
        true,
        false
    )}
    </div>
  `
}

function renderVendorDisclosureBlocks(fullVendorList, type, purposesMap, specialPurposesMap, toggle) {
    let vendorHtml = ''

    for (const [id, vendor] of Object.entries(fullVendorList)) {
        const purposes = (vendor.purposes || []).map((p) => purposesMap[p]?.name).filter(Boolean)
        const specialPurposes = (vendor.specialPurposes || []).map((sp) => specialPurposesMap[sp]?.name).filter(Boolean)
        const retentionMonths = vendor.dataRetention?.stdRetention
            ? Math.ceil(vendor.dataRetention.stdRetention / 30)
            : 'Unknown'
        const privacyLink = vendor.urls?.find((u) => u.privacy)?.privacy || '#'

        vendorHtml += `
    <div class="dropdown-wrapper-privy-cmp-AE1VSVI8T5">
      <div class="dropdown-title-privy-cmp-AE1VSVI8T5">
        <div>
          <div class="dropdown-arrow-privy-cmp-AE1VSVI8T5 rotated-privy-cmp-AE1VSVI8T5">^</div>
          <div class="dropdown-name-privy-cmp-AE1VSVI8T5">${vendor.name}</div>
        </div>
        ${createToggle(`${type}-${id}`, type, '', toggle)}
      </div>
      <div class="iab-dropdown-content-privy-cmp-AE1VSVI8T5 hide-privy-cmp-AE1VSVI8T5">
        <div class="vendor-privacy-policy-privy-cmp-AE1VSVI8T5">
          Privacy Policy:
          <div class="iab-vendor-privy-cmp-AE1VSVI8T5">
            <div>${vendor.name}</div>
            <a href="${privacyLink}" target="_blank" class="vendor-link-privy-cmp-AE1VSVI8T5" aria-label="Visit vendor site">
              ↗
            </a>
          </div>
        </div>

        <strong>Purposes:</strong>
        <div class="vendor-purposes-box-privy-cmp-AE1VSVI8T5">
        ${renderPurposeSection('Consent Purposes', purposes, retentionMonths)}
        ${renderPurposeSection('Special Purposes', specialPurposes, retentionMonths)}
        </div>
      </div>
          </div>
          `
    }
    return vendorHtml
}

function renderPurposeRow(name, retentionMonths) {
    return `
    <div class="purpose-row-privy-cmp-AE1VSVI8T5">
      <span>${name}</span>
      <span class="retention-privy-cmp-AE1VSVI8T5">${retentionMonths} Month(s)</span>
    </div>`
}

function renderPurposeSection(title, items, retentionMonths) {
    if (!items || items.length === 0) {
        return ''
    }

    return `
    <div class="vendor-purposes-section-privy-cmp-AE1VSVI8T5">
      <div class="vendor-purpose-headline-privy-cmp-AE1VSVI8T5">
        <strong>${title}</strong>
        <strong>Retention</strong>
      </div>
      ${items.map((item) => renderPurposeRow(item, retentionMonths)).join('')}
    </div>`
}

function renderVendorsFromGVL(gvl) {
    const fullVendorList = gvl.vendors_
    const purposesMap = gvl.purposes
    const specialPurposesMap = gvl.specialPurposes
    const legitimateVendorIds = getVendorsWithLegitimateInterest(gvl)
    const legitimateVendorList = getVendorsByIds(gvl, legitimateVendorIds)
    const vendorHtml = renderVendorDisclosureBlocks(fullVendorList, 'vendors', purposesMap, specialPurposesMap, false)
    const legitimateVendorHtml = renderVendorDisclosureBlocks(
        legitimateVendorList,
        'legitimateVendors',
        purposesMap,
        specialPurposesMap,
        true
    )
    const html = ` <div class="sub-tab-privy-cmp-AE1VSVI8T5 sub-tab-purposes-privy-cmp-AE1VSVI8T5 active-privy-cmp-AE1VSVI8T5" data-tab-content="vendors">
        <h2 class="sub-tab-option-privy-cmp-AE1VSVI8T5 vendors-tab-privy-cmp-AE1VSVI8T5" data-tab="user-consent">User Consent</h2>
        <h2 class="sub-tab-option-privy-cmp-AE1VSVI8T5 vendors-tab-privy-cmp-AE1VSVI8T5" data-tab="legitimate-interest">Legitimate Interest</h2>
    </div>
          <div class="subtab-content-privy-cmp-AE1VSVI8T5 userconsent-privy-cmp-AE1VSVI8T5" data-tab="user-consent">
    ${vendorHtml}
    </div>
    <div class="subtab-content-privy-cmp-AE1VSVI8T5 legitimate-interest-privy-cmp-AE1VSVI8T5" data-tab="legitimate-interest">    ${legitimateVendorHtml}
    </div>
    `

    return html
}
function getVendorsWithLegitimateInterest(gvl) {
    return Object.entries(gvl.vendors_)
        .filter(([_, vendor]) => Array.isArray(vendor.legIntPurposes) && vendor.legIntPurposes.length > 0)
        .map(([vendorId]) => parseInt(vendorId, 10))
}

function getVendorsByIds(gvl, allowedIds) {
    const idSet = new Set(allowedIds)
    const filtered = {}
    const allVendors = gvl.vendors_ || {}

    for (const id in allVendors) {
        if (idSet.has(parseInt(id, 10))) {
            filtered[id] = allVendors[id]
        }
    }
    return filtered
}

function getLegitimateInterestPurposeIdsFromVendors(gvl) {
    const vendors = gvl.vendors_ || {}
    const purposeIdSet = new Set()

    Object.values(vendors).forEach((vendor) => {
        const purposeIds = vendor.legIntPurposes || []
        purposeIds.forEach((purposeId) => {
            purposeIdSet.add(purposeId)
        })
    })

    return Array.from(purposeIdSet)
}

function renderPurposes(gvl) {
    if (!gvl || typeof gvl !== 'object') {
        console.warn('Invalid GVL passed to renderPurposes')
        return ''
    }
    const purposes = gvl.purposes || {}
    const legitimatePurposeIds = getLegitimateInterestPurposeIdsFromVendors(gvl)
    const specialPurposes = gvl.specialPurposes || {}

    const legitimatePurposes = legitimatePurposeIds.map((id) => purposes[id]).filter(Boolean) // remove undefined ones
    /* eslint-disable indent */
    return `
        <div class="sub-tab-privy-cmp-AE1VSVI8T5 sub-tab-purposes-privy-cmp-AE1VSVI8T5 active-privy-cmp-AE1VSVI8T5" data-tab-content="purposes">
            <h2 class="sub-tab-option-privy-cmp-AE1VSVI8T5 purposes-tab-privy-cmp-AE1VSVI8T5" data-tab="user-consent">User Consent</h2>
            <h2 class="sub-tab-option-privy-cmp-AE1VSVI8T5 purposes-tab-privy-cmp-AE1VSVI8T5" data-tab="legitimate-interest">Legitimate Interest</h2>
        </div>
        <div class="subtab-content-privy-cmp-AE1VSVI8T5 userconsent-privy-cmp-AE1VSVI8T5" data-tab="user-consent">
        ${Object.values(purposes)
            .map((purpose) => renderPurposeDropdown(purpose, 'purposes', gvl, false, false))
            .join('')}
        </div>
        <div class="subtab-content-privy-cmp-AE1VSVI8T5 legitimate-interest-privy-cmp-AE1VSVI8T5" data-tab="legitimate-interest">
            ${legitimatePurposes
                .map((purpose) => renderPurposeDropdown(purpose, 'legitimatePurposes', gvl, true, false))
                .join('')}
            <h3 class="iab-type-title-privy-cmp-AE1VSVI8T5"> Special Purposes </h3>
            ${Object.values(specialPurposes)
                .map((specialPurpose) => renderPurposeDropdown(specialPurpose, 'specialPurposes', gvl, true, true))
                .join('')}
        </div>
    `
    /* eslint-enable indent */
}

function renderIllustrations(illustrations = []) {
    if (!illustrations.length) {
        return ''
    }

    return `
    <div>For Example:</div>
    <ul class="iab-illustrations-privy-cmp-AE1VSVI8T5">
      ${illustrations.map((ill) => `<li>${ill}</li>`).join('')}
    </ul>`
}

function renderPurposeDropdown(purpose, type, gvl, toggle = false, isHidden) {
    const purposeId = `${type}-${purpose.id}`
    const vendorsHTML = getVendorsLinkedToItem(purpose.id, gvl, type)

    return `
    <div class="dropdown-wrapper-privy-cmp-AE1VSVI8T5"> 
      <div class="dropdown-title-privy-cmp-AE1VSVI8T5"> 
        <div>
          <div class="dropdown-arrow-privy-cmp-AE1VSVI8T5 rotated-privy-cmp-AE1VSVI8T5"> ^ </div>
          <div class="dropdown-name-privy-cmp-AE1VSVI8T5">${purpose.name}</div>
        </div>
        ${createToggle(purposeId, type, '', toggle, isHidden)}
      </div>
      <div class="iab-dropdown-content-privy-cmp-AE1VSVI8T5 hide-privy-cmp-AE1VSVI8T5">
        <div class="iab-desc-privy-cmp-AE1VSVI8T5">${purpose.description}</div>
        ${renderIllustrations(purpose.illustrations)}
        <div class="iab-vendors-privy-cmp-AE1VSVI8T5">
          ${renderVendorChips(vendorsHTML)}
        </div>
      </div>
    </div>
  `
}
function initializeTabs(gvl) {
    const contentContainer = document.getElementById('tab-content-privy-cmp-AE1VSVI8T5')
    if (contentContainer) {
        contentContainer.innerHTML =
            `<div data-tab="purposes">${renderPurposes(gvl)}</div>` +
            `<div data-tab="features" class="hide-privy-cmp-AE1VSVI8T5">${renderFeatures(gvl)}</div>` +
            `<div data-tab="vendors" class="hide-privy-cmp-AE1VSVI8T5">${renderVendorsFromGVL(gvl)}</div>`

        // Initialize functionality after content is added
        activateSubTabs('[data-tab="purposes"]', 'purposes-tab-privy-cmp-AE1VSVI8T5')
        activateSubTabs('[data-tab="vendors"]', 'vendors-tab-privy-cmp-AE1VSVI8T5')
        bindDropdowns()
    }
}

function activateSubTabs(containerSelector, subTabClass) {
    const subTabs = document.querySelectorAll(`${containerSelector} .${subTabClass}`)
    const allContents = document.querySelectorAll(`${containerSelector} .subtab-content-privy-cmp-AE1VSVI8T5`)

    subTabs.forEach((subTab) => {
        subTab.addEventListener('click', () => {
            // Visually activate clicked sub-tab
            subTabs.forEach((t) => t.classList.remove('active-privy-cmp-AE1VSVI8T5'))
            subTab.classList.add('active-privy-cmp-AE1VSVI8T5')

            // Show related content section
            const tabKey = subTab.getAttribute('data-tab')
            allContents.forEach((content) => {
                if (content.getAttribute('data-tab') === tabKey) {
                    content.classList.add('active-privy-cmp-AE1VSVI8T5')
                } else {
                    content.classList.remove('active-privy-cmp-AE1VSVI8T5')
                }
            })
        })
    })

    // Optionally activate the first sub-tab by default
    subTabs[0]?.click()
}

function bindDropdowns() {
    document.querySelectorAll('.dropdown-title-privy-cmp-AE1VSVI8T5').forEach((title) => {
        title.addEventListener('click', () => {
            const parent = title.closest('.dropdown-wrapper-privy-cmp-AE1VSVI8T5')
            const content = parent.querySelector('.iab-dropdown-content-privy-cmp-AE1VSVI8T5')
            content.classList.toggle('hide-privy-cmp-AE1VSVI8T5')
            const dropdownClass = parent.querySelector('.dropdown-arrow-privy-cmp-AE1VSVI8T5')
            dropdownClass.classList.toggle('rotated-privy-cmp-AE1VSVI8T5')
        })
    })
}

function getVendorsLinkedToItem(itemId, gvl, type) {
    if (!gvl || !gvl.vendors || typeof gvl.vendors !== 'object') return []

    // Map the passed type to the actual vendor object key
    const typeMap = {
        purposes: 'purposes',
        legitimatePurposes: 'legIntPurposes',
        specialPurposes: 'specialPurposes',
        features: 'features',
        specialFeatures: 'specialFeatures'
    }

    const vendorKey = typeMap[type]
    if (!vendorKey) return []

    const vendors = Object.values(gvl.vendors)
    return vendors.filter((vendor) => Array.isArray(vendor[vendorKey]) && vendor[vendorKey].includes(itemId))
}

function renderVendorChips(vendors) {
    if (!vendors || vendors.length === 0) {
        return `<div class="iab-vendor-privy-cmp-AE1VSVI8T5">
        <div>No vendors listed</div></div>`
    }

    return vendors
        .map(
            (vendor) => `
        <div class="iab-vendor-privy-cmp-AE1VSVI8T5">
          <div>${vendor.name}</div>
          <a href="${vendor.urls?.[0]?.privacy || '#'}" target="_blank"
              class="vendor-link-privy-cmp-AE1VSVI8T5" aria-label="Visit vendor site">
            ↗
          </a>
        </div>`
        )
        .join('')
}

function setTogglesBasedIabConsent(consentData) {
    try {
        document.querySelectorAll('.iab-consent-privy-cmp-AE1VSVI8T5').forEach((input) => {
            const dataAttribute = input.getAttribute('data-iab-consent')
            const idParts = input.id.split('-')
            const id = idParts.length > 1 ? parseInt(idParts[1], 10) : null
            const toggle = input.nextElementSibling

            if (consentData[dataAttribute] && consentData[dataAttribute].includes(id)) {
                input.checked = true
                if (toggle) {
                    toggle.classList.add('active-privy-cmp-AE1VSVI8T5')
                }
            } else {
                input.checked = false
                if (toggle) {
                    toggle.classList.remove('active-privy-cmp-AE1VSVI8T5')
                }
            }
        })
    } catch (error) {
        console.error('Error displaying stored IAB consent!', error)
    }
}

function tabNavigationIABTCF() {
    function renderTabs(tab) {
        const allTabs = document.querySelectorAll('.tab-content-privy-cmp-AE1VSVI8T5 > div')
        allTabs.forEach((content) => {
            if (content.getAttribute('data-tab') === tab) {
                content.classList.remove('hide-privy-cmp-AE1VSVI8T5')
            } else {
                content.classList.add('hide-privy-cmp-AE1VSVI8T5')
            }
        })
    }

    // Set up tab click handlers
    const tabs = document.querySelectorAll('.tab-privy-cmp-AE1VSVI8T5')
    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Update active tab styling
            tabs.forEach((t) => t.classList.remove('active-privy-cmp-AE1VSVI8T5'))
            tab.classList.add('active-privy-cmp-AE1VSVI8T5')

            // Toggle visibility of tab content
            const selectedTab = tab.getAttribute('data-tab')
            const allTabContent = document.querySelectorAll('.tab-content-privy-cmp-AE1VSVI8T5 > div')
            allTabContent.forEach((content) => {
                if (content.getAttribute('data-tab') === selectedTab) {
                    content.classList.remove('hide-privy-cmp-AE1VSVI8T5')
                } else {
                    content.classList.add('hide-privy-cmp-AE1VSVI8T5')
                }
            })
        })
    })
}

function setupBannerBasedOnConsentIABTCF(dataFiduciaryId, bannerId) {
    const existingConsent = getCookieDetails(cookieName, '')
    try {
        const decodedModel = IABTcf.TCString.decode(existingConsent, gvl)
        console.log('decodedModel', decodedModel)
        // console.log('Purpose Consents:', decodedModel.purposeConsents.get())
        // console.log('Vendor Consents:', decodedModel.vendorConsents.get())
        // console.log('Legitimate Purpose Consents:', decodedModel.purposeLegitimateInterests.get())
        // console.log('Legitimate Vendor Consents:', decodedModel.vendorLegitimateInterests.get())
        // console.log('Special Feature Opt-ins:', decodedModel.specialFeatureOptins.get())
        const consentData = {
            purposes: Array.from(decodedModel.purposeConsents.set_),
            legitimatePurposes: Array.from(decodedModel.purposeLegitimateInterests.set_),
            specialFeatures: Array.from(decodedModel.specialFeatureOptins.set_),
            vendors: Array.from(decodedModel.vendorConsents.set_),
            legitimateVendors: Array.from(decodedModel.vendorLegitimateInterests.set_)
        }

        if (existingConsent && decodedModel) {
            setTogglesBasedIabConsent(consentData)
            toggleBanner('hide')
        } else {
            toggleBanner('show')
            sendEventDetails(dataFiduciaryId, bannerId, 'BannerView')
        }
    } catch (error) {
        console.warn('Error in Decoding tcstring')
        toggleBanner('show')
    }
}

        
        const template = {"bannerType":"box","buttonColor":"#214698","buttonsText":{"acceptAll":"Accept All","moreSettings":"More Settings","allowNecessary":"Allow Only Necessary","savePreferences":"Save My Preferences"},"contentMobile":{"cookieBannerNotice":"This website stores cookies on your computer device. These cookies are used to enhance your browser experience, for analytics on how our website is used, and to assist in our marketing and promotional efforts.","preferenceManagerNotice":"IDfy's website may request cookies to be set on your device. We use cookies to identify when you visit our sites, to understand your interactions, and to enhance and personalize your experience. Cookies also support social media features and tailor your engagement with IDfy, including delivering more relevant advertisements. You can review the different category headings to learn more and adjust your cookie preferences anytime. Please keep in mind that your choices may affect your experience on our IDfy sites and the quality of services we can provide. Blocking certain types of cookies might affect the functionality and service offerings made available to you."},"contentDesktop":{"cookieBannerNotice":"This website stores cookies on your computer device. These cookies are used to enhance your browser experience, for analytics on how our website is used, and to assist in our marketing and promotional efforts.","preferenceManagerNotice":"IDfy's website may request cookies to be set on your device. We use cookies to identify when you visit our sites, to understand your interactions, and to enhance and personalize your experience. Cookies also support social media features and tailor your engagement with IDfy, including delivering more relevant advertisements. You can review the different category headings to learn more and adjust your cookie preferences anytime. Please keep in mind that your choices may affect your experience on our IDfy sites and the quality of services we can provide. Blocking certain types of cookies might affect the functionality and service offerings made available to you."},"hoverTextColor":"#ffffff","positionMobile":"bottom","buttonTextColor":"#ffffff","positionDesktop":"bottom-right","hoverButtonColor":"#214699","preferenceManagerHorizontalPosition":"centre"};
        const DEFAULT_COOKIE_CONSENT = {
            NECESSARY: true,
            FUNCTIONAL: false,
            ANALYTICS: false,
            MARKETING: false
            // OTHER: false
        }
        const bannerSessionId = getSessionId()
        function sendEventDetails(dataFiduciaryId, bannerId, type) {
                    fetch(`http://localhost:3000/ext/cookie-banner/api/v1/user-interaction/events/8c25669844d6/ac321ced-a7db-48eb-bac6-6680b4009845`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            sid: getSessionId(),
                            user_event: type,
                            data_principal_id: getPrivyDataPrincipalId()
                        })
                    }
                )
                .then((response) => {
                    console.log('submit response', response)
                    if (response.status === 204) {
                        console.log('Event submitted successfully')
                        return null
                    }
                })
                .catch((error) => {
                    console.error('Error submitting event:', error)
                })
            }
                 //Common
        /* global DEFAULT_COOKIE_CONSENT */
//TODO: Refactor the function toggleBanner

// eslint-disable-next-line no-unused-vars
function toggleBanner(action) {
    const bannerHome = document.getElementById('banner-home-privy-cmp-AE1VSVI8T5')
    const customizeScreen = document.getElementById('customize-screen-privy-cmp-AE1VSVI8T5')
    const reconsentButton = document.getElementById('preference-privy-cmp')
    if (action === 'show') {
        if (bannerHome) {
            bannerHome.style.display = ''
        }
        if (customizeScreen) {
            customizeScreen.style.display = 'none'
        }
        if (reconsentButton) {
            reconsentButton.style.display = 'none'
        }
    } else if (action === 'hide') {
        if (bannerHome) {
            bannerHome.style.display = 'none'
        }
        if (customizeScreen) {
            customizeScreen.style.display = 'none'
        }
        if (reconsentButton) {
            reconsentButton.style.display = 'block'
        }
    } else if (action === 'preference') {
        if (bannerHome) {
            bannerHome.style.display = 'none'
        }
        if (customizeScreen) {
            customizeScreen.style.display = 'block'
        }
        if (reconsentButton) {
            reconsentButton.style.display = 'none'
        }
    }
}

// eslint-disable-next-line no-unused-vars
function getPrivyDataPrincipalId() {
    let privyDataPrincipalId = localStorage.getItem('privyDataPrincipalId')
    if (!privyDataPrincipalId) {
        privyDataPrincipalId = crypto.randomUUID()
        localStorage.setItem('privyDataPrincipalId', privyDataPrincipalId)
    }
    return privyDataPrincipalId
}

// eslint-disable-next-line no-unused-vars
function getSessionId() {
    let sessionId = sessionStorage.getItem('privySessionId')
    if (!sessionId) {
        sessionId = crypto.randomUUID() // Generate a new session ID
        sessionStorage.setItem('privySessionId', sessionId)
    }
    return sessionId
}

// eslint-disable-next-line no-unused-vars
function setCookieOnBrowser(cookieConsent, cookieName) {
    console.log('setCookieOnBrowser', cookieConsent)
    const consentValue = typeof cookieConsent === 'string' ? cookieConsent : JSON.stringify(cookieConsent)
    document.cookie = `${cookieName}=${consentValue}; path=/`
    localStorage.setItem(cookieName, consentValue)
    // TODO: Remove this shopify integration
    // shopifyConsent(cookieConsent)
}

// eslint-disable-next-line no-unused-vars
function getConsentedBannerId() {
    const bannerId = localStorage.getItem('privyConsentedBannerId')
    return bannerId
}
// eslint-disable-next-line no-unused-vars
function addReconsentButton() {
    const preferenceButton = document.createElement('button')
    preferenceButton.id = 'preference-privy-cmp'
    preferenceButton.className = 'reconsent-button-privy-cmp-AE1VSVI8T5'
    preferenceButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/></svg>'
    document.body.appendChild(preferenceButton)
}
// eslint-disable-next-line no-unused-vars
function setConsentedBannerId(bannerId) {
    localStorage.setItem('privyConsentedBannerId', bannerId)
}
// eslint-disable-next-line no-unused-vars
function parsedConsentData(source) {
    try {
        if (typeof source === 'string') {
            return JSON.parse(source)
        }
        if (typeof source === 'object') {
            return source
        }
        return null
    } catch (error) {
        console.error('Error parsing consent data:', error)
        return null
    }
}
// eslint-disable-next-line no-unused-vars
function getCookieDetails(cookieName, defaultConsent = DEFAULT_COOKIE_CONSENT) {
    const cookieValue = document.cookie.split('; ').find((row) => row.startsWith(`${cookieName}=`))
    if (cookieValue) {
        const cookie = cookieValue.split('=')
        return cookie[1]
    }
    const localStorageValue = localStorage.getItem(cookieName)
    if (localStorageValue) {
        return localStorageValue
    }
    console.log('No cookie found on browser defaultConsent set')
    return defaultConsent
}
// eslint-disable-next-line no-unused-vars
function toggleConsentUIState() {
    const closeButton = document.querySelector('.close-btn-privy-cmp-AE1VSVI8T5')
    const customizeScreen = document.getElementById('customize-screen-privy-cmp-AE1VSVI8T5')
    const bannerHome = document.getElementById('banner-home-privy-cmp-AE1VSVI8T5')
    const customizeButton = document.getElementById('customize-btn-privy-cmp-AE1VSVI8T5')

    closeButton.addEventListener('click', function () {
        customizeScreen.style.display = 'none'
        bannerHome.style.display = 'block'
    })

    customizeButton.addEventListener('click', function () {
        customizeScreen.style.display = 'block'
        bannerHome.style.display = 'none'
    })
}
 //Common 
        
    const categoryDescriptions = {"necessary":"Essential cookies are crucial for the delivery of services, applications, or resources you request. They enable the website to function properly by managing actions such as loading visNecessual elements, accessing resources, or user sign-ins and sign-outs. Essential cookies also ensure the service's security and efficiency by enabling features like authentication and load balancing.","performance":"These cookies collect data on how visitors interact with our website, allowing us to measure and improve our site's and software's effectiveness. They help us track visits and traffic sources, optimizing our website's performance. Without these cookies, we lose the ability to monitor our site's engagement and enhance user experience.","functional":"Set by us or third-party providers, functional cookies add extra features and enhance our website's functionality not directly necessary for the service you've requested. They enable convenience features such as pre-filled text fields, live chat support, and optional forms, improving your browsing experience with services like single sign-on (SSO).","marketing":"Our advertising partners deploy these cookies to tailor advertising to your interests, based on your browsing behavior and preferences. They track your online activity to build a profile for customized advertising, ensuring the ads you encounter on other sites are aligned with your interests.","analytics":"Analytics cookies are used to gather information on website usage, helping us understand visitor behavior. They track user interactions, providing insights that enable us to enhance the website's user experience and functionality. These cookies do not identify you personally but offer aggregated data to improve site performance.","other":"These cookies do not fall into standard categories but serve various purposes. They may enhance specific website features or support experimental or temporary services, and are typically associated with minor functions or specialized needs. Without these, the website's core functionality remains unaffected, but certain experiences or experiments may be impacted."}
    const submitConsentHandler = submitIabConsent;
    
    function createBanner(categorizedCookies, template) {
        let banner = `
        
    <div class="idfy-${template.bannerType}-privy-cmp-AE1VSVI8T5" id="banner-home-privy-cmp-AE1VSVI8T5">
        <div class="banner-content-privy-cmp-AE1VSVI8T5">
            <h2 class="banner-heading-privy-cmp-AE1VSVI8T5">Cookie Notice</h2>
            <div class="${template.bannerType}-inner-privy-cmp-AE1VSVI8T5">
                <p class="description-privy-cmp-AE1VSVI8T5 ${template.bannerType}-desc-privy-cmp-AE1VSVI8T5" >${template.contentDesktop.cookieBannerNotice}</p>
                <div class="${template.bannerType}-button-container-privy-cmp-AE1VSVI8T5">
                    <button onclick="submitConsentHandler('all')" id="allow-btn-privy-cmp-AE1VSVI8T5" class="${template.bannerType}-button-privy-cmp-AE1VSVI8T5">${template.buttonsText.acceptAll}</button>
                    <button onclick="submitConsentHandler('necessary')" class="${template.bannerType}-button-privy-cmp-AE1VSVI8T5">${template.buttonsText.allowNecessary}</button>
                    <button id="customize-btn-privy-cmp-AE1VSVI8T5" class="${template.bannerType}-button-privy-cmp-AE1VSVI8T5">${template.buttonsText.moreSettings}</button>
                </div>
            </div>
        </div>
        <div class="powered-privy-cmp-AE1VSVI8T5" style="border-radius:0px 0px 10px 10px;">
        Powered by <span><a href="https://www.privyone.com/" target="_blank">PRIVY</a></span>
        </div>
    </div>
    
        <div id="customize-screen-privy-cmp-AE1VSVI8T5">
            <div class="customize-settings-screen-privy-cmp-AE1VSVI8T5 ${template.preferenceManagerHorizontalPosition}">
                <div>
                    <div class="close-btn-privy-cmp-AE1VSVI8T5">
                        <h2 class="box-heading-privy-cmp-AE1VSVI8T5">Privacy Preference Center</h2>
                        <div class="close-button-privy-cmp-AE1VSVI8T5">×</div>
                    </div>
                    
    <div class="content-privy-cmp-AE1VSVI8T5">
        <p class="box-description-privy-cmp-AE1VSVI8T5">${template.contentDesktop.preferenceManagerNotice}</p>
        <div class="consent-tabs-privy-cmp-AE1VSVI8T5">
            <div class="consent-tabs-inside-privy-cmp-AE1VSVI8T5">
                <h2 class="tab-privy-cmp-AE1VSVI8T5 active-privy-cmp-AE1VSVI8T5" data-tab="purposes">Purposes</h2>
                <h2 class="tab-privy-cmp-AE1VSVI8T5" data-tab="features">Features</h2>
                <h2 class="tab-privy-cmp-AE1VSVI8T5" data-tab="vendors">Vendors</h2>
            </div>
            </div>
        <div id="tab-content-privy-cmp-AE1VSVI8T5" class="tab-content-privy-cmp-AE1VSVI8T5"></div>
    </div>
    
                </div>
    
                <div class="bottom-panel-privy-cmp-AE1VSVI8T5">
                    
    <div class="iab-bottom-panel-privy-cmp-AE1VSVI8T5">
        <div class="iab-bottom-panel-text-privy-cmp-AE1VSVI8T5">
            You can change the above settings for this browser at any time by clicking the privacy settings link in the footer of the page.
        </div>
        <div class="iab-bottom-panel-buttons-privy-cmp-AE1VSVI8T5">
            <button class="iab-bottom-panel-button-privy-cmp-AE1VSVI8T5" onclick="submitIabConsent('save')">Save</button>
            <button class="iab-bottom-panel-button-privy-cmp-AE1VSVI8T5" onclick="submitIabConsent('necessary')">Reject All</button>
            <button class="iab-bottom-panel-button-privy-cmp-AE1VSVI8T5" onclick="submitIabConsent('all')">Accept All</button>
        </div>
    </div>

                </div>
            </div>
        </div>
        `;
        return banner;
    }
     //Common 
        
     function showBanner(){   
        let consentCookie = parsedConsentData(getCookieDetails(cookieName))
        const consentedBannerId = getConsentedBannerId()
        addReconsentButton()
    
    const consentButtonDiv = document.createElement('div')
    consentButtonDiv.className = 'consent-button-privy-cmp-AE1VSVI8T5'
    document.body.appendChild(consentButtonDiv)
    const banner = createBanner(categorizedCookies, template)
    const bannerContainer = document.createElement('div')
    bannerContainer.className = 'banner-container-privy-cmp-AE1VSVI8T5'
    bannerContainer.innerHTML = banner
    document.body.appendChild(bannerContainer)

    let horizontal = 'flex-end'
    let leftRight = 'right'
    let vertical = 'bottom'

    if (template.positionDesktop.includes('left')) {
        horizontal = 'flex-start'
        leftRight = 'left'
    }
    if (template.positionDesktop.includes('top')) {
        vertical = 'top'
    }

    const styleTag = document.createElement('style')
    styleTag.innerHTML = `
        :root {
        --privy-cmp-primary-color:${template.buttonColor};
        --privy-cmp-button-text-color:${template.buttonTextColor};
        --privy-cmp-button-hover-color:${template.hoverButtonColor};
        --privy-cmp-text-hover-color:${template.hoverTextColor};
        --privy-cmp-font-name:${template.fontName};
        }

        .banner-container-privy-cmp-AE1VSVI8T5{
            margin: 5px;
        }
        
        @keyframes glideBanner {
            0% {
            transform: translateY(100%);
            }
            100% {
            transform: translateY(0%);
            }
        }
        .banner-home-privy-cmp-AE1VSVI8T5 {
            display:none;
        }
        .idfy-box-privy-cmp-AE1VSVI8T5 {
            display: flex;
            flex-direction:column;
            background-color: white;
            justify-content: ${horizontal};
            position: fixed;
            ${vertical}: 20px;
            ${leftRight}: 10px;
            width: 53%;
            max-width: 70em;
            border-radius: 10px;
            font-family: var(--privy-cmp-font-name) !important;
            -webkit-font-smoothing: antialiased;
            z-index: 2147483647 !important; 
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            animation: glideBanner 1.5s ease-in-out forwards;
        }

        .idfy-banner-privy-cmp-AE1VSVI8T5 {
            display: flex;
            flex-direction:column;
            background-color: white;
            justify-content: flex-end;
            position: fixed;
            ${vertical}: 0px;
            right: 0px;
            left: 0px;
            width: 100%;
            border-radius: 10px;
            font-family: var(--privy-cmp-font-name) !important;
            -webkit-font-smoothing: antialiased;
            z-index: 2147483647 !important; 
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            animation: glideBanner 1.5s ease-in-out forwards;
        }

        .banner-content-privy-cmp-AE1VSVI8T5 {
            overflow-y:auto;
            padding: 20px !important;
            transition: 2s;
        }

        .banner-heading-privy-cmp-AE1VSVI8T5 {
            font-size: 18px !important;
            margin: 0px !important;
            font-weight:bold !important;
            line-height:1 !important;
            padding:0px !important;
            color:#000000 !important;
        }

        .banner-inner-privy-cmp-AE1VSVI8T5 {
            display: flex !important;
            align-items: center !important;
        }

        .description-privy-cmp-AE1VSVI8T5 {
            font-size: 14px !important;
            color: #484E56;
            line-height: 1.3 !important;
            margin:14px 0px 14px 0px !important;
            padding:0px!important;
            color:#484E56 !important;
        }

        .banner-desc-privy-cmp-AE1VSVI8T5{
            flex:7 !important;
            margin:10px 10px 10px 0px !important;
            font-weight:normal !important;
        }

        .banner-button-container-privy-cmp-AE1VSVI8T5,.box-button-container-privy-cmp-AE1VSVI8T5 {
            text-align: right!important;
            margin-top: 10px!important;
        }

        .box-button-privy-cmp-AE1VSVI8T5,.banner-button-privy-cmp-AE1VSVI8T5{
            margin-right: 2.5px !important;
            color: var(--privy-cmp-primary-color) !important;
            padding: 9px 20px !important;
            border: 1px solid var(--privy-cmp-primary-color) !important;
            border-radius: 8px !important;
            background: white !important;
            display:inline-block !important;
            line-height: 1!important;
            font-weight: Normal!important;
            font-size: 12px !important;
            font-family: var(--privy-cmp-font-name) !important;
            -webkit-font-smoothing: antialiased;
        }

        #allow-btn-privy-cmp-AE1VSVI8T5 {
            background-color:var(--privy-cmp-primary-color) !important;
            color: var(--privy-cmp-button-text-color)!important;
            border: 1px solid var(--privy-cmp-primary-color)!important;
        }

        /* custmise banner screen css */
        #customize-screen-privy-cmp-AE1VSVI8T5 {
            display: none;
        }

        .customize-settings-screen-privy-cmp-AE1VSVI8T5 {
            width: 40%;
            height: 100%;
            min-width: 290px;
            max-width: 30% ;
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
            position: fixed;
            z-index: 2147483647 !important;
            top: 0;
            font-family: var(--privy-cmp-font-name);
            -webkit-font-smoothing: antialiased;
            overflow: scroll;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 10px;
        }

        .left{
            left: 0;
        }

        .right{
            right: 0;
        }

        .centre{
            height: 65%;
            min-width: 56%;
            left: 22%;
            top: 15%;
        }

        .content-privy-cmp-AE1VSVI8T5 {
            padding: 0px 15px 20px;
        }

        .close-btn-privy-cmp-AE1VSVI8T5 {
            display: flex;
            justify-content: space-between;
            border-bottom: 0.5px solid #B2B5B8;
            padding: 10px 20px; 
            position: sticky;
            top: 0;
            background-color: #fff;
            z-index:2147483647 !important;
            align-items:center;
        }

        .close-button-privy-cmp-AE1VSVI8T5 {
            color: #7D8187 !important;
            font-size: 20px !important;
            background-color: transparent !important;
            border: none !important;
            cursor: pointer;
            display:inline-block !important;
            padding: 0 !important;
        }

        .box-heading-privy-cmp-AE1VSVI8T5 {
            font-size: 18px !important;
            margin: 0px !important;
            color: #131A25 !important;
            font-weight:bold !important;
            line-height:1 !important;
            padding:0px !important;
        }

        .box-description-privy-cmp-AE1VSVI8T5 {
            font-size: 14px !important;
            margin: 14px 0px!important;
            color: #484E56 !important;
            line-height: 1.35 !important;
            padding: 0px !important;
        }

        .categories-privy-cmp-AE1VSVI8T5 {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
        }

        .category-privy-cmp-AE1VSVI8T5 {
            margin-bottom: 10px;
        }

        .category-header-privy-cmp-AE1VSVI8T5 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #B2B5B8;
            border-radius: 10px;
            padding: 10px;
            background-color: #FAFAFB;
        }

        .category-privy-cmp-AE1VSVI8T5 label {
            font-size: 14px !important;
            line-height:1 !important;
            margin: 0px !important;
            padding: 0px !important;
            color: #000000 !important;
            display: inline !important;
            font-weight: 400 !important;
        }

        .toggle-switch-privy-cmp-AE1VSVI8T5 {
            display: none !important;
        }

        .toggle-label-privy-cmp-AE1VSVI8T5 {
            display: inline-block !important;
            width: 40px !important;
            height: 20px !important;
            background-color: #ccc;
            border-radius: 10px;
            position: relative !important;
            cursor: pointer;
        }

        .toggle-label-privy-cmp-AE1VSVI8T5::after {
            content: '';
            width: 18px;
            height: 18px;
            background-color: white;
            border-radius: 50%;
            position: absolute !important;
            top: 1px;
            left: 1px;
            transition: 0.3s;
        }

        .toggle-switch-privy-cmp-AE1VSVI8T5:checked+.toggle-label-privy-cmp-AE1VSVI8T5 {
            background-color: var(--privy-cmp-primary-color);
        }

        .toggle-switch-privy-cmp-AE1VSVI8T5:checked+.toggle-label-privy-cmp-AE1VSVI8T5::after {
            transform: translateX(20px);
        }

        .toggle-label-privy-cmp-AE1VSVI8T5.disabled {
            background-color: #ccc; 
            opacity: 0.7; 
            cursor: not-allowed; 
        }

        .toggle-label-privy-cmp-AE1VSVI8T5.disabled::after {
            background-color: #fff; 
        }

        .dropdown-arrow-privy-cmp-AE1VSVI8T5 {
            margin-right: 10px !important;
            transform: scale(2.5, 2) translate(0, 2px);
            background-color: transparent !important;
            border: none !important;
            align-items: baseline;
            font-family: 'Courier New', Courier, monospace !important;
            transition: transform 0.3s ease !important;
            display:inline-block !important;
            line-height: 1!important;
            font-weight: 100!important;
            padding: 1px 6px !important;
            font-size:13.3px !important;
            color: #000000 !important;
        }

        .rotated-privy-cmp-AE1VSVI8T5 {
            transform: scale(2.5, 2) translate(0, -3px) rotate(180deg);
            transition: transform 0.3s ease;
        }

        .dropdown-content-privy-cmp-AE1VSVI8T5 {
            background-color: #F3F3F4;
            border-radius: 10px;
        }
            
        .dropdown-content-inside-privy-cmp-AE1VSVI8T5 {
            display: none;
            padding: 20px;
        }

        .category-description-privy-cmp-AE1VSVI8T5 {
            font-size: 11px !important;
            color: #131A25 !important;
            line-height: 15px !important;
            margin:0px !important;
            padding: 0px !important;
        }

        .view-cookies-privy-cmp-AE1VSVI8T5 {
            font-size: 11px !important;
            color: #214698 !important;
            margin-top: 10px !important;
            cursor: pointer;
        }

        .show-cookies-privy-cmp-AE1VSVI8T5 {
            max-height: 170px !important;
            overflow: scroll !important;
        }
        .show-cookies-privy-cmp-AE1VSVI8T5::-webkit-scrollbar {
            display: none;
        }

        .all-cookies-privy-cmp-AE1VSVI8T5 {
            display: none;
            background-color: #F3F3F4;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            border-radius: 0 0 10px 10px;
            padding: 2px 10px 9px 10px;
            color: #131A25;
            font-size: 11px;
        }

        .cookie-privy-cmp-AE1VSVI8T5 {
            font-size: 11px !important;
            background-color: #E2E2E2;
            padding: 8px 18px !important;
            margin-top: 6px !important;
            border-radius: 12px;
            overflow: scroll;
        }
        .cookie-privy-cmp-AE1VSVI8T5::-webkit-scrollbar {
            display: none;
        }

        .cookie-name-privy-cmp-AE1VSVI8T5,
        .platform-privy-cmp-AE1VSVI8T5 {
            margin: 2px 0px !important;
            font-size: 11px !important;
            line-height: 1 !important;
            color: #131A25 !important;
            padding: 0px !important;
        }

        .bottom-panel-privy-cmp-AE1VSVI8T5 {
            position: sticky;
            bottom: 0;
            width: 100%;
        }

        .preference-button-privy-cmp-AE1VSVI8T5 {
            border-top: 0.5px solid #B2B5B8;
            padding: 10px;
            text-align: center;
            background-color: #fff;
            display:flex;
            justify-content: space-around;
            flex-direction:row;
        }

        .preference-button-privy-cmp-AE1VSVI8T5 button {
            padding: 10px 18px !important;
            // width:45% !important;
            font-size: 12px !important;
            border-radius: 8px !important;
            margin: 3px !important;
            // display:inline-block !important;
            line-height: 1!important;
            font-weight: Normal!important;
            font-family: var(--privy-cmp-font-name) !important;
            -webkit-font-smoothing: antialiased;
        }

        .button1-privy-cmp-AE1VSVI8T5 {
            color: var(--privy-cmp-button-text-color) !important;
            border: 1px solid var(--privy-cmp-primary-color) !important;
            background-color: var(--privy-cmp-primary-color);
            transition: 0.3s;
            flex:1;
        }

        .button2-privy-cmp-AE1VSVI8T5 {
            color: var(--privy-cmp-primary-color) !important;
            border: 1px solid var(--privy-cmp-primary-color) !important;
            background-color: #fff;
            transition: 0.3s;
            flex:1;
        }

        .button2-privy-cmp-AE1VSVI8T5:hover,
        .button1-privy-cmp-AE1VSVI8T5:hover,
        .classic-button-privy-cmp-AE1VSVI8T5:hover,.banner-button-privy-cmp-AE1VSVI8T5:hover,.box-button-privy-cmp-AE1VSVI8T5:hover,#allow-btn-privy-cmp-AE1VSVI8T5:hover {
            background-color: var(--privy-cmp-button-hover-color) !important;
            color: var(--privy-cmp-text-hover-color) !important;
            transition: 0.3s;
            border: 1px solid var(--privy-cmp-button-hover-color) !important;
        }

        .powered-privy-cmp-AE1VSVI8T5 {
            text-align: right;
            background-color: #F3F3F4;
            font-size: 10px !important;
            padding: 1px 10px !important;
            margin:0px !important;
            color: #7D8187 !important;
            font-weight:normal !important;
            line-height:1 !important;
        }

        .powered-privy-cmp-AE1VSVI8T5 a {
            color: #1C43B9 !important;
            font-weight: bold !important;
            text-decoration:none !important;
            font-size: 10px!important;
            line-height:1 !important;
        } 

        @media (max-width: 900px) {
            .box-button-container-privy-cmp-AE1VSVI8T5{
                text-align: center!important;
            }
            .box-button-privy-cmp-AE1VSVI8T5 {
                width: 100%;
                height: 100%;
                font-size: 15px !important;
                padding: 13px 22px !important;
                display:block !important;
            }

            .banner-inner-privy-cmp-AE1VSVI8T5 {
                display: block !important;
                align-items: right !important;
            }
        }


        @media (max-width: 480px) {
            .idfy-banner-privy-cmp-AE1VSVI8T5,
            .idfy-box-privy-cmp-AE1VSVI8T5{
                bottom: 0;
                right: 0;
                left:0;
                width: 100%;
                max-height:80%;
                overflow:scroll;
            }

            .banner-button-privy-cmp-AE1VSVI8T5{
                width: 100%;
                height: 100%;
                font-size: 15px !important;
                padding: 13px 22px !important;
                display:block !important;
            }

            .customize-settings-screen-privy-cmp-AE1VSVI8T5 {
                height:85vh;
                width:90vw;
                max-width:480px;
                padding:0;
                margin:0;
            }

            .preference-button-privy-cmp-AE1VSVI8T5 button{
                padding: 13px 22px !important;
                font-size: 15px !important;
            }

        }

        @media (max-width: 850px){
            .preference-button-privy-cmp-AE1VSVI8T5{
            flex-direction:column;
            }
        }
        .reconsent-button-privy-cmp-AE1VSVI8T5 {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background-color: var(--privy-cmp-primary-color);
            color: var(--privy-cmp-button-text-color);
            padding: 0.8rem;
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgb(0 0 0 / 0.3);
            cursor: pointer;
            height: 55px;
            display: none;
            z-index: 2147483648;
            border: none;
            outline: none;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .reconsent-button-privy-cmp-AE1VSVI8T5:hover {
            background-color: var(--privy-cmp-button-hover-color);
            transform: scale(1.1);
        }
            .reconsent-button-privy-cmp-AE1VSVI8T5 svg,
        .reconsent-button-privy-cmp-AE1VSVI8T5 svg path {
            pointer-events: none;
        }
        `
    document.head.appendChild(styleTag)

    const scriptTag = document.createElement('script')
    scriptTag.innerHTML = `toggleConsentUIState();tabNavigationIABTCF()`
    document.head.appendChild(scriptTag)

    const iabStyleTag = document.createElement('style')
    iabStyleTag.innerHTML = `
        .consent-tabs-privy-cmp-AE1VSVI8T5{
            padding: 5px 10px !important;
            border: 1px solid #B2B5B8 !important;
            border-radius: 8px !important;
            display:flex !important;
            justify-content: center !important;
            align-items: center !important;
            position: relative !important;
        }
        .consent-tabs-privy-cmp-AE1VSVI8T5 .consent-tabs-inside-privy-cmp-AE1VSVI8T5{
            width:  80% !important;
            display:flex !important;
            gap:1rem !important;
            justify-content:space-between !important;
            align-items:center !important;
        }
        .consent-tabs-privy-cmp-AE1VSVI8T5 .tab-privy-cmp-AE1VSVI8T5{
            color: #484E56 !important;
            font-size: 1rem !important;
            font-weight: normal !important;
            padding: 5px 25px !important;
            border-radius: 5px !important;
            cursor: pointer;
        }
        .consent-tabs-privy-cmp-AE1VSVI8T5 .active-privy-cmp-AE1VSVI8T5{
            background-color: rgba(9, 11, 15, 0.08 ) !important;
            color: #000 !important;
        }
        .hide-privy-cmp-AE1VSVI8T5 {
            display: none !important;
        }
        .dropdown-title-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            align-items: center !important;
            border: 1px solid #B2B5B8 !important;
            border-radius: 10px !important;
            padding: 10px !important;
            background-color: #FAFAFB !important;
            cursor: pointer !important;
            justify-content: space-between !important;
        }
        .dropdown-wrapper-privy-cmp-AE1VSVI8T5{
            background-color: #F3F3F4 !important;
            border-radius: 10px !important;
            margin-bottom: 10px !important;
            margin-top: 5px !important;
        }
        .dropdown-name-privy-cmp-AE1VSVI8T5{
            font-size: 14px !important;
            line-height: 1 !important;
            margin: 0px !important;
            padding: 0px !important;
            color: #000000 !important;
            display: inline !important;
            font-weight: 400 !important;
        }
        .iab-dropdown-content-privy-cmp-AE1VSVI8T5{
            padding: 20px !important;
            max-height: 170px !important;
            overflow: scroll !important;
            font-size: 12px !important;
            color: #131A25 !important;
            line-height: 15px !important;
            margin: 0px !important;
        }

        #tab-content-privy-cmp-AE1VSVI8T5-privy-cmp-AE1VSVI8T5{
            color: black !important;
        }
        .sub-tab-privy-cmp-AE1VSVI8T5.sub-tab-purposes-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            border-bottom: 3px solid rgb(231 232 233 / 50%) !important;
            background-color: white !important;
        }
        .sub-tab-privy-cmp-AE1VSVI8T5.sub-tab-purposes-privy-cmp-AE1VSVI8T5 .sub-tab-option-privy-cmp-AE1VSVI8T5{
            font-size: 14px !important;
            font-weight: 500 !important;
            color: #666666 !important;
            cursor: pointer !important;
            padding: 12px !important;
        }
        .sub-tab-privy-cmp-AE1VSVI8T5.sub-tab-purposes-privy-cmp-AE1VSVI8T5 .sub-tab-option-privy-cmp-AE1VSVI8T5.active-privy-cmp-AE1VSVI8T5{
            color: #1a4bb7 !important;
            font-weight: 600 !important;
            position: relative !important;
        }
        .sub-tab-privy-cmp-AE1VSVI8T5.sub-tab-purposes-privy-cmp-AE1VSVI8T5 .sub-tab-option-privy-cmp-AE1VSVI8T5.active-privy-cmp-AE1VSVI8T5::after {
            content: '' !important;
            position: absolute !important;
            left: 0 !important;
            bottom: -2px !important;
            height: 3px !important;
            width: 100% !important;
            background-color: #1a4bb7 !important;
        }
        .subtab-content-privy-cmp-AE1VSVI8T5{
            display: none !important;
        }
        .subtab-content-privy-cmp-AE1VSVI8T5.active-privy-cmp-AE1VSVI8T5{
            display: block !important;
        }
        .iab-bottom-panel-privy-cmp-AE1VSVI8T5{
            background-color: black !important;
            padding: 16px 24px !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
            gap: 10px !important;
        }
        .iab-bottom-panel-text-privy-cmp-AE1VSVI8T5{
            flex: 1 !important;
            color: white !important;
            font-size: 12px !important;
            font-weight: 600 !important;
            line-height: 140% !important;
        }

        .iab-bottom-panel-buttons-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            gap: 8px !important;
            align-items: center !important;
        }

        .iab-bottom-panel-button-privy-cmp-AE1VSVI8T5 {
            padding: 8px 12px !important;
            background-color: white !important;
            border-radius: 8px !important;
            border: 1px solid var(--privy-cmp-primary-color) !important;
            color: var(--privy-cmp-primary-color) !important;
            font-weight: 600 !important;
            font-size: 14px !important;
        }

        .iab-type-title-privy-cmp-AE1VSVI8T5{
            font-size: 16px !important;
            font-weight: bold !important;
            margin: 1rem 0 0.3rem 0 !important;
            color: black !important;
        }

        .iab-type-desc-privy-cmp-AE1VSVI8T5{
            color: #808080 !important;
            font-size: 0.9rem !important;
        }
        .iab-illustrations-privy-cmp-AE1VSVI8T5{
            margin: 0.5rem 0 0.5rem 2rem !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
        }
        .iab-vendors-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            gap: 0.5rem !important;
            align-items: center !important;
            margin-top: 1rem !important;
            flex-wrap: wrap !important;
        }
        .iab-vendor-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            background-color: #c4c7ca !important;
            padding: 0.4rem 0.8rem !important;
            border-radius: 8px !important;
        }
        .vendor-link-privy-cmp-AE1VSVI8T5 {
            font-size: 12px !important;
            margin-left:0.3rem !important;
            text-decoration: none !important;
            color: black !important;
        }
        .vendor-link-privy-cmp-AE1VSVI8T5:hover {
            color: black !important;
        }
        .vendor-privacy-policy-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            gap: 1rem !important;
            align-items: center !important;
        }
        .vendor-purpose-headline-privy-cmp-AE1VSVI8T5{
            display: flex !important;
            justify-content: space-between !important;
        }
        .vendor-purposes-box-privy-cmp-AE1VSVI8T5 {
            margin-top: 10px !important;
            padding: 10px !important;
            border: 1px solid #ccc !important;
            border-radius: 6px !important;
            background-color: #f9f9f9 !important;
        }
        .vendor-purposes-section-privy-cmp-AE1VSVI8T5 {
            margin-bottom: 10px !important;
        }
        .purpose-row-privy-cmp-AE1VSVI8T5 {
            display: flex !important;
            justify-content: space-between !important;
            margin: 4px 0 !important;
        }
        .retention-privy-cmp-AE1VSVI8T5 {
            color: #666 !important;
        }
        
    `
    document.head.appendChild(iabStyleTag)
    initializeTabs(gvl)
    setupBannerBasedOnConsentIABTCF(`8c25669844d6`, `ac321ced-a7db-48eb-bac6-6680b4009845`)
        }
        
        document.addEventListener("click", function (event) {
            if (event.target.id === "customize-btn-privy-cmp-AE1VSVI8T5") {
                sendEventDetails(`8c25669844d6`, `ac321ced-a7db-48eb-bac6-6680b4009845`, 'CustomizeCookiesView');
            }

            if (event.target.id === "preference-privy-cmp") {
                toggleBanner('preference')
                sendEventDetails(`8c25669844d6`, `ac321ced-a7db-48eb-bac6-6680b4009845`, 'PreferenceCenter');
            }
}) //Common 
         //Common