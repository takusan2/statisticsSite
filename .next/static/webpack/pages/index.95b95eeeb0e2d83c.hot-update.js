"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/articleTools/Marking.tsx":
/*!*************************************************!*\
  !*** ./src/components/articleTools/Marking.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Marking\": function() { return /* binding */ Marking; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Marking = function(param) {\n    var mode = param.mode, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref[0], setShow = ref[1];\n    var toggleSetShow = function() {\n        if (mode === true) {\n            setShow(!show);\n        }\n    };\n    var learnMode = show;\n    if (mode === true && show == false) {\n        learnMode = false;\n    } else {\n        learnMode = true;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Mark, {\n        bg: \"#dce5ff\",\n        color: \"tomato\",\n        overflowX: \"scroll\",\n        px: \"2\",\n        fontWeight: \"bold\",\n        py: \"1\",\n        mx: \"1\",\n        borderRadius: \"5px\",\n        display: \"inline-block\",\n        onClick: toggleSetShow,\n        _hover: {\n            cursor: \"pointer\",\n            color: \"red\"\n        },\n        children: learnMode ? children : \"＊\".repeat(children.length)\n    }, void 0, false, {\n        fileName: \"/Users/okadatakuya/my_folder/GitHub/statisticsSite/src/components/articleTools/Marking.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n}; // mode: false ならば　show:trueの時に true\n // mode: false ならば　show:trueの時に true\n // mode: true ならば　show:trueの時に true\n // mode: true ならば　show:falseの時に false\n_s(Marking, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Marking;\nvar _c;\n$RefreshReg$(_c, \"Marking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlVG9vbHMvTWFya2luZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1A7O0FBTTFCLElBQU1FLE9BQU8sR0FBRyxnQkFBc0M7UUFBbkNDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3RDLElBQXdCSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWhDSSxJQUFJLEdBQWFKLEdBQWUsR0FBNUIsRUFBRUssT0FBTyxHQUFJTCxHQUFlLEdBQW5CO0lBQ3BCLElBQU1NLGFBQWEsR0FBRyxXQUFNO1FBQzFCLElBQUlKLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakJHLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsSUFBSUcsU0FBUyxHQUFHSCxJQUFJO0lBRXBCLElBQUlGLElBQUksS0FBSyxJQUFJLElBQUlFLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDbENHLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDbkIsTUFBTTtRQUNMQSxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QscUJBQ0UsOERBQUNSLGtEQUFJO1FBQ0hTLEVBQUUsRUFBQyxTQUFTO1FBQ1pDLEtBQUssRUFBQyxRQUFRO1FBQ2RDLFNBQVMsRUFBQyxRQUFRO1FBQ2xCQyxFQUFFLEVBQUMsR0FBRztRQUNOQyxVQUFVLEVBQUMsTUFBTTtRQUNqQkMsRUFBRSxFQUFDLEdBQUc7UUFDTkMsRUFBRSxFQUFDLEdBQUc7UUFDTkMsWUFBWSxFQUFDLEtBQUs7UUFDbEJDLE9BQU8sRUFBQyxjQUFjO1FBQ3RCQyxPQUFPLEVBQUVYLGFBQWE7UUFDdEJZLE1BQU0sRUFBRTtZQUFFQyxNQUFNLEVBQUUsU0FBUztZQUFFVixLQUFLLEVBQUUsS0FBSztTQUFFO2tCQUUxQ0YsU0FBUyxHQUFHSixRQUFRLEdBQUcsR0FBRyxDQUFDaUIsTUFBTSxDQUFDakIsUUFBUSxDQUFDa0IsTUFBTSxDQUFDOzs7OzthQUM5QyxDQUNQO0NBQ0gsQ0FBQyxDQUVGLG9DQUFvQztDQUNwQyxvQ0FBb0M7Q0FDcEMsbUNBQW1DO0NBQ25DLHFDQUFxQztHQXBDeEJwQixPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZVRvb2xzL01hcmtpbmcudHN4P2ZhM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFyayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE1hcmtpbmdQcm9wcyA9IHtcbiAgbW9kZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBzdHJpbmc7XG59O1xuZXhwb3J0IGNvbnN0IE1hcmtpbmcgPSAoeyBtb2RlLCBjaGlsZHJlbiB9OiBNYXJraW5nUHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTZXRTaG93ID0gKCkgPT4ge1xuICAgIGlmIChtb2RlID09PSB0cnVlKSB7XG4gICAgICBzZXRTaG93KCFzaG93KTtcbiAgICB9XG4gIH07XG4gIGxldCBsZWFybk1vZGUgPSBzaG93O1xuXG4gIGlmIChtb2RlID09PSB0cnVlICYmIHNob3cgPT0gZmFsc2UpIHtcbiAgICBsZWFybk1vZGUgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBsZWFybk1vZGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiAoXG4gICAgPE1hcmtcbiAgICAgIGJnPVwiI2RjZTVmZlwiXG4gICAgICBjb2xvcj1cInRvbWF0b1wiXG4gICAgICBvdmVyZmxvd1g9XCJzY3JvbGxcIlxuICAgICAgcHg9XCIyXCJcbiAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgIHB5PVwiMVwiXG4gICAgICBteD1cIjFcIlxuICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgb25DbGljaz17dG9nZ2xlU2V0U2hvd31cbiAgICAgIF9ob3Zlcj17eyBjdXJzb3I6IFwicG9pbnRlclwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgID5cbiAgICAgIHtsZWFybk1vZGUgPyBjaGlsZHJlbiA6IFwi77yKXCIucmVwZWF0KGNoaWxkcmVuLmxlbmd0aCl9XG4gICAgPC9NYXJrPlxuICApO1xufTtcblxuLy8gbW9kZTogZmFsc2Ug44Gq44KJ44Gw44CAc2hvdzp0cnVl44Gu5pmC44GrIHRydWVcbi8vIG1vZGU6IGZhbHNlIOOBquOCieOBsOOAgHNob3c6dHJ1ZeOBruaZguOBqyB0cnVlXG4vLyBtb2RlOiB0cnVlIOOBquOCieOBsOOAgHNob3c6dHJ1ZeOBruaZguOBqyB0cnVlXG4vLyBtb2RlOiB0cnVlIOOBquOCieOBsOOAgHNob3c6ZmFsc2Xjga7mmYLjgasgZmFsc2VcbiJdLCJuYW1lcyI6WyJNYXJrIiwidXNlU3RhdGUiLCJNYXJraW5nIiwibW9kZSIsImNoaWxkcmVuIiwic2hvdyIsInNldFNob3ciLCJ0b2dnbGVTZXRTaG93IiwibGVhcm5Nb2RlIiwiYmciLCJjb2xvciIsIm92ZXJmbG93WCIsInB4IiwiZm9udFdlaWdodCIsInB5IiwibXgiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5Iiwib25DbGljayIsIl9ob3ZlciIsImN1cnNvciIsInJlcGVhdCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/articleTools/Marking.tsx\n"));

/***/ })

});