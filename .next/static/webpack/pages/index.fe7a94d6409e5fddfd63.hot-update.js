webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\linds\\Documents\\UdemyReactCourseProjects\\Udemy-NextJS-MeetupApp\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";
//  This gets the head from the HTML to add like the website's title n stuff.
 //  Something abt since this is only used in getStaticProps() on the server, the
//  client won't see this.


 //  Could this be an ES6 function, maybe?

function HomePage(props) {
  return;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: props.meetups
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, this);
} //  This will always run on the server after deployment.
//  Good for wesites where you have data that just updates all day long every second.
//  This will always get the current data.

/*export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  //  fetch data from an API/database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}*/
//  A special pre-coded function for Static Generation.
//  Waits to load the webpage until the data fetches somehow bec this function is async, idk.
//  Something abt the code in here won't show up for search engine optimization? I'm confused.


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTs7QUFHQTtDQUdBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCOztBQUNBO0FBQUEsdUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUQsQyxDQUVEO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0tBeEJTRixROztBQXdETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmU3YTk0ZDY0MDllNWZkZGZkNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICBUaGlzIGdldHMgdGhlIGhlYWQgZnJvbSB0aGUgSFRNTCB0byBhZGQgbGlrZSB0aGUgd2Vic2l0ZSdzIHRpdGxlIG4gc3R1ZmYuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuLy8gIFNvbWV0aGluZyBhYnQgc2luY2UgdGhpcyBpcyBvbmx5IHVzZWQgaW4gZ2V0U3RhdGljUHJvcHMoKSBvbiB0aGUgc2VydmVyLCB0aGVcclxuLy8gIGNsaWVudCB3b24ndCBzZWUgdGhpcy5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyAgQ291bGQgdGhpcyBiZSBhbiBFUzYgZnVuY3Rpb24sIG1heWJlP1xyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybjtcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8SGVhZD48L0hlYWQ+XHJcbiAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gIDwvRnJhZ21lbnQ+O1xyXG59XHJcblxyXG4vLyAgVGhpcyB3aWxsIGFsd2F5cyBydW4gb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50LlxyXG4vLyAgR29vZCBmb3Igd2VzaXRlcyB3aGVyZSB5b3UgaGF2ZSBkYXRhIHRoYXQganVzdCB1cGRhdGVzIGFsbCBkYXkgbG9uZyBldmVyeSBzZWNvbmQuXHJcbi8vICBUaGlzIHdpbGwgYWx3YXlzIGdldCB0aGUgY3VycmVudCBkYXRhLlxyXG4vKmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4gIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG4gIC8vICBmZXRjaCBkYXRhIGZyb20gYW4gQVBJL2RhdGFiYXNlXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn0qL1xyXG5cclxuLy8gIEEgc3BlY2lhbCBwcmUtY29kZWQgZnVuY3Rpb24gZm9yIFN0YXRpYyBHZW5lcmF0aW9uLlxyXG4vLyAgV2FpdHMgdG8gbG9hZCB0aGUgd2VicGFnZSB1bnRpbCB0aGUgZGF0YSBmZXRjaGVzIHNvbWVob3cgYmVjIHRoaXMgZnVuY3Rpb24gaXMgYXN5bmMsIGlkay5cclxuLy8gIFNvbWV0aGluZyBhYnQgdGhlIGNvZGUgaW4gaGVyZSB3b24ndCBzaG93IHVwIGZvciBzZWFyY2ggZW5naW5lIG9wdGltaXphdGlvbj8gSSdtIGNvbmZ1c2VkLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9MaW5kc2V5X0hlcm1hbjpDb2ZmZUUwOEBjbHVzdGVyMC5raW96cy5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICAvLyAgRmluZHMgYWxsIHRoZSBkb2N1bWVudHMgaW4gYSBjb2xsZWN0aW9uOlxyXG4gIC8vICBBbnl0aGluZyB3IGF3YWl0IHJldHVybnMgYSBwcm9taXNlIVxyXG4gIC8vICBSZXR1cm5zIGFuIGFycmF5IG9mIGRvY3VtZW50czpcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gICAgLy8gIFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBSZWFjdCBKUyB3aWxsIHdhaXQgYmVmb3JlIGl0IHJlZ2VuZXJhdGVzIHRoZSBwYWdlLFxyXG4gICAgLy8gIHNvIHdpbGwgY2hlY2sgdGhlIGRhdGFiYXNlL0FQSSBvbmNlIGV2ZXJ5IDEwIHNlY29uZHMgdG8gc2VlIGlmIHRoZSBkYXRhIHVwZGF0ZWQsXHJcbiAgICAvLyAgYW5kIGlmIGl0IGRpZCwgc2hvdyBpdCBvbiB0aGUgd2VicGFnZS5cclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=