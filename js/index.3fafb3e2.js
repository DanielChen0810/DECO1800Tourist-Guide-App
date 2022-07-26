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
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
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
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
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
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
require("./styles.css");
var _utils = require("./utils");
var radiusMode = false;
var startingLat = null;
var startingLng = null;
// main entry
const mainEntry = async () => {
  const searchButton = document.getElementById("searchButton");
  const expandBtn = document.getElementById("expandBtn");
  const radiusBtn = document.getElementById("radiusBtn");
  const rangeSlider = document.getElementById("radiusRange");
  // acess API and get data
  var response = await _utils.getData(200);
  // build list
  if (response && response.result) {
    var records = response.result.records;
    // console.log(records);
    _utils.buildList("itemList", records);
    _utils.setLoader("hide");
  } else {
    console.log("Error: Invalid Response Format");
  }
  // search bar event listener
  searchButton.addEventListener("click", async e => {
    var input = document.getElementById("searchInput");
    if (typeof input.value === "string") {
      console.log(`new search: ${input.value}`);
      _utils.setLoader("show");
      let newResponse = await _utils.getData(200, input.value);
      // build list
      if (newResponse && newResponse.result) {
        let records = newResponse.result.records;
        _utils.clearList("itemList");
        // console.log(records);
        _utils.buildList("itemList", records);
        _utils.setLoader("hide");
      } else {
        console.log("Error: Invalid Response Format");
      }
    }
  });
  // expand btn event listener
  expandBtn.addEventListener("click", () => {
    _utils.toggleNav("sidebar");
  });
  // radius btn event listener
  radiusBtn.addEventListener("click", () => {
    if (radiusMode) {
      radiusBtn.innerHTML = "Radius: OFF";
      radiusMode = false;
      if (window.selectedMarker) {
        window.myMap.removeLayer(window.selectedMarker);
        window.myMap.removeLayer(window.selectedCircle);
        _utils.removeInrangeMarkers();
      }
      // reset selectedMarker
      window.selectedMarker = null;
      // clear map and hide range side bar
      document.getElementById("itemListContainer").classList.remove("deactive");
      _utils.addAllMarkers();
    } else {
      radiusBtn.innerHTML = "Radius: ON";
      radiusMode = true;
      // clear map and hide itemlist sidebar and show range side bar
      document.getElementById("itemListContainer").classList.add("deactive");
      document.getElementById("rangeListContainer").classList.add("active");
      _utils.removeAllMarkers();
    }
  });
  rangeSlider.addEventListener("input", e => {
    var range = e.target.value;
    // update label
    document.getElementById("rangeSliderLabel").innerHTML = `Range : ${(range * 0.1).toFixed(2)} km`;
    // redraw circle
    if (window.selectedCircle && window.selectedMarker) {
      window.selectedCircle.setRadius(range * 100);
      // show in range markers
      _utils.showInrangeMarkers(range * 0.1, "itemList");
    }
  });
  // generate map
  startingLat = records[0].Latitude;
  startingLng = records[0].Longitude;
  window.myMap = _utils.generateMap("map", startingLat, startingLng, 12);
  // add scale
  L.control.scale().addTo(window.myMap);
  // add mouse event to the map
  window.myMap.on('mousemove', e => {
    if (radiusMode) {
      const lat = e.latlng.lat.toFixed(3);
      const lng = e.latlng.lng.toFixed(3);
      document.getElementById("mouseLocation").innerHTML = `Current Point: ${lat}, ${lng}`;
    }
  });
  // keep a record of the selected marker
  window.selectedMarker = null;
  window.selectedCircle = null;
  window.myMap.on('click', e => {
    if (radiusMode) {
      if (window.selectedMarker) {
        window.myMap.removeLayer(window.selectedMarker);
        window.myMap.removeLayer(window.selectedCircle);
        _utils.removeInrangeMarkers();
      }
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;
      document.getElementById("selectLocation").innerHTML = `Selected Point: ${lat.toFixed(3)}, ${lng.toFixed(3)}`;
      // add selected point marker
      let greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      window.selectedMarker = new L.Marker([lat, lng], {
        icon: greenIcon
      });
      window.myMap.addLayer(window.selectedMarker);
      // calculate distance to all list items and add marker if within range
      let radius = rangeSlider.value * 100;
      window.selectedCircle = L.circle([lat, lng], radius);
      window.myMap.addLayer(window.selectedCircle);
      // show in range markers
      _utils.showInrangeMarkers(radius * 0.001, "itemList");
    }
  });
};
mainEntry();

},{"./styles.css":"1jUZz","./utils":"3EQWo"}],"1jUZz":[function() {},{}],"3EQWo":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getData", function () {
  return getData;
});
_parcelHelpers.export(exports, "buildList", function () {
  return buildList;
});
_parcelHelpers.export(exports, "generateMap", function () {
  return generateMap;
});
_parcelHelpers.export(exports, "setLoader", function () {
  return setLoader;
});
_parcelHelpers.export(exports, "clearList", function () {
  return clearList;
});
_parcelHelpers.export(exports, "toggleNav", function () {
  return toggleNav;
});
_parcelHelpers.export(exports, "removeAllMarkers", function () {
  return removeAllMarkers;
});
_parcelHelpers.export(exports, "addAllMarkers", function () {
  return addAllMarkers;
});
_parcelHelpers.export(exports, "showInrangeMarkers", function () {
  return showInrangeMarkers;
});
_parcelHelpers.export(exports, "removeInrangeMarkers", function () {
  return removeInrangeMarkers;
});
// utils functions
const baseUrl = "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search";
// keep a record of in range marker
const inrangeItems = new Map();
// keep a record of active Item
const activeItems = new Map();
const getData = async (limit = null, search = null) => {
  try {
    var payload = {
      resource_id: "3c972b8e-9340-4b6d-8c7b-2ed988aa3343",
      // the resource id
      limit: limit,
      // get 5 results
      q: search
    };
    const response = await fetch(baseUrl, {
      body: JSON.stringify(payload),
      // must match 'Content-Type' header
      method: "POST",
      // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      // no-cors, cors, *same-origin
      headers: {
        "content-type": "application/json"
      }
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(`Error: ${err}`);
    return null;
  }
};
const buildList = (container, records) => {
  records.forEach(element => {
    // console.log(element.Item_title);
    var item = document.createElement("button");
    item.innerHTML = `${element.Item_title} - ${element.Artist}`;
    item.setAttribute("id", `item-${element._id}`);
    item.setAttribute("value", JSON.stringify({
      Latitude: element.Latitude,
      Longitude: element.Longitude,
      Description: element.Description
    }));
    // handle css
    item.classList.add("list-group-item");
    item.classList.add("list-group-item-action");
    // handle event listener
    item.addEventListener("click", e => {
      let item = e.target;
      if (activeItems.has(item.id)) {
        console.log("remove");
        document.getElementById(item.id).classList.remove("active");
        /*
        let index = activeItems.indexOf(item.id);
        console.log(index);
        activeItems.splice(index,1);
        */
        // map related actions
        onItemClick(item, "remove");
        activeItems.delete(item.id);
      } else {
        console.log("add");
        document.getElementById(item.id).classList.add("active");
        // map related actions
        var marker = onItemClick(item, "add");
        if (marker) {
          activeItems.set(item.id, marker);
        } else {
          console.log("ERROR: Invalid Marker");
        }
      }
    });
    document.getElementById(container).appendChild(item);
  });
};
// generate map base on id, lat, long and zoomlevel
const generateMap = (id, lat, long, zoomLevel) => {
  const mymap = L.map(id).setView([lat, long], zoomLevel);
  // add tile
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const tiles = L.tileLayer(tileUrl, {
    attribution
  });
  tiles.addTo(mymap);
  return mymap;
};
const centerLeafletMapOnMarker = (map, marker) => {
  var latLngs = marker.getLatLng();
  // var markerBounds = L.latLngBounds(latLngs);
  map.setView([latLngs.lat, latLngs.lng], 13);
};
const onItemClick = (item, mode) => {
  console.log(item);
  if (mode === "add") {
    const value = JSON.parse(item.value);
    const latitude = value.Latitude;
    const longitude = value.Longitude;
    var marker = new L.Marker([latitude, longitude]);
    window.myMap.addLayer(marker);
    marker.bindPopup(`<b>${item.innerHTML}</b><br />${value.Description}`).openPopup();
    centerLeafletMapOnMarker(window.myMap, marker);
    return marker;
  } else {
    var marker = activeItems.get(item.id);
    if (marker) {
      window.myMap.removeLayer(marker);
    }
    return null;
  }
};
// helper function to remove all markers from the map
const removeAllMarkers = () => {
  activeItems.forEach(item => {
    window.myMap.removeLayer(item);
  });
};
const addAllMarkers = () => {
  activeItems.forEach(item => {
    window.myMap.addLayer(item);
  });
};
const setLoader = mode => {
  let loader = document.getElementById("loader");
  if (mode === "show") {
    loader.style.display = "block";
  } else if (mode === "hide") {
    loader.style.display = "none";
  }
};
const clearList = container => {
  const itemContainer = document.getElementById(container);
  while (itemContainer.firstChild) {
    onItemClick(itemContainer.lastChild, "remove");
    itemContainer.removeChild(itemContainer.lastChild);
  }
  ;
  // clear activeItems map
  activeItems.clear();
};
const toggleNav = nav_id => {
  document.getElementById(nav_id).classList.toggle("sidebar-closed");
};
// calculate distance to all the item list location
const showInrangeMarkers = (range, container) => {
  const selectedPoint = window.selectedMarker.getLatLng();
  const itemList = document.getElementById(container);
  const items = itemList.children;
  for (let item of items) {
    const value = JSON.parse(item.value);
    const lat = value.Latitude;
    const lng = value.Longitude;
    let distance = getDistance([lat, lng], [selectedPoint.lat, selectedPoint.lng]) * 0.001;
    // in range
    if (distance <= range) {
      if (!inrangeItems.has(item.id)) {
        // console.log(`${item.id} is in range with distance ${distance}`);
        let marker = new L.Marker([lat, lng]);
        window.myMap.addLayer(marker);
        marker.bindPopup(`<b>${item.innerHTML}</b><br />${value.Description}`).openPopup();
        inrangeItems.set(item.id, marker);
      }
          // out of range
} else // out of range
    {
      if (inrangeItems.has(item.id)) {
        var marker = inrangeItems.get(item.id);
        if (marker) {
          window.myMap.removeLayer(marker);
        }
        inrangeItems.delete(item.id);
      }
    }
  }
};
const removeInrangeMarkers = () => {
  inrangeItems.forEach(item => {
    window.myMap.removeLayer(item);
  });
  inrangeItems.clear();
};
// calculate distance
function getDistance(origin, destination) {
  // return distance in meters
  var lon1 = toRadian(origin[1]), lat1 = toRadian(origin[0]), lon2 = toRadian(destination[1]), lat2 = toRadian(destination[0]);
  var deltaLat = lat2 - lat1;
  var deltaLon = lon2 - lon1;
  var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
  var c = 2 * Math.asin(Math.sqrt(a));
  var EARTH_RADIUS = 6371;
  return c * EARTH_RADIUS * 1000;
}
function toRadian(degree) {
  return degree * Math.PI / 180;
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"21LXs"}],"21LXs":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequire9cfe")

//# sourceMappingURL=index.3fafb3e2.js.map
