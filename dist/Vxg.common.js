module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_id_3f0abe61_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d7fe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_id_3f0abe61_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicLed_vue_vue_type_style_index_0_id_3f0abe61_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "0ae5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "10d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_id_23054cce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ae5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_id_23054cce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicHead_vue_vue_type_style_index_0_id_23054cce_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1b42":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VForm");

/***/ }),

/***/ "1faa":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VMain");

/***/ }),

/***/ "2757":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VCombobox");

/***/ }),

/***/ "354e":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VIcon");

/***/ }),

/***/ "5f3c":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VGrid");

/***/ }),

/***/ "6544":
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "6881":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VTextField");

/***/ }),

/***/ "6b38":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VChip");

/***/ }),

/***/ "7013":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VApp");

/***/ }),

/***/ "7c88":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "863d":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VBtn");

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8ece":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VNavigationDrawer");

/***/ }),

/***/ "8fd1":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VSheet");

/***/ }),

/***/ "b1bf":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VDataTable");

/***/ }),

/***/ "b7cf":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VCard");

/***/ }),

/***/ "bce7":
/***/ (function(module, exports, __webpack_require__) {

!function(e){if(true)module.exports=e();else {}}((function(){var e={},t={};Object.defineProperty(t,"__esModule",{value:!0}),t.Gubu=void 0;const n=Symbol.for("gubu$"),l={gubu$:n,v$:"3.1.0"},r=Symbol.for("gubu$nil"),i=/^[A-Z]/,o="",u="gubu",s="name",a="nan",f="never",p="number",c="required",h="array",d="function",v="object",b="string",y="undefined",m="any",g="list",$="instance",I="null",x="type",k="Object",w="Array",G="Above",S="After",N="All",V="Any",R="Before",A="Below",O="Check",j="Closed",D="Define",E="Empty",C="Exact",B="Func",M="Max",T="Min",L="Never",q="Len",F="One",P="Open",J="Optional",W="Refer",z="Rename",H="Required",U="Skip",_="Some",Z="Value",K=" for property ",Q='"$PATH"',X='"$VALUE"',Y=e=>Object.keys(e),ee=(e,t,n)=>Object.defineProperty(e,t,n),te=e=>Array.isArray(e),ne=e=>JSON.parse(e),le=(e,t)=>JSON.stringify(e,t);class re{constructor(e,t,n,l){this.match=!1,this.dI=0,this.nI=2,this.cI=-1,this.pI=0,this.sI=-1,this.valType=f,this.isRoot=!1,this.key=o,this.type=f,this.stop=!0,this.nextSibling=!0,this.fromDefault=!1,this.ignoreVal=void 0,this.err=[],this.parents=[],this.keys=[],this.path=[],this.root=e,this.vals=[e,-1],this.node=t,this.nodes=[t,-1],this.ctx=n||{},this.match=!!l}next(){this.stop=!1,this.fromDefault=!1,this.ignoreVal=void 0,this.isRoot=0===this.pI;let e=this.nodes[this.pI];for(;+e;)this.pI=+e,e=this.nodes[this.pI],this.dI--;e?(this.node=e,this.updateVal(this.vals[this.pI]),this.key=this.keys[this.pI],this.cI=this.pI,this.sI=this.pI+1,this.parent=this.parents[this.pI],this.nextSibling=!0,this.type=this.node.t,this.path[this.dI]=this.key,this.oval=this.val):this.stop=!0}updateVal(e){this.val=e,this.valType=typeof this.val,p===this.valType&&isNaN(this.val)&&(this.valType=a),this.isRoot&&!this.match&&(this.root=this.val)}}class ie extends TypeError{constructor(e,t,n){super(t.map(e=>e.t).join("\n")),this.gubu=!0,this.name="GubuError",this.code=e,this.desc=()=>({name:"GubuError",code:e,err:t,ctx:n})}toJSON(){return{...this,err:this.desc().err,name:this.name,message:this.message}}}const oe={String:!0,Number:!0,Boolean:!0,Object:!0,Array:!0,Function:!0,Symbol:!0,BigInt:!0},ue={string:o,number:0,boolean:!1,object:{},array:[],symbol:Symbol(o),bigint:BigInt(0),null:null};function se(e,t){var u,s,f,c;if(ae===e)e=void 0;else if(null!=e&&(null===(u=e.$)||void 0===u?void 0:u.gubu$)){if(n===e.$.gubu$)return e.d=null==t?e.d:t,e;if(!0===e.$.gubu$){let l={...e};return l.$={v$:"3.1.0",...l.$,gubu$:n},l.v=null!=l.v&&v===typeof l.v?{...l.v}:l.v,l.t=l.t||typeof l.v,d===l.t&&oe[l.v.name]&&(l.t=l.v.name.toLowerCase(),l.v=We(ue[l.t])),l.r=!!l.r,l.p=!!l.p,l.d=null==t?null==l.d?-1:l.d:t,l.b=l.b||[],l.a=l.a||[],l.u=l.u||{},l}}let g=null===e?I:typeof e;g=y===g?m:g;let x=e,w=r,G=!1,S={},N=[],V=[];if(v===g)te(x)?(g=h,1===x.length&&(w=x[0],x=[])):null!=x&&Function!==x.constructor&&Object!==x.constructor&&null!=x.constructor?(g=$,S.n=x.constructor.name,S.i=x.constructor):0===Y(x).length&&(w=ye());else if(d===g)if(oe[e.name])g=e.name.toLowerCase(),G=!0,x=We(ue[g]),k===e.name&&(w=ye());else if(x.gubu===l||!0===(null===(s=x.$)||void 0===s?void 0:s.gubu)){let e=x.node?x.node():x;g=e.t,x=e.v,G=e.r,S={...e.u},N=[...e.a],V=[...e.b]}else"Function"===x.constructor.name&&i.test(x.name)&&(g=$,G=!0,S.n=null===(c=null===(f=x.prototype)||void 0===f?void 0:f.constructor)||void 0===c?void 0:c.name,S.i=x);else p===g&&isNaN(x)?g=a:b===g&&o===x&&(S.empty=!0);let R=null==x||v!==g&&h!==g?x:{...x};return{$:l,t:g,v:R,n:null!=R&&v===typeof R?Y(R).length:0,c:w,r:G,p:!1,d:null==t?-1:t,u:S,a:N,b:V}}function ae(t,i){const u=null==i?{}:i;u.name=null==u.name?"G"+(o+Math.random()).substring(2,8):o+u.name;let s=se(t,0);function a(e,t,n){let l=new re(e,s,t,n);for(;l.next(),!l.stop;){let e=l.node,t=!1;if(0<e.b.length)for(let r=0;r<e.b.length;r++){let n=fe(e.b[r],l);e=l.node,void 0!==n.done&&(t=n.done)}if(!t)if(f===l.type)l.err.push(Fe(f,l,1070));else if(v===l.type){let t;if(e.r&&void 0===l.val?(l.ignoreVal=!0,l.err.push(Fe(c,l,1010))):void 0===l.val||null!==l.val&&v===l.valType&&!te(l.val)?e.p&&null==l.val||(l.updateVal(l.val||(l.fromDefault=!0,{})),t=l.val):(l.err.push(Fe(x,l,1020)),t=te(l.val)?l.val:{}),null!=(t=null==t&&!1===l.ctx.err?{}:t)){let n=!1,i=Y(e.v),o=l.nI;if(0<i.length){n=!0,l.pI=o;for(let n of i){let r=e.v[n]=se(e.v[n],1+l.dI);l.nodes[l.nI]=r,l.vals[l.nI]=t[n],l.parents[l.nI]=t,l.keys[l.nI]=n,l.nI++}}let u=Y(t).filter(t=>void 0===e.v[t]);if(0<u.length)if(r===e.c)l.ignoreVal=!0,l.err.push(Fe("closed",l,1100,void 0,{k:u}));else{n=!0,l.pI=o;for(let n of u){let r=e.c=se(e.c,1+l.dI);l.nodes[l.nI]=r,l.vals[l.nI]=t[n],l.parents[l.nI]=t,l.keys[l.nI]=n,l.nI++}}n&&(l.dI++,l.nodes[l.nI++]=l.sI,l.nextSibling=!1)}}else if(h===l.type)if(e.r&&void 0===l.val)l.ignoreVal=!0,l.err.push(Fe(c,l,1030));else if(void 0===l.val||te(l.val)){if(!e.p||null!=l.val){l.updateVal(l.val||(l.fromDefault=!0,[]));let t=0<l.val.length,n=r!==e.c,i=Y(e.v).filter(e=>!isNaN(+e)),u=0<i.length;if(t||u){l.pI=l.nI;let r=0;if(u)if(i.length<l.val.length&&!n)l.ignoreVal=!0,l.err.push(Fe("closed",l,1090,void 0,{k:i.length}));else for(;r<i.length;r++){let t=e.v[r]=se(e.v[r],1+l.dI);l.nodes[l.nI]=t,l.vals[l.nI]=l.val[r],l.parents[l.nI]=l.val,l.keys[l.nI]=o+r,l.nI++}if(n&&t){let t=e.c=se(e.c,1+l.dI);for(;r<l.val.length;r++)l.nodes[l.nI]=t,l.vals[l.nI]=l.val[r],l.parents[l.nI]=l.val,l.keys[l.nI]=o+r,l.nI++}l.ignoreVal||(l.dI++,l.nodes[l.nI++]=l.sI,l.nextSibling=!1)}}}else l.err.push(Fe(x,l,1040));else if(m===l.type||g===l.type||void 0===l.val||l.type===l.valType||$===l.type&&e.u.i&&l.val instanceof e.u.i||I===l.type&&null===l.val)if(void 0===l.val){let t=l.path[l.dI];!e.r||y===l.type&&l.parent.hasOwnProperty(t)?void 0!==e.v&&!e.p||y===l.type?(l.updateVal(e.v),l.fromDefault=!0):m===l.type&&(l.ignoreVal=void 0===l.ignoreVal||l.ignoreVal):(l.ignoreVal=!0,l.err.push(Fe(c,l,1060)))}else b!==l.type||o!==l.val||e.u.empty||l.err.push(Fe(c,l,1080));else l.err.push(Fe(x,l,1050));if(0<e.a.length)for(let r=0;r<e.a.length;r++){let n=fe(e.a[r],l);e=l.node,void 0!==n.done&&(t=n.done)}let n=l.node.p?!1!==l.ignoreVal:!!l.ignoreVal;!l.match&&null!=l.parent&&!t&&!n&&(l.parent[l.key]=l.val),l.nextSibling&&(l.pI=l.sI)}if(0<l.err.length)if(te(l.ctx.err))l.ctx.err.push(...l.err);else if(!l.match&&!1!==l.ctx.err)throw new ie("shape",l.err,l.ctx);return l.match?0===l.err.length:l.root}function p(e,t){return a(e,t,!1)}p.valid=function(e,t){let n=t||{};return n.err=n.err||[],a(e,n,!1),0===n.err.length},p.match=(e,t)=>a(e,t=t||{},!0),p.error=(e,t)=>{let n=t||{};return n.err=n.err||[],a(e,n,!1),n.err},p.spec=()=>(p(void 0,{err:!1}),ne(Je(s,(e,t)=>n===t||t,!1,!0))),p.node=()=>(p.spec(),s);let d=o;return p.toString=()=>(d=je(o===d?Je(s&&s.$&&(n===s.$.gubu$||!0===s.$.gubu$)?s.v:s):d),`[Gubu ${u.name} ${d}]`),e.inspect&&e.inspect.custom&&(p[e.inspect.custom]=p.toString),p.gubu=l,p}function fe(e,t){var n;let l,r={},i=!1;try{i=!(void 0!==t.val||null===(n=e.gubu$)||void 0===n||!n.Check)||e(t.val,r,t)}catch(s){l=s}let u=te(r.err)?0<r.err.length:null!=r.err;if(!i||u){if(void 0===t.val&&(t.node.p||!t.node.r)&&!0!==r.done)return delete r.err,r;let n=r.why||"check",i=pe(t);if(b===typeof r.err)t.err.push(qe(t,r.err));else if(v===typeof r.err)t.err.push(...[r.err].flat().map(e=>(e.p=null==e.p?i:e.p,e.m=null==e.m?2010:e.m,e)));else{let r=e.name;null!=r&&o!=r||(r=je(e.toString().replace(/[ \t\r\n]+/g," "))),t.err.push(Fe(n,t,1045,void 0,{thrown:l},r))}r.done=null==r.done||r.done}return r.hasOwnProperty("uval")?(t.updateVal(r.uval),t.ignoreVal=!1):void 0===r.val||Number.isNaN(r.val)||(t.updateVal(r.val),t.ignoreVal=!1),void 0!==r.node&&(t.node=r.node),void 0!==r.type&&(t.type=r.type),r}function pe(e){return e.path.slice(1,e.dI+1).filter(e=>null!=e).join(".")}const ce=function(e){let t=Le(this,e);return t.r=!0,t.p=!1,void 0===e&&1===arguments.length&&(t.t=y,t.v=void 0),t},he=function(e){let t=Le(this,e);return t.r=!1,void 0===e&&1===arguments.length&&(t.t=y,t.v=void 0),t},de=function(e){let t=Le(this,e);return t.r=!1,t.p=!0,t},ve=function(e){let t=Le(this);return t.t=d,t.v=e,t},be=function(e){let t=Le(this,e);return t.u.empty=!0,t},ye=function(e){let t=Le(this,e);return t.t=m,void 0!==e&&(t.v=e),t},me=function(e){let t=Le(this,e);return t.t=f,t},ge=function(...e){let t=Le();t.t=g,t.r=!0;let n=e.map(e=>He(e));return t.u.list=e,t.b.push((function(t,l,r){let i=!0;for(let e of n){let n={...r.ctx,err:[]};e(t,n),0<n.err.length&&(i=!1)}return i||(l.why=N,l.err=[qe(r,Z+" "+X+K+Q+" does not satisfy all of: "+e.map(e=>Je(e,null,!0)).join(", "))]),i})),t},$e=function(...e){let t=Le();t.t=g,t.r=!0;let n=e.map(e=>He(e));return t.u.list=e,t.b.push((function(t,l,r){let i=!1;for(let e of n){let n={...r.ctx,err:[]},o=e.match(t,n);o&&(l.val=e(t,n)),i||(i=o)}return i||(l.why=_,l.err=[qe(r,Z+" "+X+K+Q+" does not satisfy any of: "+e.map(e=>Je(e,null,!0)).join(", "))]),i})),t},Ie=function(...e){let t=Le();t.t=g,t.r=!0;let n=e.map(e=>He(e));return t.u.list=e,t.b.push((function(t,l,r){let i=0;for(let e of n){let n={...r.ctx,err:[]};if(e.match(t,n)){i++,l.val=e(t,n);break}}return 1!==i&&(l.why=F,l.err=[qe(r,Z+" "+X+K+Q+" does not satisfy one of: "+e.map(e=>Je(e,null,!0)).join(", "))]),!0})),t},xe=function(...e){let t=Le();return t.b.push((function(t,n,l){for(let r=0;r<e.length;r++)if(t===e[r])return!0;return n.err=qe(l,Z+" "+X+K+Q+" must be exactly one of: "+l.node.s+"."),n.done=!0,!1})),t.s=e.map(e=>Je(e,null,!0)).join(", "),t},ke=function(e,t){let n=Le(this,t);return n.b.push(e),n},we=function(e,t){let n=Le(this,t);return n.a.push(e),n},Ge=function(e,t){let n=Le(this,t);if(d===typeof e){let t=e;t.gubu$=t.gubu$||{},t.gubu$.Check=!0,n.b.push(e),n.s=(null==n.s?o:n.s+";")+Je(e,null,!0),n.r=!0}else if(v===typeof e){if(Object.prototype.toString.call(e).includes("RegExp")){let t=t=>null!=t&&!Number.isNaN(t)&&!!String(t).match(e);ee(t,s,{value:String(e)}),ee(t,"gubu$",{value:{Check:!0}}),n.b.push(t),n.s=Je(e),n.r=!0}}else b===typeof e&&(n.t=e,n.r=!0);return n},Se=function(e){let t=Le(this,e);return t.c=ye(),t},Ne=function(e){let t=Le(this,e);return h===t.t&&r!==t.c&&0===t.n?(t.v=[t.c],t.c=r):t.c=r,t},Ve=function(e,t){let n=Le(this,t),l=b===typeof e?e:(v===typeof e&&e||{}).name;return null!=l&&o!=l&&n.b.push((function(e,t,n){return(n.ctx.ref=n.ctx.ref||{})[l]=n.node,!0})),n},Re=function(e,t){let n=Le(this,t),l=v===typeof e&&e||{},r=b===typeof e?e:l.name,i=!!l.fill;return null!=r&&o!=r&&n.b.push((function(e,t,n){if(void 0!==e||i){let e=n.ctx.ref=n.ctx.ref||{};if(void 0!==e[r]){let n={...e[r]};n.t=n.t||f,t.node=n,t.type=n.t}}return!0})),n},Ae=function(e,t){let n=Le(this,t),l=v===typeof e&&e||{},r=b===typeof e?e:l.name,i="boolean"==typeof l.keep?l.keep:void 0,u=te(l.claim)?l.claim:[];if(null!=r&&o!=r){let e=(e,t,n)=>{if(void 0===e&&0<u.length){n.ctx.Rename=n.ctx.Rename||{},n.ctx.Rename.fromDefault=n.ctx.Rename.fromDefault||{};for(let e of u){let l=n.ctx.Rename.fromDefault[e]||{};if(void 0!==n.parent[e]&&!l.yes){t.val=n.parent[e],n.match||(n.parent[r]=t.val),t.node=l.node;for(let e=0;e<n.err.length;e++)n.err[e].k===l.key&&(n.err.splice(e,1),e--);if(i){let t=n.cI+1;n.nodes.splice(t,0,se(l.dval)),n.vals.splice(t,0,void 0),n.parents.splice(t,0,n.parent),n.keys.splice(t,0,e),n.nI++,n.pI++}else delete n.parent[e];break}}void 0===t.val&&(t.val=n.node.v)}return!0};ee(e,s,{value:"Rename:"+r}),n.b.push(e);let t=(e,t,n)=>(n.parent[r]=e,n.match||i||n.key===r||te(n.parent)&&!1!==i||(delete n.parent[n.key],t.done=!0),n.ctx.Rename=n.ctx.Rename||{},n.ctx.Rename.fromDefault=n.ctx.Rename.fromDefault||{},n.ctx.Rename.fromDefault[r]={yes:n.fromDefault,key:n.key,dval:n.node.v,node:n.node},!0);ee(t,s,{value:"Rename:"+r}),n.a.push(t)}return n};function Oe(e){return p===typeof e?e:p===typeof(null==e?void 0:e.length)?e.length:null!=e&&v===typeof e?Y(e).length:NaN}function je(e,t){let n=String(e),l=null==t||isNaN(t)?30:t<0?0:~~t,r=null==e?0:n.length,i=null==e?o:n.substring(0,r);return(i=l<r?i.substring(0,l-3)+"...":i).substring(0,l)}const De=function(e,t){let n=Le(this,t);return n.b.push((function(t,n,l){let r=Oe(t);if(e<=r)return!0;let i=p===typeof t?o:"length ";return n.err=qe(l,Z+" "+X+K+Q+` must be a minimum ${i}of ${e} (was ${r}).`),!1})),n.s=T+"("+e+(null==t?o:","+Je(t))+")",n},Ee=function(e,t){let n=Le(this,t);return n.b.push((function(t,n,l){let r=Oe(t);if(r<=e)return!0;let i=p===typeof t?o:"length ";return n.err=qe(l,Z+" "+X+K+Q+` must be a maximum ${i}of ${e} (was ${r}).`),!1})),n.s=M+"("+e+(null==t?o:","+Je(t))+")",n},Ce=function(e,t){let n=Le(this,t);return n.b.push((function(t,n,l){let r=Oe(t);if(e<r)return!0;let i=p===typeof t?"be":"have length";return n.err=qe(l,Z+" "+X+K+Q+` must ${i} above ${e} (was ${r}).`),!1})),n.s=G+"("+e+(null==t?o:","+Je(t))+")",n},Be=function(e,t){let n=Le(this,t);return n.b.push((function(t,n,l){let r=Oe(t);if(r<e)return!0;let i=p===typeof t?"be":"have length";return n.err=qe(l,Z+" "+X+K+Q+` must ${i} below ${e} (was ${r}).`),!1})),n.s=A+"("+e+(null==t?o:","+Je(t))+")",n},Me=function(e,t){let n=Le(this,t||ye());return n.b.push((function(t,n,l){let r=Oe(t);if(e===r)return!0;let i=p===typeof t?o:" in length";return n.err=qe(l,Z+" "+X+K+Q+` must be exactly ${e}${i} (was ${r}).`),!1})),n.s=q+"("+e+(null==t?o:","+Je(t))+")",n},Te=function(e,t){let n=Le(null==t?this:t),l=se(e);return n.c=l,n};function Le(e,t){let n=se(null==e||e.window===e||e.global===e?t:e);return Object.assign(n,{Above:Ce,After:we,Any:ye,Before:ke,Below:Be,Check:Ge,Closed:Ne,Open:Se,Define:Ve,Empty:be,Exact:xe,Max:Ee,Min:De,Never:me,Len:Me,Refer:Re,Rename:Ae,Required:ce,Skip:de,Value:Te})}function qe(e,t,n,l){return Fe(n||"check",e,4e3,t,l)}function Fe(e,t,n,l,r,i){let u={k:t.key,n:t.node,v:t.val,p:pe(t),w:e,m:n,t:o,u:r||{}},s=je((void 0===t.val?o:Je(t.val)).replace(/"/g,o));if(null==l||o===l){let n=s.startsWith("[")?h:s.startsWith("{")?v:"value",l=s.startsWith("[")||te(t.parents[t.pI])?"index":"property",a="is",p=null==r?void 0:r.k;p=te(p)?(l=1<p.length?(a="are","properties"):l,p.join(", ")):p,u.t="Validation failed for "+(0<u.p.length?`${l} "${u.p}" with `:o)+`${n} "${s}" because `+(x===e?$===t.node.t?`the ${n} is not an instance of ${t.node.u.n} `:`the ${n} is not of type ${t.node.t}`:c===e?o===t.val?"an empty string is not allowed":`the ${n} is required`:"closed"===e?`the ${l} "${p}" ${a} not allowed`:f===e?"no value is allowed":`check "${null==i?e:i}" failed`)+(u.u.thrown?" (threw: "+u.u.thrown.message+")":".")}else u.t=l.replace(/\$VALUE/g,s).replace(/\$PATH/g,u.p);return u}function Pe(e){return null!=e.s&&o!==e.s?e.s:e.r||void 0===e.v?e.t:e.v}function Je(e,t,l,r){let i;r||!e||!e.$||n!==e.$.gubu$&&!0!==e.$.gubu$||(e=Pe(e));try{i=le(e,(e,l)=>{var i,u;if(t&&(l=t(e,l)),null!=l&&v===typeof l&&l.constructor&&k!==l.constructor.name&&w!==l.constructor.name)l=d===typeof l.toString?l.toString():l.constructor.name;else if(d===typeof l)l=d===typeof ae[l.name]&&isNaN(+e)?void 0:null!=l.name&&o!==l.name?l.name:je(l.toString().replace(/[ \t\r\n]+/g," "));else if("bigint"==typeof l)l=String(l.toString());else{if(Number.isNaN(l))return"NaN";!0===r||!0!==(null===(i=null==l?void 0:l.$)||void 0===i?void 0:i.gubu$)&&n!==(null===(u=null==l?void 0:l.$)||void 0===u?void 0:u.gubu$)||(l=Pe(l))}return l}),i=String(i)}catch(u){i=le(String(e))}return!0===l&&(i=i.replace(/^"/,o).replace(/"$/,o)),i}function We(e){return null==e||v!==typeof e?e:ne(le(e))}const ze=e=>se({...e,$:{gubu$:!0}});if(y!==typeof window){let e=[{b:Ce,n:G},{b:we,n:S},{b:ge,n:N},{b:ye,n:V},{b:ke,n:R},{b:Be,n:A},{b:Ge,n:O},{b:Ne,n:j},{b:Ve,n:D},{b:be,n:E},{b:xe,n:C},{b:ve,n:B},{b:Ee,n:M},{b:De,n:T},{b:me,n:L},{b:Me,n:q},{b:Ie,n:F},{b:Se,n:P},{b:he,n:J},{b:Re,n:W},{b:Ae,n:z},{b:ce,n:H},{b:de,n:U},{b:$e,n:_},{b:Te,n:Z}];for(let t of e)ee(t.b,s,{value:t.n})}Object.assign(ae,{Gubu:ae,Above:Ce,After:we,All:ge,Any:ye,Before:ke,Below:Be,Check:Ge,Closed:Ne,Define:Ve,Empty:be,Exact:xe,Func:ve,Max:Ee,Min:De,Never:me,Len:Me,One:Ie,Open:Se,Optional:he,Refer:Re,Rename:Ae,Required:ce,Skip:de,Some:$e,Value:Te,GAbove:Ce,GAfter:we,GAll:ge,GAny:ye,GBefore:ke,GBelow:Be,GCheck:Ge,GClosed:Ne,GDefine:Ve,GEmpty:be,GExact:xe,GFunc:ve,GMax:Ee,GMin:De,GNever:me,GLen:Me,GOne:Ie,GOpen:Se,GOptional:he,GRefer:Re,GRename:Ae,GRequired:ce,GSkip:de,GSome:$e,GValue:Te,G$:ze,buildize:Le,makeErr:qe,stringify:Je,truncate:je,nodize:se}),ee(ae,s,{value:u});const He=ae;t.Gubu=He;const{Gubu:Ue}=t;return Ue}));

/***/ }),

/***/ "bfa4":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VSelect");

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d7c8":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VAppBar");

/***/ }),

/***/ "d7fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dbe5":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VBtnToggle");

/***/ }),

/***/ "e34a":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VToolbar");

/***/ }),

/***/ "ec45":
/***/ (function(module, exports, __webpack_require__) {

!function(e){if(true)module.exports=e();else {}}((function(){return function(e,t,o){var n=(o=o||{}).depth||Number.MAX_VALUE,f=o.setter,l=!!o.preserve;"object"==typeof e&&"object"==typeof t&&function e(t,o,r){if(!(null==t||null==o||n<=r)){var i=r+1;if(Array.isArray(t)&&Array.isArray(o)){for(var u=0;u<t.length;u++)"object"==typeof t[u]?e(t[u],o[u],i):f?f(t,u,o[u]):t[u]=o[u];for(;u<o.length;u++)f?f(t,u,o[u]):t[u]=o[u];t.splice(o.length)}else{for(var d=Object.keys(t),y=0;y<d.length;y++){var p=t[d[y]],a=o[d[y]];"object"===(null===p?"null":typeof p)&&"object"===(null===a?"null":typeof a)?e(p,a,i):void 0===a?l||delete t[d[y]]:f?f(t,d[y],a):t[d[y]]=a}for(var s=Object.keys(o),c=0;c<s.length;c++)void 0===t[s[c]]&&(f?(f(t,s[c],o[s[c]]),null==o[s[c]]||!Array.isArray(o[s[c]])&&"object"!=typeof o[s[c]]||e(t[s[c]],o[s[c]],i)):t[s[c]]=o[s[c]])}}}(e,t,0)}}));

/***/ }),

/***/ "f17e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f62b":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e){if(true)module.exports=e();else {}}((function(){var e={exports:{}};(function(t){(function(){!function(n){"object"==typeof e.exports?e.exports=n():("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:this).Gex=n()}((function(){var e={exports:{}};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Gex=void 0;class t{constructor(e){this.desc="",this.gexmap={},null!=e&&(Array.isArray(e)?e:[e]).forEach(e=>{this.gexmap[e]=this.re(this.clean(e))})}dodgy(e){return null==e||Number.isNaN(e)}clean(e){let t=""+e;return this.dodgy(e)?"":t}match(e){e=""+e;let t=!1,n=Object.keys(this.gexmap);for(let r=0;r<n.length&&!t;r++)t=!!this.gexmap[n[r]].exec(e);return t}on(e){if(null==e)return null;let t=typeof e;if("string"===t||"number"===t||"boolean"===t||e instanceof Date||e instanceof RegExp)return this.match(e)?e:null;if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++)!this.dodgy(e[n])&&this.match(e[n])&&t.push(e[n]);return t}{let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.match(n)&&(t[n]=e[n]);return t}}esc(e){let t=this.clean(e);return(t=t.replace(/\*/g,"**")).replace(/\?/g,"*?")}escregexp(e){return e?(""+e).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):""}re(e){if(""===e||e)return e="^"+(e=(e=(e=(e=(e=this.escregexp(e)).replace(/\\\*/g,"[\\s\\S]*")).replace(/\\\?/g,"[\\s\\S]")).replace(/\[\\s\\S\]\*\[\\s\\S\]\*/g,"\\*")).replace(/\[\\s\\S\]\*\[\\s\\S\]/g,"\\?"))+"$",new RegExp(e);{let e=Object.keys(this.gexmap);return 1==e.length?this.gexmap[e[0]]:{...this.gexmap}}}toString(){let e=this.desc;return""!=e?e:this.desc="Gex["+Object.keys(this.gexmap)+"]"}inspect(){return this.toString()}}function n(e){return new t(e)}return e.exports.Gex=n,e.exports=n,e.exports.Gex=n,e.exports.default=n,e.exports}))}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),e=e.exports;var t,n,r,s,i,o,l,u,a,f={},p=this&&this.__classPrivateFieldGet||function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};Object.defineProperty(f,"__esModule",{value:!0}),f.IntervalMatcher=f.GexMatcher=void 0,f.GexMatcher=class{constructor(){}make(t,n){if("string"==typeof n&&n.match(/[*?]/)){let t=(0,e.Gex)(n);return{kind:"gex",match:e=>null!=t.on(e),fix:n,meta:{},same(e){return null!=e&&e.kind===this.kind&&e.fix===this.fix}}}}scan(e,t){let n=e.filter(e=>"*"===e.fix).length>0;return{complete:n,sound:n,gaps:[],overs:[],why:"no-star"}}};const h=new RegExp(["^/s*","(=*[<>/(/[]?=*)?/s*([-+0-9a-fA-FeEoOxX]+(/.([0-9a-fA-FeEoOxX]+))?)([/)/]]?)(/s*(,|&+|/|+|/./.)/s*(=*[<>]?=*)/s*([-+.0-9a-fA-FeEoOxX]+)/s*([/)/]]?))?/s*$"].join("").replace(/\//g,"\\"));class c{constructor(){this.kind="interval",t.set(this,(e,t)=>function(n){return e(n)&&t(n)}),n.set(this,(e,t)=>function(n){return e(n)||t(n)}),r.set(this,e=>function(e){return!1}),s.set(this,e=>function(e){return!1}),i.set(this,e=>function(t){return t>e}),o.set(this,e=>function(t){return t>=e}),l.set(this,e=>function(t){return t<e}),u.set(this,e=>function(t){return t<=e}),a.set(this,e=>function(t){return t===e})}make(e,f){if("string"==typeof f&&f.match(/[=<>.[()\]]/)){let e=f.match(h),d={jo:"and",o0:"err",n0:NaN,o1:"err",n1:NaN},g=e=>!1;if(null!=e){let h=c.normop(e[1])||c.normop(e[5]),m=c.normop(e[8])||c.normop(e[10]),v=p(this,"="===h?a:"<"===h||")"===h?l:"<="===h||"]"===h?u:">"===h||"("===h?i:">="===h||"["===h?o:s,"f"),x=Number(e[2]),k=null==e[9]?NaN:Number(e[9]),y=e[7],w=null==y?p(this,n,"f"):"&"===y.substring(0,1)||","===y.substring(0,1)?p(this,t,"f"):p(this,n,"f");".."===y&&(w=p(this,t,"f"),v=p(this,s,"f")===v?p(this,o,"f"):v,m=""===m?"<=":m);let N=p(this,null==m?r:"="===m?a:"<"===m||")"===m?l:"<="===m||"]"===m?u:">"===m?i:">="===m?o:s,"f");if(x===k&&("="===h&&null!=m?(k=NaN,N=p(this,r,"f"),v=m.includes("<")?p(this,u,"f"):m.includes(">")?p(this,o,"f"):m.includes("=")?p(this,a,"f"):p(this,s,"f")):"="===m&&null!=h&&(k=NaN,N=p(this,r,"f"),v=h.includes("<")?p(this,u,"f"):h.includes(">")?p(this,o,"f"):p(this,s,"f"))),p(this,s,"f")!==v&&p(this,r,"f")===N&&(p(this,l,"f")===v||p(this,u,"f")===v?(N=v,k=x,v=p(this,o,"f"),x=Number.NEGATIVE_INFINITY,w=p(this,t,"f")):p(this,i,"f")!==v&&p(this,o,"f")!==v||(N=p(this,u,"f"),k=Number.POSITIVE_INFINITY,w=p(this,t,"f"))),!isNaN(k)&&k<x){let e=N,t=k;k=x,x=t,".."!==y&&(N=v,v=e)}let b=v(x),O=N(k),j=w(b,O);return{kind:"interval",fix:f,meta:d={jo:j.name,o0:b.name,n0:x,o1:O.name,n1:k},match:g=e=>{let t=!1,n=parseFloat(e);return isNaN(n)||(t=j(n)),t},same(e){return null!=e&&e.kind===this.kind&&e.meta.jo===this.meta.jo&&e.meta.o0===this.meta.o0&&e.meta.n0===this.meta.n0&&e.meta.o1===this.meta.o1&&e.meta.n1===this.meta.n1}}}}}scan(e,t){let n={complete:!1,sound:!1,gaps:[],overs:[],lower:null,upper:null},r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,i=this.half_intervals(e);i.reduce((e,t)=>{let n="eq"===t.o,s="lt"===t.o,i="lte"===t.o,o="gt"===t.o,l="gte"===t.o,u=t.n;if(null==e.lower){let s={n:r,o:"gte"};e.lower=s,e.upper=t,r==u&&l||(o||l?e.gaps.push([s,{n:u,o:o?"lte":"lt",m:0}]):n&&e.gaps.push([s,{n:u,o:"lte",m:1}]))}else{let r="eq"===e.upper.o,a="lt"===e.upper.o,f="lte"===e.upper.o,p=(e.upper.o,e.upper.o,e.upper.n),h=e.upper;u===p?a&&(l||n)||(f||r)&&o||(r||a||f)&&e.gaps.push([{n:p,o:r||f?"gt":"gte",m:2,d:{u:h,h:t}},{n:u,o:n||l?"lt":"lte",m:3}]):p<u?s||i||(r||a||f)&&e.gaps.push([{n:p,o:r||f?"gt":"gte",m:4},{n:u,o:n||l?"lt":"lte",m:5}]):e.overs.push([{n:u,o:n||l?"gte":"gt",m:10},{n:p,o:r||f?"lte":"lt",m:11}]),e.upper=t}return e},n);let o=0<i.length&&i[i.length-1];return o&&s!==o.n&&"gt"!==o.o&&"gte"!==o.o&&n.gaps.push([{n:o.n,o:"eq"===o.o||"lte"===o.o?"gt":"gte",m:6},{n:s,o:"lte",m:7}]),n.complete=0===n.gaps.length,n.sound=0===n.overs.length,n}half_intervals(e){let t=[];for(let r of e)t.push([{n:r.meta.n0,o:r.meta.o0},{n:r.meta.n1,o:r.meta.o1}]);var n=["lt","lte","eq","gte","gt"];return t.map(e=>[isNaN(e[0].n)||null==e[0].n?null:e[0],isNaN(e[1].n)||null==e[1].n?null:e[1]].filter(e=>null!=e)).sort((e,t)=>{if(e[0].n<t[0].n)return-1;if(t[0].n<e[0].n)return 1;var r=n.indexOf(e[0].o),s=n.indexOf(t[0].o);if(r<s)return-1;if(s<r)return 1;if(e[1].n<t[1].n)return-1;if(t[1].n<e[1].n)return 1;var i=n.indexOf(e[1].o),o=n.indexOf(t[1].o);return i<o?-1:o<i?1:0}).reduce((e,t)=>e.concat(...t),[])}}f.IntervalMatcher=c,t=new WeakMap,n=new WeakMap,r=new WeakMap,s=new WeakMap,i=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,a=new WeakMap,c.normop=e=>null==e?null:((e.match(/([<>\(\)\[\]])/)||[])[1]||"")+((e.match(/(=)/)||[])[1]||"");var d={exports:{}};function g(t){var n={},r={};let s=[];return(t=t||{}).gex&&s.push(new f.GexMatcher),t.interval&&s.push(new f.IntervalMatcher),n.top=function(){return r},n.add=function(e,i){e={...e};var o="function"==typeof t?t.call(n,e,i):null,l=Object.keys(e).filter(t=>null!=e[t]).sort();l.forEach((function(t){e[t]=String(e[t])}));for(var u,a=r,f=0;f<l.length;f++){var p=l[f],h=e[p];let t=s.reduce((e,t)=>e||t.make(p,h),void 0);if((u=a.v)&&p==a.k)if(t){var c=(g=a.g=a.g||{})[p]=g[p]||[];a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})}else a=u[h]||(u[h]={});else if(a.k)if(p<a.k){var d=a.s;g=a.g,a.s={k:a.k,v:a.v},d&&(a.s.s=d),g&&(a.s.g=g),a.g&&(a.g={}),a.k=p,a.v={},t?(c=(g=a.g=a.g||{})[p]=g[p]||[],a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})):a=a.v[h]={}}else a=a.s||(a.s={}),f--;else if(a.k=p,a.v={},t){var g;c=(g=a.g=a.g||{})[p]=g[p]||[];a=(t=c.find(e=>e.same(t))||(c.push(t),t)).keymap||(t.keymap={})}else a=a.v[h]={}}return void 0!==i&&a&&(a.d=i,o&&(a.f="function"==typeof o?o:o.find,a.r="function"==typeof o.remove?o.remove:void 0)),n},n.findexact=function(e){return n.find(e,!0)},n.find=function(e,t,s){if(null==e)return null;var i=r,o=void 0===r.d?null:r.d,l=r.f,u=null,a=[],f={},p=Object.keys(e).length,h=[];void 0!==r.d&&h.push(r.d);do{if(u=i.k,i.v){var c=e[u],d=i.v[c];if(!d&&i.g&&i.g[u])for(var g=i.g[u],m=0;m<g.length;m++)if(g[m].match(c)){d=g[m].keymap;break}d?(f[u]=!0,i.s&&a.push(i.s),o=void 0===d.d?t?null:o:d.d,s&&void 0!==d.d&&h.push(d.d),l=d.f,i=d):i=i.s}else i=null;null==i&&0<a.length&&(null==o||s&&!t)&&(i=a.pop())}while(i);return t?Object.keys(f).length!==p&&(o=null):null==o&&void 0!==r.d&&(o=r.d),l&&(o=l.call(n,e,o)),s?h:o},n.remove=function(e){var t,n=r,s=null,i=[];do{if(t=n.k,n.v||n.g){if(n.v){var o=n.v[e[t]];o&&i.push({km:n,v:e[t]})}if(null==o&&n.g){let r=n.g[t]||[];for(let s=0;s<r.length;s++)if(r[s].fix===e[t]){i.push({km:n,v:e[t],mv:r[s]}),o=r[s].keymap;break}}o?(s=o.d,n=o):n=n.s}else n=null}while(n);if(void 0!==s){var l=i[i.length-1];if(l&&l.km&&l.km.v){var u=l.km.v[l.v]||l.mv&&l.mv.keymap;!u||u.r&&!u.r(e,u.d)||delete u.d}}},n.list=function(t,n){t=t||{};var s=[];return r.d&&s.push({match:{},data:r.d,find:r.f}),function r(s,i,o,l){if(s.v){var u,a=s.k,f=(0,e.Gex)(t?null==t[a]?n?null:"*":t[a]:"*"),p={...i},h={...o};for(var c in s.v)if(c===t[a]||!n&&null==t[a]||f.on(c)){var d={...p};d[a]=c;var g={...h};delete g[a],u=s.v[c],0===Object.keys(g).length&&u&&u.d&&l.push({match:d,data:u.d,find:u.f}),u&&null!=u.v&&r(u,{...d},{...g},l)}(u=s.s)&&r(u,{...p},{...h},l)}}(r,{},{...t},s),s},n.toString=function(e,t){var n=!0===e||!!t,s="function"==typeof e?e:function(e){return"function"==typeof e?"<"+e.name+">":"<"+e+">"};function i(e,t){for(var n=0;n<t;n++)e.push(" ")}var o=[],l=[];return function e(t,n,r,l){var u;if(void 0!==t.d&&(n.push(" "+s(t.d)),o.push(l.join(", ")+" -> "+s(t.d))),t.k&&(n.push("\n"),i(n,r),n.push(t.k+":")),(t.v||t.s||t.g)&&r++,t.v)for(var a=Object.keys(t.v).sort(),f=0;f<a.length;f++){var p=a[f];n.push("\n"),i(n,r),n.push(p+" ->"),(u=l.slice()).push(t.k+"="+p),e(t.v[p],n,r+1,u)}if(t.g)for(a=Object.keys(t.g).sort(),f=0;f<a.length;f++)for(var h=t.g[a[f]],c=0;c<h.length;c++){var d=h[c];n.push("\n"),i(n,r),n.push(d.fix+" ~>"),(u=l.slice()).push(t.k+"~"+d.fix),e(d.keymap,n,r+1,u)}t.s&&(n.push("\n"),i(n,r),n.push("|"),u=l.slice(),e(t.s,n,r+1,u))}(r,l,0,[]),n?l.join(""):o.join("\n")},n.inspect=n.toString,n.toJSON=function(e){return JSON.stringify(r,(function(e,t){return"function"==typeof t?"[Function]":t}),e)},n}function m(e){return new g(e)}return Object.defineProperty(d.exports,"__esModule",{value:!0}),d.exports.Gex=d.exports.Patrun=void 0,Object.defineProperty(d.exports,"Gex",{enumerable:!0,get:function(){return e.Gex}}),d.exports.Patrun=g,d.exports=m,d.exports.Patrun=g,d.exports.Gex=e.Gex,d.exports.default=m,d=d.exports}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f746":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_id_59741c9c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7c88");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_id_59741c9c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSide_vue_vue_type_style_index_0_id_59741c9c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/patrun/dist/patrun.min.js
var patrun_min = __webpack_require__("f62b");
var patrun_min_default = /*#__PURE__*/__webpack_require__.n(patrun_min);

// EXTERNAL MODULE: ./node_modules/@jsonic/jsonic-next/jsonic.min.js
var jsonic_min = __webpack_require__("fe20");
var jsonic_min_default = /*#__PURE__*/__webpack_require__.n(jsonic_min);

// EXTERNAL MODULE: ./src/vxg.scss
var vxg = __webpack_require__("f17e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=template&id=20bd7023&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"id":"app"}},[_c('vxg-basic-head',{attrs:{"spec":_vm.spec.parts.head,"logo":_vm.logo},on:{"action":function($event){return _vm.action('BasicHead', $event)}}}),(_vm.showSide)?_c('vxg-basic-side',{attrs:{"spec":_vm.spec.parts.side,"logo":_vm.logo},on:{"action":function($event){return _vm.action('BasicSide', $event)}}}):_vm._e(),_c('vxg-basic-main',{attrs:{"spec":_vm.spec.parts.main}}),_c('vxg-basic-foot',{attrs:{"spec":_vm.spec.parts.foot}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicAdmin.vue?vue&type=template&id=20bd7023&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAdmin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicAdminvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {
      spec: this.$model.main.app.web
    };
  },
  created: function created() {},
  computed: {
    showSide: function showSide() {
      return this.$store.state.vxg.cmp.BasicSide.show;
    }
  },
  methods: {
    action: function action(part, ev) {
      this.$emit('action', {
        part: part,
        event: ev
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicAdmin.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicAdminvue_type_script_lang_js_ = (BasicAdminvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__("6544");
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: external "vuetify/lib/components/VApp"
var VApp_ = __webpack_require__("7013");

// CONCATENATED MODULE: ./src/components/BasicAdmin.vue





/* normalize component */

var component = normalizeComponent(
  components_BasicAdminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicAdmin = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VApp: VApp_["VApp"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=template&id=23054cce&
var BasicHeadvue_type_template_id_23054cce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app-bar',{staticStyle:{"height":"64px","background-color":"white","margin-left":"85px"},attrs:{"app":""}},[(!_vm.drawerOpen && _vm.tool.expandSide.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":_vm.openDrawer}},[_vm._v("mdi-chevron-right")]):_vm._e(),(!_vm.drawerOpen && _vm.tool.expandSide.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.show('select') && _vm.tool.select.active)?_c('v-select',{staticStyle:{"max-width":"20%","display":"inline-block","margin-left":"10px"},attrs:{"items":_vm.selectItems(),"label":_vm.tool.select.title,"tile":"","outlined":"","hide-details":"","dense":""},model:{value:(_vm.select),callback:function ($$v) {_vm.select=$$v},expression:"select"}}):_vm._e(),(_vm.show('select') && _vm.tool.select.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.show('add') && _vm.tool.add.active)?_c('v-btn',{staticClass:"vxg-head-btn",attrs:{"tile":""},on:{"click":_vm.addItem}},[_c('v-icon',{attrs:{"left":"","medium":""}},[_vm._v(" mdi-map-marker-path ")]),_vm._v(" Add "+_vm._s(_vm.itemName)+" ")],1):_vm._e(),(_vm.show('add') && _vm.tool.add.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.show('remove') && _vm.tool.remove.active)?_c('v-btn',{staticClass:"vxg-head-btn",attrs:{"tile":""},on:{"click":_vm.removeItem}},[_c('v-icon',{attrs:{"left":"","medium":""}},[_vm._v(" mdi-map-marker-path ")]),_vm._v(" Remove "+_vm._s(_vm.itemName)+" ")],1):_vm._e(),(_vm.show('remove') && _vm.tool.remove.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(_vm.tool.search.active && _vm.show('search'))?_c('v-combobox',{attrs:{"items":_vm.getTags(),"flat":"","hide-details":"","outlined":"","dense":"","clearable":"","placeholder":"Search","append-icon":"mdi-filter"},on:{"click:append":_vm.filter},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}):_vm._e(),(_vm.tool.avatar.active || _vm.tool.expandMain.active)?_c('v-spacer'):_vm._e(),(_vm.tool.avatar.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":function($event){return _vm.action('avatar')}}},[_vm._v("mdi-account")]):_vm._e(),(!_vm.detailOpen && _vm.tool.expandMain.active)?_c('v-divider',{staticStyle:{"margin":"0px 16px"},attrs:{"vertical":""}}):_vm._e(),(!_vm.detailOpen && _vm.tool.expandMain.active)?_c('v-icon',{staticStyle:{"display":"inline-block"},attrs:{"large":"","light":""},on:{"click":_vm.closeDetail}},[_vm._v("mdi-chevron-left")]):_vm._e(),_c('v-divider',{attrs:{"vertical":""}}),_c('v-icon',{staticClass:"iconStyle",attrs:{"large":""}},[_vm._v("mdi-printer")]),_c('v-divider',{attrs:{"vertical":""}}),_c('v-icon',{staticClass:"iconStyle",attrs:{"large":""}},[_vm._v("mdi-bookmark-minus-outline")]),_c('v-divider',{attrs:{"vertical":""}}),_c('v-icon',{staticClass:"iconStyle",attrs:{"large":""}},[_vm._v("mdi-folder-open-outline")]),_c('v-divider',{attrs:{"vertical":""}})],1)}
var BasicHeadvue_type_template_id_23054cce_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicHead.vue?vue&type=template&id=23054cce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicHead.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicHeadvue_type_script_lang_js_ = ({
  props: ['logo'],
  data: function data() {
    return {
      search: '',
      select: '',
      view: {
        tool: {}
      }
    };
  },
  mounted: function mounted() {
    if (this.tool.select.active) {
      this.select = this.tool.select.initial;
    }
  },
  watch: {
    search: function search() {
      this.$store.dispatch('trigger_search', {
        term: this.search
      });
    },
    select: function select() {
      console.log('SELECT', this.select);
      this.$store.dispatch('trigger_select', {
        value: this.select
      });
    },
    '$store.vxg.cmp.BasicHead.allow.add': {
      handler: function handler() {
        this.$forceUpdate();
      }
    },
    '$store.vxg.cmp.BasicHead.allow.remove': {
      handler: function handler() {
        this.$forceUpdate();
      }
    },
    '$route.path': {
      handler: function handler(val) {
        if (val != '/oneview') {
          this.tool.select.active = false;
          this.tool.add.active = true;
          this.tool.remove.active = true;
          this.$store.state.vxg.cmp.BasicHead.show.select = false;
          this.$store.state.vxg.cmp.BasicHead.show.add = true;
          this.$store.state.vxg.cmp.BasicHead.show.remove = true;
        } else if (val == '/oneview') {
          // console.log("ONEVIEW: ", this.tool.select)
          this.tool.select.active = this.$store.state.vxg.cmp.BasicHead.show.select = this.$store.state.vxg.cmp.BasicHead.show.search = true;
          this.tool.add.active = false;
          this.tool.remove.active = false;
          this.$store.state.vxg.cmp.BasicHead.show.add = false;
          this.$store.state.vxg.cmp.BasicHead.show.remove = false;
        }
      }
    },
    route$: {
      immediate: true,
      handler: function handler(val) {
        var name = this.$route.name;
        var view = this.$model.main.app.web.view[name];

        if (view && view.head) {
          this.view.tool = view.head.tool;
        }
      }
    }
  },
  computed: {
    drawerOpen: function drawerOpen() {
      return this.$store.state.vxg.cmp.BasicSide.show;
    },
    detailOpen: function detailOpen() {
      return !this.$store.state.vxg.cmp.BasicMain.show;
    },
    itemName: function itemName() {
      return this.$store.state.vxg.ent.meta.name;
    },
    tool: function tool() {
      // TODO: better if main.app.web.parts.head was provided directly
      var headtool = this.$model.main.app.web.parts.head.tool;
      var viewtool = this.view.tool;
      var tool = this.$main.seneca.util.deep(headtool, viewtool);
      return tool;
    }
  },
  methods: {
    getTags: function getTags() {
      return this.$store.state.main_asset.map(function (asset) {
        return asset.tag;
      });
    },
    addItem: function addItem() {
      this.$store.dispatch('trigger_led_add');
    },
    removeItem: function removeItem() {
      this.$store.dispatch('trigger_led_remove');
    },
    selectItems: function selectItems() {
      var items = [];

      if (this.tool.select.items) {
        Object.entries(this.tool.select.items).reduce(function (items, entry) {
          items.push({
            value: entry[0],
            text: entry[1].title
          });
          return items;
        }, items);
      }

      console.log('selectItems', items);
      return items;
    },
    filter: function filter() {
      this.$store.dispatch('trigger_toggle_filter');
    },
    show: function show(action) {
      return this.allow(action) && this.$store.state.vxg.cmp.BasicHead.show[action];
    },
    allow: function allow(action) {
      var allowed = this.$store.state.vxg.cmp.BasicHead.allow[action];
      return null == allowed ? true : allowed;
    },
    openDrawer: function openDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: true
        }
      });
    },
    closeDetail: function closeDetail() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicMain',
        flags: {
          show: false
        }
      });
    },
    action: function action(name) {
      this.$emit('action', name);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicHead.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicHeadvue_type_script_lang_js_ = (BasicHeadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicHead.vue?vue&type=style&index=0&id=23054cce&prod&lang=scss&
var BasicHeadvue_type_style_index_0_id_23054cce_prod_lang_scss_ = __webpack_require__("10d0");

// EXTERNAL MODULE: external "vuetify/lib/components/VAppBar"
var VAppBar_ = __webpack_require__("d7c8");

// EXTERNAL MODULE: external "vuetify/lib/components/VBtn"
var VBtn_ = __webpack_require__("863d");

// EXTERNAL MODULE: external "vuetify/lib/components/VCombobox"
var VCombobox_ = __webpack_require__("2757");

// EXTERNAL MODULE: external "vuetify/lib/components/VDivider"
var VDivider_ = __webpack_require__("ffda");

// EXTERNAL MODULE: external "vuetify/lib/components/VIcon"
var VIcon_ = __webpack_require__("354e");

// EXTERNAL MODULE: external "vuetify/lib/components/VSelect"
var VSelect_ = __webpack_require__("bfa4");

// EXTERNAL MODULE: external "vuetify/lib/components/VGrid"
var VGrid_ = __webpack_require__("5f3c");

// CONCATENATED MODULE: ./src/components/BasicHead.vue






/* normalize component */

var BasicHead_component = normalizeComponent(
  components_BasicHeadvue_type_script_lang_js_,
  BasicHeadvue_type_template_id_23054cce_render,
  BasicHeadvue_type_template_id_23054cce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicHead = (BasicHead_component.exports);

/* vuetify-loader */








installComponents_default()(BasicHead_component, {VAppBar: VAppBar_["VAppBar"],VBtn: VBtn_["VBtn"],VCombobox: VCombobox_["VCombobox"],VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"],VSelect: VSelect_["VSelect"],VSpacer: VGrid_["VSpacer"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=template&id=585b97d2&
var BasicFootvue_type_template_id_585b97d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("___")])}
var BasicFootvue_type_template_id_585b97d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=template&id=585b97d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFoot.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var BasicFootvue_type_script_lang_js_ = ({
  data: function data() {
    return {};
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./src/components/BasicFoot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicFootvue_type_script_lang_js_ = (BasicFootvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BasicFoot.vue





/* normalize component */

var BasicFoot_component = normalizeComponent(
  components_BasicFootvue_type_script_lang_js_,
  BasicFootvue_type_template_id_585b97d2_render,
  BasicFootvue_type_template_id_585b97d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicFoot = (BasicFoot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=template&id=60366b10&
var BasicMainvue_type_template_id_60366b10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-main',{attrs:{"app":""}},[_c('v-container',{staticStyle:{"padding":"0px"},attrs:{"fluid":""}},[_c('router-view',{tag:"component",attrs:{"spec":_vm.view_spec}})],1)],1)}
var BasicMainvue_type_template_id_60366b10_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=template&id=60366b10&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicMainvue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    view_spec: function view_spec() {
      var viewname = this.$route.meta.view || this.$model.main.app.web.defaults.view;
      var spec = this.$model.main.app.web.view[viewname].spec;
      return spec;
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicMainvue_type_script_lang_js_ = (BasicMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VMain"
var VMain_ = __webpack_require__("1faa");

// CONCATENATED MODULE: ./src/components/BasicMain.vue





/* normalize component */

var BasicMain_component = normalizeComponent(
  components_BasicMainvue_type_script_lang_js_,
  BasicMainvue_type_template_id_60366b10_render,
  BasicMainvue_type_template_id_60366b10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicMain = (BasicMain_component.exports);

/* vuetify-loader */



installComponents_default()(BasicMain_component, {VContainer: VGrid_["VContainer"],VMain: VMain_["VMain"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=template&id=59741c9c&
var BasicSidevue_type_template_id_59741c9c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{staticClass:"vxg-side",style:(_vm.drawerStyle),attrs:{"app":""}},[_c('v-sheet',{staticStyle:{"display":"flex","flex-direction":"column","height":"100%"}},[_c('div',{staticStyle:{"display":"flex","justify-content":"space-between"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.logo)}}),_c('v-icon',{staticStyle:{"width":"48px"},attrs:{"large":"","dark":""},on:{"click":_vm.closeDrawer}},[_vm._v("mdi-chevron-left")])],1),_c('v-btn-toggle',{staticStyle:{"background-color":"rgb(var(--vxg-cb1)) !important"},attrs:{"mandatory":""},model:{value:(_vm.menuViewIndex),callback:function ($$v) {_vm.menuViewIndex=$$v},expression:"menuViewIndex"}},_vm._l((_vm.menuViewList),function(menuView){return _c('v-btn',{key:menuView.name,staticClass:"pa-4 text-center secondary text-no-wrap rounded-sm btn-style",attrs:{"to":'/'+menuView.name,"outlined":"","color":"white"}},[_vm._v(" "+_vm._s(menuView.btnTitle)+" ")])}),1),_vm._l((_vm.menu),function(item){return ('standard' === _vm.menuView.mode)?[(_vm.allow(item))?_c('router-link',{key:item.code,tag:"component",class:item.klass,staticStyle:{"flex-grow":"1"},attrs:{"to":'/'+item.code}},[_c('v-icon',[_vm._v("mdi-"+_vm._s(item.icon))]),_vm._v(" "+_vm._s(item.title)+" ")],1):_vm._e()]:_vm._e()}),('custom' === _vm.menuView.mode)?_c(_vm.menuView.cmp,{tag:"component",attrs:{"spec":_vm.menuView.view.spec}}):_vm._e(),_c('div',{staticStyle:{"flex-grow":"100"}}),_c('v-divider'),(_vm.spec.footer.active)?_c(_vm.spec.footer.cmp,{tag:"component",attrs:{"spec":_vm.spec.footer.spec}}):_vm._e()],2)],1)}
var BasicSidevue_type_template_id_59741c9c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicSide.vue?vue&type=template&id=59741c9c&

// EXTERNAL MODULE: ./node_modules/nua/dist/nua.min.js
var nua_min = __webpack_require__("ec45");
var nua_min_default = /*#__PURE__*/__webpack_require__.n(nua_min);

// EXTERNAL MODULE: ./node_modules/gubu/gubu.min.js
var gubu_min = __webpack_require__("bce7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicSide.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var SpecShape = Object(gubu_min["Gubu"])({
  spec: Object(gubu_min["Required"])(Object(gubu_min["Open"])({
    footer: {
      active: false,
      cmp: Object(gubu_min["Skip"])(String),
      spec: Object(gubu_min["Open"])({})
    },
    view: Object(gubu_min["Value"])(Object(gubu_min["Open"])({
      mode: String
    }), Object(gubu_min["Open"])({}))
  })),
  logo: String
});
/* harmony default export */ var BasicSidevue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    logo: String
  },
  data: function data() {
    return {
      open: true,
      menuShowTitle: false,
      menuViewIndex: null,
      menuViewList: [],
      menuView: null,
      roomName: ''
    };
  },
  beforeCreate: function beforeCreate() {
    nua_min_default()(this.$options.propsData, SpecShape(this.$options.propsData));
  },
  created: function created() {
    console.log('BasicSide created', this.spec);
    var menuViewList = [];

    for (var name in this.spec.view) {
      var menuView = this.spec.view[name];
      menuView.name = name;
      menuViewList.push(menuView);
    }

    this.menuViewList = menuViewList;
    this.menuView = menuViewList[0];
  },
  watch: {
    menuViewIndex: function menuViewIndex(index) {
      this.menuView = this.menuViewList[index];
      var pathname = null;
      pathname = this.menuView.name;

      if ('custom' === this.menuView.mode) {
        pathname = this.menuView.name;
      } else {
        pathname = this.menuView.menu.default;
      }

      if (pathname && pathname !== this.$route.name) {
        this.$router.push(pathname);
      }
    }
  },
  computed: {
    menu: function menu() {
      var active_item_code = this.$route.meta.view;
      var ux_items = [];

      if ('standard' === this.menuView.mode) {
        var menu = this.menuView.menu;
        var spec_items = menu.items;
        var ordered_codes = menu.order.split(/\s*,\s*/);
        ux_items = ordered_codes.reduce(function (a, c) {
          return a.push(Object.assign({
            code: c
          }, spec_items[c])), a;
        }, []).map(function (item) {
          item.klass = Object.assign({
            'vxg-router-link': true
          });
          return item;
        });
      }

      return ux_items;
    },
    drawerStyle: function drawerStyle() {
      return {
        width: "350px"
      };
    }
  },
  methods: {
    allow: function allow(item) {
      var out = item && item.allow ? this.$vxg.allow(item.allow) : true;
      return out;
    },
    openDrawer: function openDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: true
        }
      });
    },
    closeDrawer: function closeDrawer() {
      this.$store.dispatch('set_cmp_flags', {
        name: 'BasicSide',
        flags: {
          show: false
        }
      });
    },
    action: function action(name) {
      this.$emit('action', name);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicSide.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicSidevue_type_script_lang_js_ = (BasicSidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicSide.vue?vue&type=style&index=0&id=59741c9c&prod&lang=scss&
var BasicSidevue_type_style_index_0_id_59741c9c_prod_lang_scss_ = __webpack_require__("f746");

// EXTERNAL MODULE: external "vuetify/lib/components/VBtnToggle"
var VBtnToggle_ = __webpack_require__("dbe5");

// EXTERNAL MODULE: external "vuetify/lib/components/VNavigationDrawer"
var VNavigationDrawer_ = __webpack_require__("8ece");

// EXTERNAL MODULE: external "vuetify/lib/components/VSheet"
var VSheet_ = __webpack_require__("8fd1");

// CONCATENATED MODULE: ./src/components/BasicSide.vue






/* normalize component */

var BasicSide_component = normalizeComponent(
  components_BasicSidevue_type_script_lang_js_,
  BasicSidevue_type_template_id_59741c9c_render,
  BasicSidevue_type_template_id_59741c9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicSide = (BasicSide_component.exports);

/* vuetify-loader */







installComponents_default()(BasicSide_component, {VBtn: VBtn_["VBtn"],VBtnToggle: VBtnToggle_["VBtnToggle"],VDivider: VDivider_["VDivider"],VIcon: VIcon_["VIcon"],VNavigationDrawer: VNavigationDrawer_["VNavigationDrawer"],VSheet: VSheet_["VSheet"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=template&id=3f0abe61&
var BasicLedvue_type_template_id_3f0abe61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.allow('list'))?_c('div',[(_vm.show.table)?_c('v-data-table',{attrs:{"dense":"","headers":_vm.headers,"items":_vm.items,"items-per-page":25,"x-custom-filter":"customFilter","footer-props":{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   },"sort-by":_vm.sortBy,"sort-desc":_vm.sortDesc,"search":_vm.search},on:{"click:row":_vm.openItem,"update:sortBy":function($event){_vm.sortBy=$event},"update:sort-by":function($event){_vm.sortBy=$event},"update:sortDesc":function($event){_vm.sortDesc=$event},"update:sort-desc":function($event){_vm.sortDesc=$event}},scopedSlots:_vm._u([_vm._l((_vm.headers),function(header){return {key:_vm.itemslot(header),fn:function(ref){
                   var item = ref.item;
return [_c('div',{key:header.value},[('status'===header.type)?_c('span',[_c('v-chip',{staticStyle:{"font-weight":"bold","color":"white"},attrs:{"small":"","xclass":"ma-2","color":'outofdate'===item[header.value]?'red':'suspended'===item[header.value]?'orange':'blue'}},[_vm._v(" "+_vm._s((header.kind[item[header.value]]||{}).title)+" ")])],1):('datetime'===header.type)?_c('span',[_vm._v(" "+_vm._s(new Date(item[header.value]))+" ")]):_c('span',[_vm._v(_vm._s(item[header.value]))])])]}}})],null,true)}):_vm._e(),(_vm.show.item)?_c('div',[(_vm.showEditToolbar)?_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":function($event){return _vm.customAction('user_reset_password')}}},[_vm._v("Reset Password")]),_c('v-spacer')],1):_vm._e(),_c('div',{staticStyle:{"box-sizing":"border-box","display":"flex","flex-flow":"row wrap"}},_vm._l((_vm.fields),function(field,fI){return _c('div',{key:fI,staticClass:"vxg-form-field",style:(_vm.fieldstyle(field,fI))},[('string'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":field.readonly || !_vm.allow('edit'),"rules":field.rules},model:{value:(_vm.item[field.name]),callback:function ($$v) {_vm.$set(_vm.item, field.name, $$v)},expression:"item[field.name]"}}):_vm._e(),('status'===field.type)?_c('vxg-basic-field-pick',{attrs:{"field":field,"param":{item:_vm.item}}}):_vm._e(),('datetime'===field.type)?_c('v-text-field',{attrs:{"label":field.title,"outlined":"","disabled":""},model:{value:(_vm.readitem[field.name]),callback:function ($$v) {_vm.$set(_vm.readitem, field.name, $$v)},expression:"readitem[field.name]"}}):_vm._e(),('basicled'===field.type)?_c('vxg-basic-led',{attrs:{"spec":field.spec,"param":{item:_vm.item}}}):_vm._e(),('changes'===field.type)?_c('div',{staticClass:"changes"},[_c('h3',[_vm._v("Changes")]),_c('table',{attrs:{"border":"0","cellpadding":"0","cellspacing":"0"}},[_vm._m(0,true),_vm._l((_vm.changes(_vm.item.changes)),function(change){return _c('tr',{key:change.field},[_c('td',[_vm._v(_vm._s(change.field))]),_c('td',[_vm._v(_vm._s(change.old))]),_c('td',[_vm._v(_vm._s(change.new))])])})],2)]):_vm._e()],1)}),0),_c('v-toolbar',{attrs:{"flat":""}},[_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.closeItem}},[_vm._v("Cancel")]),_c('v-spacer'),(_vm.allow('edit'))?_c('v-btn',{attrs:{"outlined":""},on:{"click":_vm.saveItem}},[_vm._v("Save")]):_vm._e()],1)],1):_vm._e()],1):_vm._e()}
var BasicLedvue_type_template_id_3f0abe61_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('th',[_vm._v("Field")]),_c('th',[_vm._v("Old")]),_c('th',[_vm._v("New")])])}]


// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=template&id=3f0abe61&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicLed.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicLedvue_type_script_lang_js_ = ({
  props: {
    spec: {
      type: Object,
      required: true
    },
    param: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      item: null,
      readitem: null,
      show: {
        table: true,
        item: false
      },
      sortBy: 'when',
      sortDesc: true,
      search: ''
    };
  },
  created: function created() {
    this.$store.dispatch('list_' + this.spec.ent.store_name);
  },
  watch: {
    '$store.state.trigger.led.add': function $storeStateTriggerLedAdd() {
      this.openItem({
        last: Date.now()
      });
    },
    '$store.state.trigger.search.term': function $storeStateTriggerSearchTerm(term) {
      this.search = term;
    },
    '$route': {
      immediate: true,
      handler: function handler() {
        this.$store.dispatch('set_cmp_flags', {
          name: 'BasicHead',
          flags: {
            show: {
              add: this.spec.edit.active,
              search: this.spec.search && this.spec.search.active
            },
            allow: {
              add: this.allow('edit')
            }
          }
        });
        this.$store.dispatch('set_ent_meta', {
          name: this.spec.ent.primary.name || 'Item'
        });
      }
    }
  },
  computed: {
    headers: function headers() {
      var headermap = {};
      Object.entries(this.spec.ent.primary.field).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            fn = _ref2[0],
            fd = _ref2[1];

        return headermap[fn] = {
          value: fn,
          text: fd.title,
          type: fd.type,
          kind: fd.kind || {}
        };
      });
      var headers = (this.spec.list.layout.order ? this.spec.list.layout.order.split(/\s*,\s*/) : Object.keys(this.spec.ent.primary.field)).map(function (fn) {
        return headermap[fn];
      }).filter(function (h) {
        return null != h;
      });
      return headers;
    },
    items: function items() {
      var _this = this;

      var items = this.$store.state[this.spec.ent.store_name]; // TODO: generalize

      if ('user-by-role' === this.spec.name) {
        items = items.filter(function (item) {
          return _this.param.item.role === item.profile;
        }); //items = items.filter(item=>'op'===item.profile)
      }

      return items;
    },
    fields: function fields() {
      try {
        var fds = [];
        var fns = this.spec.edit.layout.order.split(/,/);

        var _iterator = _createForOfIteratorHelper(fns),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var fn = _step.value;
            // TODO: remove when model fixed
            // TODO: handle virtual/derived fields cleanly
            var fd = _objectSpread({}, this.spec.ent.primary.field[fn]) || {};
            fd.name = fn; //fd.size = this.spec.edit.layout.field[fn].size 

            fd = _objectSpread(_objectSpread({}, fd), this.spec.edit.layout.field[fn] || {});
            fd.custom = fd.custom || {};
            fd.custom.allow = fd.custom.allow || this.allow.bind(this);
            fds.push(fd);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return fds;
      } catch (e) {// console.error(e)
      }

      return [];
    },
    showEditToolbar: function showEditToolbar() {
      if (this.allow('edit')) {
        var active = this.spec.edit.layout.toolbar.active;

        if (true === active) {
          return active;
        } else if (active && active.field) {
          var show = true;

          for (var _i2 = 0, _Object$entries = Object.entries(active.field); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                name = _Object$entries$_i[0],
                criteria = _Object$entries$_i[1];

            if ('not-empty' === criteria) {
              show = show && null != this.item[name];
            } else {
              show = false;
            }
          }

          return show;
        }
      }

      return false;
    }
  },
  methods: {
    itemslot: function itemslot(header) {
      return 'item.' + header.value;
    },
    selection: function selection(field) {
      var kinds = field.kind && Object.entries(field.kind);
      var selects = kinds ? kinds.map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            d = _ref4[1];

        return {
          text: d.title,
          value: n
        };
      }) : [];
      return selects;
    },
    customAction: function customAction(action) {
      this.$store.dispatch(action, this.item);
    },
    openItem: function openItem(selitem) {
      if (false === this.spec.edit.active) {
        // || !this.allow('edit')) {
        return;
      }

      this.item = selitem;
      this.readitem = _objectSpread({}, this.item); // TODO: from spec!

      this.readitem.last = this.formatdate(this.item.last);
      this.readitem.when = this.formatdate(this.item.when);
      this.show.table = false;
      this.show.item = true;
    },
    saveItem: function saveItem() {
      this.$store.dispatch('save_' + this.spec.ent.store_name, this.item);
      this.show.table = true;
      this.show.item = false;
    },
    closeItem: function closeItem() {
      this.show.table = true;
      this.show.item = false;
    },
    fieldstyle: function fieldstyle(field) {
      return {
        'flex-basis': 100 * field.size / 12 + '%'
      };
    },
    formatdate: function formatdate(time) {
      return new Date(time).toString();
    },
    customFilter: function customFilter(value, search, item) {
      return true;
    },
    allow: function allow(action) {
      var out = true;
      var match = this.spec[action] && this.spec[action].allow;

      if (match) {
        out = this.$vxg.allow(match);
      }

      return out;
    },
    changes: function changes(cmjson) {
      var cm = null == cmjson ? {} : JSON.parse(cmjson);
      return Object.keys(cm).filter(function (k) {
        return 'audit' != k;
      }).reduce(function (a, c) {
        return a.push({
          field: c,
          old: cm[c][0],
          new: cm[c][1]
        }), a;
      }, []);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicLed.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicLedvue_type_script_lang_js_ = (BasicLedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/BasicLed.vue?vue&type=style&index=0&id=3f0abe61&prod&lang=scss&
var BasicLedvue_type_style_index_0_id_3f0abe61_prod_lang_scss_ = __webpack_require__("00c0");

// EXTERNAL MODULE: external "vuetify/lib/components/VChip"
var VChip_ = __webpack_require__("6b38");

// EXTERNAL MODULE: external "vuetify/lib/components/VDataTable"
var VDataTable_ = __webpack_require__("b1bf");

// EXTERNAL MODULE: external "vuetify/lib/components/VTextField"
var VTextField_ = __webpack_require__("6881");

// EXTERNAL MODULE: external "vuetify/lib/components/VToolbar"
var VToolbar_ = __webpack_require__("e34a");

// CONCATENATED MODULE: ./src/components/BasicLed.vue






/* normalize component */

var BasicLed_component = normalizeComponent(
  components_BasicLedvue_type_script_lang_js_,
  BasicLedvue_type_template_id_3f0abe61_render,
  BasicLedvue_type_template_id_3f0abe61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicLed = (BasicLed_component.exports);

/* vuetify-loader */







installComponents_default()(BasicLed_component, {VBtn: VBtn_["VBtn"],VChip: VChip_["VChip"],VDataTable: VDataTable_["VDataTable"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"],VToolbar: VToolbar_["VToolbar"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFieldPick.vue?vue&type=template&id=f6dac43a&
var BasicFieldPickvue_type_template_id_f6dac43a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-select',{attrs:{"items":_vm.pick(_vm.field),"label":_vm.field.title,"outlined":"","disabled":_vm.field.readonly || !_vm.allow('edit')},model:{value:(_vm.item[_vm.field.name]),callback:function ($$v) {_vm.$set(_vm.item, _vm.field.name, $$v)},expression:"item[field.name]"}})}
var BasicFieldPickvue_type_template_id_f6dac43a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue?vue&type=template&id=f6dac43a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicFieldPick.vue?vue&type=script&lang=js&
function BasicFieldPickvue_type_script_lang_js_slicedToArray(arr, i) { return BasicFieldPickvue_type_script_lang_js_arrayWithHoles(arr) || BasicFieldPickvue_type_script_lang_js_iterableToArrayLimit(arr, i) || BasicFieldPickvue_type_script_lang_js_unsupportedIterableToArray(arr, i) || BasicFieldPickvue_type_script_lang_js_nonIterableRest(); }

function BasicFieldPickvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function BasicFieldPickvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function BasicFieldPickvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BasicFieldPickvue_type_script_lang_js_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function BasicFieldPickvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicFieldPickvue_type_script_lang_js_ = ({
  props: {
    field: {
      type: Object,
      required: true
    },
    param: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {};
  },
  created: function created() {
    var custom = this.custom = this.field.custom || {};

    custom.allow = custom.allow || function () {
      return true;
    };
  },
  computed: {
    item: function item() {
      return this.param.item;
    }
  },
  methods: {
    pick: function pick(field) {
      var kinds = field.kind && Object.entries(field.kind) || [];
      var picks = kinds.filter(this.makeFieldFilter(field)).map(function (_ref) {
        var _ref2 = BasicFieldPickvue_type_script_lang_js_slicedToArray(_ref, 2),
            n = _ref2[0],
            d = _ref2[1];

        return {
          text: d.title,
          value: n
        };
      });
      return picks;
    },
    makeFieldFilter: function makeFieldFilter(field) {
      var custom = this.custom;
      var filter = custom.field && custom.field[field.name] && custom.field[field.name].filter;
      return filter || function () {
        return true;
      };
    },
    allow: function allow() {
      var _this$custom;

      return (_this$custom = this.custom).allow.apply(_this$custom, arguments);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicFieldPickvue_type_script_lang_js_ = (BasicFieldPickvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BasicFieldPick.vue





/* normalize component */

var BasicFieldPick_component = normalizeComponent(
  components_BasicFieldPickvue_type_script_lang_js_,
  BasicFieldPickvue_type_template_id_f6dac43a_render,
  BasicFieldPickvue_type_template_id_f6dac43a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicFieldPick = (BasicFieldPick_component.exports);

/* vuetify-loader */


installComponents_default()(BasicFieldPick_component, {VSelect: VSelect_["VSelect"]})

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"206cc9aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAuth.vue?vue&type=template&id=6154b0e6&
var BasicAuthvue_type_template_id_6154b0e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.user)?_vm._t("default"):_c('v-container',[_c('v-row',[_c('v-col'),_c('v-col',[_c('v-card',{attrs:{"xstyle":"max-width:40vw"}},[_c('v-card-title',[_vm._v("Sign In")]),_c('v-form',{ref:"form",attrs:{"lazy-validation":""},model:{value:(_vm.valid),callback:function ($$v) {_vm.valid=$$v},expression:"valid"}},[_c('v-card-text',[_c('v-text-field',{attrs:{"rules":_vm.emailRules,"label":"Email","required":"","outlined":""},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_c('v-text-field',{attrs:{"rules":_vm.passwordRules,"label":"Password","required":"","type":"password","outlined":""},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),('empty'!=_vm.state)?_c('v-card-text',[_vm._v(" "+_vm._s(_vm.stateMessage[_vm.state])+" ")]):_vm._e(),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"disabled":!_vm.valid},on:{"click":_vm.signin}},[_vm._v(" Sign In ")])],1)],1)],1)],1),_c('v-col')],1)],1)],2)}
var BasicAuthvue_type_template_id_6154b0e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BasicAuth.vue?vue&type=template&id=6154b0e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BasicAuth.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BasicAuthvue_type_script_lang_js_ = ({
  props: {
    user: Object
  },
  data: function data() {
    return {
      state: 'empty',
      valid: false,
      email: '',
      password: '',
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }],
      passwordRules: [function (v) {
        return !!v || 'Password is required';
      }],
      stateMessage: {
        signin: 'Signing in...',
        fail: 'Signin details are incorrect. Please try again.'
      }
    };
  },
  created: function created() {},
  computed: {},
  methods: {
    signin: function signin() {
      var _this = this;

      this.state = 'signin';
      this.$store.dispatch('signin_user', {
        email: this.email,
        password: this.password
      }).then(function (_ref) {
        var ok = _ref.ok;

        if (!ok) {
          _this.state = 'fail';
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/BasicAuth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BasicAuthvue_type_script_lang_js_ = (BasicAuthvue_type_script_lang_js_); 
// EXTERNAL MODULE: external "vuetify/lib/components/VCard"
var VCard_ = __webpack_require__("b7cf");

// EXTERNAL MODULE: external "vuetify/lib/components/VForm"
var VForm_ = __webpack_require__("1b42");

// CONCATENATED MODULE: ./src/components/BasicAuth.vue





/* normalize component */

var BasicAuth_component = normalizeComponent(
  components_BasicAuthvue_type_script_lang_js_,
  BasicAuthvue_type_template_id_6154b0e6_render,
  BasicAuthvue_type_template_id_6154b0e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BasicAuth = (BasicAuth_component.exports);

/* vuetify-loader */












installComponents_default()(BasicAuth_component, {VBtn: VBtn_["VBtn"],VCard: VCard_["VCard"],VCardActions: VCard_["VCardActions"],VCardText: VCard_["VCardText"],VCardTitle: VCard_["VCardTitle"],VCol: VGrid_["VCol"],VContainer: VGrid_["VContainer"],VForm: VForm_["VForm"],VRow: VGrid_["VRow"],VSpacer: VGrid_["VSpacer"],VTextField: VTextField_["VTextField"]})

// CONCATENATED MODULE: ./src/vxg.js
function vxg_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function vxg_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? vxg_ownKeys(Object(source), !0).forEach(function (key) { vxg_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : vxg_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function vxg_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vxg_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = vxg_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function vxg_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return vxg_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vxg_arrayLikeToArray(o, minLen); }

function vxg_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }












var config_defaults = {};
var util = {};

var vxg_Vxg = /*#__PURE__*/function () {
  function Vxg(config) {
    _classCallCheck(this, Vxg);

    this.match = {
      allow: new patrun_min_default.a({
        gex: true
      })
    };
    this.cmp = {};
    this.config(config);
    this.util = util;
  }

  _createClass(Vxg, [{
    key: "config",
    value: function config(custom_config) {
      // TODO: deep, validation
      Object.assign(this.config, config_defaults, custom_config || {});
      this.config.allow = this.config.allow || {};

      this.config.allow.modify = this.config.allow.modify || function (x) {
        return x;
      };

      this.config.allow.match = this.config.allow.match || [];

      var _iterator = vxg_createForOfIteratorHelper(this.config.allow.match),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;
          this.match.allow.add(entry, {
            allow: true
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "allow",
    value: function allow(match) {
      var mm = jsonic_min_default()(match); // TODO: handle Aontu array workaround

      var ms = Array.isArray(match) ? match : Object.keys(mm).map(function (x) {
        return mm[x];
      });
      var found = null;

      var _iterator2 = vxg_createForOfIteratorHelper(ms),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var m = _step2.value;
          var pat = this.config.allow.modify(vxg_objectSpread({}, m || {}));
          found = this.match.allow.find(pat);

          if (found) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return found ? !!found.allow : false;
    }
  }, {
    key: "install",
    value: function install(Vue, options) {
      var _this = this;

      var co = {
        VxgBasicAdmin: BasicAdmin,
        VxgBasicHead: BasicHead,
        VxgBasicFoot: BasicFoot,
        VxgBasicMain: BasicMain,
        VxgBasicSide: BasicSide,
        VxgBasicLed: BasicLed,
        VxgBasicFieldPick: BasicFieldPick,
        VxgBasicAuth: BasicAuth
      };
      Object.keys(co).forEach(function (name) {
        Vue.component(name, co[name]);
        _this.cmp[name] = co[name];
      });
      Vue.prototype.$vxg = this;
      window.vxg = this;
    }
  }]);

  return Vxg;
}();

vxg_Vxg.info = {
  version: '0.5.1',
  note: 'rr-local-01'
};
/* harmony default export */ var src_vxg = (vxg_Vxg);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_vxg);



/***/ }),

/***/ "fe20":
/***/ (function(module, exports, __webpack_require__) {

!function(e){if(true)module.exports=e();else {}}((function(){var e=function(e){var t;return function(n){return t||e(t={exports:{},parent:n},t.exports),t.exports}},t=e((function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.values=t.keys=t.omap=t.str=t.prop=t.normalt=t.parserwrap=t.trimstk=t.tokenize=t.srcfmt=t.snip=t.regexp=t.mesc=t.makelog=t.isarr=t.filterRules=t.extract=t.escre=t.errinject=t.errdesc=t.entries=t.defprop=t.deep=t.configure=t.clone=t.clean=t.charset=t.badlex=t.assign=t.S=t.JsonicError=void 0;const i=n({}),l=e=>null==e?[]:Object.keys(e);t.keys=l,t.values=e=>null==e?[]:Object.values(e),t.entries=e=>null==e?[]:Object.entries(e);const s=(e,...t)=>Object.assign(null==e?{}:e,...t);t.assign=s,t.isarr=e=>Array.isArray(e);const o=Object.defineProperty;t.defprop=o;const a=(e,t)=>Object.entries(e||{}).reduce((e,n)=>{let r=t?t(n):n;void 0===r[0]?delete e[n[0]]:e[r[0]]=r[1];let i=2;for(;void 0!==r[i];)e[r[i]]=r[i+1],i+=2;return e},{});t.omap=a;const c={indent:"  ",space:" ",Object:"Object",Array:"Array",object:"object",string:"string",function:"function",unexpected:"unexpected",map:"map",list:"list",elem:"elem",pair:"pair",val:"val",node:"node",no_re_flags:r.EMPTY,unprintable:"unprintable",invalid_ascii:"invalid_ascii",invalid_unicode:"invalid_unicode",invalid_lex_state:"invalid_lex_state",unterminated_string:"unterminated_string",unterminated_comment:"unterminated_comment",lex:"lex",parse:"parse",error:"error",none:"none",imp_map:"imp,map",imp_list:"imp,list",imp_null:"imp,null",end:"end",open:"open",close:"close",rule:"rule",stack:"stack",nUll:"null",name:"name",make:"make"};t.S=c;class u extends SyntaxError{constructor(e,t,n,r,i){let l=v(e,t=h({},t),n,r,i);super(l.message),s(this,l),g(this)}toJSON(){return{...this,__error:!0,name:this.name,message:this.message,stack:this.stack}}}function p(e,t,n){let i=t.t,l=i[e];return null==l&&r.STRING===typeof e&&(i[l=t.tI++]=e,i[e]=l,i[e.substring(1)]=l,null!=n&&s(n.token,t.t)),l}function d(e,...t){return new RegExp(t.map(e=>e.esc?m(e.toString()):e).join(r.EMPTY),null==e?"":e)}function m(e){return null==e?"":e.replace(/[-\\|\]{}()[^$+*?.!=]/g,"\\$&").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/\n/g,"\\n")}function h(e,...t){let n=c.function===typeof e,r=null!=e&&(c.object===typeof e||n);for(let i of t){let t,l=c.function===typeof i,s=null!=i&&(c.object===typeof i||l);if(r&&s&&!l&&Array.isArray(e)===Array.isArray(i))for(let n in i)e[n]=h(e[n],i[n]);else e=void 0===i?e:l?i:s?c.function===typeof(t=i.constructor)&&c.Object!==t.name&&c.Array!==t.name?i:h(Array.isArray(i)?[]:{},i):i,n=c.function===typeof e,r=null!=e&&(c.object===typeof e||n)}return e}function f(e,t,n,r,i,l){let s={code:t,details:n,token:r,rule:i,ctx:l};return null==e?"":e.replace(/\$([\w_]+)/g,(e,t)=>{let o=JSON.stringify(null!=s[t]?s[t]:null!=n[t]?n[t]:l.meta&&null!=l.meta[t]?l.meta[t]:null!=r[t]?r[t]:null!=i[t]?i[t]:null!=l.opts[t]?l.opts[t]:null!=l.cfg[t]?l.cfg[t]:null!=l[t]?l[t]:"$"+t);return null==o?"":o})}function g(e){e.stack&&(e.stack=e.stack.split("\n").filter(e=>!e.includes("jsonic/jsonic")).map(e=>e.replace(/    at /,"at ")).join("\n"))}function k(e,t,n){let i=0<n.sI?n.sI:0,l=0<n.rI?n.rI:1,s=0<n.cI?n.cI:1,o=null==n.src?r.EMPTY:n.src,a=e.substring(Math.max(0,i-333),i).split("\n"),c=e.substring(i,i+333).split("\n"),u=2+(r.EMPTY+(l+2)).length,p=l<3?1:l-2,d=e=>"\x1b[34m"+(r.EMPTY+p++).padStart(u," ")+" | \x1b[0m"+(null==e?r.EMPTY:e),m=a.length;return[2<m?d(a[m-3]):null,1<m?d(a[m-2]):null,d(a[m-1]+c[0])," ".repeat(u)+"   "+" ".repeat(s-1)+"\x1b[31m"+"^".repeat(o.length||1)+" "+t+"\x1b[0m",d(c[1]),d(c[2])].filter(e=>null!=e).join("\n")}function v(e,t,n,r,i){try{let l=i.cfg,s=i.meta,o=f(l.error[e]||l.error.unknown,e,t,n,r,i);c.function===typeof l.hint&&(l.hint={...l.hint(),...l.hint});let a=["\x1b[31m[jsonic/"+e+"]:\x1b[0m "+o,"  \x1b[34m--\x3e\x1b[0m "+(s&&s.fileName||"<no-file>")+":"+n.rI+":"+n.cI,k(i.src(),o,n),"",f((l.hint[e]||l.hint.unknown||"").trim().split("\n").map(e=>"  "+e).join("\n"),e,t,n,r,i),"","  \x1b[2mhttps://jsonic.senecajs.org\x1b[0m","  \x1b[2m--internal: rule="+r.name+"~"+r.state+"; token="+p(n.tin,i.cfg)+(null==n.why?"":"~"+n.why)+"; plugins="+i.plgn().map(e=>e.name).join(",")+"--\x1b[0m\n"].join("\n"),u={internal:{token:n,ctx:i}};return u={...Object.create(u),message:a,code:e,details:t,meta:s,fileName:s?s.fileName:void 0,lineNumber:n.rI,columnNumber:n.cI}}catch(l){return console.log(l),{}}}function x(e){return"function"==typeof e.debug.print.src?e.debug.print.src:(t,n)=>null==t?r.EMPTY:(n=JSON.stringify(t)).substring(0,e.debug.maxlen)+(e.debug.maxlen<n.length?"...":r.EMPTY)}function b(e,t=44){let n;try{n="object"==typeof e?JSON.stringify(e):""+e}catch(r){n=""+e}return y(t<n.length?n.substring(0,t-3)+"...":n,t)}function y(e,t=5){return void 0===e?"":(""+e).substring(0,t).replace(/[\r\n\t]/g,".")}function j(...e){return null==e?{}:e.filter(e=>!1!==e).map(e=>"object"==typeof e?l(e).join(r.EMPTY):e).join(r.EMPTY).split(r.EMPTY).reduce((e,t)=>(e[t]=t.charCodeAt(0),e),{})}function S(e){for(let t in e)null==e[t]&&delete e[t];return e}t.JsonicError=u,t.configure=function(e,t,n){var r,i,o,c,u,h,f,g,k,v,x,b,y,I,E,O,T,M,C,N,P,w,_,R,A,L,Y,F,U,$,J,B,D,z,Z,K,V,W,G;const H=t||{};H.t=H.t||{},H.tI=H.tI||1;const q=e=>p(e,H);!1!==n.standard$&&(q("#BD"),q("#ZZ"),q("#UK"),q("#AA"),q("#SP"),q("#LN"),q("#CM"),q("#NR"),q("#ST"),q("#TX"),q("#VL")),H.fixed={lex:!!(null===(r=n.fixed)||void 0===r?void 0:r.lex),token:n.fixed?a(S(n.fixed.token),([e,t])=>[t,p(e,H)]):{},ref:void 0},H.fixed.ref=a(H.fixed.token,([e,t])=>[e,t]),H.fixed.ref=Object.assign(H.fixed.ref,a(H.fixed.ref,([e,t])=>[t,e])),H.tokenSet=n.tokenSet?Object.keys(n.tokenSet).reduce((e,t)=>(e[t]=n.tokenSet[t].filter(e=>null!=e).map(e=>q(e)),e),{...H.tokenSet}):{},H.tokenSetDerived={ignore:Object.fromEntries(((null===(i=n.tokenSet)||void 0===i?void 0:i.ignore)||[]).map(e=>[q(e),!0]))},H.space={lex:!!(null===(o=n.space)||void 0===o?void 0:o.lex),chars:j(null===(c=n.space)||void 0===c?void 0:c.chars)},H.line={lex:!!(null===(u=n.line)||void 0===u?void 0:u.lex),chars:j(null===(h=n.line)||void 0===h?void 0:h.chars),rowChars:j(null===(f=n.line)||void 0===f?void 0:f.rowChars)},H.text={lex:!!(null===(g=n.text)||void 0===g?void 0:g.lex),modify:((null===(k=H.text)||void 0===k?void 0:k.modify)||[]).concat(([null===(v=n.text)||void 0===v?void 0:v.modify]||false).flat()).filter(e=>null!=e)},H.number={lex:!!(null===(x=n.number)||void 0===x?void 0:x.lex),hex:!!(null===(b=n.number)||void 0===b?void 0:b.hex),oct:!!(null===(y=n.number)||void 0===y?void 0:y.oct),bin:!!(null===(I=n.number)||void 0===I?void 0:I.bin),sep:null!=(null===(E=n.number)||void 0===E?void 0:E.sep)&&""!==n.number.sep,exclude:null===(O=n.number)||void 0===O?void 0:O.exclude,sepChar:null===(T=n.number)||void 0===T?void 0:T.sep},H.value={lex:!!(null===(M=n.value)||void 0===M?void 0:M.lex),map:(null===(C=n.value)||void 0===C?void 0:C.map)||{}},H.rule={start:null==(null===(N=n.rule)||void 0===N?void 0:N.start)?"val":n.rule.start,maxmul:null==(null===(P=n.rule)||void 0===P?void 0:P.maxmul)?3:n.rule.maxmul,finish:!!(null===(w=n.rule)||void 0===w?void 0:w.finish),include:(null===(_=n.rule)||void 0===_?void 0:_.include)?n.rule.include.split(/\s*,+\s*/).filter(e=>""!==e):[],exclude:(null===(R=n.rule)||void 0===R?void 0:R.exclude)?n.rule.exclude.split(/\s*,+\s*/).filter(e=>""!==e):[]},H.map={extend:!!(null===(A=n.map)||void 0===A?void 0:A.extend),merge:null===(L=n.map)||void 0===L?void 0:L.merge},H.list={property:!!(null===(Y=n.list)||void 0===Y?void 0:Y.property)};let X=Object.keys(H.fixed.token).sort((e,t)=>t.length-e.length).map(e=>m(e)).join("|"),Q=(null===(F=n.comment)||void 0===F?void 0:F.lex)?(n.comment.marker||[]).filter(e=>e.lex).map(e=>m(e.start)).join("|"):"",ee=["([",m(l(j(H.space.lex&&H.space.chars,H.line.lex&&H.line.chars)).join("")),"]",("string"==typeof n.ender?n.ender.split(""):Array.isArray(n.ender)?n.ender:[]).map(e=>"|"+m(e)).join(""),""===X?"":"|",X,""===Q?"":"|",Q,"|$)"];return H.rePart={fixed:X,ender:ee,commentStart:Q},H.re={ender:d(null,...ee),rowChars:d(null,m(null===(U=n.line)||void 0===U?void 0:U.rowChars)),columns:d(null,"["+m(null===($=n.line)||void 0===$?void 0:$.chars)+"]","(.*)$")},H.lex={empty:!!(null===(J=n.lex)||void 0===J?void 0:J.empty),match:(null===(B=n.lex)||void 0===B?void 0:B.match)?n.lex.match.map(e=>e(H,n)):[]},H.debug={get_console:(null===(D=n.debug)||void 0===D?void 0:D.get_console)||(()=>console),maxlen:null==(null===(z=n.debug)||void 0===z?void 0:z.maxlen)?99:n.debug.maxlen,print:{config:!!(null===(K=null===(Z=n.debug)||void 0===Z?void 0:Z.print)||void 0===K?void 0:K.config),src:null===(W=null===(V=n.debug)||void 0===V?void 0:V.print)||void 0===W?void 0:W.src}},H.error=n.error||{},H.hint=n.hint||{},(null===(G=n.config)||void 0===G?void 0:G.modify)&&l(n.config.modify).forEach(e=>n.config.modify[e](H,n)),H.debug.print.config&&H.debug.get_console().dir(H,{depth:null}),H.result={fail:[]},n.result&&(H.result.fail=[...n.result.fail]),s(e.options,n),s(e.token,H.t),s(e.fixed,H.fixed.ref),H},t.tokenize=p,t.mesc=function(e,t){return(t=new String(e)).esc=!0,t},t.regexp=d,t.escre=m,t.deep=h,t.errinject=f,t.trimstk=g,t.extract=k,t.errdesc=v,t.badlex=function(e,t,n){let r=r=>{let i=e.next(r);if(t===i.tin){let e={};throw null!=i.use&&(e.use=i.use),new u(i.why||c.unexpected,e,i,r,n)}return i};return r.src=e.src,r},t.makelog=function(e,t){if(t)if("number"==typeof t.log){let n=!1,r=t.log;-1===r&&(r=1,n=!0),e.log=(...t)=>{if(n){let n=t.filter(e=>c.object!=typeof e).map(e=>c.function==typeof e?e.name:e).join(c.indent);e.cfg.debug.get_console().log(n)}else e.cfg.debug.get_console().dir(t,{depth:r})}}else"function"==typeof t.log&&(e.log=t.log);return e.log},t.srcfmt=x,t.str=b,t.snip=y,t.clone=function(e){return h(Object.create(Object.getPrototypeOf(e)),e)},t.charset=j,t.clean=S,t.filterRules=function(e,t){let n=["open","close"];for(let r of n)e.def[r]=e.def[r].map(e=>(e.g="string"==typeof e.g?(e.g||"").split(/\s*,+\s*/):e.g||[],e)).filter(e=>t.rule.include.reduce((t,n)=>t||null!=e.g&&-1!==e.g.indexOf(n),0===t.rule.include.length)).filter(e=>t.rule.exclude.reduce((t,n)=>t&&(null==e.g||-1===e.g.indexOf(n)),!0));return e},t.normalt=function(e){if(null!=e.c){let t=e.c.n,n=e.c.d;null==t&&null==n||(e.c=function(e){let r=!0;if(null!=t)for(let n in t)r=r&&(null==e.n[n]||e.n[n]<=(null==t[n]?0:t[n]));return null!=n&&(r=r&&e.d<=n),r},null!=t&&(e.c.n=t),null!=n&&(e.c.d=n))}if(r.STRING===typeof e.g&&(e.g=e.g.split(/\s*,\s*/)),e.s&&0!==e.s.length){const t=e=>e.flat().filter(e=>"number"==typeof e),n=(e,t)=>e.filter(e=>31*t<=e&&e<31*(t+1)),r=(e,t)=>e.reduce((e,n)=>1<<n-(31*t+1)|e,0),i=t([e.s[0]]),l=t([e.s[1]]),s=e;s.S0=0<i.length?new Array(Math.max(...i.map(e=>1+e/31|0))).fill(null).map((e,t)=>t).map(e=>r(n(i,e),e)):null,s.S1=0<l.length?new Array(Math.max(...l.map(e=>1+e/31|0))).fill(null).map((e,t)=>t).map(e=>r(n(l,e),e)):null}else e.s=null;return e},t.prop=function(e,t,n){let r=e;try{let r,i=t.split(".");for(let t=0;t<i.length;t++)r=i[t],t<i.length-1&&(e=e[r]=e[r]||{});return void 0!==n&&(e[r]=n),e[r]}catch(i){throw new Error("Cannot "+(void 0===n?"get":"set")+" path "+t+" on object: "+b(r)+(void 0===n?"":" to value: "+b(n,22)))}},t.parserwrap=function(e){return{start:function(t,n,l,s){try{return e.start(t,n,l,s)}catch(o){if("SyntaxError"===o.name){let e=0,s=0,a=0,c=r.EMPTY,d=o.message.match(/^Unexpected token (.) .*position\s+(\d+)/i);if(d){c=d[1],e=parseInt(d[2]),s=t.substring(0,e).replace(/[^\n]/g,r.EMPTY).length;let n=e-1;for(;-1<n&&"\n"!==t.charAt(n);)n--;a=Math.max(t.substring(n,e).length,0)}let m=o.token||(0,i.makeToken)("#UK",p("#UK",n.internal().config),void 0,c,(0,i.makePoint)(c.length,e,o.lineNumber||s,o.columnNumber||a));throw new u(o.code||"json",o.details||{msg:o.message},m,{},o.ctx||{uI:-1,opts:n.options,cfg:n.internal().config,token:m,meta:l,src:()=>t,root:()=>{},plgn:()=>n.internal().plugins,rule:{name:"no-rule"},xs:-1,v2:m,v1:m,t0:m,t1:m,tC:-1,rs:[],rsI:0,next:()=>m,rsm:{},n:{},log:l?l.log:void 0,F:x(n.internal().config),use:{},NORULE:{name:"no-rule"},NOTOKEN:{name:"no-token"}})}throw o}}}}})),n=e((function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeTextMatcher=n.makeNumberMatcher=n.makeCommentMatcher=n.makeStringMatcher=n.makeLineMatcher=n.makeSpaceMatcher=n.makeFixedMatcher=n.makeToken=n.makePoint=n.makeLex=n.makeNoToken=void 0;const i=t({});class l{constructor(e,t,n,r){this.len=-1,this.sI=0,this.rI=1,this.cI=1,this.token=[],this.len=e,null!=t&&(this.sI=t),null!=n&&(this.rI=n),null!=r&&(this.cI=r)}toString(){return"Point["+[this.sI+"/"+this.len,this.rI,this.cI]+(0<this.token.length?" "+this.token:"")+"]"}[r.INSPECT](){return this.toString()}}const s=(...e)=>new l(...e);n.makePoint=s;class o{constructor(e,t,n,i,l,s,o){this.isToken=!0,this.name=r.EMPTY,this.tin=-1,this.val=void 0,this.src=r.EMPTY,this.sI=-1,this.rI=-1,this.cI=-1,this.len=-1,this.name=e,this.tin=t,this.src=i,this.val=n,this.sI=l.sI,this.rI=l.rI,this.cI=l.cI,this.use=s,this.why=o,this.len=null==i?0:i.length}resolveVal(e,t){return"function"==typeof this.val?this.val(e,t):this.val}bad(e,t){return this.err=e,null!=t&&(this.use=(0,i.deep)(this.use||{},t)),this}toString(){return"Token["+this.name+"="+this.tin+" "+(0,i.snip)(this.src)+(void 0===this.val||"#ST"===this.name||"#TX"===this.name?"":"="+(0,i.snip)(this.val))+" "+[this.sI,this.rI,this.cI]+(null==this.use?"":" "+(0,i.snip)(""+JSON.stringify(this.use).replace(/"/g,""),22))+(null==this.err?"":" "+this.err)+(null==this.why?"":" "+(0,i.snip)(""+this.why,22))+"]"}[r.INSPECT](){return this.toString()}}const a=(...e)=>new o(...e);function c(e,t,n){let r=e.pnt,i=t;if(e.cfg.fixed.lex&&null!=n&&0<n.length){let l=void 0,s=e.cfg.fixed.token[n];null!=s&&(l=e.token(s,void 0,n,r)),null!=l&&(r.sI+=l.src.length,r.cI+=l.src.length,null==t?i=l:r.token.push(l))}return i}n.makeToken=a,n.makeNoToken=()=>a("",-1,void 0,r.EMPTY,s(-1)),n.makeFixedMatcher=(e,t)=>{let n=(0,i.regexp)(null,"^(",e.rePart.fixed,")");return function(t){let r=e.fixed;if(!r.lex)return;let i=t.pnt,l=t.src.substring(i.sI).match(n);if(l){let e=l[1],n=e.length;if(0<n){let l=void 0,s=r.token[e];return null!=s&&(l=t.token(s,void 0,e,i),i.sI+=n,i.cI+=n),l}}}},n.makeCommentMatcher=(e,t)=>{let n=t.comment;e.comment={lex:!!n&&!!n.lex,marker:((null==n?void 0:n.marker)||[]).map(e=>({start:e.start,end:e.end,line:!!e.line,lex:!!e.lex}))};let r=e.comment.lex?e.comment.marker.filter(e=>e.lex&&e.line):[],l=e.comment.lex?e.comment.marker.filter(e=>e.lex&&!e.line):[];return function(t){if(!e.comment.lex)return;let n=t.pnt,s=t.src.substring(n.sI),o=n.rI,a=n.cI;for(let i of r)if(s.startsWith(i.start)){let r=s.length,l=i.start.length;for(a+=i.start.length;l<r&&!e.line.chars[s[l]];)a++,l++;let o=s.substring(0,l),c=t.token("#CM",void 0,o,n);return n.sI+=o.length,n.cI=a,c}for(let r of l)if(s.startsWith(r.start)){let l=s.length,c=r.start.length,u=r.end;for(a+=r.start.length;c<l&&!s.substring(c).startsWith(u);)e.line.rowChars[s[c]]&&(o++,a=0),a++,c++;if(s.substring(c).startsWith(u)){a+=u.length;let e=s.substring(0,c+u.length),r=t.token("#CM",void 0,e,n);return n.sI+=e.length,n.rI=o,n.cI=a,r}return t.bad(i.S.unterminated_comment,n.sI,n.sI+9*r.start.length)}}},n.makeTextMatcher=(e,t)=>{let n=(0,i.regexp)(e.line.lex?null:"s","^(.*?)",...e.rePart.ender);return function(r){let i=e.text,l=r.pnt,s=r.src.substring(l.sI),o=e.value.map,a=s.match(n);if(a){let n=a[1],s=a[2],u=void 0;if(null!=n){let t=n.length;if(0<t){let s=void 0;e.value.lex&&void 0!==(s=o[n])?(u=r.token("#VL",s.val,n,l),l.sI+=t,l.cI+=t):i.lex&&(u=r.token("#TX",n,n,l),l.sI+=t,l.cI+=t)}}if(u&&(u=c(r,u,s)),u&&0<e.text.modify.length){const n=e.text.modify;for(let i=0;i<n.length;i++)u.val=n[i](u.val,r,e,t)}return u}}},n.makeNumberMatcher=(e,t)=>{let n=e.number,r=(0,i.regexp)(null,["^([-+]?(0(",[n.hex?"x[0-9a-fA-F_]+":null,n.oct?"o[0-7_]+":null,n.bin?"b[01_]+":null].filter(e=>null!=e).join("|"),")|[.0-9]+([0-9_]*[0-9])?)","(\\.[0-9]?([0-9_]*[0-9])?)?","([eE][-+]?[0-9]+([0-9_]*[0-9])?)?"].join("").replace(/_/g,n.sep?(0,i.escre)(n.sepChar):""),")",...e.rePart.ender),l=n.sep?(0,i.regexp)("g",(0,i.escre)(n.sepChar)):void 0;return function(t){if(!(n=e.number).lex)return;let i=t.pnt,s=t.src.substring(i.sI),o=e.value.map,a=s.match(r);if(a){let n=a[1],r=a[9],s=void 0,u=!0;if(null!=n&&(u=!e.number.exclude||!n.match(e.number.exclude))){let r=n.length;if(0<r){let a=void 0;if(e.value.lex&&void 0!==(a=o[n]))s=t.token("#VL",a.val,n,i);else{let e=l?n.replace(l,""):n,o=+e;if(isNaN(o)){let t=e[0];"-"!==t&&"+"!==t||(o=("-"===t?-1:1)*+e.substring(1))}isNaN(o)||(s=t.token("#NR",o,n,i),i.sI+=r,i.cI+=r)}}}return u&&(s=c(t,s,r)),s}}},n.makeStringMatcher=(e,t)=>{let n=t.string||{};return e.string=e.string||{},e.string=(0,i.deep)(e.string,{lex:!!(null==n?void 0:n.lex),quoteMap:(0,i.charset)(n.chars),multiChars:(0,i.charset)(n.multiChars),escMap:(0,i.clean)({...n.escape}),escChar:n.escapeChar,escCharCode:null==n.escapeChar?void 0:n.escapeChar.charCodeAt(0),allowUnknown:!!n.allowUnknown,replaceCodeMap:(0,i.omap)((0,i.clean)({...n.replace}),([e,t])=>[e.charCodeAt(0),t]),hasReplace:!1}),e.string.hasReplace=0<(0,i.keys)(e.string.replaceCodeMap).length,function(t){let n=e.string;if(!n.lex)return;let{quoteMap:l,escMap:s,escChar:o,escCharCode:a,multiChars:c,allowUnknown:u,replaceCodeMap:p,hasReplace:d}=n,{pnt:m,src:h}=t,{sI:f,rI:g,cI:k}=m,v=h.length;if(l[h[f]]){const n=h[f],l=f,x=g,b=c[n];++f,++k;let y,j=[];for(;f<v;f++){k++;let r=h[f];if(y=void 0,n===r){f++;break}if(o===r){k++;let e=s[h[++f]];if(null!=e)j.push(e);else if("x"===h[f]){f++;let e=parseInt(h.substring(f,f+2),16);if(isNaN(e))return f-=2,k-=2,m.sI=f,m.cI=k,t.bad(i.S.invalid_ascii,f,f+4);let n=String.fromCharCode(e);j.push(n),f+=1,k+=2}else if("u"===h[f]){let e="{"===h[++f]?(f++,1):0,n=e?6:4,r=parseInt(h.substring(f,f+n),16);if(isNaN(r))return f=f-2-e,k-=2,m.sI=f,m.cI=k,t.bad(i.S.invalid_unicode,f,f+n+2+2*e);let l=String.fromCodePoint(r);j.push(l),f+=n-1+e,k+=n+e}else{if(!u)return m.sI=f,m.cI=k-1,t.bad(i.S.unexpected,f,f+1);j.push(h[f])}}else if(d&&void 0!==(y=p[h.charCodeAt(f)]))j.push(y),k++;else{let r=f,l=n.charCodeAt(0),s=h.charCodeAt(f);for(;(!d||void 0===(y=p[s]))&&f<v&&32<=s&&l!==s&&a!==s;)s=h.charCodeAt(++f),k++;if(k--,void 0===y&&s<32){if(!b||!e.line.chars[h[f]])return m.sI=f,m.cI=k,t.bad(i.S.unprintable,f,f+1);e.line.rowChars[h[f]]&&(m.rI=++g),k=1,j.push(h.substring(r,f+1))}else j.push(h.substring(r,f)),f--}}if(h[f-1]!==n||m.sI===f-1)return m.rI=x,t.bad(i.S.unterminated_string,l,f);const S=t.token("#ST",j.join(r.EMPTY),h.substring(m.sI,f),m);return m.sI=f,m.rI=g,m.cI=k,S}}},n.makeLineMatcher=(e,t)=>function(t){if(!e.line.lex)return;let{chars:n,rowChars:r}=e.line,{pnt:i,src:l}=t,{sI:s,rI:o}=i;for(;n[l[s]];)o+=r[l[s]]?1:0,s++;if(i.sI<s){let e=l.substring(i.sI,s);const n=t.token("#LN",void 0,e,i);return i.sI+=e.length,i.rI=o,i.cI=1,n}},n.makeSpaceMatcher=(e,t)=>function(t){if(!e.space.lex)return;let{chars:n}=e.space,{pnt:r,src:i}=t,{sI:l,cI:s}=r;for(;n[i[l]];)l++,s++;if(r.sI<l){let e=i.substring(r.sI,l);const n=t.token("#SP",void 0,e,r);return r.sI+=e.length,r.cI=s,n}};class u{constructor(e){this.src=r.EMPTY,this.ctx={},this.cfg={},this.pnt=s(-1),this.ctx=e,this.src=e.src(),this.cfg=e.cfg,this.pnt=s(this.src.length)}token(e,t,n,r,l,s){let o,c;return"string"==typeof e?(c=e,o=(0,i.tokenize)(c,this.cfg)):(o=e,c=(0,i.tokenize)(e,this.cfg)),a(c,o,t,n,r||this.pnt,l,s)}next(e){let t,n,r=this.pnt,l=r.sI;if(r.end)t=r.end;else if(0<r.token.length)t=r.token.shift();else if(r.len<=r.sI)r.end=this.token("#ZZ",void 0,"",r),t=r.end;else{for(let r of this.cfg.lex.match)if(t=r(this,e)){n=r;break}t=t||this.token("#BD",void 0,this.src[r.sI],r,void 0,"unexpected")}return this.ctx.log&&this.ctx.log(i.S.indent.repeat(e.d)+i.S.lex,(0,i.tokenize)(t.tin,this.cfg),this.ctx.F(t.src),r.sI,r.rI+":"+r.cI,(null==n?void 0:n.name)||"none",this.ctx.F(this.src.substring(l,l+16))),t}tokenize(e){return(0,i.tokenize)(e,this.cfg)}bad(e,t,n){return this.token("#BD",void 0,0<=t&&t<=n?this.src.substring(t,n):this.src[this.pnt.sI],void 0,void 0,e)}}n.makeLex=(...e)=>new u(...e)})),r={};Object.defineProperty(r,"__esModule",{value:!0}),r.STRING=r.INSPECT=r.EMPTY=r.AFTER=r.BEFORE=r.CLOSE=r.OPEN=void 0,r.OPEN="o",r.CLOSE="c",r.BEFORE="b",r.AFTER="a",r.EMPTY="",r.INSPECT=Symbol.for("nodejs.util.inspect.custom"),r.STRING="string";var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.defaults=void 0;const l=n({}),s={tag:"-",fixed:{lex:!0,token:{"#OB":"{","#CB":"}","#OS":"[","#CS":"]","#CL":":","#CA":","}},tokenSet:{ignore:["#SP","#LN","#CM"],val:["#TX","#NR","#ST","#VL"],key:["#TX","#NR","#ST","#VL"]},space:{lex:!0,chars:" \t"},line:{lex:!0,chars:"\r\n",rowChars:"\n"},text:{lex:!0},number:{lex:!0,hex:!0,oct:!0,bin:!0,sep:"_",exclude:void 0},comment:{lex:!0,marker:[{line:!0,start:"#",lex:!0},{line:!0,start:"//",lex:!0},{line:!1,start:"/*",end:"*/",lex:!0}]},string:{lex:!0,chars:"'\"`",multiChars:"`",escapeChar:"\\",escape:{b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v",'"':'"',"'":"'","`":"`","\\":"\\","/":"/"},allowUnknown:!0},map:{extend:!0,merge:void 0},list:{property:!0},value:{lex:!0,map:{true:{val:!0},false:{val:!1},null:{val:null}}},ender:[],plugin:{},debug:{get_console:()=>console,maxlen:99,print:{config:!1,src:void 0}},error:{unknown:"unknown error: $code",unexpected:"unexpected character(s): $src",invalid_unicode:"invalid unicode escape: $src",invalid_ascii:"invalid ascii escape: $src",unprintable:"unprintable character: $src",unterminated_string:"unterminated string: $src",unterminated_comment:"unterminated comment: $src",unknown_rule:"unknown rule: $rulename"},hint:function(e=((e,t="replace")=>e[t](/[A-Z]/g,e=>" "+e.toLowerCase())[t](/[~%][a-z]/g,e=>("~"==e[0]?" ":"")+e[1].toUpperCase())),t="~sinceTheErrorIsUnknown,ThisIsProbablyABugInsideJsonic\nitself,OrAPlugin.~pleaseConsiderPostingAGithubIssue -Thanks!\n\n~code: $code,~details: \n$details|~theCharacter(s) $srcWereNotExpectedAtThisPointAsTheyDoNot\nmatchTheExpectedSyntax,EvenUnderTheRelaxedJsonicRules.~ifIt\nisNotObviouslyWrong,TheActualSyntaxErrorMayBeElsewhere.~try\ncommentingOutLargerAreasAroundThisPointUntilYouGetNoErrors,\nthenRemoveTheCommentsInSmallSectionsUntilYouFindThe\noffendingSyntax.~n%o%t%e:~alsoCheckIfAnyPluginsYouAreUsing\nexpectDifferentSyntaxInThisCase.|~theEscapeSequence $srcDoesNotEncodeAValidUnicodeCodePoint\nnumber.~youMayNeedToValidateYourStringDataManuallyUsingTest\ncodeToSeeHow~javaScriptWillInterpretIt.~alsoConsiderThatYour\ndataMayHaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeen\ngeneratedCorrectly.|~theEscapeSequence $srcDoesNotEncodeAValid~a%s%c%i%iCharacter.~you\nmayNeedToValidateYourStringDataManuallyUsingTestCodeToSee\nhow~javaScriptWillInterpretIt.~alsoConsiderThatYourDataMay\nhaveBecomeCorrupted,OrTheEscapeSequenceHasNotBeenGenerated\ncorrectly.|~stringValuesCannotContainUnprintableCharacters (characterCodes\nbelow 32).~theCharacter $srcIsUnprintable.~youMayNeedToRemove\ntheseCharactersFromYourSourceData.~alsoCheckThatItHasNot\nbecomeCorrupted.|~thisStringHasNoEndQuote.|~thisCommentIsNeverClosed.|~noRuleNamed $rulenameIsDefined.~thisIsProbablyAnErrorInThe\ngrammarOfAPlugin.".split("|")){return"unknown|unexpected|invalid_unicode|invalid_ascii|unprintable|unterminated_string|unterminated_comment|unknown_rule".split("|").reduce((n,r,i)=>(n[r]=e(t[i]),n),{})},lex:{match:[l.makeFixedMatcher,l.makeSpaceMatcher,l.makeLineMatcher,l.makeStringMatcher,l.makeCommentMatcher,l.makeNumberMatcher,l.makeTextMatcher],empty:!0},rule:{start:"val",finish:!0,maxmul:3,include:"",exclude:""},result:{fail:[]},config:{modify:{}},parser:{start:void 0}};i.defaults=s;var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.Parser=o.makeRuleSpec=o.makeRule=void 0;const a=t({}),c=n({});class u{constructor(e,t,n){this.id=-1,this.name=r.EMPTY,this.node=null,this.state=r.OPEN,this.n=Object.create(null),this.d=-1,this.use=Object.create(null),this.keep=Object.create(null),this.bo=!1,this.ao=!1,this.bc=!1,this.ac=!1,this.os=0,this.cs=0,this.id=t.uI++,this.name=e.name,this.spec=e,this.child=t.NORULE,this.parent=t.NORULE,this.prev=t.NORULE,this.o0=t.NOTOKEN,this.o1=t.NOTOKEN,this.c0=t.NOTOKEN,this.c1=t.NOTOKEN,this.node=n,this.d=t.rsI,this.bo=null!=e.def.bo,this.ao=null!=e.def.ao,this.bc=null!=e.def.bc,this.ac=null!=e.def.ac}process(e){return this.spec.process(this,e,this.state)}}const p=(...e)=>new u(...e);o.makeRule=p;class d{constructor(){this.p=r.EMPTY,this.r=r.EMPTY,this.b=0}}const m=(...e)=>new d(...e),h=m(),f=m();class g{constructor(e,t){this.name=r.EMPTY,this.def={open:[],close:[],bo:[],bc:[],ao:[],ac:[]},this.cfg=e,this.def=Object.assign(this.def,t),this.def.open=(this.def.open||[]).filter(e=>null!=e),this.def.close=(this.def.close||[]).filter(e=>null!=e);for(let n of[...this.def.open,...this.def.close])(0,a.normalt)(n)}tin(e){return(0,a.tokenize)(e,this.cfg)}add(e,t,n){let r=(null==n?void 0:n.append)?"push":"unshift",i=((0,a.isarr)(t)?t:[t]).filter(e=>null!=e&&"object"==typeof e).map(e=>(0,a.normalt)(e)),l="o"===e?"open":"close",s=this.def[l];if(s[r](...i),n){if(n.delete)for(let e=0;e<n.delete.length;e++)s[(s.length+n.delete[e])%s.length]=null;if(n.move)for(let e=0;e<n.move.length;e+=2){let t=(s.length+n.move[e])%s.length,r=(s.length+n.move[e+1])%s.length,i=s[t];s.splice(t,1),s.splice(r,0,i)}this.def[l]=s.filter(e=>null!=e)}return(0,a.filterRules)(this,this.cfg),this}open(e,t){return this.add("o",e,t)}close(e,t){return this.add("c",e,t)}action(e,t,n,r){let i=this.def[t+n];return e?i.push(r):i.unshift(r),this}bo(e,t){return this.action(!t||!!e,r.BEFORE,r.OPEN,t||e)}ao(e,t){return this.action(!t||!!e,r.AFTER,r.OPEN,t||e)}bc(e,t){return this.action(!t||!!e,r.BEFORE,r.CLOSE,t||e)}ac(e,t){return this.action(!t||!!e,r.AFTER,r.CLOSE,t||e)}clear(){return this.def.open.length=0,this.def.close.length=0,this.def.bo.length=0,this.def.ao.length=0,this.def.bc.length=0,this.def.ac.length=0,this}process(e,t,n){let i=r.EMPTY,l=t.F,s="o"===n,o=s?e:t.NORULE,c=this.def,u=s?c.open:c.close,d=s?e.bo?c.bo:null:e.bc?c.bc:null;if(d){let n=void 0;for(let r=0;r<d.length;r++)if((null==(n=d[r].call(this,e,t,o,n))?void 0:n.isToken)&&(null==n?void 0:n.err))return this.bad(n,e,t,{is_open:s})}let m=0<u.length?this.parse_alts(s,u,e,t):f;if(m.h&&(m=m.h(e,t,m,o)||m,i+="H"),m.e)return this.bad(m.e,e,t,{is_open:s});if(m.n)for(let r in m.n)e.n[r]=0===m.n[r]?0:(null==e.n[r]?0:e.n[r])+m.n[r];if(m.u&&(e.use=Object.assign(e.use,m.u)),m.k&&(e.keep=Object.assign(e.keep,m.k)),m.a){i+="A";let n=m.a.call(this,e,t,m);if(n&&n.isToken&&n.err)return this.bad(n,e,t,{is_open:s})}if(m.p){t.rs[t.rsI++]=e;let n=t.rsm[m.p];if(!n)return this.bad(this.unknownRule(t.t0,m.p),e,t,{is_open:s});(o=e.child=p(n,t,e.node)).parent=e,o.n={...e.n},0<Object.keys(e.keep).length&&(o.keep={...e.keep}),i+="@p:"+m.p}else if(m.r){let n=t.rsm[m.r];if(!n)return this.bad(this.unknownRule(t.t0,m.r),e,t,{is_open:s});(o=p(n,t,e.node)).parent=e.parent,o.prev=e,o.n={...e.n},0<Object.keys(e.keep).length&&(o.keep={...e.keep}),i+="@r:"+m.r}else s||(o=t.rs[--t.rsI]||t.NORULE),i+="Z";let h=s?e.ao?c.ao:null:e.ac?c.ac:null;if(h){let n=void 0;for(let r=0;r<h.length;r++)if((null==(n=h[r].call(this,e,t,o,n))?void 0:n.isToken)&&(null==n?void 0:n.err))return this.bad(n,e,t,{is_open:s})}o.why=i,t.log&&t.log(a.S.indent.repeat(e.d)+a.S.node+a.S.space,e.state.toUpperCase(),(e.prev.id+"/"+e.parent.id+"/"+e.child.id).padEnd(12),e.name+"~"+e.id,"w="+i,"n:"+(0,a.entries)(e.n).filter(e=>e[1]).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(e.use).map(e=>e[0]+"="+e[1]).join(";"),"k:"+(0,a.entries)(e.keep).map(e=>e[0]+"="+e[1]).join(";"),"<"+l(e.node)+">");let g=0,k=e[s?"os":"cs"]-(m.b||0);for(;g++<k;)t.next();return r.OPEN===e.state&&(e.state=r.CLOSE),o}parse_alts(e,t,n,i){let l=h;l.b=0,l.p=r.EMPTY,l.r=r.EMPTY,l.n=void 0,l.h=void 0,l.a=void 0,l.u=void 0,l.k=void 0,l.e=void 0;let s,o=null,c=0,u=i.cfg.t,p=1<<u.AA-1,d=t.length;for(c=0;c<d;c++){o=t[c];let r=i.t0.tin,a=!1,u=!1;if(s=!0,o.S0&&(a=!0,(s=o.S0[r/31|0]&(1<<r%31-1|p))&&(u=null!=o.S1,o.S1))){u=!0;let e=i.t1.tin;s=o.S1[e/31|0]&(1<<e%31-1|p)}if(e?(n.o0=a?i.t0:i.NOTOKEN,n.o1=u?i.t1:i.NOTOKEN,n.os=(a?1:0)+(u?1:0)):(n.c0=a?i.t0:i.NOTOKEN,n.c1=u?i.t1:i.NOTOKEN,n.cs=(a?1:0)+(u?1:0)),s&&o.c&&(s=s&&o.c(n,i,l)),s)break;o=null}s||u.ZZ===i.t0.tin||(l.e=i.t0),o&&(l.n=null!=o.n?o.n:l.n,l.h=null!=o.h?o.h:l.h,l.a=null!=o.a?o.a:l.a,l.u=null!=o.u?o.u:l.u,l.k=null!=o.k?o.k:l.k,l.g=null!=o.g?o.g:l.g,l.e=o.e&&o.e(n,i,l)||void 0,l.p=null!=o.p?"string"==typeof o.p?o.p:o.p(n,i,l):l.p,l.r=null!=o.r?"string"==typeof o.r?o.r:o.r(n,i,l):l.r,l.b=null!=o.b?"number"==typeof o.b?o.b:o.b(n,i,l):l.b);let m=c<t.length;return i.log&&i.log(a.S.indent.repeat(n.d)+a.S.parse,n.state.toUpperCase(),(n.prev.id+"/"+n.parent.id+"/"+n.child.id).padEnd(12),n.name+"~"+n.id,m?"alt="+c:"no-alt",m&&l.g?"g:"+l.g+" ":"",(m&&l.p?"p:"+l.p+" ":"")+(m&&l.r?"r:"+l.r+" ":"")+(m&&l.b?"b:"+l.b+" ":""),(r.OPEN===n.state?[n.o0,n.o1].slice(0,n.os):[n.c0,n.c1].slice(0,n.cs)).map(e=>e.name+"="+i.F(e.src)).join(" "),"c:"+(o&&o.c?s:r.EMPTY),"n:"+(0,a.entries)(l.n).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(l.u).map(e=>e[0]+"="+e[1]).join(";"),"k:"+(0,a.entries)(l.k).map(e=>e[0]+"="+e[1]).join(";"),c<t.length&&o.s?"["+o.s.map(e=>Array.isArray(e)?e.map(e=>u[e]).join("|"):u[e]).join(" ")+"]":"[]",l),l}bad(e,t,n,r){throw new a.JsonicError(e.err||a.S.unexpected,{...e.use,state:r.is_open?a.S.open:a.S.close},e,t,n)}unknownRule(e,t){return e.err="unknown_rule",e.use=e.use||{},e.use.rulename=t,e}}const k=(...e)=>new g(...e);o.makeRuleSpec=k;class v{constructor(e,t){this.rsm={},this.options=e,this.cfg=t}rule(e,t){if(null==e)return this.rsm;let n=this.rsm[e];if(null===t)delete this.rsm[e];else if(void 0!==t){n=this.rsm[e]=this.rsm[e]||k(this.cfg,{}),(n=this.rsm[e]=t(this.rsm[e],this.rsm)||this.rsm[e]).name=e;for(let e of[...n.def.open,...n.def.close])(0,a.normalt)(e);return}return n}start(e,t,n,i){let l,s=(0,c.makeToken)("#ZZ",(0,a.tokenize)("#ZZ",this.cfg),void 0,r.EMPTY,(0,c.makePoint)(-1)),o=(0,c.makeNoToken)(),u={uI:0,opts:this.options,cfg:this.cfg,meta:n||{},src:()=>e,root:()=>l.node,plgn:()=>t.internal().plugins,rule:{},xs:-1,v2:s,v1:s,t0:s,t1:s,tC:-2,next:b,rs:[],rsI:0,rsm:this.rsm,log:void 0,F:(0,a.srcfmt)(this.cfg),use:{},NOTOKEN:o,NORULE:{}};u=(0,a.deep)(u,i);let d=(e=>p(k(e.cfg,{}),e))(u);if(u.NORULE=d,u.rule=d,(0,a.makelog)(u,n),""===e){if(this.cfg.lex.empty)return;throw new a.JsonicError(a.S.unexpected,{src:e},u.t0,d,u)}let m=e=>(0,a.tokenize)(e,this.cfg),h=(0,a.badlex)((0,c.makeLex)(u),(0,a.tokenize)("#BD",this.cfg),u),f=this.rsm[this.cfg.rule.start];if(null==f)return;let g=p(f,u);l=g;let v=2*(0,a.keys)(this.rsm).length*h.src.length*2*u.cfg.rule.maxmul,x=u.cfg.tokenSetDerived.ignore;function b(){let e;u.v2=u.v1,u.v1=u.t0,u.t0=u.t1;do{e=h(g),u.tC++}while(x[e.tin]);return u.t1=e,u.t0}b(),b();let y=0;for(;d!==g&&y<v;)u.log&&u.log("\n"+a.S.indent.repeat(g.d)+a.S.stack,u.rs.slice(0,u.rsI).map(e=>e.name+"~"+e.id).join("/"),"<<"+u.F(l.node)+">>",u.rs.slice(0,u.rsI).map(e=>"<"+u.F(e.node)+">").join(" "),g,u),u.log&&u.log(a.S.indent.repeat(g.d)+a.S.rule+a.S.space,g.state.toUpperCase(),(g.prev.id+"/"+g.parent.id+"/"+g.child.id).padEnd(12),g.name+"~"+g.id,"["+u.F(u.t0.src)+" "+u.F(u.t1.src)+"]","n:"+(0,a.entries)(g.n).filter(e=>e[1]).map(e=>e[0]+"="+e[1]).join(";"),"u:"+(0,a.entries)(g.use).map(e=>e[0]+"="+e[1]).join(";"),"k:"+(0,a.entries)(g.keep).map(e=>e[0]+"="+e[1]).join(";"),"["+m(u.t0.tin)+" "+m(u.t1.tin)+"]",g,u),u.rule=g,g=g.process(u),y++;if((0,a.tokenize)("#ZZ",this.cfg)!==u.t0.tin)throw new a.JsonicError(a.S.unexpected,{},u.t0,d,u);const j=u.root();if(this.cfg.result.fail.includes(j))throw new a.JsonicError(a.S.unexpected,{},u.t0,d,u);return j}clone(e,t){let n=new v(e,t);return n.rsm=Object.keys(this.rsm).reduce((e,t)=>(e[t]=(0,a.filterRules)(this.rsm[t],this.cfg),e),{}),n}}o.Parser=v;var x={};function b(e){const t=e.token.OB,n=e.token.CB,r=e.token.OS,i=e.token.CS,l=e.token.CL,s=e.token.CA,o=e.token.TX,a=e.token.ST,c=e.token.ZZ,u=e.config(),p=u.tokenSet.val,d=u.tokenSet.key,m=e.util.deep,h=(e,t)=>{if(!t.cfg.rule.finish)return t.t0.src="END_OF_SOURCE",t.t0},f=e=>{const t=e.o0,n=a===t.tin||o===t.tin?t.val:t.src;e.use.key=n};e.rule("val",e=>{e.bo(e=>e.node=void 0).open([{s:[t],p:"map",b:1,g:"map,json"},{s:[r],p:"list",b:1,g:"list,json"},{s:[p],g:"val,json"}]).close([{s:[c],g:"end,json"},{b:1,g:"more,json"}]).bc((e,t)=>{e.node=void 0===e.node?void 0===e.child.node?0===e.os?void 0:e.o0.resolveVal(e,t):e.child.node:e.node})}),e.rule("map",e=>{e.bo(e=>{e.node={}}).open([{s:[t,n],g:"map,json"},{s:[t],p:"pair",n:{pk:0},g:"map,json,pair"}])}),e.rule("list",e=>{e.bo(e=>{e.node=[]}).open([{s:[r,i],g:"list,json"},{s:[r],p:"elem",g:"list,elem,json"}])}),e.rule("pair",e=>{e.open([{s:[d,l],p:"val",u:{pair:!0},a:f,g:"map,pair,key,json"}]).bc((e,t)=>{e.use.pair&&(e.use.prev=e.node[e.use.key],e.node[e.use.key]=e.child.node)}).close([{s:[n],g:"map,pair,json"},{s:[s],r:"pair",g:"map,pair,json"},{s:[c],e:h,g:"map,pair,json"}])}),e.rule("elem",e=>{e.open([{p:"val",u:{elem:!0},g:"list,elem,val,json"}]).bc(e=>{e.use.elem&&e.node.push(e.child.node)}).close([{s:[s],r:"elem",g:"list,elem,json"},{s:[i],g:"list,elem,json"},{s:[c],e:h,g:"list,elem,json"}])});const g=(e,t)=>{let n=e.use.key,r=e.child.node;const i=e.use.prev;r=void 0===r?null:r,e.node[n]=null==i?r:t.cfg.map.merge?t.cfg.map.merge(i,r):t.cfg.map.extend?m(i,r):r};e.rule("val",e=>{e.open([{s:[d,l],p:"map",b:2,n:{pk:1},g:"pair,jsonic"},{s:[p],g:"val,json"},{s:[[n,i]],b:1,g:"val,imp,null,jsonic"},{s:[s],c:{n:{il:0}},p:"list",b:1,g:"list,imp,jsonic"},{s:[s],b:1,g:"list,val,imp,null,jsonic"}],{append:!0,delete:[2]}).close([{s:[[n,i]],b:1,g:"val,json,close"},{s:[s],c:{n:{il:0,pk:0}},n:{il:1},r:"elem",a:e=>e.node=[e.node],g:"list,val,imp,comma,jsonic"},{c:{n:{il:0,pk:0}},n:{il:1},r:"elem",a:e=>e.node=[e.node],g:"list,val,imp,space,jsonic",b:1}],{append:!0,move:[1,-1]})}),e.rule("map",e=>{e.bo(e=>{e.n.il=1+(e.n.il?e.n.il:0),e.n.im=1+(e.n.im?e.n.im:0)}).open([{s:[d,l],p:"pair",b:2,g:"pair,list,val,imp"}],{append:!0})}),e.rule("list",e=>{e.bo(e=>{e.n.il=1+(e.n.il?e.n.il:0),e.n.pk=1+(e.n.pk?e.n.pk:0),e.n.im=1+(e.n.im?e.n.im:0)}).open([{s:[s],p:"elem",b:1,g:"list,elem,val,imp"},{p:"elem",g:"list,elem"}],{append:!0})}),e.rule("pair",e=>{e.open([{s:[s],g:"map,pair,comma"}],{append:!0}).bc((e,t)=>{e.use.pair&&g(e,t)}).close([{s:[n],c:{n:{pk:0}},g:"map,pair,json"},{s:[s,n],c:{n:{pk:0}},g:"map,pair,comma,jsonic"},{s:[s],c:{n:{pk:0}},r:"pair",g:"map,pair,json"},{s:[s],c:{n:{im:1}},r:"pair",g:"map,pair,jsonic"},{s:[p],c:{n:{pk:0}},r:"pair",b:1,g:"map,pair,imp,jsonic"},{s:[p],c:{n:{im:1}},r:"pair",b:1,g:"map,pair,imp,jsonic"},{s:[[n,s,...p]],b:1,g:"map,pair,imp,path,jsonic"},{s:[i],b:1,g:"list,pair,imp,jsonic"},{s:[c],e:h,g:"map,pair,json"}],{append:!0,delete:[0,1,2]})}),e.rule("elem",e=>{e.open([{s:[s,s],b:2,a:e=>e.node.push(null),g:"list,elem,imp,null,jsonic"},{s:[s],a:e=>e.node.push(null),g:"list,elem,imp,null,jsonic"},u.list.property&&{s:[d,l],p:"val",n:{pk:1},u:{elem:!1},a:f,g:"elem,pair,jsonic"}]).bc((e,t)=>{!1===e.use.elem&&(e.use.prev=e.node[e.use.key],g(e,t))}).close([{s:[s,i],g:"list,elem,comma.jsonic"},{s:[s],r:"elem",g:"list,elem,json"},{s:[[...p,t,r]],r:"elem",b:1,g:"list,elem,imp,jsonic"},{s:[i],g:"list,elem,json"},{s:[c],e:h,g:"list,elem,json"}],{delete:[-1,-2,-3]})})}Object.defineProperty(x,"__esModule",{value:!0}),x.makeJSON=x.grammar=void 0,x.grammar=b,x.makeJSON=function(e){let t=e.make({grammar$:!1,text:{lex:!1},number:{hex:!1,oct:!1,bin:!1,sep:null,exclude:/^00+/},string:{chars:'"',multiChars:"",allowUnknown:!1,escape:{v:null}},comment:{lex:!1},map:{extend:!1},lex:{empty:!1},rule:{finish:!1,include:"json"},result:{fail:[void 0,NaN]},tokenSet:{key:["#ST",null,null,null]}});return b(t),t};var y={exports:{}};Object.defineProperty(y.exports,"__esModule",{value:!0}),y.exports.AFTER=y.exports.BEFORE=y.exports.CLOSE=y.exports.OPEN=y.exports.makeTextMatcher=y.exports.makeNumberMatcher=y.exports.makeCommentMatcher=y.exports.makeStringMatcher=y.exports.makeLineMatcher=y.exports.makeSpaceMatcher=y.exports.makeFixedMatcher=y.exports.makeLex=y.exports.makeRuleSpec=y.exports.makeRule=y.exports.makePoint=y.exports.makeToken=y.exports.make=y.exports.util=y.exports.Parser=y.exports.JsonicError=y.exports.Jsonic=void 0,Object.defineProperty(y.exports,"OPEN",{enumerable:!0,get:function(){return r.OPEN}}),Object.defineProperty(y.exports,"CLOSE",{enumerable:!0,get:function(){return r.CLOSE}}),Object.defineProperty(y.exports,"BEFORE",{enumerable:!0,get:function(){return r.BEFORE}}),Object.defineProperty(y.exports,"AFTER",{enumerable:!0,get:function(){return r.AFTER}});const j=t({});Object.defineProperty(y.exports,"JsonicError",{enumerable:!0,get:function(){return j.JsonicError}});const S=n({});Object.defineProperty(y.exports,"makePoint",{enumerable:!0,get:function(){return S.makePoint}}),Object.defineProperty(y.exports,"makeToken",{enumerable:!0,get:function(){return S.makeToken}}),Object.defineProperty(y.exports,"makeLex",{enumerable:!0,get:function(){return S.makeLex}}),Object.defineProperty(y.exports,"makeFixedMatcher",{enumerable:!0,get:function(){return S.makeFixedMatcher}}),Object.defineProperty(y.exports,"makeSpaceMatcher",{enumerable:!0,get:function(){return S.makeSpaceMatcher}}),Object.defineProperty(y.exports,"makeLineMatcher",{enumerable:!0,get:function(){return S.makeLineMatcher}}),Object.defineProperty(y.exports,"makeStringMatcher",{enumerable:!0,get:function(){return S.makeStringMatcher}}),Object.defineProperty(y.exports,"makeCommentMatcher",{enumerable:!0,get:function(){return S.makeCommentMatcher}}),Object.defineProperty(y.exports,"makeNumberMatcher",{enumerable:!0,get:function(){return S.makeNumberMatcher}}),Object.defineProperty(y.exports,"makeTextMatcher",{enumerable:!0,get:function(){return S.makeTextMatcher}}),Object.defineProperty(y.exports,"makeRule",{enumerable:!0,get:function(){return o.makeRule}}),Object.defineProperty(y.exports,"makeRuleSpec",{enumerable:!0,get:function(){return o.makeRuleSpec}}),Object.defineProperty(y.exports,"Parser",{enumerable:!0,get:function(){return o.Parser}});const I={tokenize:j.tokenize,srcfmt:j.srcfmt,deep:j.deep,clone:j.clone,charset:j.charset,trimstk:j.trimstk,makelog:j.makelog,badlex:j.badlex,extract:j.extract,errinject:j.errinject,errdesc:j.errdesc,configure:j.configure,parserwrap:j.parserwrap,mesc:j.mesc,escre:j.escre,regexp:j.regexp,prop:j.prop,str:j.str,omap:j.omap,keys:j.keys,values:j.values,entries:j.entries};function E(e,t){if("json"===e)return(0,x.makeJSON)(O);let n={parser:{},config:{},plugins:[],mark:Math.random()},r=(0,j.deep)({},t?{...t.options}:!1===(null==e?void 0:e.defaults$)?{}:i.defaults,e||{}),l=function(e,t,n){var r;if(j.S.string===typeof e){let i=l.internal();return((null===(r=s.parser)||void 0===r?void 0:r.start)?(0,j.parserwrap)(s.parser):i.parser).start(e,l,t,n)}return e},s=e=>{if(null!=e&&j.S.object===typeof e){(0,j.deep)(r,e),(0,j.configure)(l,n.config,r);let t=l.internal().parser;n.parser=t.clone(r,n.config)}return{...l.options}},a={token:e=>(0,j.tokenize)(e,n.config,l),fixed:e=>n.config.fixed.ref[e],options:(0,j.deep)(s,r),config:()=>(0,j.deep)(n.config),parse:l,use:function(e,t){const n=e.name.toLowerCase(),r=(0,j.deep)({},e.defaults||{},t||{});l.options({plugin:{[n]:r}});let i=l.options.plugin[n];return l.internal().plugins.push(e),e(l,i)||l},rule:(e,t)=>l.internal().parser.rule(e,t)||l,lex:e=>{let t=r.lex.match;t.unshift(e),l.options({lex:{match:t}})},make:e=>E(e,l),empty:e=>E({defaults$:!1,standard$:!1,grammar$:!1,...e||{}}),id:"Jsonic/"+Date.now()+"/"+(""+Math.random()).substring(2,8).padEnd(6,"0")+(null==s.tag?"":"/"+s.tag),toString:()=>a.id,util:I};if((0,j.defprop)(a.make,j.S.name,{value:j.S.make}),(0,j.assign)(l,a),(0,j.defprop)(l,"internal",{value:()=>n}),t){for(let n in t)void 0===l[n]&&(l[n]=t[n]);l.parent=t;let e=t.internal();n.config=(0,j.deep)({},e.config),(0,j.configure)(l,n.config,r),(0,j.assign)(l.token,n.config.t),n.plugins=[...e.plugins],n.parser=e.parser.clone(r,n.config)}else n.config=(0,j.configure)(l,void 0,r),n.plugins=[],n.parser=new o.Parser(r,n.config),!1!==r.grammar$&&(0,x.grammar)(l);return l}y.exports.util=I,y.exports.make=E;let O=void 0,T=O=E();return y.exports.Jsonic=T,delete O.options,delete O.use,delete O.rule,delete O.lex,delete O.token,delete O.fixed,O.Jsonic=O,O.JsonicError=j.JsonicError,O.Parser=o.Parser,O.makeLex=S.makeLex,O.makeToken=S.makeToken,O.makePoint=S.makePoint,O.makeRule=o.makeRule,O.makeRuleSpec=o.makeRuleSpec,O.makeFixedMatcher=S.makeFixedMatcher,O.makeSpaceMatcher=S.makeSpaceMatcher,O.makeLineMatcher=S.makeLineMatcher,O.makeStringMatcher=S.makeStringMatcher,O.makeCommentMatcher=S.makeCommentMatcher,O.makeNumberMatcher=S.makeNumberMatcher,O.makeTextMatcher=S.makeTextMatcher,O.util=I,O.make=E,y.exports.default=T,y.exports=y.exports.Jsonic,y=y.exports}));

/***/ }),

/***/ "ffda":
/***/ (function(module, exports) {

module.exports = require("vuetify/lib/components/VDivider");

/***/ })

/******/ });
//# sourceMappingURL=Vxg.common.js.map