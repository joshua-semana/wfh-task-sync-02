"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/LoginCard.tsx":
/*!**********************************!*\
  !*** ./components/LoginCard.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst LoginCard = ()=>{\n    _s();\n    const [passwordInputType, setPasswordInputType] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"password\");\n    const [passwordState, setPasswordState] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const togglePasswordState = ()=>{\n        setPasswordState(!passwordState);\n        setPasswordInputType(passwordState ? \"password\" : \"text\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"border-none\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                className: \"text-center text-pretty\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                        className: \"text-xl sm:text-2xl font-bold tracking-tight\",\n                        children: \"Welcome to Task Sync\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                        children: \"Enter your credentials below to login to your account\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"\",\n                    className: \"grid gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"email\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"email\",\n                                    placeholder: \"name@lbrdc.com.ph\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                    htmlFor: \"password\",\n                                    children: \"Password\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                            type: passwordInputType,\n                                            id: \"password\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                            onClick: togglePasswordState,\n                                            type: \"button\",\n                                            variant: \"outline\",\n                                            size: \"icon\",\n                                            className: \"flex-none\",\n                                            children: passwordState ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_6__.EyeClosedIcon, {\n                                                className: \"size-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_6__.EyeOpenIcon, {\n                                                className: \"size-4\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-center w-full\",\n                    children: [\n                        \"Forgot your password?\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                variant: \"link\",\n                                size: \"sm\",\n                                className: \"px-0 h-4\",\n                                children: \"Click here\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joshu\\\\source\\\\repos\\\\wfh-task-sync - Copy\\\\components\\\\LoginCard.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginCard, \"HF/HobQY8QlBGpaXKHYQtGuD4Tk=\");\n_c = LoginCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginCard);\nvar _c;\n$RefreshReg$(_c, \"LoginCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9naW5DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRDtBQVFsQjtBQUNnQjtBQUNBO0FBQ3FCO0FBQ2xDO0FBRWpDLE1BQU1ZLFlBQVk7O0lBQ2hCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0QsTUFBTSxDQUFDSSxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQUM7SUFFbkQsTUFBTU0sc0JBQXNCO1FBQzFCRCxpQkFBaUIsQ0FBQ0Q7UUFDbEJELHFCQUFxQkMsZ0JBQWdCLGFBQWE7SUFDcEQ7SUFFQSxxQkFDRSw4REFBQ2QscURBQUlBO1FBQUNpQixXQUFVOzswQkFDZCw4REFBQ2IsMkRBQVVBO2dCQUFDYSxXQUFVOztrQ0FDcEIsOERBQUNaLDBEQUFTQTt3QkFBQ1ksV0FBVTtrQ0FBK0M7Ozs7OztrQ0FHcEUsOERBQUNmLGdFQUFlQTtrQ0FBQzs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ0QsNERBQVdBOzBCQUNWLDRFQUFDaUI7b0JBQUtDLFFBQU87b0JBQUdGLFdBQVU7O3NDQUN4Qiw4REFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDVix1REFBS0E7b0NBQUNjLFNBQVE7OENBQVE7Ozs7Ozs4Q0FDdkIsOERBQUNmLHVEQUFLQTtvQ0FBQ2dCLElBQUc7b0NBQVFDLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FFaEMsOERBQUNIOzRCQUFJSCxXQUFVOzs4Q0FDYiw4REFBQ1YsdURBQUtBO29DQUFDYyxTQUFROzhDQUFXOzs7Ozs7OENBQzFCLDhEQUFDRDtvQ0FBSUgsV0FBVTs7c0RBQ2IsOERBQUNYLHVEQUFLQTs0Q0FBQ2tCLE1BQU1aOzRDQUFtQlUsSUFBRzs7Ozs7O3NEQUNuQyw4REFBQ3ZCLHlEQUFNQTs0Q0FDTDBCLFNBQVNUOzRDQUNUUSxNQUFLOzRDQUNMRSxTQUFTOzRDQUNUQyxNQUFNOzRDQUNOVixXQUFVO3NEQUNUSCw4QkFDQyw4REFBQ04sZ0VBQWFBO2dEQUFDUyxXQUFVOzs7OzswRUFFekIsOERBQUNSLDhEQUFXQTtnREFBQ1EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSy9CLDhEQUFDbEIseURBQU1BOzRCQUFDeUIsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBRzFCLDhEQUFDckIsMkRBQVVBOzBCQUNULDRFQUFDeUI7b0JBQUVYLFdBQVU7O3dCQUE2Qjt3QkFDbEI7c0NBQ3RCLDhEQUFDWTtzQ0FDQyw0RUFBQzlCLHlEQUFNQTtnQ0FBQzJCLFNBQVM7Z0NBQVFDLE1BQU07Z0NBQU1WLFdBQVU7MENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEU7R0F4RE1OO0tBQUFBO0FBMEROLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5DYXJkLnRzeD81MGNhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCB7IEV5ZUNsb3NlZEljb24sIEV5ZU9wZW5JY29uIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9naW5DYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwYXNzd29yZElucHV0VHlwZSwgc2V0UGFzc3dvcmRJbnB1dFR5cGVdID0gdXNlU3RhdGUoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCBbcGFzc3dvcmRTdGF0ZSwgc2V0UGFzc3dvcmRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZFN0YXRlKCFwYXNzd29yZFN0YXRlKTtcclxuICAgIHNldFBhc3N3b3JkSW5wdXRUeXBlKHBhc3N3b3JkU3RhdGUgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImJvcmRlci1ub25lXCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcHJldHR5XCI+XHJcbiAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHNtOnRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodFwiPlxyXG4gICAgICAgICAgV2VsY29tZSB0byBUYXNrIFN5bmNcclxuICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPkVudGVyIHlvdXIgY3JlZGVudGlhbHMgYmVsb3cgdG8gbG9naW4gdG8geW91ciBhY2NvdW50PC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cImdyaWQgZ2FwLTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIm5hbWVAbGJyZGMuY29tLnBoXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L0xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT17cGFzc3dvcmRJbnB1dFR5cGV9IGlkPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkU3RhdGV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17XCJpY29uXCJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIHtwYXNzd29yZFN0YXRlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8RXllQ2xvc2VkSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEV5ZU9wZW5JY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDxDYXJkRm9vdGVyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICBGb3Jnb3QgeW91ciBwYXNzd29yZD97XCIgXCJ9XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PXtcImxpbmtcIn0gc2l6ZT17XCJzbVwifSBjbGFzc05hbWU9XCJweC0wIGgtNFwiPlxyXG4gICAgICAgICAgICAgIENsaWNrIGhlcmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQ2FyZDtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmREZXNjcmlwdGlvbiIsIkNhcmRGb290ZXIiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJMYWJlbCIsIkV5ZUNsb3NlZEljb24iLCJFeWVPcGVuSWNvbiIsInVzZVN0YXRlIiwiTG9naW5DYXJkIiwicGFzc3dvcmRJbnB1dFR5cGUiLCJzZXRQYXNzd29yZElucHV0VHlwZSIsInBhc3N3b3JkU3RhdGUiLCJzZXRQYXNzd29yZFN0YXRlIiwidG9nZ2xlUGFzc3dvcmRTdGF0ZSIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJvbkNsaWNrIiwidmFyaWFudCIsInNpemUiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoginCard.tsx\n"));

/***/ })

});