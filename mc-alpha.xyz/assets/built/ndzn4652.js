"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
    return n
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, o) {
    return t && _defineProperties(e.prototype, t), o && _defineProperties(e, o), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}
var MicroModal = function() {
    function n(e) {
        if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1
    }

    function l(e, t) {
        if (! function(e) {
                if (e.length <= 0) console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>')
            }(e), !t) return !0;
        for (var o in t) n(o);
        return !0
    }
    var t = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
        c = function() {
            function m(e) {
                var t = e.targetModal,
                    o = e.triggers,
                    n = void 0 === o ? [] : o,
                    i = e.onShow,
                    a = void 0 === i ? function() {} : i,
                    r = e.onClose,
                    s = void 0 === r ? function() {} : r,
                    l = e.openTrigger,
                    c = void 0 === l ? "data-modal-trigger" : l,
                    d = e.closeTrigger,
                    u = void 0 === d ? "data-modal-close" : d,
                    o = e.openClass,
                    i = void 0 === o ? "is-open" : o,
                    r = e.disableScroll,
                    l = void 0 === r || r,
                    d = e.disableFocus,
                    o = void 0 === d || d,
                    r = e.awaitCloseAnimation,
                    d = void 0 === r || r,
                    r = e.awaitOpenAnimation,
                    r = void 0 === r || r,
                    e = e.debugMode,
                    e = void 0 !== e && e;
                _classCallCheck(this, m), this.modal = document.getElementById(t), this.config = {
                    debugMode: e,
                    disableScroll: l,
                    openTrigger: c,
                    closeTrigger: u,
                    openClass: i,
                    onShow: a,
                    onClose: s,
                    awaitCloseAnimation: d,
                    awaitOpenAnimation: r,
                    disableFocus: o
                }, 0 < n.length && this.registerTriggers.apply(this, _toConsumableArray(n)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
            }
            return _createClass(m, [{
                key: "registerTriggers",
                value: function() {
                    for (var t = this, e = arguments.length, o = new Array(e), n = 0; n < e; n++) o[n] = arguments[n];
                    o.filter(Boolean).forEach(function(e) {
                        e.addEventListener("click", function(e) {
                            return t.showModal(e)
                        })
                    })
                }
            }, {
                key: "showModal",
                value: function(e) {
                    var t = this,
                        o = 0 < arguments.length && void 0 !== e ? e : null;
                    this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation ? (e = function e() {
                        t.modal.removeEventListener("animationend", e, !1), t.setFocusToFirstNode()
                    }, this.modal.addEventListener("animationend", e, !1)) : this.setFocusToFirstNode(), this.config.onShow(this.modal, this.activeElement, o)
                }
            }, {
                key: "closeModal",
                value: function(e) {
                    var t = this,
                        e = 0 < arguments.length && void 0 !== e ? e : null,
                        o = this.modal;
                    this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e);

                    function n() {
                        return t.scrollBehaviour("enable")
                    }
                    var i;
                    this.config.awaitCloseAnimation ? (i = this.config.openClass, this.modal.addEventListener("animationend", function e() {
                        n(), o.classList.remove(i), o.removeEventListener("animationend", e, !1)
                    }, !1)) : n()
                }
            }, {
                key: "closeModalById",
                value: function(e) {
                    this.modal = document.getElementById(e), this.modal && this.closeModal()
                }
            }, {
                key: "scrollBehaviour",
                value: function(e) {
                    if (this.config.disableScroll) {
                        var t = document.querySelector("body");
                        switch (e) {
                            case "enable":
                                Object.assign(t.style, {
                                    overflow: "",
                                    paddingRight: 0
                                });
                                break;
                            case "disable":
                                e = window.innerWidth - document.documentElement.clientWidth;
                                Object.assign(t.style, {
                                    overflow: "hidden",
                                    paddingRight: e + "px"
                                })
                        }
                    }
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
                }
            }, {
                key: "removeEventListeners",
                value: function() {
                    this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
                }
            }, {
                key: "onClick",
                value: function(e) {
                    e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
                }
            }, {
                key: "onKeydown",
                value: function(e) {
                    27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e)
                }
            }, {
                key: "getFocusableNodes",
                value: function() {
                    var e = this.modal.querySelectorAll(t);
                    return Array.apply(void 0, _toConsumableArray(e))
                }
            }, {
                key: "setFocusToFirstNode",
                value: function() {
                    var e, t, o = this;
                    this.config.disableFocus || 0 !== (e = this.getFocusableNodes()).length && (0 < (t = e.filter(function(e) {
                        return !e.hasAttribute(o.config.closeTrigger)
                    })).length && t[0].focus(), 0 === t.length && e[0].focus())
                }
            }, {
                key: "retainFocus",
                value: function(e) {
                    var t, o = this.getFocusableNodes();
                    0 !== o.length && (o = o.filter(function(e) {
                        return null !== e.offsetParent
                    }), this.modal.contains(document.activeElement) ? (t = o.indexOf(document.activeElement), e.shiftKey && 0 === t && (o[o.length - 1].focus(), e.preventDefault()), !e.shiftKey && 0 < o.length && t === o.length - 1 && (o[0].focus(), e.preventDefault())) : o[0].focus())
                }
            }]), m
        }(),
        d = null;
    return {
        init: function(e) {
            var o, n, t = Object.assign({}, {
                    openTrigger: "data-micromodal-trigger"
                }, e),
                i = _toConsumableArray(document.querySelectorAll("[".concat(t.openTrigger, "]"))),
                a = (e = i, o = t.openTrigger, n = [], e.forEach(function(e) {
                    var t = e.attributes[o].value;
                    void 0 === n[t] && (n[t] = []), n[t].push(e)
                }), n);
            if (!0 !== t.debugMode || !1 !== l(i, a))
                for (var r in a) {
                    var s = a[r];
                    t.targetModal = r, t.triggers = _toConsumableArray(s), d = new c(t)
                }
        },
        show: function(e, t) {
            t = t || {};
            t.targetModal = e, !0 === t.debugMode && !1 === n(e) || (d && d.removeEventListeners(), (d = new c(t)).showModal())
        },
        close: function(e) {
            e ? d.closeModalById(e) : d.closeModal()
        }
    }
}();

function openMobileMenu() {
    document.getElementById("mobile-nav").classList.add("active"), document.querySelector("body").style.overflow = "hidden"
}

function closeMobileMenu() {
    document.getElementById("mobile-nav").classList.add("inactive"), setTimeout(function() {
        document.getElementById("mobile-nav").classList.remove("inactive")
    }, 220), document.getElementById("mobile-nav").classList.remove("active"), document.querySelector("body").style.overflow = "scroll"
}

function toggleSocialsMenu() {
    document.getElementById("SocialsPopup").classList.toggle("active")
}

function openModal(e) {
    var t = document.getElementById("modal-play"),
        o = document.getElementById("backdrop"),
        n = document.getElementById("modal-body");
    t.classList.add("active"), o.classList.add("is-shown"), n.classList.add("is-shown"), e.innerHTML.includes("Java") ? (document.querySelector(".modal-body big").innerHTML = "Minecraft Java", document.querySelector(".modal-body .content-java").classList.add("active"), document.querySelector(".modal-body .content-bedrock").classList.remove("active")) : (document.querySelector(".modal-body big").innerHTML = "Minecraft Bedrock", document.querySelector(".modal-body .content-bedrock").classList.add("active"), document.querySelector(".modal-body .content-java").classList.remove("active"))
}

function closeModal() {
    var e = document.getElementById("modal-play"),
        t = document.getElementById("backdrop"),
        o = document.getElementById("modal-body");
    e.classList.remove("active"), t.classList.remove("is-shown"), o.classList.remove("is-shown")
}
window.MicroModal = MicroModal, window.config = {
        server_ip: "play.alphamc.tech",
        discord_api_key: "849274418140282930"
    }, config.server_ip && new ClipboardJS(".ndzn-js--copyip", {
        text: function() {
            return config.server_ip
        }
    }).on("success", function(e) {
        MicroModal.show("copy-ip-modal")
    }), Array.from(document.querySelectorAll(".ndzn-js--playercount")).forEach(function(t) {
        var e;
        t && config.server_ip && (e = "https://mcapi.us/server/status?ip=" + config.server_ip, axios.get(e).then(function(e) {
            e && e.data && "success" === e.data.status && (t.innerHTML = e.data.players.now)
        }))
    }), Array.from(document.querySelectorAll(".ndzn-js--discordcount")).forEach(function(t) {
        var e;
        t && config.discord_api_key && (e = "https://discordapp.com/api/guilds/" + config.discord_api_key + "/embed.json", axios.get(e).then(function(e) {
            e && e.data && e.data.presence_count && (t.innerHTML = e.data.presence_count)
        }))
    }),
    function() {
        var o, n, i, a, r, t = !0;

        function e() {
            t = !(document.body.scrollTop > n())
        }

        function s() {
            i.width = window.innerWidth, i.height = window.largeHeader.offsetHeight
        }

        function l() {
            if (t)
                for (var e in a.clearRect(0, 0, o, n()), r) r[e].draw();
            requestAnimationFrame(l)
        }

        function c() {
            var e = this;

            function t() {
                e.pos.x = Math.random() * o, e.pos.y = n() + 100 * Math.random(), e.alpha = .1 + .3 * Math.random(), e.scale = .3 + .3 * Math.random(), e.velocity = Math.random()
            }
            e.pos = {}, t(), this.draw = function() {
                e.alpha <= 0 && t(), e.pos.y -= e.velocity, e.alpha -= 6e-4, a.beginPath(), a.arc(e.pos.x, e.pos.y, 10 * e.scale, 0, 2 * Math.PI, !1), a.fillStyle = "rgba(254, 135, 30," + e.alpha + ")", a.fill()
            }
        }
        window.largeHeader = document.getElementById("ndzn-header"),
            function() {
                o = window.innerWidth, n = function() {
                    return window.largeHeader.offsetHeight
                }, (i = document.getElementById("ndzn-header-canvas")).width = o, i.height = window.largeHeader.offsetHeight, a = i.getContext("2d"), r = [];
                for (var e = 0; e < .02 * o; e++) {
                    var t = new c;
                    r.push(t)
                }
                l()
            }(), window.addEventListener("scroll", e), window.addEventListener("resize", s)
    }();