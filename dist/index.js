/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Modal */ \"./src/js/Modal.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_Modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n\n\n\nconsole.log((_js_Modal__WEBPACK_IMPORTED_MODULE_0___default()));\nconsole.log(\"Hello!\");\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ (() => {

eval("var openButton = document.querySelector('.modal-open');\nvar closeButton = document.querySelector('.modal-close');\nvar backdrop = document.querySelector('.backdrop');\nvar onOpen = function onOpen() {\n  backdrop.classList.remove('is-hidden');\n};\nvar onClose = function onClose() {\n  backdrop.classList.add('is-hidden');\n};\nopenButton.addEventListener('click', onOpen);\ncloseButton.addEventListener('click', onClose);\n\n//# sourceURL=webpack://webpack/./src/js/Modal.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons.svg */ \"./src/images/icons.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about1-1.jpg */ \"./src/images/about1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about1-2.jpg */ \"./src/images/about1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tababout1-1.jpg */ \"./src/images/tababout1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tababout1-2.jpg */ \"./src/images/tababout1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about2-1.jpg */ \"./src/images/about2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about2-2.jpg */ \"./src/images/about2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tababout2-1.jpg */ \"./src/images/tababout2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tababout2-2.jpg */ \"./src/images/tababout2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers1-1.jpg */ \"./src/images/barbers1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers1-2.jpg */ \"./src/images/barbers1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers1-1.jpg */ \"./src/images/tabbarbers1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers1-2.jpg */ \"./src/images/tabbarbers1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers1-1.jpg */ \"./src/images/mobbarbers1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers1-2.jpg */ \"./src/images/mobbarbers1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers2-1.jpg */ \"./src/images/barbers2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers2-2.jpg */ \"./src/images/barbers2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers2-1.jpg */ \"./src/images/tabbarbers2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers2-2.jpg */ \"./src/images/tabbarbers2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers2-1.jpg */ \"./src/images/mobbarbers2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers2-2.jpg */ \"./src/images/mobbarbers2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers3-1.jpg */ \"./src/images/barbers3-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/barbers3-2.jpg */ \"./src/images/barbers3-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers3-1.jpg */ \"./src/images/tabbarbers3-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabbarbers3-2.jpg */ \"./src/images/tabbarbers3-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers3-1.jpg */ \"./src/images/mobbarbers3-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobbarbers3-2.jpg */ \"./src/images/mobbarbers3-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery1-1.jpg */ \"./src/images/gallery1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery1-2.jpg */ \"./src/images/gallery1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery1-1.jpg */ \"./src/images/tabgallery1-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery1-2.jpg */ \"./src/images/tabgallery1-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery1-1x.jpg */ \"./src/images/mobgallery1-1x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery1-2x.jpg */ \"./src/images/mobgallery1-2x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery2-1.jpg */ \"./src/images/gallery2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery2-2.jpg */ \"./src/images/gallery2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery2-1.jpg */ \"./src/images/tabgallery2-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery2-2.jpg */ \"./src/images/tabgallery2-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery2-1x.jpg */ \"./src/images/mobgallery2-1x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery2-2x.jpg */ \"./src/images/mobgallery2-2x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery3-1.jpg */ \"./src/images/gallery3-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery3-2.jpg */ \"./src/images/gallery3-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery3-1.jpg */ \"./src/images/tabgallery3-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery3-2.jpg */ \"./src/images/tabgallery3-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery3-1x.jpg */ \"./src/images/mobgallery3-1x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery3-2x.jpg */ \"./src/images/mobgallery3-2x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery4-1.jpg */ \"./src/images/gallery4-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ./images/gallery4-2.jpg */ \"./src/images/gallery4-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery4-1.jpg */ \"./src/images/tabgallery4-1.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ./images/tabgallery4-2.jpg */ \"./src/images/tabgallery4-2.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery4-1x.jpg */ \"./src/images/mobgallery4-1x.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mobgallery4-2x.jpg */ \"./src/images/mobgallery4-2x.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#logo\" });\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#menu\" });\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#insta\" });\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#twit\" });\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#fbook\" });\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#linkedin\" });\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);\nvar ___HTML_LOADER_REPLACEMENT_41___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);\nvar ___HTML_LOADER_REPLACEMENT_42___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);\nvar ___HTML_LOADER_REPLACEMENT_43___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);\nvar ___HTML_LOADER_REPLACEMENT_44___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);\nvar ___HTML_LOADER_REPLACEMENT_45___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);\nvar ___HTML_LOADER_REPLACEMENT_46___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_41___);\nvar ___HTML_LOADER_REPLACEMENT_47___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_42___);\nvar ___HTML_LOADER_REPLACEMENT_48___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_43___);\nvar ___HTML_LOADER_REPLACEMENT_49___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_44___);\nvar ___HTML_LOADER_REPLACEMENT_50___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_45___);\nvar ___HTML_LOADER_REPLACEMENT_51___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_46___);\nvar ___HTML_LOADER_REPLACEMENT_52___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_47___);\nvar ___HTML_LOADER_REPLACEMENT_53___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_48___);\nvar ___HTML_LOADER_REPLACEMENT_54___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_49___);\nvar ___HTML_LOADER_REPLACEMENT_55___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_50___);\nvar ___HTML_LOADER_REPLACEMENT_56___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#map-pin\" });\nvar ___HTML_LOADER_REPLACEMENT_57___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#phone\" });\nvar ___HTML_LOADER_REPLACEMENT_58___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#mail\" });\nvar ___HTML_LOADER_REPLACEMENT_59___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___, { hash: \"#close\" });\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Barbershop</title>\\r\\n    <link\\r\\n    rel=\\\"stylesheet\\\"\\r\\n    href=\\\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\\\">\\r\\n</head>\\r\\n<body>\\r\\n    <header class=\\\"barber-header\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n        <a class=\\\"barber-header__nav-link\\\" href=\\\"/\\\">\\r\\n        <svg class=\\\"barber-header__logo\\\" width=\\\"58\\\" height=\\\"65\\\">\\r\\n            <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"></use>\\r\\n        </svg>\\r\\n        </a>\\r\\n        <nav class=\\\"barber-header__nav\\\">\\r\\n        <ul class=\\\"barber-header__nav-list\\\">\\r\\n            <li class=\\\"barber-header__list-item\\\"><a class=\\\"header-nav__item-link\\\" href=\\\"/\\\">About</a></li>\\r\\n            <li class=\\\"barber-header__list-item\\\"><a class=\\\"header-nav__item-link\\\" href=\\\"/\\\">Services and prices</a></li>\\r\\n            <li class=\\\"barber-header__list-item\\\"><a class=\\\"header-nav__item-link\\\" href=\\\"/\\\">Barbers</a></li>\\r\\n            <li class=\\\"barber-header__list-item\\\"><a class=\\\"header-nav__item-link\\\" href=\\\"/\\\">Contacts</a></li>\\r\\n        </ul>\\r\\n        </nav>\\r\\n        <div class=\\\"barber-header__connect\\\">\\r\\n        <a class=\\\"barber-header__tel-link\\\" href=\\\"tel:+380441111111\\\">+38 044 111 11 11</a>\\r\\n        <button class=\\\"booking-button light\\\" type=\\\"button\\\">Online-booking</button>\\r\\n        </div>\\r\\n        <button class=\\\"modal-open\\\">\\r\\n                <svg class=\\\"modal-open__icon\\\" width=\\\"40\\\" height=\\\"40\\\">\\r\\n                    <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></use>\\r\\n                </svg>\\r\\n            </button>\\r\\n        </div>\\r\\n    </header>\\r\\n    <main class=\\\"barber-main\\\">\\r\\n        <section class=\\\"section-hero\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"section-hero__wraplist\\\">\\r\\n            <ul class=\\\"section-hero__list\\\">\\r\\n                <li class=\\\"section-hero__list-item\\\"><a class=\\\"section-hero__item-link\\\" href=\\\"/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\">Instagram</a></li>\\r\\n                <li class=\\\"section-hero__list-item\\\"><a class=\\\"section-hero__item-link\\\" href=\\\"/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer nofollow\\\">Youtube</a></li>\\r\\n            </ul>\\r\\n                </div>\\r\\n            <div class=\\\"section-hero__div\\\">\\r\\n                <div class=\\\"section-hero__div-wrap\\\">\\r\\n            <p class=\\\"section-hero__div-about pretitle light\\\">A hair salon for men in Kyiv</p>\\r\\n            <h1 class=\\\"section-hero__div-h1 animate__animated animate__tada\\\">BarberShop</h1>\\r\\n            <p class=\\\"section-hero__div-p\\\">We are experts in trendy men’s haircuts.\\r\\n            We work quickly, carefully and with style.</p>\\r\\n                </div>\\r\\n            </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"section-about\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"section-about__imgpack\\\">\\r\\n            <picture class=\\\"section-about__item-img\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_3___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \", \" + ___HTML_LOADER_REPLACEMENT_5___ + \" 2x\\\" media=\\\"(max-width: 1199px)\\\">\\r\\n                                    \\r\\n                    <img class=\\\"section-about__item-img\\\" \\r\\n                            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"shaving\\\" width=\\\"660\\\">\\r\\n            </picture>\\r\\n            <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_7___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \", \" + ___HTML_LOADER_REPLACEMENT_9___ + \" 2x\\\" media=\\\"(max-width: 1199px)\\\">\\r\\n                                    \\r\\n                    <img\\r\\n                            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"haircut\\\" width=\\\"660\\\">\\r\\n            </picture>\\r\\n                </div>\\r\\n\\r\\n                    <div class=\\\"section-about__wrap\\\">\\r\\n            <p class=\\\"section-about__about-p pretitle\\\">About</p>\\r\\n            <h2 class=\\\"section-about__h2 title\\\">Best Barbershop in your city</h2>\\r\\n            <p class=\\\"section-about__p\\\">If you want to add more confidence to your image, you should definitely visit us.</p>\\r\\n            <p class=\\\"section-about__text\\\" title=\\\"text\\\">We are a team that never stops at what has been achieved\\r\\n            and are thirsty for changes. And when you fall into the hands of our master, you will never be the same again. We are a\\r\\n            team that is always \\\"on the same wave\\\" with clients. Therefore, we are always ready to improve everyone who comes to us!</p>\\r\\n            <button class=\\\"booking-button\\\" type=\\\"button\\\">ONLINE-BOOKING</button>\\r\\n            </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"section-pricing\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n            <p class=\\\"section-pricing__about-p pretitle\\\">spend your time with the best masters</p>\\r\\n            <h2 class=\\\"section-pricing__h2 title\\\">Services and prices</h2>\\r\\n            <div class=\\\"section-pricing__div\\\">\\r\\n            <ul class=\\\"section-pricing__div-list\\\">\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Men’s haircut</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Beard trim</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Mustache trim</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Straight razor shave</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n            </ul>\\r\\n            <ul class=\\\"section-pricing__div-list gradient\\\">\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Trainee’s haircut</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 50 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Haircut under the nozzle</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Children’s haircut (0-12 y.o.)</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Camouflage of gray hair</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n            </ul>\\r\\n            <ul class=\\\"section-pricing__list-full\\\">\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Men’s haircut</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Beard trim</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Mustache trim</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Straight razor shave</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Trainee’s haircut</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 50 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Haircut under the nozzle</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Children’s haircut (0-12 y.o.)</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 300 uah.</p>\\r\\n                </li>\\r\\n                <li class=\\\"section-pricing__list-item\\\">\\r\\n                    <p class=\\\"section-pricing__item-p\\\">Camouflage of gray hair</p>\\r\\n                    <p class=\\\"section-pricing__item-p\\\">from 200 uah.</p>\\r\\n                </li>\\r\\n            </ul>\\r\\n            </div>\\r\\n            <button class=\\\"booking-button centered\\\">ONLINE-BOOKING</button>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"section-reason\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <h2 class=\\\"section-reason__h2 visually-hidden\\\">Reason</h2>\\r\\n                <div class=\\\"section-reason__block-wrap\\\">\\r\\n            <ul class=\\\"section-reason__list\\\">\\r\\n                <li class=\\\"section-reason__list-item\\\">\\r\\n                    <div class=\\\"section-reason__item-div\\\">\\r\\n                        <span class=\\\"section-reason__div-span\\\">600<sup class=\\\"section-reason__span-sup\\\">+</sup></span>\\r\\n                        <p class=\\\"section-reason__div-p\\\">Satisfied customers per day</p>\\r\\n                    </div>\\r\\n                </li>\\r\\n                <li class=\\\"section-reason__list-item\\\">\\r\\n                    <div class=\\\"section-reason__item-div\\\">\\r\\n                        <span class=\\\"section-reason__div-span\\\">50<sup class=\\\"section-reason__span-sup\\\">+</sup></span>\\r\\n                        <p class=\\\"section-reason__div-p\\\">Awards for excellent service</p>\\r\\n                    </div>\\r\\n                </li>\\r\\n            </ul>\\r\\n            <ul class=\\\"section-reason__list two\\\">\\r\\n                <li class=\\\"section-reason__list-item\\\">\\r\\n                    <div class=\\\"section-reason__item-div\\\">\\r\\n                        <span class=\\\"section-reason__div-span\\\">20<sup class=\\\"section-reason__span-sup\\\">+</sup></span>\\r\\n                        <p class=\\\"section-reason__div-p\\\">Kyiv’s best barbers</p>\\r\\n                    </div>\\r\\n                </li>\\r\\n                <li class=\\\"section-reason__list-item\\\">\\r\\n                    <div class=\\\"section-reason__item-div\\\">\\r\\n                        <span class=\\\"section-reason__div-span\\\">100<sup class=\\\"section-reason__span-sup\\\">+</sup></span>\\r\\n                        <p class=\\\"section-reason__div-p\\\">Gifts for regular customers</p>\\r\\n                    </div>\\r\\n                </li>\\r\\n            </ul>\\r\\n                </div>\\r\\n            <div class=\\\"section-reason__wrap\\\">\\r\\n            <p class=\\\"section-reason__about-p pretitle\\\">old traditional school</p>\\r\\n            <h2 class=\\\"section-reason__h2 title\\\">Why people come to us?</h2>\\r\\n            <p class=\\\"section-reason__p2\\\">Only good things are said about us. <br >But it's better to see and feel 1 time than read 10 times. </p>\\r\\n            </div>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"section-barbers\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n                <div class=\\\"section-barbers__center\\\">\\r\\n            <p class=\\\"section-barbers__about-p pretitle\\\">for true enjoyers of the style</p>\\r\\n            <h2 class=\\\"section-barbers__h2 title\\\">Our barbers</h2>\\r\\n                </div>\\r\\n            <ul class=\\\"section-barbers__list\\\">\\r\\n                <li class=\\\"section-barbers__list-item\\\">\\r\\n                    <a class=\\\"section-barbers__item-link\\\" href=\\\"/\\\">\\r\\n                        <div class=\\\"section-barbers__link-div\\\">\\r\\n                            <div class=\\\"section-barbers__img-wrap\\\">\\r\\n                                <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_11___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_13___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_15___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"barber-1\\\">\\r\\n            </picture>\\r\\n                            <p class=\\\"section-barbers__img-info\\\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. \\r\\n                                Velit, unde. Quia nulla, porro possimus sapiente recusandae corporis eligendi \\r\\n                                assumenda tempore nemo id alias quidem, doloremque corrupti vitae maxime suscipit eaque!</p>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"section-barbers__div-h3\\\">John Smith</h3>\\r\\n                            <p class=\\\"section-barbers__div-p\\\">Extreme barber</p>\\r\\n                                <ul class=\\\"section-barbers__div2-list2\\\">\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                        </div>\\r\\n                    </a>\\r\\n                </li>\\r\\n                <li class=\\\"section-barbers__list-item\\\">\\r\\n                    <a class=\\\"section-barbers__item-link\\\" href=\\\"/\\\">\\r\\n                        <div class=\\\"section-barbers__link-div\\\">\\r\\n                            <div class=\\\"section-barbers__img-wrap\\\">\\r\\n                            <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_21___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_23___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_25___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"barber-1\\\">\\r\\n            </picture>\\r\\n                            <p class=\\\"section-barbers__img-info\\\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. \\r\\n                                Velit, unde. Quia nulla, porro possimus sapiente recusandae corporis eligendi \\r\\n                                assumenda tempore nemo id alias quidem, doloremque corrupti vitae maxime suscipit eaque!</p>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"section-barbers__div-h3\\\">Michele Doe</h3>\\r\\n                            <p class=\\\"section-barbers__div-p\\\">Extreme barber</p>\\r\\n                             <ul class=\\\"section-barbers__div2-list2\\\">\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                        </div>\\r\\n                    </a>\\r\\n                </li>\\r\\n                <li class=\\\"section-barbers__list-item\\\">\\r\\n                    <a class=\\\"section-barbers__item-link\\\" href=\\\"/\\\">\\r\\n                        <div class=\\\"section-barbers__link-div\\\">\\r\\n                            <div class=\\\"section-barbers__img-wrap\\\">\\r\\n                            <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_27___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_29___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_31___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" alt=\\\"barber-1\\\">\\r\\n            </picture>\\r\\n                            <p class=\\\"section-barbers__img-info\\\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. \\r\\n                                Velit, unde. Quia nulla, porro possimus sapiente recusandae corporis eligendi \\r\\n                                assumenda tempore nemo id alias quidem, doloremque corrupti vitae maxime suscipit eaque!</p>\\r\\n                            </div>\\r\\n                            <h3 class=\\\"section-barbers__div-h3\\\">Alan Black</h3>\\r\\n                            <p class=\\\"section-barbers__div-p\\\">Extreme barber</p>\\r\\n                             <ul class=\\\"section-barbers__div2-list2\\\">\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                    <li class=\\\"section-barbers__list2-item2\\\">\\r\\n                                        <div class=\\\"section-barbers__item2-link2\\\">\\r\\n                                            <svg class=\\\"section-barbers__link2-svg\\\" width=\\\"20\\\" height=\\\"20\\\">\\r\\n                                                <use class=\\\"section-barbers__svg-use\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\"></use>\\r\\n                                            </svg>\\r\\n                                        </div>\\r\\n                                    </li>\\r\\n                                </ul>\\r\\n                        </div>\\r\\n                    </a>\\r\\n                </li>\\r\\n            </ul>\\r\\n            </div>\\r\\n        </section>\\r\\n        <section class=\\\"section-gallery\\\">\\r\\n            <div class=\\\"container\\\">\\r\\n            <p class=\\\"section-gallery__about-p pretitle\\\">in Latin, \\\"barba\\\" means \\\"beard\\\"</p>\\r\\n            <h2 class=\\\"section-gallery__h2 visually-hidden\\\">Gallery</h2>\\r\\n            <ul class=\\\"section-gallery__list\\\">\\r\\n                <li class=\\\"section-gallery__list-item\\\">\\r\\n                    <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_33___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_35___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_36___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_37___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\" alt=\\\"gallery-1\\\">\\r\\n            </picture>\\r\\n        </li>\\r\\n                <li class=\\\"section-gallery__list-item\\\">\\r\\n                    <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_39___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_40___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_41___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_42___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_43___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_39___ + \"\\\" alt=\\\"gallery-1\\\">\\r\\n            </picture>\\r\\n        </li>\\r\\n                <li class=\\\"section-gallery__list-item\\\">\\r\\n                    <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_44___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_45___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_46___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_47___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_48___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_49___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_45___ + \"\\\" alt=\\\"gallery-1\\\">\\r\\n            </picture>\\r\\n        </li>\\r\\n                <li class=\\\"section-gallery__list-item\\\">\\r\\n                    <picture>\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_50___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_51___ + \" 2x\\\" media=\\\"(min-width: 1200px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_52___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_53___ + \" 2x\\\" media=\\\"(min-width: 768px)\\\">\\r\\n                <source srcset=\\\"\" + ___HTML_LOADER_REPLACEMENT_54___ + \" 1x, \" + ___HTML_LOADER_REPLACEMENT_55___ + \" 2x\\\" media=\\\"(max-width: 767px)\\\">               \\r\\n                    <img class=\\\"section-barbers__div-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_51___ + \"\\\" alt=\\\"gallery-1\\\">\\r\\n            </picture>\\r\\n        </li>\\r\\n            </ul>\\r\\n            </div>\\r\\n            </section>\\r\\n            <section class=\\\"double-section\\\">\\r\\n        <div class=\\\"container outer\\\">\\r\\n            <h2 class=\\\"double-section__h2 visually-hidden\\\">Farewell</h2>\\r\\n            <section class=\\\"section-booking\\\">\\r\\n                <div class=\\\"container inner\\\">\\r\\n                    <h2 class=\\\"section-booking__h2 title\\\">Online-booking</h2>\\r\\n                    <form class=\\\"section-booking__form\\\">\\r\\n                        <input type=\\\"text\\\" class=\\\"section-booking__input\\\" name=\\\"online-name\\\" placeholder=\\\"Name*\\\">\\r\\n                        <input type=\\\"tel\\\" class=\\\"section-booking__input\\\" \\r\\n                        name=\\\"online-password\\\" placeholder=\\\"Phone*\\\">\\r\\n\\r\\n                        <textarea class=\\\"section-booking__input message\\\" placeholder=\\\"Message\\\"></textarea>\\r\\n                        <button type=\\\"submit\\\" class=\\\"booking-button light centered\\\">Send</button>\\r\\n                    </form>\\r\\n                </div>\\r\\n            </section>\\r\\n            <section class=\\\"section-contacts\\\">\\r\\n                <div class=\\\"container\\\">\\r\\n                    <div class=\\\"section-contacts__main-wrap\\\">\\r\\n                <h2 class=\\\"section-contacts__h2 title\\\">Contacts</h2>\\r\\n                <address class=\\\"section-contacts__address\\\">\\r\\n                    <ul class=\\\"section-contacts__address-list\\\">\\r\\n                        <li class=\\\"section-contacts__list-item\\\">\\r\\n                            <a class=\\\"section-contacts__item-link bold\\\" href=\\\"\\\" target=\\\"_blank\\\" rel=\\\"noreferrer nofollow noopener\\\"><svg class=\\\"contacts-icon\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                                <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_56___ + \"\\\"></use>\\r\\n                            </svg>\\r\\n                            st. Vasilkivska, 7A Kyiv, 08132</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"section-contacts__list-item\\\">\\r\\n                            <a class=\\\"section-contacts__item-link\\\" href=\\\"tel:+380441111111\\\"><svg class=\\\"contacts-icon\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                                <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_57___ + \"\\\"></use>\\r\\n                            </svg>\\r\\n                            +38 044 111 11 11</a>\\r\\n                        </li>\\r\\n                        <li class=\\\"section-contacts__list-item\\\">\\r\\n                            <a class=\\\"section-contacts__item-link\\\" href=\\\"mailto:barbershop@email.com\\\">\\r\\n                                <svg class=\\\"contacts-icon\\\" width=\\\"24\\\" height=\\\"24\\\">\\r\\n                                <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_58___ + \"\\\"></use>\\r\\n                            </svg>\\r\\n                            barbershop@email.com</a>\\r\\n                        </li>\\r\\n                    </ul>\\r\\n                </address>\\r\\n                    </div>\\r\\n                <div class=\\\"section-contacts__wrap\\\">\\r\\n                <p class=\\\"section-contacts__about-p pretitle\\\">working hours</p>\\r\\n                <p class=\\\"section-contacts__p\\\">Every day from 9:00 to 22:00</p>\\r\\n                </div>\\r\\n                </div>\\r\\n            </section>\\r\\n        </div>\\r\\n            </section>\\r\\n    </main>\\r\\n    <footer class=\\\"barber-footer\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n            <h2 class=\\\"visually-hidden\\\">Footer</h2>\\r\\n        <p class=\\\"barber-footer__p\\\">&copy; Copyright 2020</p>\\r\\n        <ul class=\\\"barber-footer__list\\\">\\r\\n            <li class=\\\"barber-footer__list-item\\\"><a class=\\\"barber-footer__item-link\\\" href=\\\"/\\\">Instagram</a></li>\\r\\n            <li class=\\\"barber-footer__list-item\\\"><a class=\\\"barber-footer__item-link\\\" href=\\\"/\\\">Youtube</a></li>\\r\\n        </ul>\\r\\n        </div>\\r\\n    </footer>\\r\\n    <div class=\\\"backdrop is-hidden\\\">\\r\\n        <div class=\\\"modal\\\">\\r\\n            <button class=\\\"modal-close\\\">\\r\\n                <svg class=\\\"modal__icon\\\" width=\\\"19\\\" height=\\\"19\\\">\\r\\n                    <use href=\\\"\" + ___HTML_LOADER_REPLACEMENT_59___ + \"\\\"></use>\\r\\n                </svg>\\r\\n            </button>\\r\\n            <div class=\\\"modal__wrap\\\">\\r\\n            <nav class=\\\"modal__nav\\\">\\r\\n        <ul class=\\\"modal__nav-list\\\">\\r\\n            <li class=\\\"modal__list-item\\\"><a class=\\\"modal__item-link\\\" href=\\\"/\\\">About</a></li>\\r\\n            <li class=\\\"modal__list-item\\\"><a class=\\\"modal__item-link\\\" href=\\\"/\\\">Services and prices</a></li>\\r\\n            <li class=\\\"modal__list-item\\\"><a class=\\\"modal__item-link\\\" href=\\\"/\\\">Barbers</a></li>\\r\\n            <li class=\\\"modal__list-item\\\"><a class=\\\"modal__item-link\\\" href=\\\"/\\\">Contacts</a></li>\\r\\n        </ul>\\r\\n        </nav>\\r\\n        <div class=\\\"modal__connect\\\">\\r\\n        <a class=\\\"modal__tel-link\\\" href=\\\"tel:+380441111111\\\">+38 044 111 11 11</a>\\r\\n        <button class=\\\"booking-button\\\" type=\\\"button\\\">Online-booking</button>\\r\\n        </div>\\r\\n        <ul class=\\\"modal__list-soc\\\">\\r\\n            <li class=\\\"modal__item-soc\\\"><a class=\\\"modal__link-soc\\\" href=\\\"\\\">Instagram</a></li>\\r\\n            <li class=\\\"modal__item-soc\\\"><a class=\\\"modal__link-soc\\\" href=\\\"\\\">Youtube</a></li>\\r\\n        </ul>\\r\\n        </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/css/style.scss?");

/***/ }),

/***/ "./src/images/about1-1.jpg":
/*!*********************************!*\
  !*** ./src/images/about1-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/about1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/about1-1.jpg?");

/***/ }),

/***/ "./src/images/about1-2.jpg":
/*!*********************************!*\
  !*** ./src/images/about1-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/about1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/about1-2.jpg?");

/***/ }),

/***/ "./src/images/about2-1.jpg":
/*!*********************************!*\
  !*** ./src/images/about2-1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/about2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/about2-1.jpg?");

/***/ }),

/***/ "./src/images/about2-2.jpg":
/*!*********************************!*\
  !*** ./src/images/about2-2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/about2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/about2-2.jpg?");

/***/ }),

/***/ "./src/images/barbers1-1.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers1-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers1-1.jpg?");

/***/ }),

/***/ "./src/images/barbers1-2.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers1-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers1-2.jpg?");

/***/ }),

/***/ "./src/images/barbers2-1.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers2-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers2-1.jpg?");

/***/ }),

/***/ "./src/images/barbers2-2.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers2-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers2-2.jpg?");

/***/ }),

/***/ "./src/images/barbers3-1.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers3-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers3-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers3-1.jpg?");

/***/ }),

/***/ "./src/images/barbers3-2.jpg":
/*!***********************************!*\
  !*** ./src/images/barbers3-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/barbers3-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/barbers3-2.jpg?");

/***/ }),

/***/ "./src/images/gallery1-1.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery1-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery1-1.jpg?");

/***/ }),

/***/ "./src/images/gallery1-2.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery1-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery1-2.jpg?");

/***/ }),

/***/ "./src/images/gallery2-1.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery2-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery2-1.jpg?");

/***/ }),

/***/ "./src/images/gallery2-2.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery2-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery2-2.jpg?");

/***/ }),

/***/ "./src/images/gallery3-1.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery3-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery3-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery3-1.jpg?");

/***/ }),

/***/ "./src/images/gallery3-2.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery3-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery3-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery3-2.jpg?");

/***/ }),

/***/ "./src/images/gallery4-1.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery4-1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery4-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery4-1.jpg?");

/***/ }),

/***/ "./src/images/gallery4-2.jpg":
/*!***********************************!*\
  !*** ./src/images/gallery4-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/gallery4-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/gallery4-2.jpg?");

/***/ }),

/***/ "./src/images/icons.svg":
/*!******************************!*\
  !*** ./src/images/icons.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/fonts/icons.svg\";\n\n//# sourceURL=webpack://webpack/./src/images/icons.svg?");

/***/ }),

/***/ "./src/images/mobbarbers1-1.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers1-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers1-1.jpg?");

/***/ }),

/***/ "./src/images/mobbarbers1-2.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers1-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers1-2.jpg?");

/***/ }),

/***/ "./src/images/mobbarbers2-1.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers2-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers2-1.jpg?");

/***/ }),

/***/ "./src/images/mobbarbers2-2.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers2-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers2-2.jpg?");

/***/ }),

/***/ "./src/images/mobbarbers3-1.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers3-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers3-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers3-1.jpg?");

/***/ }),

/***/ "./src/images/mobbarbers3-2.jpg":
/*!**************************************!*\
  !*** ./src/images/mobbarbers3-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobbarbers3-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobbarbers3-2.jpg?");

/***/ }),

/***/ "./src/images/mobgallery1-1x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery1-1x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery1-1x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery1-1x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery1-2x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery1-2x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery1-2x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery1-2x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery2-1x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery2-1x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery2-1x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery2-1x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery2-2x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery2-2x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery2-2x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery2-2x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery3-1x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery3-1x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery3-1x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery3-1x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery3-2x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery3-2x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery3-2x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery3-2x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery4-1x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery4-1x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery4-1x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery4-1x.jpg?");

/***/ }),

/***/ "./src/images/mobgallery4-2x.jpg":
/*!***************************************!*\
  !*** ./src/images/mobgallery4-2x.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/mobgallery4-2x.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/mobgallery4-2x.jpg?");

/***/ }),

/***/ "./src/images/tababout1-1.jpg":
/*!************************************!*\
  !*** ./src/images/tababout1-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tababout1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tababout1-1.jpg?");

/***/ }),

/***/ "./src/images/tababout1-2.jpg":
/*!************************************!*\
  !*** ./src/images/tababout1-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tababout1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tababout1-2.jpg?");

/***/ }),

/***/ "./src/images/tababout2-1.jpg":
/*!************************************!*\
  !*** ./src/images/tababout2-1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tababout2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tababout2-1.jpg?");

/***/ }),

/***/ "./src/images/tababout2-2.jpg":
/*!************************************!*\
  !*** ./src/images/tababout2-2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tababout2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tababout2-2.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers1-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers1-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers1-1.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers1-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers1-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers1-2.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers2-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers2-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers2-1.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers2-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers2-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers2-2.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers3-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers3-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers3-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers3-1.jpg?");

/***/ }),

/***/ "./src/images/tabbarbers3-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabbarbers3-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabbarbers3-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabbarbers3-2.jpg?");

/***/ }),

/***/ "./src/images/tabgallery1-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery1-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery1-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery1-1.jpg?");

/***/ }),

/***/ "./src/images/tabgallery1-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery1-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery1-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery1-2.jpg?");

/***/ }),

/***/ "./src/images/tabgallery2-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery2-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery2-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery2-1.jpg?");

/***/ }),

/***/ "./src/images/tabgallery2-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery2-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery2-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery2-2.jpg?");

/***/ }),

/***/ "./src/images/tabgallery3-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery3-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery3-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery3-1.jpg?");

/***/ }),

/***/ "./src/images/tabgallery3-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery3-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery3-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery3-2.jpg?");

/***/ }),

/***/ "./src/images/tabgallery4-1.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery4-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery4-1.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery4-1.jpg?");

/***/ }),

/***/ "./src/images/tabgallery4-2.jpg":
/*!**************************************!*\
  !*** ./src/images/tabgallery4-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"src/images/tabgallery4-2.jpg\";\n\n//# sourceURL=webpack://webpack/./src/images/tabgallery4-2.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;