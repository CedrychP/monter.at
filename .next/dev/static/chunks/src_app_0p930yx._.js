(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/CookieBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const storageKey = "tcc-cookie-consent";
const defaultConsent = {
    necessary: true,
    analytics: false,
    marketing: false
};
function CookieBanner() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSettings, setShowSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultConsent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieBanner.useEffect": ()=>{
            const openSettings = {
                "CookieBanner.useEffect.openSettings": ()=>{
                    setIsVisible(true);
                    setShowSettings(true);
                }
            }["CookieBanner.useEffect.openSettings"];
            const timer = window.setTimeout({
                "CookieBanner.useEffect.timer": ()=>{
                    const savedConsent = window.localStorage.getItem(storageKey);
                    if (savedConsent) {
                        try {
                            setConsent(JSON.parse(savedConsent));
                        } catch  {
                            setConsent(defaultConsent);
                        }
                    } else {
                        setIsVisible(true);
                    }
                }
            }["CookieBanner.useEffect.timer"], 0);
            window.addEventListener("tcc:open-cookie-settings", openSettings);
            return ({
                "CookieBanner.useEffect": ()=>{
                    window.clearTimeout(timer);
                    window.removeEventListener("tcc:open-cookie-settings", openSettings);
                }
            })["CookieBanner.useEffect"];
        }
    }["CookieBanner.useEffect"], []);
    const saveConsent = (nextConsent)=>{
        setConsent(nextConsent);
        window.localStorage.setItem(storageKey, JSON.stringify(nextConsent));
        setIsVisible(false);
        setShowSettings(false);
    };
    if (!isVisible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-h-[calc(100vh-2rem)] max-w-xl overflow-y-auto border border-[color:var(--border)] bg-white p-6 text-[color:var(--ink)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] sm:ml-auto sm:mr-0 sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "cap-line tracking-eyebrow text-[color:var(--accent)]",
                    children: "Datenschutz"
                }, void 0, false, {
                    fileName: "[project]/src/app/CookieBanner.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display mt-6 text-2xl font-normal leading-tight tracking-tight sm:text-3xl",
                    children: "Cookies auf dieser Website"
                }, void 0, false, {
                    fileName: "[project]/src/app/CookieBanner.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                    children: "Wir verwenden notwendige Cookies. Analyse und Marketing aktivieren wir nur mit Ihrer Zustimmung."
                }, void 0, false, {
                    fileName: "[project]/src/app/CookieBanner.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                showSettings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 space-y-0 border-t border-[color:var(--border)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[color:var(--border)] py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "Notwendig"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]",
                                                children: "Immer aktiv für die korrekte Funktion der Website."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-eyebrow text-[color:var(--accent)]",
                                        children: "Aktiv"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 84,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CookieBanner.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/CookieBanner.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block cursor-pointer border-b border-[color:var(--border)] py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "Analyse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]",
                                                children: "Hilft uns zu verstehen, welche Inhalte relevant sind."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "h-4 w-4 cursor-pointer accent-[color:var(--accent)]",
                                        checked: consent.analytics,
                                        onChange: (event)=>setConsent((current)=>({
                                                    ...current,
                                                    analytics: event.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CookieBanner.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/CookieBanner.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block cursor-pointer py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: "Marketing"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs font-light leading-relaxed text-[color:var(--muted)]",
                                                children: "Erlaubt spätere Kampagnen- und Conversion-Messung."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CookieBanner.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        className: "h-4 w-4 cursor-pointer accent-[color:var(--accent)]",
                                        checked: consent.marketing,
                                        onChange: (event)=>setConsent((current)=>({
                                                    ...current,
                                                    marketing: event.target.checked
                                                }))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/CookieBanner.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/CookieBanner.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/CookieBanner.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/CookieBanner.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-7 flex flex-col gap-3 border-t border-[color:var(--border)] pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-x-6 gap-y-2 text-xs font-light text-[color:var(--muted)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-[color:var(--accent)]",
                                    href: "/dsgvo",
                                    children: "Datenschutz"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CookieBanner.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-[color:var(--accent)]",
                                    href: "/impressum",
                                    children: "Impressum"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CookieBanner.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/CookieBanner.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 grid gap-2 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-ghost py-3 text-[0.7rem]",
                                    onClick: ()=>saveConsent(defaultConsent),
                                    children: "Nur notwendige"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CookieBanner.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-ghost py-3 text-[0.7rem]",
                                    onClick: ()=>setShowSettings((current)=>!current),
                                    children: showSettings ? "Schließen" : "Anpassen"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CookieBanner.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-primary py-3 text-[0.7rem]",
                                    onClick: ()=>saveConsent(showSettings ? consent : {
                                            necessary: true,
                                            analytics: true,
                                            marketing: true
                                        }),
                                    children: showSettings ? "Speichern" : "Akzeptieren"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CookieBanner.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/CookieBanner.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/CookieBanner.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/CookieBanner.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/CookieBanner.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(CookieBanner, "dmhdDYpuZUChJKQqLFK6C3gHW1I=");
_c = CookieBanner;
var _c;
__turbopack_context__.k.register(_c, "CookieBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/CookieSettingsButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieSettingsButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CookieSettingsButton({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: className,
        onClick: ()=>window.dispatchEvent(new Event("tcc:open-cookie-settings")),
        children: "Cookie Einstellungen"
    }, void 0, false, {
        fileName: "[project]/src/app/CookieSettingsButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CookieSettingsButton;
var _c;
__turbopack_context__.k.register(_c, "CookieSettingsButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/blog/posts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "getBlogPost",
    ()=>getBlogPost
]);
const blogPosts = [
    {
        slug: "waschmaschine-pumpt-nicht-ab",
        title: "Waschmaschine pumpt nicht ab: Ursachen und erste Schritte",
        description: "Was tun, wenn die Waschmaschine nicht abpumpt? Die wichtigsten Ursachen, sichere Sofortmaßnahmen und wann ein Reparaturservice sinnvoll ist.",
        category: "Waschmaschine",
        readingTime: "4 Min.",
        date: "2026-04-28",
        intro: "Wenn Wasser in der Waschmaschine stehen bleibt, ist das unangenehm und oft dringend. Viele Ursachen lassen sich eingrenzen, bevor ein Techniker vor Ort ist.",
        sections: [
            {
                title: "Häufige Ursachen",
                body: "Typische Gründe sind ein verstopftes Flusensieb, ein blockierter Ablaufschlauch, Fremdkörper in der Pumpe oder ein Problem mit der Elektronik. Auch ein geknickter Schlauch kann bereits reichen."
            },
            {
                title: "Was Sie selbst prüfen können",
                body: "Schalten Sie das Gerät aus, ziehen Sie den Netzstecker und prüfen Sie, ob Wasser sicher abgelassen werden kann. Das Flusensieb sollte nur geöffnet werden, wenn Sie Wasser auffangen können."
            },
            {
                title: "Wann Reparatur sinnvoll ist",
                body: "Wenn die Pumpe Geräusche macht, das Gerät Fehlercodes zeigt oder Wasser wiederholt stehen bleibt, sollte die Ursache professionell geprüft werden. So vermeiden Sie Folgeschäden."
            }
        ],
        checklist: [
            "Netzstecker ziehen",
            "Wasser sicher auffangen",
            "Flusensieb vorsichtig prüfen",
            "Ablaufschlauch auf Knick prüfen",
            "Fehlercode notieren"
        ]
    },
    {
        slug: "geschirrspueler-reinigt-nicht-richtig",
        title: "Geschirrspüler reinigt nicht richtig: Das kann dahinterstecken",
        description: "Wenn Geschirr schmutzig bleibt, liegen die Ursachen oft bei Sprüharmen, Wasserzufuhr, Sieben oder Dosierung. Ein Überblick für schnelle Orientierung.",
        category: "Geschirrspüler",
        readingTime: "4 Min.",
        date: "2026-04-28",
        intro: "Ein Geschirrspüler soll Arbeit abnehmen. Bleiben Gläser milchig oder Teller schmutzig, lohnt sich eine strukturierte Prüfung.",
        sections: [
            {
                title: "Sprüharme und Siebe",
                body: "Verstopfte Sprüharme oder verschmutzte Siebe gehören zu den häufigsten Ursachen. Wenn Wasser nicht sauber zirkuliert, kann auch ein gutes Programm kein gutes Ergebnis liefern."
            },
            {
                title: "Reiniger, Salz und Klarspüler",
                body: "Falsche Dosierung oder fehlendes Salz kann die Reinigungsleistung deutlich verschlechtern. Besonders bei hartem Wasser ist die Einstellung der Wasserhärte wichtig."
            },
            {
                title: "Technische Ursachen",
                body: "Wenn das Gerät nicht heizt, zu wenig Wasser zieht oder ungewöhnliche Geräusche macht, kann ein technischer Defekt vorliegen. Dann ist eine Diagnose sinnvoll."
            }
        ],
        checklist: [
            "Siebe reinigen",
            "Sprüharme abnehmen und ausspülen",
            "Salz und Klarspüler prüfen",
            "Programm mit hoher Temperatur testen",
            "Fehlercode fotografieren"
        ]
    },
    {
        slug: "backofen-heizt-nicht-mehr",
        title: "Backofen heizt nicht mehr: Mögliche Ursachen",
        description: "Der Backofen bleibt kalt oder erreicht die Temperatur nicht? Lesen Sie, welche Bauteile betroffen sein können und wann Vorsicht geboten ist.",
        category: "Backofen & Herd",
        readingTime: "3 Min.",
        date: "2026-04-28",
        intro: "Wenn der Backofen nicht mehr heizt, betrifft das Komfort und Sicherheit. Gerade bei Elektrogeräten sollte nicht improvisiert werden.",
        sections: [
            {
                title: "Heizkörper und Temperaturfühler",
                body: "Defekte Ober-/Unterhitze, Umluft-Heizkörper oder Temperaturfühler können dazu führen, dass der Backofen kalt bleibt oder die Temperatur stark schwankt."
            },
            {
                title: "Bedienung und Elektronik",
                body: "Manchmal liegt das Problem an Schaltern, Relais oder der Steuerung. Wenn Anzeigen funktionieren, aber keine Wärme entsteht, ist eine Messung notwendig."
            },
            {
                title: "Sicherheit zuerst",
                body: "Arbeiten an Herd und Backofen sollten fachgerecht erfolgen. Bei Geruch, Funken, ausgelöster Sicherung oder sichtbaren Schäden bitte nicht weiter testen."
            }
        ],
        checklist: [
            "Sicherung prüfen",
            "Betriebsart wechseln",
            "Temperaturverhalten beobachten",
            "Fehlerbild notieren",
            "Keine Bauteile selbst öffnen"
        ]
    },
    {
        slug: "kuehlschrank-kuehlt-nicht",
        title: "Kühlschrank kühlt nicht richtig: Was jetzt wichtig ist",
        description: "Wenn der Kühlschrank zu warm wird, zählt schnelle Einschätzung. Ursachen, Sofortmaßnahmen und Hinweise zur Reparaturentscheidung.",
        category: "Kühlen",
        readingTime: "4 Min.",
        date: "2026-04-28",
        intro: "Ein zu warmer Kühlschrank kann Lebensmittel verderben. Deshalb sollte die Ursache schnell eingegrenzt und das Risiko richtig bewertet werden.",
        sections: [
            {
                title: "Temperatur und Luftzirkulation",
                body: "Überfüllung, blockierte Luftkanäle oder falsch eingestellte Temperaturen können die Kühlleistung beeinflussen. Auch warme Speisen belasten das Gerät."
            },
            {
                title: "Dichtungen und Vereisung",
                body: "Undichte Türdichtungen oder starke Vereisung führen dazu, dass der Kühlschrank dauerhaft arbeitet und trotzdem nicht richtig kühlt."
            },
            {
                title: "Kompressor und Kältekreislauf",
                body: "Wenn der Kompressor nicht startet, sehr heiß wird oder dauerhaft läuft, kann ein technisches Problem vorliegen. Hier ist eine fachliche Einschätzung wichtig."
            }
        ],
        checklist: [
            "Temperatur messen",
            "Türdichtung prüfen",
            "Lüftung freihalten",
            "Vereisung dokumentieren",
            "Lebensmittel sichern"
        ]
    },
    {
        slug: "trockner-trocknet-nicht",
        title: "Trockner trocknet nicht: Filter, Sensorik oder Technik?",
        description: "Der Trockner läuft, aber die Wäsche bleibt feucht? Ursachen reichen von Filtern bis Sensorik. So grenzen Sie das Problem ein.",
        category: "Trockner",
        readingTime: "3 Min.",
        date: "2026-04-28",
        intro: "Wenn ein Trockner deutlich länger braucht oder Wäsche feucht bleibt, steigt der Energieverbrauch. Eine frühe Prüfung spart Zeit und Kosten.",
        sections: [
            {
                title: "Filter und Luftwege",
                body: "Verstopfte Flusenfilter, Wärmetauscher oder Luftwege sind häufige Ursachen. Der Trockner kann Wärme nicht richtig nutzen oder Feuchtigkeit nicht abführen."
            },
            {
                title: "Sensorik und Programme",
                body: "Feuchtigkeitssensoren können verschmutzen. Dann beendet das Gerät Programme zu früh oder erkennt den Trocknungsgrad nicht korrekt."
            },
            {
                title: "Wärmepumpe oder Heizung",
                body: "Wenn trotz Reinigung keine Wärme entsteht, können Heizung, Wärmepumpe oder Steuerung betroffen sein. Dann lohnt sich eine Diagnose."
            }
        ],
        checklist: [
            "Flusenfilter reinigen",
            "Wärmetauscher prüfen",
            "Beladung reduzieren",
            "Sensorflächen reinigen",
            "Programmverhalten notieren"
        ]
    },
    {
        slug: "reparatur-oder-neukauf",
        title: "Reparatur oder Neukauf: Wann lohnt sich eine Haushaltsgeräte-Reparatur?",
        description: "Nicht jede Reparatur lohnt sich, aber viele Geräte müssen nicht sofort ersetzt werden. Kriterien für eine wirtschaftliche Entscheidung.",
        category: "Ratgeber",
        readingTime: "5 Min.",
        date: "2026-04-28",
        intro: "Die wichtigste Frage ist oft nicht, ob man ein Gerät reparieren kann, sondern ob es wirtschaftlich sinnvoll ist. Eine ehrliche Einschätzung hilft.",
        sections: [
            {
                title: "Alter und Zustand",
                body: "Ein gepflegtes Gerät mit überschaubarem Defekt kann eine Reparatur wert sein. Bei sehr alten Geräten mit mehreren Problemen kann ein Austausch sinnvoller sein."
            },
            {
                title: "Ersatzteile und Aufwand",
                body: "Kosten entstehen nicht nur durch Arbeitszeit, sondern auch durch Ersatzteile, Anfahrt und Diagnose. Verfügbarkeit spielt eine große Rolle."
            },
            {
                title: "Sicherheit und Ausfallrisiko",
                body: "Bei elektrischen Problemen, Undichtigkeiten oder wiederkehrenden Fehlern sollte Sicherheit höher gewichtet werden als eine kurzfristige Ersparnis."
            }
        ],
        checklist: [
            "Alter des Geräts",
            "Anschaffungspreis",
            "Ersatzteilkosten",
            "Häufigkeit der Fehler",
            "Sicherheitszustand"
        ]
    }
];
function getBlogPost(slug) {
    return blogPosts.find((post)=>post.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/marken/brands.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandPages",
    ()=>brandPages,
    "getBrandPage",
    ()=>getBrandPage
]);
const makeBrand = (brand, slug)=>({
        slug,
        brand,
        metaTitle: `${brand} Reparatur Wien | MONTER Service`,
        description: `${brand} Haushaltsgeräte Reparatur in Wien: Fehler einschätzen, Termin vorbereiten und direkt MONTER Reparatur & Service anrufen.`,
        intro: `${brand} Geräte sind in vielen Haushalten und Objektküchen im Einsatz. Wenn Waschmaschine, Geschirrspüler, Backofen, Herd, Trockner oder Kühlgerät nicht mehr zuverlässig funktionieren, hilft eine strukturierte Einschätzung. MONTER Reparatur & Service unterstützt in Wien bei der Vorbereitung von Diagnose, Reparaturentscheidung und Terminabstimmung. Wichtig sind Gerätetyp, Modellnummer, Fehlercode und eine kurze Beschreibung des Problems.`
    });
const brandPages = [
    makeBrand("Bosch", "bosch-reparatur-wien"),
    makeBrand("Miele", "miele-reparatur-wien"),
    makeBrand("Siemens", "siemens-reparatur-wien"),
    makeBrand("Beko", "beko-reparatur-wien"),
    makeBrand("Gorenje", "gorenje-reparatur-wien"),
    makeBrand("AEG", "aeg-reparatur-wien")
];
function getBrandPage(slug) {
    return brandPages.find((brand)=>brand.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/leistungen/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServicePage",
    ()=>getServicePage,
    "servicePages",
    ()=>servicePages
]);
const servicePages = [
    {
        slug: "waschmaschine-reparatur-wien",
        title: "Waschmaschine Reparatur Wien",
        metaTitle: "Waschmaschine Reparatur Wien | MONTER Service",
        description: "Waschmaschine Reparatur in Wien: schnelle Einschätzung, klare Diagnose und telefonische Terminabstimmung. Jetzt MONTER Service anrufen.",
        h1: "Waschmaschine Reparatur in Wien",
        category: "Waschmaschine",
        intro: "Wenn die Waschmaschine nicht abpumpt, schleudert, Wasser verliert oder einen Fehlercode zeigt, zählt eine schnelle und sinnvolle Einschätzung. MONTER Reparatur & Service unterstützt Haushalte, Vermieter und Hausverwaltungen in Wien bei typischen Waschmaschinenproblemen.",
        sections: [
            {
                title: "Typische Fehlerbilder",
                body: "Häufige Ursachen sind blockierte Pumpen, defekte Türverriegelungen, verschmutzte Siebe, Probleme mit Wasserzulauf oder Ablauf sowie Elektronikfehler. Eine gute Vorbereitung mit Marke, Modellnummer und Fehlercode hilft, den Reparaturbedarf realistisch einzuschätzen."
            },
            {
                title: "Reparatur statt unnötiger Neukauf",
                body: "Nicht jede Waschmaschine muss sofort ersetzt werden. Entscheidend sind Alter, Zustand, Ersatzteilpreis und Sicherheitsaspekte. Wir erklären transparent, wann eine Reparatur wirtschaftlich sinnvoll ist und wann ein Austausch die bessere Lösung sein kann."
            },
            {
                title: "Vorbereitung für den Termin",
                body: "Für die Anfrage sind Standort, Gerätetyp, Marke, Fehlerbild und Fotos vom Typenschild besonders hilfreich. Bei dringenden Ausfällen ist der telefonische Kontakt der schnellste Weg."
            }
        ],
        checklist: [
            "Fehlercode notieren",
            "Typenschild fotografieren",
            "Wasserstand prüfen",
            "Standort nennen",
            "Telefonisch Termin klären"
        ]
    },
    {
        slug: "geschirrspueler-reparatur-wien",
        title: "Geschirrspüler Reparatur Wien",
        metaTitle: "Geschirrspüler Reparatur Wien | MONTER Service",
        description: "Geschirrspüler Reparatur in Wien: Hilfe bei Undichtigkeit, Pumpenproblemen und schlechter Reinigung. Jetzt Reparaturanfrage vorbereiten.",
        h1: "Geschirrspüler Reparatur in Wien",
        category: "Geschirrspüler",
        intro: "Ein defekter Geschirrspüler stört den Alltag schnell. Ob Wasser stehen bleibt, das Gerät nicht heizt, schlecht reinigt oder ausläuft: Für eine gute Reparaturentscheidung braucht es eine klare Diagnose.",
        sections: [
            {
                title: "Wenn das Reinigungsergebnis schlechter wird",
                body: "Verstopfte Siebe, blockierte Sprüharme, falsche Dosierung oder ein Heizproblem können dazu führen, dass Geschirr nicht sauber wird. Auch Wasserzufuhr und Ablauf sollten geprüft werden."
            },
            {
                title: "Undichtigkeiten ernst nehmen",
                body: "Wasser unter dem Gerät kann Dichtungen, Pumpen oder Schläuche betreffen. Gerade bei Einbaugeräten ist eine schnelle Einschätzung wichtig, um Küchenmöbel und Böden zu schützen."
            },
            {
                title: "Schnellere Abwicklung durch Daten",
                body: "Marke, Modellnummer, Fehlercode und Fotos helfen bei der Vorbereitung. So lässt sich besser abschätzen, ob Ersatzteile wahrscheinlich benötigt werden."
            }
        ],
        checklist: [
            "Siebe prüfen",
            "Fehlercode fotografieren",
            "Undichtigkeit dokumentieren",
            "Modellnummer bereithalten",
            "Anruf vorbereiten"
        ]
    },
    {
        slug: "backofen-herd-reparatur-wien",
        title: "Backofen & Herd Reparatur Wien",
        metaTitle: "Backofen Herd Reparatur Wien | MONTER Service",
        description: "Backofen und Herd Reparatur in Wien: klare Hilfe bei Heizproblemen, Elektronikfehlern und Sicherheitsfragen. Jetzt anrufen.",
        h1: "Backofen und Herd Reparatur in Wien",
        category: "Backofen & Herd",
        intro: "Wenn Backofen oder Herd nicht mehr heizen, Sicherungen auslösen oder Bedienelemente nicht reagieren, sollte Sicherheit an erster Stelle stehen. MONTER Reparatur & Service hilft bei der strukturierten Einschätzung.",
        sections: [
            {
                title: "Heizleistung und Elektronik",
                body: "Betroffen sein können Heizkörper, Temperaturfühler, Schalter, Relais oder Steuerung. Ohne Messung ist oft schwer zu erkennen, ob ein einzelnes Bauteil oder mehrere Komponenten betroffen sind."
            },
            {
                title: "Sicherheitsrelevante Symptome",
                body: "Geruch, Funken, wiederholt ausgelöste Sicherungen oder sichtbare Schäden sollten nicht ignoriert werden. In solchen Fällen bitte das Gerät nicht weiter nutzen und telefonisch abklären."
            },
            {
                title: "Wirtschaftlichkeit prüfen",
                body: "Bei älteren Geräten lohnt sich eine ehrliche Abwägung. Ersatzteilpreis, Gerätezustand und Reparaturaufwand entscheiden, ob Instandsetzung sinnvoll ist."
            }
        ],
        checklist: [
            "Sicherung prüfen",
            "Betriebsart notieren",
            "Fehlerbild beschreiben",
            "Gerät nicht öffnen",
            "Telefonisch abklären"
        ]
    },
    {
        slug: "trockner-reparatur-wien",
        title: "Trockner Reparatur Wien",
        metaTitle: "Trockner Reparatur Wien | MONTER Service",
        description: "Trockner Reparatur in Wien: Unterstützung bei feuchter Wäsche, Sensorproblemen, Wärmepumpe und Luftwegen. Jetzt Kontakt aufnehmen.",
        h1: "Trockner Reparatur in Wien",
        category: "Trockner",
        intro: "Wenn der Trockner läuft, aber die Wäsche feucht bleibt, steigen Zeitaufwand und Energiekosten. Eine gezielte Einschätzung hilft, Filterprobleme von technischen Defekten zu unterscheiden.",
        sections: [
            {
                title: "Filter, Luftwege und Wärmetauscher",
                body: "Viele Probleme entstehen durch blockierte Luftwege, verschmutzte Filter oder einen zugesetzten Wärmetauscher. Dadurch kann Feuchtigkeit nicht richtig abgeführt werden."
            },
            {
                title: "Sensorik und Wärme",
                body: "Feuchtigkeitssensoren, Heizung oder Wärmepumpe können betroffen sein. Wenn Reinigung keine Verbesserung bringt, ist eine fachliche Diagnose sinnvoll."
            },
            {
                title: "Reparaturentscheidung",
                body: "Bei Trocknern hängt die Wirtschaftlichkeit stark von Alter, Energieeffizienz und Bauteilkosten ab. Wir helfen bei einer klaren Einschätzung."
            }
        ],
        checklist: [
            "Flusenfilter reinigen",
            "Wärmetauscher prüfen",
            "Programm notieren",
            "Marke und Modell bereithalten",
            "Anrufen"
        ]
    },
    {
        slug: "kuehlschrank-reparatur-wien",
        title: "Kühlschrank Reparatur Wien",
        metaTitle: "Kühlschrank Reparatur Wien | MONTER Service",
        description: "Kühlschrank Reparatur in Wien: schnelle Einschätzung bei Temperaturproblemen, Vereisung und Dichtungen. Jetzt Notdienst kontaktieren.",
        h1: "Kühlschrank Reparatur in Wien",
        category: "Kühlschrank",
        intro: "Wenn ein Kühlschrank nicht richtig kühlt, kann das schnell Lebensmittel betreffen. Wichtig ist eine schnelle Einschätzung von Temperatur, Dichtung, Vereisung und Geräuschentwicklung.",
        sections: [
            {
                title: "Temperatur und Dichtungen",
                body: "Undichte Türen, beschädigte Dichtungen oder falsche Beladung können die Kühlleistung verschlechtern. Auch vereiste Bereiche beeinflussen den Betrieb."
            },
            {
                title: "Kompressor und Laufverhalten",
                body: "Läuft der Kompressor dauerhaft, gar nicht oder ungewöhnlich laut, sollte die Ursache geprüft werden. Der Kältekreislauf ist kein Bereich für Experimente."
            },
            {
                title: "Schnelle Schadensbegrenzung",
                body: "Messen Sie die Temperatur, sichern Sie empfindliche Lebensmittel und notieren Sie, seit wann das Problem besteht. Danach kann telefonisch der nächste Schritt geklärt werden."
            }
        ],
        checklist: [
            "Temperatur messen",
            "Dichtung prüfen",
            "Vereisung fotografieren",
            "Geräusche notieren",
            "Lebensmittel sichern"
        ]
    },
    {
        slug: "tiefkuehl-reparatur-wien",
        title: "Tiefkühl Reparatur Wien",
        metaTitle: "Tiefkühl Reparatur Wien | MONTER Service",
        description: "Tiefkühl Reparatur in Wien: Hilfe bei Temperaturverlust, Vereisung, Alarmen und Ausfällen. Jetzt schnell telefonisch klären.",
        h1: "Tiefkühl Reparatur in Wien",
        category: "Tiefkühlgerät",
        intro: "Bei Tiefkühlgeräten zählt Zeit. Wenn die Temperatur steigt, ein Alarm erscheint oder starke Vereisung entsteht, sollte rasch entschieden werden, ob Reparatur möglich und sinnvoll ist.",
        sections: [
            {
                title: "Temperaturverlust richtig bewerten",
                body: "Je nach Dauer des Ausfalls können Lebensmittel gefährdet sein. Eine klare Information über Temperatur, Laufverhalten und Geräuschbild hilft bei der Einschätzung."
            },
            {
                title: "Vereisung und Türdichtung",
                body: "Starke Vereisung kann durch undichte Dichtungen, falsche Nutzung oder technische Probleme entstehen. Wiederkehrende Vereisung sollte geprüft werden."
            },
            {
                title: "Reparatur oder Austausch",
                body: "Gerätealter, Energieeffizienz und Ersatzteilkosten bestimmen, ob eine Reparatur wirtschaftlich ist. Wir geben eine ehrliche Orientierung."
            }
        ],
        checklist: [
            "Temperatur prüfen",
            "Alarm notieren",
            "Dichtung ansehen",
            "Gerätealter schätzen",
            "Sofort anrufen"
        ]
    }
];
function getServicePage(slug) {
    return servicePages.find((service)=>service.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/siteConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    siteUrl: "https://tcc-reparatur-service.at",
    serviceName: "MONTER Reparatur & Service",
    companyName: "Tech Craft Consulting GmbH",
    address: {
        street: "Rappgasse 1/6",
        postalCode: "1210",
        city: "Wien",
        country: "AT"
    },
    email: "office@tccreparatur.at",
    phoneDisplay: "+43 1 4171346",
    phoneHref: "+4314171346",
    vatId: "ATU82408379",
    social: {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        tiktok: "https://www.tiktok.com/"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/blog/posts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$marken$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/marken/brands.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$leistungen$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/leistungen/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/siteConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const emergencyPhoneDisplay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phoneDisplay;
const emergencyPhoneHref = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$siteConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phoneHref;
const repairDevices = [
    {
        label: "Waschmaschine",
        href: "/leistungen/waschmaschine-reparatur-wien"
    },
    {
        label: "Geschirrspüler",
        href: "/leistungen/geschirrspueler-reparatur-wien"
    },
    {
        label: "Backofen & Herd",
        href: "/leistungen/backofen-herd-reparatur-wien"
    },
    {
        label: "Trockner",
        href: "/leistungen/trockner-reparatur-wien"
    },
    {
        label: "Kühlschrank",
        href: "/leistungen/kuehlschrank-reparatur-wien"
    },
    {
        label: "Tiefkühlgerät",
        href: "/leistungen/tiefkuehl-reparatur-wien"
    }
];
const repairBrandsNav = [
    {
        label: "Bosch",
        href: "/marken/bosch-reparatur-wien"
    },
    {
        label: "Miele",
        href: "/marken/miele-reparatur-wien"
    },
    {
        label: "Siemens",
        href: "/marken/siemens-reparatur-wien"
    },
    {
        label: "AEG",
        href: "/marken/aeg-reparatur-wien"
    },
    {
        label: "Gorenje",
        href: "/marken/gorenje-reparatur-wien"
    },
    {
        label: "Beko",
        href: "/marken/beko-reparatur-wien"
    }
];
const additionalServiceLinks = [
    {
        label: "Preise & Pauschalen",
        href: "/preise"
    },
    {
        label: "Anfahrtsgebiete",
        href: "/#anfahrt"
    },
    {
        label: "Geräte-Retter-Prämie",
        href: "/#kontakt"
    },
    {
        label: "Firmenkunden",
        href: "/#geschaeftskunden"
    }
];
const geraetepflegeLinks = [
    {
        label: "Gerätepflege & Reinigung",
        href: "/kontakt"
    },
    {
        label: "Geräte-Retter-Prämie",
        href: "/#kontakt"
    },
    {
        label: "Wartungsempfehlung",
        href: "/kontakt"
    },
    {
        label: "Pflegeprodukte & Zubehör",
        href: "/kontakt"
    }
];
// Hauptnavigation — Unterpunkte folgen noch
const primaryNavGroup = [
    {
        label: "Garagentore",
        href: "/garagentor-reparatur-wien"
    },
    {
        label: "Haushaltsgeräte",
        href: "/#leistungen"
    },
    {
        label: "Marken",
        href: "/#marken"
    },
    {
        label: "Gerätereinigung",
        href: "/kontakt"
    }
];
const customerNavLink = {
    label: "Unsere Kunden",
    href: "/#bewertungen"
};
const secondaryNavGroup = [
    {
        label: "Service",
        href: "/kontakt"
    },
    {
        label: "Gerätekauf",
        href: "/kontakt"
    },
    {
        label: "Ersatzteile",
        href: "/kontakt"
    }
];
const companyLinks = [
    {
        label: "Über MONTER",
        href: "/ueber-uns"
    },
    {
        label: "Unsere Arbeitsweise",
        href: "/ueber-uns#arbeitsweise"
    },
    {
        label: "Bewertungen",
        href: "/#bewertungen"
    }
];
const contentLinks = [
    {
        label: "Blog & Ratgeber",
        href: "/blog"
    },
    {
        label: "FAQ",
        href: "/#faq"
    },
    {
        label: "Impressum",
        href: "/impressum"
    }
];
const megaMenus = [
    {
        id: "service",
        label: "Geräte",
        columns: [
            {
                eyebrow: "Geräte",
                items: repairDevices
            },
            {
                eyebrow: "Mehr Service",
                items: additionalServiceLinks
            }
        ],
        feature: {
            eyebrow: "Notdienst",
            title: "Geräteausfall in Wien?",
            text: "Telefon ist der schnellste Weg zu einer Einschätzung. Wir prüfen Fehlerbild, Termin und Aufwand direkt im Gespräch.",
            primaryLabel: emergencyPhoneDisplay,
            primaryHref: `tel:${emergencyPhoneHref}`,
            secondaryLabel: "Anfrage stellen",
            secondaryHref: "/kontakt"
        }
    },
    {
        id: "marken",
        label: "Marken",
        columns: [
            {
                eyebrow: "Schwerpunkt-Marken",
                items: repairBrandsNav
            },
            {
                eyebrow: "Weitere häufige Marken",
                items: [
                    {
                        label: "Elektra Bregenz",
                        href: "/#marken"
                    },
                    {
                        label: "Whirlpool",
                        href: "/#marken"
                    },
                    {
                        label: "Bauknecht",
                        href: "/#marken"
                    },
                    {
                        label: "Liebherr",
                        href: "/#marken"
                    },
                    {
                        label: "Samsung",
                        href: "/#marken"
                    },
                    {
                        label: "NEFF",
                        href: "/#marken"
                    }
                ]
            },
            {
                eyebrow: "Service",
                items: [
                    {
                        label: "Komplette Markenliste",
                        href: "/#marken"
                    },
                    {
                        label: "Marke nicht gefunden?",
                        href: "/kontakt"
                    },
                    {
                        label: "Ersatzteile prüfen",
                        href: "/kontakt"
                    }
                ]
            }
        ],
        feature: {
            eyebrow: "Markenoffen",
            title: "Wir reparieren über 60 Marken.",
            text: "Bosch, Siemens, Miele, AEG, Gorenje, Elektra Bregenz und viele mehr — markenoffen, mit ehrlicher Diagnose.",
            primaryLabel: "Alle Marken ansehen",
            primaryHref: "/#marken",
            secondaryLabel: "Anfrage stellen",
            secondaryHref: "/kontakt"
        }
    },
    {
        id: "pflege",
        label: "Gerätepflege",
        columns: [
            {
                eyebrow: "Pflege & Wartung",
                items: geraetepflegeLinks
            },
            {
                eyebrow: "Geräte",
                items: repairDevices.slice(0, 4)
            },
            {
                eyebrow: "Service",
                items: [
                    {
                        label: "Preise & Pauschalen",
                        href: "/preise"
                    },
                    {
                        label: "Anfrage stellen",
                        href: "/kontakt"
                    },
                    {
                        label: "Alle Leistungen",
                        href: "/#leistungen"
                    }
                ]
            }
        ],
        feature: {
            eyebrow: "Gerätepflege",
            title: "Länger nutzen, besser pflegen.",
            text: "Reinigung, Wartung und klare Empfehlungen — damit Ihre Geräte zuverlässig bleiben und Reparaturen seltener werden.",
            primaryLabel: "Beratung anfragen",
            primaryHref: "/kontakt",
            secondaryLabel: emergencyPhoneDisplay,
            secondaryHref: `tel:${emergencyPhoneHref}`
        }
    },
    {
        id: "ueber",
        label: "Über Uns",
        columns: [
            {
                eyebrow: "Unternehmen",
                items: companyLinks
            },
            {
                eyebrow: "Inhalte",
                items: contentLinks
            }
        ],
        feature: {
            eyebrow: "Hintergrund",
            title: "MONTER Reparatur & Service",
            text: "Service-Auftritt der Tech Craft Consulting GmbH. Reparatur mit Technik, Hausverstand und klarer Haltung.",
            primaryLabel: "Mehr über uns",
            primaryHref: "/ueber-uns",
            secondaryLabel: "Direkt anrufen",
            secondaryHref: `tel:${emergencyPhoneHref}`
        }
    }
];
const popularSearches = [
    "Waschmaschine",
    "Geschirrspüler",
    "Bosch Reparatur",
    "Notdienst",
    "Preise",
    "Geräte-Retter-Prämie"
];
const staticSegmentLabels = {
    leistungen: "Leistungen",
    marken: "Marken",
    blog: "Blog & Ratgeber",
    preise: "Preise",
    kontakt: "Kontakt",
    "ueber-uns": "Über Uns",
    impressum: "Impressum",
    agb: "AGB",
    dsgvo: "Datenschutz"
};
function buildBreadcrumbs(pathname) {
    if (!pathname || pathname === "/") return [];
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return [];
    const crumbs = [
        {
            label: "Start",
            href: "/"
        }
    ];
    let path = "";
    segments.forEach((segment)=>{
        path += `/${segment}`;
        let label = staticSegmentLabels[segment];
        if (!label) {
            const service = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$leistungen$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicePages"].find((s)=>s.slug === segment);
            const brand = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$marken$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandPages"].find((b)=>b.slug === segment);
            const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].find((p)=>p.slug === segment);
            label = service?.title || (brand ? `${brand.brand} Reparatur` : undefined) || post?.title || segment;
        }
        crumbs.push({
            label,
            href: path
        });
    });
    return crumbs;
}
function SiteHeader({ logoSrc }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accountOpen, setAccountOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAtTop, setIsAtTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [navHidden, setNavHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [headerHovered, setHeaderHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const accountPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cartPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollAccumRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTickingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const breadcrumbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteHeader.useMemo[breadcrumbs]": ()=>buildBreadcrumbs(pathname || "/")
    }["SiteHeader.useMemo[breadcrumbs]"], [
        pathname
    ]);
    const updateScrollState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteHeader.useCallback[updateScrollState]": ()=>{
            if (scrollTickingRef.current) return;
            scrollTickingRef.current = true;
            window.requestAnimationFrame({
                "SiteHeader.useCallback[updateScrollState]": ()=>{
                    const currentY = window.scrollY;
                    const previousY = lastScrollYRef.current;
                    const delta = currentY - previousY;
                    setIsAtTop(currentY < 12);
                    if (currentY < 96) {
                        scrollAccumRef.current = 0;
                        setNavHidden(false);
                    } else if (delta > 0) {
                        scrollAccumRef.current += delta;
                        if (scrollAccumRef.current > 28) {
                            setNavHidden(true);
                            setActiveMenu(null);
                            scrollAccumRef.current = 0;
                        }
                    } else {
                        scrollAccumRef.current = 0;
                    }
                    lastScrollYRef.current = currentY;
                    scrollTickingRef.current = false;
                }
            }["SiteHeader.useCallback[updateScrollState]"]);
        }
    }["SiteHeader.useCallback[updateScrollState]"], []);
    const closeAllOverlays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteHeader.useCallback[closeAllOverlays]": ()=>{
            setActiveMenu(null);
            setSearchOpen(false);
            setAccountOpen(false);
            setCartOpen(false);
        }
    }["SiteHeader.useCallback[closeAllOverlays]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect
            closeAllOverlays();
            setMobileMenuOpen(false);
            updateScrollState();
        }
    }["SiteHeader.useEffect"], [
        pathname,
        closeAllOverlays,
        updateScrollState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            updateScrollState();
            window.addEventListener("scroll", updateScrollState, {
                passive: true
            });
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("scroll", updateScrollState)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        updateScrollState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const onKey = {
                "SiteHeader.useEffect.onKey": (event)=>{
                    if (event.key === "Escape") {
                        closeAllOverlays();
                        setMobileMenuOpen(false);
                    }
                }
            }["SiteHeader.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("keydown", onKey)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        closeAllOverlays
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (searchOpen) {
                window.requestAnimationFrame({
                    "SiteHeader.useEffect": ()=>searchInputRef.current?.focus()
                }["SiteHeader.useEffect"]);
            }
        }
    }["SiteHeader.useEffect"], [
        searchOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!accountOpen) return;
            const onClick = {
                "SiteHeader.useEffect.onClick": (event)=>{
                    if (accountPanelRef.current && !accountPanelRef.current.contains(event.target)) {
                        setAccountOpen(false);
                    }
                }
            }["SiteHeader.useEffect.onClick"];
            window.addEventListener("mousedown", onClick);
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("mousedown", onClick)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        accountOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            if (!cartOpen) return;
            const onClick = {
                "SiteHeader.useEffect.onClick": (event)=>{
                    if (cartPanelRef.current && !cartPanelRef.current.contains(event.target)) {
                        setCartOpen(false);
                    }
                }
            }["SiteHeader.useEffect.onClick"];
            window.addEventListener("mousedown", onClick);
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener("mousedown", onClick)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        cartOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const overlayOpen = Boolean(activeMenu) || searchOpen || mobileMenuOpen;
            if (typeof document === "undefined") return;
            document.body.style.overflow = overlayOpen ? "hidden" : "";
            return ({
                "SiteHeader.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], [
        activeMenu,
        searchOpen,
        mobileMenuOpen
    ]);
    const searchIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteHeader.useMemo[searchIndex]": ()=>{
            const fromServices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$leistungen$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["servicePages"].map({
                "SiteHeader.useMemo[searchIndex].fromServices": (service)=>({
                        title: service.title,
                        description: service.description,
                        href: `/leistungen/${service.slug}`,
                        category: "Leistung",
                        keywords: `${service.title} ${service.description} ${service.category} reparatur`
                    })
            }["SiteHeader.useMemo[searchIndex].fromServices"]);
            const fromBrands = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$marken$2f$brands$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brandPages"].map({
                "SiteHeader.useMemo[searchIndex].fromBrands": (brand)=>({
                        title: `${brand.brand} Reparatur Wien`,
                        description: brand.description,
                        href: `/marken/${brand.slug}`,
                        category: "Marke",
                        keywords: `${brand.brand} marke reparatur ${brand.description}`
                    })
            }["SiteHeader.useMemo[searchIndex].fromBrands"]);
            const fromBlog = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$posts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blogPosts"].map({
                "SiteHeader.useMemo[searchIndex].fromBlog": (post)=>({
                        title: post.title,
                        description: post.description,
                        href: `/blog/${post.slug}`,
                        category: "Blog",
                        keywords: `${post.title} ${post.description} ${post.category}`
                    })
            }["SiteHeader.useMemo[searchIndex].fromBlog"]);
            const fromStatic = [
                {
                    title: "Preise & Pauschalen",
                    description: "Anfahrt, Diagnose, Arbeitspauschale und Material — transparent.",
                    href: "/preise",
                    category: "Service",
                    keywords: "preise pauschale anfahrt diagnose kosten"
                },
                {
                    title: "Kontakt & Anfrage",
                    description: "Telefonisch oder per Anfrageformular Termin abstimmen.",
                    href: "/kontakt",
                    category: "Service",
                    keywords: "kontakt anfrage termin notdienst telefon"
                },
                {
                    title: "Über MONTER Reparatur & Service",
                    description: "Service-Auftritt der Tech Craft Consulting GmbH in Wien.",
                    href: "/ueber-uns",
                    category: "Unternehmen",
                    keywords: "über uns unternehmen tcc tech craft"
                }
            ];
            return [
                ...fromServices,
                ...fromBrands,
                ...fromBlog,
                ...fromStatic
            ];
        }
    }["SiteHeader.useMemo[searchIndex]"], []);
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteHeader.useMemo[searchResults]": ()=>{
            const query = searchQuery.trim().toLowerCase();
            if (!query) return [];
            const tokens = query.split(/\s+/).filter(Boolean);
            return searchIndex.map({
                "SiteHeader.useMemo[searchResults]": (entry)=>{
                    const haystack = `${entry.title} ${entry.keywords}`.toLowerCase();
                    let score = 0;
                    tokens.forEach({
                        "SiteHeader.useMemo[searchResults]": (token)=>{
                            if (haystack.includes(token)) score += 1;
                            if (entry.title.toLowerCase().includes(token)) score += 2;
                        }
                    }["SiteHeader.useMemo[searchResults]"]);
                    return {
                        entry,
                        score
                    };
                }
            }["SiteHeader.useMemo[searchResults]"]).filter({
                "SiteHeader.useMemo[searchResults]": ({ score })=>score > 0
            }["SiteHeader.useMemo[searchResults]"]).sort({
                "SiteHeader.useMemo[searchResults]": (a, b)=>b.score - a.score
            }["SiteHeader.useMemo[searchResults]"]).slice(0, 8).map({
                "SiteHeader.useMemo[searchResults]": ({ entry })=>entry
            }["SiteHeader.useMemo[searchResults]"]);
        }
    }["SiteHeader.useMemo[searchResults]"], [
        searchQuery,
        searchIndex
    ]);
    const onSearchSubmit = (event)=>{
        event.preventDefault();
        if (searchResults.length > 0) {
            window.location.href = searchResults[0].href;
        }
    };
    const onSearchKey = (event)=>{
        if (event.key === "Escape") {
            setSearchOpen(false);
        }
    };
    const showMegaMenu = (id)=>{
        setSearchOpen(false);
        setAccountOpen(false);
        setActiveMenu(id);
    };
    const closeMegaMenu = ()=>{
        setActiveMenu(null);
    };
    const headerBarSolid = isAtTop || Boolean(activeMenu) || searchOpen || mobileMenuOpen || !navHidden;
    const headerBarBg = headerBarSolid ? "bg-[color:var(--ink)]" : "bg-[rgba(10,10,10,0.55)] backdrop-blur-md backdrop-saturate-150";
    const navVisible = !navHidden || headerHovered || Boolean(activeMenu) || searchOpen || mobileMenuOpen;
    const onHeaderZoneLeave = ()=>{
        if (navHidden) {
            setHeaderHovered(false);
            setActiveMenu(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-[80] w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-visible text-white",
                        onMouseLeave: onHeaderZoneLeave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": "true",
                                className: `pointer-events-none absolute inset-x-0 top-0 z-0 transition-[height,background-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerBarBg} ${navVisible ? "h-[calc(100%+3.5rem)]" : "h-full"}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/SiteHeader.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-40 mx-auto grid w-full max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-2.5 sm:px-8 lg:py-3",
                                onMouseEnter: ()=>setHeaderHovered(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${emergencyPhoneHref}`,
                                        className: "col-start-1 row-start-1 flex min-w-0 max-w-[42vw] flex-col justify-self-start self-center sm:max-w-none",
                                        "aria-label": `Reparatur-Hotline ${emergencyPhoneDisplay}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/70 sm:text-[0.65rem] sm:tracking-[0.18em]",
                                                children: "Reparatur"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 text-[0.85rem] font-bold tracking-tight text-white transition hover:text-[color:var(--accent)] sm:text-lg",
                                                children: emergencyPhoneDisplay
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "col-start-1 col-end-[-1] row-start-1 flex shrink-0 items-center justify-self-center lg:col-auto lg:col-start-2",
                                        "aria-label": "MONTER Reparatur & Service Startseite",
                                        onClick: closeAllOverlays,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: logoSrc,
                                            alt: "MONTER Reparatur & Service",
                                            width: 300,
                                            height: 80,
                                            priority: true,
                                            unoptimized: true,
                                            className: "h-8 w-auto sm:h-9"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                        lineNumber: 539,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 col-start-3 flex shrink-0 items-center justify-self-end gap-1 sm:gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setActiveMenu(null);
                                                    setAccountOpen(false);
                                                    setCartOpen(false);
                                                    setSearchOpen((current)=>!current);
                                                },
                                                "aria-label": searchOpen ? "Suche schließen" : "Suche öffnen",
                                                "aria-expanded": searchOpen,
                                                className: `grid h-10 w-10 place-items-center transition ${searchOpen ? "text-[color:var(--nav-text-hover)]" : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"}`,
                                                children: searchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 16 16",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M2 2l12 12M14 2L2 14",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.3",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 20 20",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "9",
                                                            cy: "9",
                                                            r: "6",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.3",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m13.5 13.5 4 4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.3",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 557,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setActiveMenu(null);
                                                            setSearchOpen(false);
                                                            setCartOpen(false);
                                                            setAccountOpen((current)=>!current);
                                                        },
                                                        "aria-label": accountOpen ? "Kontobereich schließen" : "Kontobereich öffnen",
                                                        "aria-expanded": accountOpen,
                                                        className: `hidden h-10 w-10 place-items-center transition sm:grid ${accountOpen ? "text-[color:var(--nav-text-hover)]" : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 20 20",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "10",
                                                                    cy: "7",
                                                                    r: "3.2",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.3",
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 17c.8-3.4 3.6-5.2 7-5.2s6.2 1.8 7 5.2",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.3",
                                                                    fill: "none",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 17
                                                    }, this),
                                                    accountOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: accountPanelRef,
                                                        className: "absolute right-0 top-full z-[110] mt-3 w-[22rem] max-w-[calc(100vw-2rem)] border border-[color:var(--border)] bg-white p-7 text-[color:var(--ink)] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tracking-eyebrow text-[color:var(--accent)]",
                                                                children: "Mein MONTER"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-display mt-5 text-2xl font-normal leading-tight tracking-tight",
                                                                children: "Noch nicht verfügbar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 625,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                                                                children: "Der Kundenbereich für Verlauf, Rechnungen und Termine ist aktuell in Vorbereitung. Bitte melden Sie sich vorerst telefonisch oder über das Anfrageformular."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-7 flex flex-col gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `tel:${emergencyPhoneHref}`,
                                                                        className: "btn-primary w-full text-center",
                                                                        children: emergencyPhoneDisplay
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/kontakt",
                                                                        onClick: ()=>setAccountOpen(false),
                                                                        className: "inline-flex w-full items-center justify-center border-b border-[color:var(--ink)] py-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                                                        children: "Anfrage stellen"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 638,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 19
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 590,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setActiveMenu(null);
                                                            setSearchOpen(false);
                                                            setAccountOpen(false);
                                                            setCartOpen((current)=>!current);
                                                        },
                                                        "aria-label": cartOpen ? "Warenkorb schließen" : "Warenkorb öffnen",
                                                        "aria-expanded": cartOpen,
                                                        className: `hidden h-10 w-10 place-items-center transition sm:grid ${cartOpen ? "text-[color:var(--nav-text-hover)]" : "text-[color:var(--nav-text)] hover:text-[color:var(--nav-text-hover)]"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.6",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "9",
                                                                    cy: "21",
                                                                    r: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "20",
                                                                    cy: "21",
                                                                    r: "1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 667,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 651,
                                                        columnNumber: 17
                                                    }, this),
                                                    cartOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: cartPanelRef,
                                                        className: "absolute right-0 top-full z-[110] mt-3 w-[22rem] max-w-[calc(100vw-2rem)] border border-[color:var(--border)] bg-white p-7 text-[color:var(--ink)] shadow-[0_28px_70px_-20px_rgba(0,0,0,0.45)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]",
                                                                children: "Warenkorb"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "mt-2 text-[1.35rem] font-medium leading-tight tracking-[-0.01em]",
                                                                children: "Noch nicht verfügbar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                                                                children: "Die Bestellfunktion ist aktuell in Vorbereitung. Für Leistungen und Ersatzteile erstellen wir Ihnen gerne ein individuelles Angebot — telefonisch oder über das Anfrageformular."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 flex flex-col gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `tel:${emergencyPhoneHref}`,
                                                                        className: "btn-primary w-full text-center",
                                                                        children: emergencyPhoneDisplay
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/kontakt",
                                                                        onClick: ()=>setCartOpen(false),
                                                                        className: "inline-flex w-full items-center justify-center border-b border-[color:var(--ink)] py-2 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-[color:var(--ink)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]",
                                                                        children: "Anfrage stellen"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 705,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 19
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 650,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setMobileMenuOpen((current)=>!current),
                                                "aria-label": mobileMenuOpen ? "Menü schließen" : "Menü öffnen",
                                                "aria-expanded": mobileMenuOpen,
                                                "aria-controls": "mobile-navigation",
                                                className: "grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:border-white lg:hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sr-only",
                                                        children: mobileMenuOpen ? "Menü schließen" : "Menü öffnen"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex w-5 flex-col gap-1.5",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-px rounded-full bg-current transition ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 727,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-px rounded-full bg-current transition ${mobileMenuOpen ? "opacity-0" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `h-px rounded-full bg-current transition ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/SiteHeader.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-x-0 top-[calc(100%-1px)] z-10 hidden lg:block transition-[max-height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeMenu ? "overflow-visible" : "overflow-hidden"} ${navVisible ? activeMenu ? "max-h-[80vh]" : "max-h-[3.5rem]" : "max-h-0 pointer-events-none"}`,
                                onMouseEnter: ()=>setHeaderHovered(true),
                                onMouseLeave: closeMegaMenu,
                                "aria-hidden": !navVisible,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative transition-opacity ease-out ${navVisible ? "opacity-100 duration-300 delay-100" : "invisible opacity-0 duration-0"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "mx-auto flex w-full max-w-[88rem] flex-wrap items-center justify-center gap-x-10 gap-y-1.5 px-5 pb-3 pt-3 sm:gap-x-12 sm:px-8",
                                            "aria-label": "Hauptnavigation",
                                            children: [
                                                primaryNavGroup.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "nav-item py-1",
                                                        onClick: closeAllOverlays,
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 774,
                                                        columnNumber: 17
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: customerNavLink.href,
                                                    className: "nav-item py-1",
                                                    onClick: closeAllOverlays,
                                                    children: customerNavLink.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden h-4 w-px self-center bg-white/20 lg:block",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 15
                                                }, this),
                                                secondaryNavGroup.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "nav-item py-1",
                                                        onClick: closeAllOverlays,
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 17
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 769,
                                            columnNumber: 13
                                        }, this),
                                        activeMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "nav-divider",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 806,
                                            columnNumber: 27
                                        }, this) : null,
                                        megaMenus.map((menu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                id: `mega-${menu.id}`,
                                                className: `nav-dropdown ${activeMenu === menu.id ? "block" : "hidden"}`,
                                                onMouseEnter: ()=>showMegaMenu(menu.id),
                                                "aria-hidden": activeMenu !== menu.id,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto grid w-full max-w-[88rem] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_18rem] lg:gap-16 lg:py-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `grid gap-10 ${menu.columns.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`,
                                                            children: menu.columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "nav-dropdown-eyebrow",
                                                                            children: column.eyebrow
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                                            lineNumber: 826,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "nav-dropdown-list",
                                                                            children: column.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: item.href,
                                                                                    onClick: closeAllOverlays,
                                                                                    className: "nav-dropdown-link",
                                                                                    children: item.label
                                                                                }, `${menu.id}-${item.label}`, false, {
                                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                                    lineNumber: 829,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                                            lineNumber: 827,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, column.eyebrow, true, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 825,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 817,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                                            className: "border-l border-[color:var(--nav-divider)] pl-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "nav-dropdown-eyebrow",
                                                                    children: menu.feature.eyebrow
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 844,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "nav-dropdown-title mt-0 normal-case",
                                                                    children: menu.feature.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 845,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "nav-dropdown-body mt-4",
                                                                    children: menu.feature.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-8 flex flex-col gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: menu.feature.primaryHref,
                                                                            onClick: closeAllOverlays,
                                                                            className: "nav-dropdown-link py-2",
                                                                            children: menu.feature.primaryLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        menu.feature.secondaryLabel && menu.feature.secondaryHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: menu.feature.secondaryHref,
                                                                            onClick: closeAllOverlays,
                                                                            className: "nav-dropdown-link py-2",
                                                                            children: menu.feature.secondaryLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                                            lineNumber: 860,
                                                                            columnNumber: 25
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 851,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 17
                                                }, this)
                                            }, menu.id, false, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 809,
                                                columnNumber: 15
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 762,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/SiteHeader.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-x-0 top-full z-[95] border-b border-[color:var(--border)] bg-white text-[color:var(--ink)] shadow-[0_32px_60px_-30px_rgba(0,0,0,0.45)] ${searchOpen ? "block" : "hidden"}`,
                                "aria-hidden": !searchOpen,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:py-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: onSearchSubmit,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cap-line tracking-eyebrow text-[color:var(--accent)]",
                                                        children: "Suche"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 886,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 flex items-center gap-4 border-b-2 border-[color:var(--ink)] pb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "22",
                                                                height: "22",
                                                                viewBox: "0 0 20 20",
                                                                "aria-hidden": "true",
                                                                className: "shrink-0 text-[color:var(--muted)]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "9",
                                                                        cy: "9",
                                                                        r: "6",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.4",
                                                                        fill: "none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 895,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "m13.5 13.5 4 4",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.4",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 896,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                ref: searchInputRef,
                                                                type: "search",
                                                                value: searchQuery,
                                                                onChange: (event)=>setSearchQuery(event.target.value),
                                                                onKeyDown: onSearchKey,
                                                                placeholder: "Was möchten Sie reparieren?",
                                                                className: "font-display flex-1 bg-transparent text-2xl font-light tracking-tight text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-soft)] sm:text-4xl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 898,
                                                                columnNumber: 21
                                                            }, this),
                                                            searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setSearchQuery(""),
                                                                className: "text-xs font-medium uppercase tracking-[0.16em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]",
                                                                children: "Zurücksetzen"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 23
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                lineNumber: 885,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 884,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 grid gap-12 lg:grid-cols-[1fr_22rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: searchQuery.trim() ? searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tracking-eyebrow text-[color:var(--muted)]",
                                                                children: [
                                                                    searchResults.length,
                                                                    " Treffer"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 925,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 grid gap-0",
                                                                children: searchResults.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: result.href,
                                                                        onClick: closeAllOverlays,
                                                                        className: "block border-b border-[color:var(--border)] py-5 transition hover:bg-[color:var(--bg-muted)]",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]",
                                                                                    children: result.category
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                                    lineNumber: 937,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                    className: "font-display mt-2 truncate text-xl font-normal tracking-tight text-[color:var(--ink)] sm:text-2xl",
                                                                                    children: result.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                                    lineNumber: 940,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "mt-2 line-clamp-1 text-sm font-light text-[color:var(--muted)]",
                                                                                    children: result.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                                    lineNumber: 943,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                                            lineNumber: 936,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, `${result.href}-${result.title}`, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 930,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 928,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-[color:var(--border)] bg-[color:var(--bg-muted)] p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-display text-2xl font-light tracking-tight",
                                                                children: [
                                                                    "Keine Treffer für „",
                                                                    searchQuery,
                                                                    "“."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 953,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                                                                children: "Rufen Sie uns kurz an — wir prüfen, ob die Reparatur möglich ist."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `tel:${emergencyPhoneHref}`,
                                                                className: "btn-primary mt-6",
                                                                children: emergencyPhoneDisplay
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 959,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 952,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tracking-eyebrow text-[color:var(--muted)]",
                                                                children: "Häufig gesucht"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 966,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-6 flex flex-wrap gap-2",
                                                                children: popularSearches.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setSearchQuery(term),
                                                                        className: "border border-[color:var(--border)] bg-white px-4 py-2.5 text-sm font-medium tracking-tight transition hover:border-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white",
                                                                        children: term
                                                                    }, term, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 969,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SiteHeader.tsx",
                                                                lineNumber: 967,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                                    className: "bg-[color:var(--bg-muted)] p-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "cap-line tracking-eyebrow text-[color:var(--accent)]",
                                                            children: "Direkt klären"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 984,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display mt-7 text-2xl font-light leading-tight tracking-tight",
                                                            children: "Schneller per Anruf."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                                                            children: "Bei dringenden Ausfällen oder unklarem Fehlerbild ist das Telefon der schnellste Weg."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `tel:${emergencyPhoneHref}`,
                                                            className: "font-display mt-6 block text-3xl font-light tracking-tight text-[color:var(--accent)]",
                                                            children: emergencyPhoneDisplay
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 992,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/kontakt",
                                                            onClick: closeAllOverlays,
                                                            className: "link-arrow mt-6",
                                                            children: [
                                                                "Anfrageformular",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 16 16",
                                                                    "aria-hidden": "true",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M1 8h13M9 3l5 5-5 5",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.2",
                                                                        fill: "none"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                                                        lineNumber: 1001,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                                    lineNumber: 1000,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 998,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 983,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 920,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 883,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/SiteHeader.tsx",
                                lineNumber: 877,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/SiteHeader.tsx",
                        lineNumber: 509,
                        columnNumber: 9
                    }, this),
                    breadcrumbs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[color:var(--border)] bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-full max-w-[88rem] px-5 sm:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Breadcrumbs",
                                className: "py-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "flex min-w-0 flex-wrap items-center gap-y-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-[color:var(--muted)]",
                                    children: breadcrumbs.map((crumb, index)=>{
                                        const isLast = index === breadcrumbs.length - 1;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex min-w-0 items-center",
                                            children: [
                                                index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "mx-3 text-[color:var(--border-strong)]",
                                                    children: "/"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 27
                                                }, this) : null,
                                                isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate normal-case tracking-tight text-[color:var(--ink)]",
                                                    "aria-current": "page",
                                                    children: crumb.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: crumb.href,
                                                    className: "truncate transition hover:text-[color:var(--accent)]",
                                                    children: crumb.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, `${crumb.href}-${index}`, true, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/SiteHeader.tsx",
                                lineNumber: 1014,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/SiteHeader.tsx",
                            lineNumber: 1013,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/SiteHeader.tsx",
                        lineNumber: 1012,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "mobile-navigation",
                        className: `overflow-hidden border-t border-white/10 bg-[color:var(--ink)] text-white transition-[max-height,opacity] duration-300 lg:hidden ${mobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[85vh] overflow-y-auto bg-white px-5 pb-8 pt-6 text-[color:var(--ink)] sm:px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: (event)=>{
                                        event.preventDefault();
                                        if (searchResults.length > 0) {
                                            window.location.href = searchResults[0].href;
                                        }
                                    },
                                    className: "mb-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 border-b border-[color:var(--ink)] pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 20 20",
                                                    "aria-hidden": "true",
                                                    className: "shrink-0 text-[color:var(--muted)]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "9",
                                                            cy: "9",
                                                            r: "6",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.4",
                                                            fill: "none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 1071,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m13.5 13.5 4 4",
                                                            stroke: "currentColor",
                                                            strokeWidth: "1.4",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1064,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "search",
                                                    value: searchQuery,
                                                    onChange: (event)=>setSearchQuery(event.target.value),
                                                    placeholder: "Suche · Was möchten Sie reparieren?",
                                                    className: "flex-1 bg-transparent py-2 text-base font-medium tracking-tight text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-soft)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1074,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1063,
                                            columnNumber: 15
                                        }, this),
                                        searchQuery.trim() && searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-0",
                                            children: searchResults.slice(0, 5).map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: result.href,
                                                    onClick: ()=>{
                                                        setMobileMenuOpen(false);
                                                    },
                                                    className: "block border-b border-[color:var(--border)] py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]",
                                                            children: result.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 1093,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 truncate text-sm font-medium tracking-tight",
                                                            children: result.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                                            lineNumber: 1096,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, `m-${result.href}-${result.title}`, true, {
                                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1054,
                                    columnNumber: 13
                                }, this),
                                primaryNavGroup.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight",
                                        children: link.label
                                    }, `m-${link.label}`, false, {
                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: customerNavLink.href,
                                    onClick: ()=>setMobileMenuOpen(false),
                                    className: "block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight",
                                    children: customerNavLink.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-2 h-px bg-[color:var(--border)]",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1123,
                                    columnNumber: 13
                                }, this),
                                secondaryNavGroup.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: ()=>setMobileMenuOpen(false),
                                        className: "block border-b border-[color:var(--border)] py-4 text-[1.05rem] font-semibold tracking-tight",
                                        children: link.label
                                    }, `m-${link.label}`, false, {
                                        fileName: "[project]/src/app/SiteHeader.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "group border-b border-[color:var(--border)] py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "cursor-pointer list-none text-[1.05rem] font-semibold tracking-tight",
                                            children: "Mein MONTER"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-sm font-light leading-relaxed text-[color:var(--muted)]",
                                            children: "Der Kundenbereich ist noch nicht verfügbar. Bitte melden Sie sich vorerst telefonisch oder über das Anfrageformular."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-7 grid gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${emergencyPhoneHref}`,
                                            className: "btn-primary justify-center",
                                            children: emergencyPhoneDisplay
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/kontakt",
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "btn-ghost justify-center",
                                            children: "Kontakt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SiteHeader.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SiteHeader.tsx",
                                    lineNumber: 1146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/SiteHeader.tsx",
                            lineNumber: 1053,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/SiteHeader.tsx",
                        lineNumber: 1047,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/SiteHeader.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[70] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${activeMenu || searchOpen ? "opacity-100" : "pointer-events-none opacity-0"}`,
                "aria-hidden": "true",
                onClick: closeAllOverlays
            }, void 0, false, {
                fileName: "[project]/src/app/SiteHeader.tsx",
                lineNumber: 1163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SiteHeader, "C3zHfElxoDP/dgoVChInxCvP7hU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_0p930yx._.js.map