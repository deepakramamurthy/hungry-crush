/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Deepak_Ramamurthy_Desktop_hungry_crush_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Deepak Ramamurthy\\\\Desktop\\\\hungry-crush\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Deepak_Ramamurthy_Desktop_hungry_crush_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNEZWVwYWslMjBSYW1hbXVydGh5JTVDRGVza3RvcCU1Q2h1bmdyeS1jcnVzaCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDRGVlcGFrJTIwUmFtYW11cnRoeSU1Q0Rlc2t0b3AlNUNodW5ncnktY3J1c2gmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRDO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxEZWVwYWsgUmFtYW11cnRoeVxcXFxEZXNrdG9wXFxcXGh1bmdyeS1jcnVzaFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxEZWVwYWsgUmFtYW11cnRoeVxcXFxEZXNrdG9wXFxcXGh1bmdyeS1jcnVzaFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nif (!process.env.NEXTAUTH_URL) {\n    throw new Error('NEXTAUTH_URL environment variable is not set');\n}\nif (!process.env.NEXTAUTH_SECRET) {\n    throw new Error('NEXTAUTH_SECRET environment variable is not set');\n}\nif (!process.env.GOOGLE_CLIENT_ID) {\n    throw new Error('GOOGLE_CLIENT_ID environment variable is not set');\n}\nif (!process.env.GOOGLE_CLIENT_SECRET) {\n    throw new Error('GOOGLE_CLIENT_SECRET environment variable is not set');\n}\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_4__.PrismaClient();\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(prisma),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"jsmith@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error('Missing email or password');\n                }\n                const user = await prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user.password) {\n                    throw new Error('No user found with this email');\n                }\n                const isPasswordValid = await (0,bcrypt__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, user.password);\n                if (!isPasswordValid) {\n                    throw new Error('Invalid password');\n                }\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name\n                };\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: '/auth/signin',\n        error: '/auth/error'\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user, account }) {\n            if (user) {\n                token.id = user.id;\n            }\n            if (account && account.provider === \"google\") {\n                token.googleAccessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n            }\n            return session;\n        },\n        async signIn ({ user, account, profile }) {\n            if (account?.provider === \"google\" && profile?.email) {\n                const existingUser = await prisma.user.findUnique({\n                    where: {\n                        email: profile.email\n                    }\n                });\n                if (existingUser) {\n                    // If the user exists but doesn't have a linked Google account, link it\n                    const existingAccount = await prisma.account.findFirst({\n                        where: {\n                            userId: existingUser.id,\n                            provider: \"google\"\n                        }\n                    });\n                    if (!existingAccount) {\n                        await prisma.account.create({\n                            data: {\n                                userId: existingUser.id,\n                                type: account.type,\n                                provider: account.provider,\n                                providerAccountId: account.providerAccountId,\n                                access_token: account.access_token,\n                                expires_at: account.expires_at,\n                                token_type: account.token_type,\n                                scope: account.scope,\n                                id_token: account.id_token,\n                                session_state: account.session_state\n                            }\n                        });\n                    }\n                    return true;\n                } else {\n                    // If the user doesn't exist, create a new user\n                    await prisma.user.create({\n                        data: {\n                            email: profile.email,\n                            name: profile.name ?? null,\n                            image: profile.image ?? null,\n                            emailVerified: new Date(),\n                            password: ''\n                        }\n                    });\n                }\n            }\n            return true;\n        }\n    },\n    debug: \"development\" === 'development'\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDVjtBQUNFO0FBQ1o7QUFDYjtBQUdoQyxJQUFJLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO0lBQzdCLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLElBQUksQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDRyxlQUFlLEVBQUU7SUFDaEMsTUFBTSxJQUFJRCxNQUFNO0FBQ2xCO0FBRUEsSUFBSSxDQUFDSCxRQUFRQyxHQUFHLENBQUNJLGdCQUFnQixFQUFFO0lBQ2pDLE1BQU0sSUFBSUYsTUFBTTtBQUNsQjtBQUVBLElBQUksQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDSyxvQkFBb0IsRUFBRTtJQUNyQyxNQUFNLElBQUlILE1BQU07QUFDbEI7QUFFQSxNQUFNSSxTQUFTLElBQUlULHdEQUFZQTtBQUV4QixNQUFNVSxjQUErQjtJQUMxQ0MsU0FBU1osd0VBQWFBLENBQUNVO0lBQ3ZCRyxXQUFXO1FBQ1RmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBUUMsYUFBYTtnQkFBcUI7Z0JBQ3pFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFLLFVBQVU7b0JBQ2pELE1BQU0sSUFBSWQsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTWdCLE9BQU8sTUFBTVosT0FBT1ksSUFBSSxDQUFDQyxVQUFVLENBQUM7b0JBQ3hDQyxPQUFPO3dCQUNMUixPQUFPRCxZQUFZQyxLQUFLO29CQUMxQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0EsS0FBS0YsUUFBUSxFQUFFO29CQUMzQixNQUFNLElBQUlkLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU1tQixrQkFBa0IsTUFBTXZCLCtDQUFPQSxDQUFDYSxZQUFZSyxRQUFRLEVBQUVFLEtBQUtGLFFBQVE7Z0JBRXpFLElBQUksQ0FBQ0ssaUJBQWlCO29CQUNwQixNQUFNLElBQUluQixNQUFNO2dCQUNsQjtnQkFFQSxPQUFPO29CQUNMb0IsSUFBSUosS0FBS0ksRUFBRTtvQkFDWFYsT0FBT00sS0FBS04sS0FBSztvQkFDakJGLE1BQU1RLEtBQUtSLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBZixzRUFBY0EsQ0FBQztZQUNiNEIsVUFBVXhCLFFBQVFDLEdBQUcsQ0FBQ0ksZ0JBQWdCO1lBQ3RDb0IsY0FBY3pCLFFBQVFDLEdBQUcsQ0FBQ0ssb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDRG9CLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQUMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFZixJQUFJLEVBQUVnQixPQUFPLEVBQUU7WUFDaEMsSUFBSWhCLE1BQU07Z0JBQ1JlLE1BQU1YLEVBQUUsR0FBR0osS0FBS0ksRUFBRTtZQUNwQjtZQUNBLElBQUlZLFdBQVdBLFFBQVFDLFFBQVEsS0FBSyxVQUFVO2dCQUM1Q0YsTUFBTUcsaUJBQWlCLEdBQUdGLFFBQVFHLFlBQVk7WUFDaEQ7WUFDQSxPQUFPSjtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5QixJQUFJTCxRQUFRVixJQUFJLEVBQUU7Z0JBQ2ZVLFFBQVFWLElBQUksQ0FBU0ksRUFBRSxHQUFHVyxNQUFNWCxFQUFFO1lBQ3JDO1lBQ0EsT0FBT007UUFDVDtRQUNBLE1BQU1GLFFBQU8sRUFBRVIsSUFBSSxFQUFFZ0IsT0FBTyxFQUFFSSxPQUFPLEVBQUU7WUFDckMsSUFBSUosU0FBU0MsYUFBYSxZQUFZRyxTQUFTMUIsT0FBTztnQkFDcEQsTUFBTTJCLGVBQWUsTUFBTWpDLE9BQU9ZLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUNoREMsT0FBTzt3QkFBRVIsT0FBTzBCLFFBQVExQixLQUFLO29CQUFDO2dCQUNoQztnQkFDQSxJQUFJMkIsY0FBYztvQkFDaEIsdUVBQXVFO29CQUN2RSxNQUFNQyxrQkFBa0IsTUFBTWxDLE9BQU80QixPQUFPLENBQUNPLFNBQVMsQ0FBQzt3QkFDckRyQixPQUFPOzRCQUFFc0IsUUFBUUgsYUFBYWpCLEVBQUU7NEJBQUVhLFVBQVU7d0JBQVM7b0JBQ3ZEO29CQUNBLElBQUksQ0FBQ0ssaUJBQWlCO3dCQUNwQixNQUFNbEMsT0FBTzRCLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDOzRCQUMxQkMsTUFBTTtnQ0FDSkYsUUFBUUgsYUFBYWpCLEVBQUU7Z0NBQ3ZCUixNQUFNb0IsUUFBUXBCLElBQUk7Z0NBQ2xCcUIsVUFBVUQsUUFBUUMsUUFBUTtnQ0FDMUJVLG1CQUFtQlgsUUFBUVcsaUJBQWlCO2dDQUM1Q1IsY0FBY0gsUUFBUUcsWUFBWTtnQ0FDbENTLFlBQVlaLFFBQVFZLFVBQVU7Z0NBQzlCQyxZQUFZYixRQUFRYSxVQUFVO2dDQUM5QkMsT0FBT2QsUUFBUWMsS0FBSztnQ0FDcEJDLFVBQVVmLFFBQVFlLFFBQVE7Z0NBQzFCQyxlQUFlaEIsUUFBUWdCLGFBQWE7NEJBQ3RDO3dCQUNGO29CQUNGO29CQUNBLE9BQU87Z0JBQ1QsT0FBTztvQkFDTCwrQ0FBK0M7b0JBQy9DLE1BQU01QyxPQUFPWSxJQUFJLENBQUN5QixNQUFNLENBQUM7d0JBQ3ZCQyxNQUFNOzRCQUNKaEMsT0FBTzBCLFFBQVExQixLQUFLOzRCQUNwQkYsTUFBTTRCLFFBQVE1QixJQUFJLElBQUk7NEJBQ3RCeUMsT0FBT2IsUUFBUWEsS0FBSyxJQUFJOzRCQUN4QkMsZUFBZSxJQUFJQzs0QkFDbkJyQyxVQUFVO3dCQUNaO29CQUNGO2dCQUNGO1lBQ0Y7WUFDQSxPQUFPO1FBQ1Q7SUFDRjtJQUNBc0MsT0FBT3ZELGtCQUF5QjtBQUNsQyxFQUFDO0FBRUQsTUFBTXdELFVBQVU5RCxnREFBUUEsQ0FBQ2M7QUFFaUIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGVlcGFrIFJhbWFtdXJ0aHlcXERlc2t0b3BcXGh1bmdyeS1jcnVzaFxcYXBwXFxhcGlcXGF1dGhcXFsuLi5uZXh0YXV0aF1cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcclxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcclxuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCJiY3J5cHRcIlxyXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdORVhUQVVUSF9VUkwgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbm90IHNldCcpXHJcbn1cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdORVhUQVVUSF9TRUNSRVQgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbm90IHNldCcpXHJcbn1cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCkge1xyXG4gIHRocm93IG5ldyBFcnJvcignR09PR0xFX0NMSUVOVF9JRCBlbnZpcm9ubWVudCB2YXJpYWJsZSBpcyBub3Qgc2V0JylcclxufVxyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCkge1xyXG4gIHRocm93IG5ldyBFcnJvcignR09PR0xFX0NMSUVOVF9TRUNSRVQgZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbm90IHNldCcpXHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwianNtaXRoQGV4YW1wbGUuY29tXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZW1haWwgb3IgcGFzc3dvcmQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRWYWxpZCA9IGF3YWl0IGNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpXHJcblxyXG4gICAgICAgIGlmICghaXNQYXNzd29yZFZhbGlkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFzc3dvcmQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXHJcbiAgICBlcnJvcjogJy9hdXRoL2Vycm9yJyxcclxuICB9LFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFjY291bnQgJiYgYWNjb3VudC5wcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xyXG4gICAgICAgIHRva2VuLmdvb2dsZUFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW5cclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmlkID0gdG9rZW4uaWRcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xyXG4gICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09IFwiZ29vZ2xlXCIgJiYgcHJvZmlsZT8uZW1haWwpIHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBwcm9maWxlLmVtYWlsIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgdXNlciBleGlzdHMgYnV0IGRvZXNuJ3QgaGF2ZSBhIGxpbmtlZCBHb29nbGUgYWNjb3VudCwgbGluayBpdFxyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdBY2NvdW50ID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcclxuICAgICAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBleGlzdGluZ1VzZXIuaWQsIHByb3ZpZGVyOiBcImdvb2dsZVwiIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCFleGlzdGluZ0FjY291bnQpIHtcclxuICAgICAgICAgICAgYXdhaXQgcHJpc21hLmFjY291bnQuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGV4aXN0aW5nVXNlci5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjY291bnQudHlwZSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBhY2NvdW50LnByb3ZpZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJBY2NvdW50SWQ6IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQsXHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IGFjY291bnQuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgZXhwaXJlc19hdDogYWNjb3VudC5leHBpcmVzX2F0LFxyXG4gICAgICAgICAgICAgICAgdG9rZW5fdHlwZTogYWNjb3VudC50b2tlbl90eXBlLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IGFjY291bnQuc2NvcGUsXHJcbiAgICAgICAgICAgICAgICBpZF90b2tlbjogYWNjb3VudC5pZF90b2tlbixcclxuICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IGFjY291bnQuc2Vzc2lvbl9zdGF0ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgdGhlIHVzZXIgZG9lc24ndCBleGlzdCwgY3JlYXRlIGEgbmV3IHVzZXJcclxuICAgICAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUgPz8gbnVsbCxcclxuICAgICAgICAgICAgICBpbWFnZTogcHJvZmlsZS5pbWFnZSA/PyBudWxsLFxyXG4gICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLCAvLyBTZXQgYW4gZW1wdHkgc3RyaW5nIGFzIHBhc3N3b3JkIGZvciBHb29nbGUgdXNlcnNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpXHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwiUHJpc21hQ2xpZW50IiwiY29tcGFyZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9VUkwiLCJFcnJvciIsIk5FWFRBVVRIX1NFQ1JFVCIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpc1Bhc3N3b3JkVmFsaWQiLCJpZCIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInByb3ZpZGVyIiwiZ29vZ2xlQWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJwcm9maWxlIiwiZXhpc3RpbmdVc2VyIiwiZXhpc3RpbmdBY2NvdW50IiwiZmluZEZpcnN0IiwidXNlcklkIiwiY3JlYXRlIiwiZGF0YSIsInByb3ZpZGVyQWNjb3VudElkIiwiZXhwaXJlc19hdCIsInRva2VuX3R5cGUiLCJzY29wZSIsImlkX3Rva2VuIiwic2Vzc2lvbl9zdGF0ZSIsImltYWdlIiwiZW1haWxWZXJpZmllZCIsIkRhdGUiLCJkZWJ1ZyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDeepak%20Ramamurthy%5CDesktop%5Chungry-crush&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();