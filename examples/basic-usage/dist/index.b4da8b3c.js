// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lEAvy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "3c768a19b4da8b3c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9PwHX":[function(require,module,exports) {
var _indexJs = require("../../build/index.js");
const patch = _indexJs.init([_indexJs.propsModule]);
let oldvnode = _indexJs.h("div", [
    "div",
    "p"
]);
let app = document.getElementById("container");
console.log(oldvnode); // patch(app, oldvnode)

},{"../../build/index.js":"4DUL7"}],"4DUL7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// core
parcelHelpers.export(exports, "htmlDomApi", ()=>_htmldomapi.htmlDomApi
);
parcelHelpers.export(exports, "init", ()=>_init.init
);
parcelHelpers.export(exports, "thunk", ()=>_thunk.thunk
);
parcelHelpers.export(exports, "vnode", ()=>_vnode.vnode
);
// helpers
parcelHelpers.export(exports, "attachTo", ()=>_attachto.attachTo
);
parcelHelpers.export(exports, "array", ()=>_is.array
);
parcelHelpers.export(exports, "primitive", ()=>_is.primitive
);
parcelHelpers.export(exports, "toVNode", ()=>_tovnode.toVNode
);
parcelHelpers.export(exports, "h", ()=>_h.h
);
// modules
parcelHelpers.export(exports, "attributesModule", ()=>_attributes.attributesModule
);
parcelHelpers.export(exports, "classModule", ()=>_class.classModule
);
parcelHelpers.export(exports, "datasetModule", ()=>_dataset.datasetModule
);
parcelHelpers.export(exports, "eventListenersModule", ()=>_eventlisteners.eventListenersModule
);
parcelHelpers.export(exports, "propsModule", ()=>_props.propsModule
);
parcelHelpers.export(exports, "styleModule", ()=>_style.styleModule
);
// JSX
parcelHelpers.export(exports, "jsx", ()=>_jsx.jsx
);
var _htmldomapi = require("./htmldomapi");
var _init = require("./init");
var _thunk = require("./thunk");
var _vnode = require("./vnode");
var _attachto = require("./helpers/attachto");
var _is = require("./is");
var _tovnode = require("./tovnode");
var _h = require("./h");
// types
var _hooks = require("./hooks");
parcelHelpers.exportAll(_hooks, exports);
var _attributes = require("./modules/attributes");
var _class = require("./modules/class");
var _dataset = require("./modules/dataset");
var _eventlisteners = require("./modules/eventlisteners");
var _props = require("./modules/props");
var _style = require("./modules/style");
var _jsx = require("./jsx");

},{"./htmldomapi":"gEP2V","./init":"4LhJw","./thunk":"casGH","./vnode":"kyZ4D","./helpers/attachto":"5JDmw","./is":"29RCV","./tovnode":"kK62S","./h":"g3cyU","./hooks":"5xE12","./modules/attributes":"bzicr","./modules/class":"bPT7Q","./modules/dataset":"3XI37","./modules/eventlisteners":"lCFds","./modules/props":"a174r","./modules/style":"hDLMz","./jsx":"kNOq3","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"gEP2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlDomApi", ()=>htmlDomApi
);
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function createElementNS(namespaceURI, qualifiedName, options) {
    return document.createElementNS(namespaceURI, qualifiedName, options);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
const htmlDomApi = {
    createElement,
    createElementNS,
    createTextNode,
    createComment,
    insertBefore,
    removeChild,
    appendChild,
    parentNode,
    nextSibling,
    tagName,
    setTextContent,
    getTextContent,
    isElement,
    isText,
    isComment
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"fwhFv":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4LhJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _vnode = require("./vnode");
var _is = require("./is");
var _htmldomapi = require("./htmldomapi");
function isUndef(s) {
    return s === undefined;
}
function isDef(s) {
    return s !== undefined;
}
const emptyNode = _vnode.vnode("", {
}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    var _a, _b;
    const isSameKey = vnode1.key === vnode2.key;
    const isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
    const isSameSel = vnode1.sel === vnode2.sel;
    return isSameSel && isSameKey && isSameIs;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var _a;
    const map = {
    };
    for(let i = beginIdx; i <= endIdx; ++i){
        const key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
        if (key !== undefined) map[key] = i;
    }
    return map;
}
const hooks = [
    "create",
    "update",
    "remove",
    "destroy",
    "pre",
    "post", 
];
function init(modules, domApi) {
    const cbs = {
        create: [],
        update: [],
        remove: [],
        destroy: [],
        pre: [],
        post: []
    };
    const api = domApi !== undefined ? domApi : _htmldomapi.htmlDomApi;
    for (const hook of hooks)for (const module of modules){
        const currentHook = module[hook];
        if (currentHook !== undefined) cbs[hook].push(currentHook);
    }
    function emptyNodeAt(elm) {
        const id = elm.id ? "#" + elm.id : "";
        // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.
        // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring
        const classes = elm.getAttribute("class");
        const c = classes ? "." + classes.split(" ").join(".") : "";
        return _vnode.vnode(api.tagName(elm).toLowerCase() + id + c, {
        }, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if ((--listeners) === 0) {
                const parent = api.parentNode(childElm);
                api.removeChild(parent, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var _a, _b;
        let i;
        let data = vnode.data;
        if (data !== undefined) {
            const init1 = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;
            if (isDef(init1)) {
                init1(vnode);
                data = vnode.data;
            }
        }
        const children = vnode.children;
        const sel = vnode.sel;
        if (sel === "!") {
            if (isUndef(vnode.text)) vnode.text = "";
            vnode.elm = api.createComment(vnode.text);
        } else if (sel !== undefined) {
            // Parse selector
            const hashIdx = sel.indexOf("#");
            const dotIdx = sel.indexOf(".", hashIdx);
            const hash = hashIdx > 0 ? hashIdx : sel.length;
            const dot = dotIdx > 0 ? dotIdx : sel.length;
            const tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            const elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
            if (hash < dot) elm.setAttribute("id", sel.slice(hash + 1, dot));
            if (dotIdx > 0) elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
            for(i = 0; i < cbs.create.length; ++i)cbs.create[i](emptyNode, vnode);
            if (_is.array(children)) for(i = 0; i < children.length; ++i){
                const ch = children[i];
                if (ch != null) api.appendChild(elm, createElm(ch, insertedVnodeQueue));
            }
            else if (_is.primitive(vnode.text)) api.appendChild(elm, api.createTextNode(vnode.text));
            const hook1 = vnode.data.hook;
            if (isDef(hook1)) {
                (_b = hook1.create) === null || _b === void 0 || _b.call(hook1, emptyNode, vnode);
                if (hook1.insert) insertedVnodeQueue.push(vnode);
            }
        } else vnode.elm = api.createTextNode(vnode.text);
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for(; startIdx <= endIdx; ++startIdx){
            const ch = vnodes[startIdx];
            if (ch != null) api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
        }
    }
    function invokeDestroyHook(vnode) {
        var _a, _b;
        const data = vnode.data;
        if (data !== undefined) {
            (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 || _b.call(_a, vnode);
            for(let i = 0; i < cbs.destroy.length; ++i)cbs.destroy[i](vnode);
            if (vnode.children !== undefined) for(let j = 0; j < vnode.children.length; ++j){
                const child = vnode.children[j];
                if (child != null && typeof child !== "string") invokeDestroyHook(child);
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        var _a, _b;
        for(; startIdx <= endIdx; ++startIdx){
            let listeners;
            let rm;
            const ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for(let i = 0; i < cbs.remove.length; ++i)cbs.remove[i](ch, rm);
                    const removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
                    if (isDef(removeHook)) removeHook(ch, rm);
                    else rm();
                } else // Text node
                api.removeChild(parentElm, ch.elm);
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        let oldStartIdx = 0;
        let newStartIdx = 0;
        let oldEndIdx = oldCh.length - 1;
        let oldStartVnode = oldCh[0];
        let oldEndVnode = oldCh[oldEndIdx];
        let newEndIdx = newCh.length - 1;
        let newStartVnode = newCh[0];
        let newEndVnode = newCh[newEndIdx];
        let oldKeyToIdx;
        let idxInOld;
        let elmToMove;
        let before;
        while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx){
            if (oldStartVnode == null) oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            else if (oldEndVnode == null) oldEndVnode = oldCh[--oldEndIdx];
            else if (newStartVnode == null) newStartVnode = newCh[++newStartIdx];
            else if (newEndVnode == null) newEndVnode = newCh[--newEndIdx];
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            } else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            } else {
                if (oldKeyToIdx === undefined) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) // New element
                api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                }
                newStartVnode = newCh[++newStartIdx];
            }
        }
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            } else removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var _a, _b, _c, _d, _e;
        const hook1 = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
        (_b = hook1 === null || hook1 === void 0 ? void 0 : hook1.prepatch) === null || _b === void 0 || _b.call(hook1, oldVnode, vnode);
        const elm = vnode.elm = oldVnode.elm;
        const oldCh = oldVnode.children;
        const ch = vnode.children;
        if (oldVnode === vnode) return;
        if (vnode.data !== undefined) {
            for(let i = 0; i < cbs.update.length; ++i)cbs.update[i](oldVnode, vnode);
            (_d = (_c = vnode.data.hook) === null || _c === void 0 ? void 0 : _c.update) === null || _d === void 0 || _d.call(_c, oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            } else if (isDef(ch)) {
                if (isDef(oldVnode.text)) api.setTextContent(elm, "");
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            } else if (isDef(oldCh)) removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            else if (isDef(oldVnode.text)) api.setTextContent(elm, "");
        } else if (oldVnode.text !== vnode.text) {
            if (isDef(oldCh)) removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            api.setTextContent(elm, vnode.text);
        }
        (_e = hook1 === null || hook1 === void 0 ? void 0 : hook1.postpatch) === null || _e === void 0 || _e.call(hook1, oldVnode, vnode);
    }
    return function patch(oldVnode, vnode) {
        let i, elm, parent;
        const insertedVnodeQueue = [];
        for(i = 0; i < cbs.pre.length; ++i)cbs.pre[i]();
        if (!isVnode(oldVnode)) oldVnode = emptyNodeAt(oldVnode);
        if (sameVnode(oldVnode, vnode)) patchVnode(oldVnode, vnode, insertedVnodeQueue);
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [
                    oldVnode
                ], 0, 0);
            }
        }
        for(i = 0; i < insertedVnodeQueue.length; ++i)insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        for(i = 0; i < cbs.post.length; ++i)cbs.post[i]();
        return vnode;
    };
}

},{"./vnode":"kyZ4D","./is":"29RCV","./htmldomapi":"gEP2V","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"kyZ4D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vnode", ()=>vnode
);
function vnode(sel, data, children, text, elm) {
    const key = data === undefined ? undefined : data.key;
    return {
        sel,
        data,
        children,
        text,
        elm,
        key
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"29RCV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "array", ()=>array
);
parcelHelpers.export(exports, "primitive", ()=>primitive
);
const array = Array.isArray;
function primitive(s) {
    return typeof s === "string" || typeof s === "number" || s instanceof String || s instanceof Number;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"casGH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "thunk", ()=>thunk
);
var _h = require("./h");
function copyToThunk(vnode, thunk) {
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    const cur = thunk.data;
    const vnode = cur.fn(...cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    let i;
    const old = oldVnode.data;
    const cur = thunk.data;
    const oldArgs = old.args;
    const args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn(...args), thunk);
        return;
    }
    for(i = 0; i < args.length; ++i)if (oldArgs[i] !== args[i]) {
        copyToThunk(cur.fn(...args), thunk);
        return;
    }
    copyToThunk(oldVnode, thunk);
}
const thunk = function thunk1(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return _h.h(sel, {
        key: key,
        hook: {
            init,
            prepatch
        },
        fn: fn,
        args: args
    });
};

},{"./h":"g3cyU","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"g3cyU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "h", ()=>h
);
var _vnode = require("./vnode");
var _is = require("./is");
function addNS(data, children, sel) {
    data.ns = "http://www.w3.org/2000/svg";
    if (sel !== "foreignObject" && children !== undefined) for(let i = 0; i < children.length; ++i){
        const childData = children[i].data;
        if (childData !== undefined) addNS(childData, children[i].children, children[i].sel);
    }
}
function h(sel, b, c) {
    let data = {
    };
    let children;
    let text;
    let i;
    if (c !== undefined) {
        if (b !== null) data = b;
        if (_is.array(c)) children = c;
        else if (_is.primitive(c)) text = c.toString();
        else if (c && c.sel) children = [
            c
        ];
    } else if (b !== undefined && b !== null) {
        if (_is.array(b)) children = b;
        else if (_is.primitive(b)) text = b.toString();
        else if (b && b.sel) children = [
            b
        ];
        else data = b;
    }
    if (children !== undefined) {
        for(i = 0; i < children.length; ++i)if (_is.primitive(children[i])) children[i] = _vnode.vnode(undefined, undefined, undefined, children[i], undefined);
    }
    if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) addNS(data, children, sel);
    return _vnode.vnode(sel, data, children, text, undefined);
}

},{"./vnode":"kyZ4D","./is":"29RCV","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"5JDmw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachTo", ()=>attachTo
);
function pre(vnode, newVnode) {
    const attachData = vnode.data.attachData;
    // Copy created placeholder and real element from old vnode
    newVnode.data.attachData.placeholder = attachData.placeholder;
    newVnode.data.attachData.real = attachData.real;
    // Mount real element in vnode so the patch process operates on it
    vnode.elm = vnode.data.attachData.real;
}
function post(_, vnode) {
    // Mount dummy placeholder in vnode so potential reorders use it
    vnode.elm = vnode.data.attachData.placeholder;
}
function destroy(vnode) {
    // Remove placeholder
    if (vnode.elm !== undefined) vnode.elm.parentNode.removeChild(vnode.elm);
    // Remove real element from where it was inserted
    vnode.elm = vnode.data.attachData.real;
}
function create(_, vnode) {
    const real = vnode.elm;
    const attachData = vnode.data.attachData;
    const placeholder = document.createElement("span");
    // Replace actual element with dummy placeholder
    // Snabbdom will then insert placeholder instead
    vnode.elm = placeholder;
    attachData.target.appendChild(real);
    attachData.real = real;
    attachData.placeholder = placeholder;
}
function attachTo(target, vnode) {
    if (vnode.data === undefined) vnode.data = {
    };
    if (vnode.data.hook === undefined) vnode.data.hook = {
    };
    const data = vnode.data;
    const hook = vnode.data.hook;
    data.attachData = {
        target: target,
        placeholder: undefined,
        real: undefined
    };
    hook.create = create;
    hook.prepatch = pre;
    hook.postpatch = post;
    hook.destroy = destroy;
    return vnode;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"kK62S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toVNode", ()=>toVNode
);
var _vnode = require("./vnode");
var _htmldomapi = require("./htmldomapi");
function toVNode(node, domApi) {
    const api = domApi !== undefined ? domApi : _htmldomapi.htmlDomApi;
    let text;
    if (api.isElement(node)) {
        const id = node.id ? "#" + node.id : "";
        const cn = node.getAttribute("class");
        const c = cn ? "." + cn.split(" ").join(".") : "";
        const sel = api.tagName(node).toLowerCase() + id + c;
        const attrs = {
        };
        const children = [];
        let name;
        let i, n;
        const elmAttrs = node.attributes;
        const elmChildren = node.childNodes;
        for(i = 0, n = elmAttrs.length; i < n; i++){
            name = elmAttrs[i].nodeName;
            if (name !== "id" && name !== "class") attrs[name] = elmAttrs[i].nodeValue;
        }
        for(i = 0, n = elmChildren.length; i < n; i++)children.push(toVNode(elmChildren[i], domApi));
        return _vnode.vnode(sel, {
            attrs
        }, children, undefined, node);
    } else if (api.isText(node)) {
        text = api.getTextContent(node);
        return _vnode.vnode(undefined, undefined, undefined, text, node);
    } else if (api.isComment(node)) {
        text = api.getTextContent(node);
        return _vnode.vnode("!", {
        }, [], text, node);
    } else return _vnode.vnode("", {
    }, [], undefined, node);
}

},{"./vnode":"kyZ4D","./htmldomapi":"gEP2V","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"5xE12":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"bzicr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attributesModule", ()=>attributesModule
);
const xlinkNS = "http://www.w3.org/1999/xlink";
const xmlNS = "http://www.w3.org/XML/1998/namespace";
const colonChar = 58;
const xChar = 120;
function updateAttrs(oldVnode, vnode) {
    let key;
    const elm = vnode.elm;
    let oldAttrs = oldVnode.data.attrs;
    let attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs) return;
    if (oldAttrs === attrs) return;
    oldAttrs = oldAttrs || {
    };
    attrs = attrs || {
    };
    // update modified attributes, add new attributes
    for(key in attrs){
        const cur = attrs[key];
        const old = oldAttrs[key];
        if (old !== cur) {
            if (cur === true) elm.setAttribute(key, "");
            else if (cur === false) elm.removeAttribute(key);
            else {
                if (key.charCodeAt(0) !== xChar) elm.setAttribute(key, cur);
                else if (key.charCodeAt(3) === colonChar) // Assume xml namespace
                elm.setAttributeNS(xmlNS, key, cur);
                else if (key.charCodeAt(5) === colonChar) // Assume xlink namespace
                elm.setAttributeNS(xlinkNS, key, cur);
                else elm.setAttribute(key, cur);
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for(key in oldAttrs)if (!(key in attrs)) elm.removeAttribute(key);
}
const attributesModule = {
    create: updateAttrs,
    update: updateAttrs
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"bPT7Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "classModule", ()=>classModule
);
function updateClass(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldClass = oldVnode.data.class;
    let klass = vnode.data.class;
    if (!oldClass && !klass) return;
    if (oldClass === klass) return;
    oldClass = oldClass || {
    };
    klass = klass || {
    };
    for(name in oldClass)if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) // was `true` and now not provided
    elm.classList.remove(name);
    for(name in klass){
        cur = klass[name];
        if (cur !== oldClass[name]) elm.classList[cur ? "add" : "remove"](name);
    }
}
const classModule = {
    create: updateClass,
    update: updateClass
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"3XI37":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "datasetModule", ()=>datasetModule
);
const CAPS_REGEX = /[A-Z]/g;
function updateDataset(oldVnode, vnode) {
    const elm = vnode.elm;
    let oldDataset = oldVnode.data.dataset;
    let dataset = vnode.data.dataset;
    let key;
    if (!oldDataset && !dataset) return;
    if (oldDataset === dataset) return;
    oldDataset = oldDataset || {
    };
    dataset = dataset || {
    };
    const d = elm.dataset;
    for(key in oldDataset)if (!dataset[key]) {
        if (d) {
            if (key in d) delete d[key];
        } else elm.removeAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase());
    }
    for(key in dataset)if (oldDataset[key] !== dataset[key]) {
        if (d) d[key] = dataset[key];
        else elm.setAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase(), dataset[key]);
    }
}
const datasetModule = {
    create: updateDataset,
    update: updateDataset
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"lCFds":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventListenersModule", ()=>eventListenersModule
);
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") // call function handler
    handler.call(vnode, event, vnode);
    else if (typeof handler === "object") // call multiple handlers
    for(let i = 0; i < handler.length; i++)invokeHandler(handler[i], vnode, event);
}
function handleEvent(event, vnode) {
    const name = event.type;
    const on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) invokeHandler(on[name], vnode, event);
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    const oldOn = oldVnode.data.on;
    const oldListener = oldVnode.listener;
    const oldElm = oldVnode.elm;
    const on = vnode && vnode.data.on;
    const elm = vnode && vnode.elm;
    let name;
    // optimization for reused immutable handlers
    if (oldOn === on) return;
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) for(name in oldOn)// remove listener if element was changed or existing listeners removed
        oldElm.removeEventListener(name, oldListener, false);
        else {
            for(name in oldOn)// remove listener if existing listener removed
            if (!on[name]) oldElm.removeEventListener(name, oldListener, false);
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        const listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) for(name in on)// add listener if element was changed or new listeners added
        elm.addEventListener(name, listener, false);
        else {
            for(name in on)// add listener if new listener added
            if (!oldOn[name]) elm.addEventListener(name, listener, false);
        }
    }
}
const eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"a174r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "propsModule", ()=>propsModule
);
function updateProps(oldVnode, vnode) {
    let key;
    let cur;
    let old;
    const elm = vnode.elm;
    let oldProps = oldVnode.data.props;
    let props = vnode.data.props;
    if (!oldProps && !props) return;
    if (oldProps === props) return;
    oldProps = oldProps || {
    };
    props = props || {
    };
    for(key in props){
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== "value" || elm[key] !== cur)) elm[key] = cur;
    }
}
const propsModule = {
    create: updateProps,
    update: updateProps
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"hDLMz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styleModule", ()=>styleModule
);
// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
const raf = typeof window !== "undefined" && window.requestAnimationFrame.bind(window) || setTimeout;
const nextFrame = function(fn) {
    raf(function() {
        raf(fn);
    });
};
let reflowForced = false;
function setNextFrame(obj, prop, val) {
    nextFrame(function() {
        obj[prop] = val;
    });
}
function updateStyle(oldVnode, vnode) {
    let cur;
    let name;
    const elm = vnode.elm;
    let oldStyle = oldVnode.data.style;
    let style = vnode.data.style;
    if (!oldStyle && !style) return;
    if (oldStyle === style) return;
    oldStyle = oldStyle || {
    };
    style = style || {
    };
    const oldHasDel = "delayed" in oldStyle;
    for(name in oldStyle)if (!style[name]) {
        if (name[0] === "-" && name[1] === "-") elm.style.removeProperty(name);
        else elm.style[name] = "";
    }
    for(name in style){
        cur = style[name];
        if (name === "delayed" && style.delayed) for(const name2 in style.delayed){
            cur = style.delayed[name2];
            if (!oldHasDel || cur !== oldStyle.delayed[name2]) setNextFrame(elm.style, name2, cur);
        }
        else if (name !== "remove" && cur !== oldStyle[name]) {
            if (name[0] === "-" && name[1] === "-") elm.style.setProperty(name, cur);
            else elm.style[name] = cur;
        }
    }
}
function applyDestroyStyle(vnode) {
    let style;
    let name;
    const elm = vnode.elm;
    const s = vnode.data.style;
    if (!s || !(style = s.destroy)) return;
    for(name in style)elm.style[name] = style[name];
}
function applyRemoveStyle(vnode, rm) {
    const s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    if (!reflowForced) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        vnode.elm.offsetLeft;
        reflowForced = true;
    }
    let name;
    const elm = vnode.elm;
    let i = 0;
    const style = s.remove;
    let amount = 0;
    const applied = [];
    for(name in style){
        applied.push(name);
        elm.style[name] = style[name];
    }
    const compStyle = getComputedStyle(elm);
    const props = compStyle["transition-property"].split(", ");
    for(; i < props.length; ++i)if (applied.indexOf(props[i]) !== -1) amount++;
    elm.addEventListener("transitionend", function(ev) {
        if (ev.target === elm) --amount;
        if (amount === 0) rm();
    });
}
function forceReflow() {
    reflowForced = false;
}
const styleModule = {
    pre: forceReflow,
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}],"kNOq3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * jsx/tsx compatible factory function
 * see: https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */ parcelHelpers.export(exports, "jsx", ()=>jsx
);
/* eslint-disable @typescript-eslint/no-namespace, import/export */ var _vnode = require("./vnode");
var _h = require("./h");
function flattenAndFilter(children, flattened) {
    for (const child of children)// filter out falsey children, except 0 since zero can be a valid value e.g inside a chart
    if (child !== undefined && child !== null && child !== false && child !== "") {
        if (Array.isArray(child)) flattenAndFilter(child, flattened);
        else if (typeof child === "string" || typeof child === "number" || typeof child === "boolean") flattened.push(_vnode.vnode(undefined, undefined, undefined, String(child), undefined));
        else flattened.push(child);
    }
    return flattened;
}
function jsx(tag, data, ...children) {
    const flatChildren = flattenAndFilter(children, []);
    if (typeof tag === "function") // tag is a function component
    return tag(data, flatChildren);
    else {
        if (flatChildren.length === 1 && !flatChildren[0].sel && flatChildren[0].text) // only child is a simple text node, pass as text for a simpler vtree
        return _h.h(tag, data, flatChildren[0].text);
        else return _h.h(tag, data, flatChildren);
    }
}
jsx = {
};

},{"./vnode":"kyZ4D","./h":"g3cyU","@parcel/transformer-js/src/esmodule-helpers.js":"fwhFv"}]},["lEAvy","9PwHX"], "9PwHX", "parcelRequiree29c")

//# sourceMappingURL=index.b4da8b3c.js.map
