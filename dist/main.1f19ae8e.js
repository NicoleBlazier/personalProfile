// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
'use strict'; // open resume

function openResume() {
  window.open('https://google.com', '_blank');
}

var resume = document.getElementById('resume');
resume.addEventListener('click', openResume);
var btn = document.getElementById('btn');
btn.addEventListener('click', openResume); // sudoku github and application

function openSudokuGit() {
  window.open('https://github.com/NicoleBlazier/sudoku', '_blank');
}

var sudokuGit = document.getElementById('sudoku-github');
sudokuGit.addEventListener('click', openSudokuGit);

function openSudokuApp() {
  window.open('https://sudoku-app-2022.netlify.app/', '_blank');
}

var sudokuApp = document.getElementById('sudoku-app');
sudokuApp.addEventListener('click', openSudokuApp);
var sudokuImage = document.getElementById('sudoku-image');
sudokuImage.addEventListener('click', openSudokuApp); // investment github and application

function openInvestGit() {
  window.open('https://github.com/NicoleBlazier/investmentApp', '_blank');
}

var investGit = document.getElementById('invest-github');
investGit.addEventListener('click', openInvestGit);

function openInvestApp() {
  window.open('https://investment-app-2022.netlify.app/', '_blank');
}

var investApp = document.getElementById('invest-app');
investApp.addEventListener('click', openInvestApp);
var investmentImage = document.getElementById('investment-image');
investmentImage.addEventListener('click', openInvestApp); // chat github and application

function openChatGit() {
  window.open('https://github.com/NicoleBlazier/chatApp', '_blank');
}

var chatGit = document.getElementById('chat-github');
chatGit.addEventListener('click', openChatGit);

function openChatApp() {
  window.open('https://chat-app-2023.netlify.app//', '_blank');
}

var chatApp = document.getElementById('chat-app');
chatApp.addEventListener('click', openChatApp);
var chatImage = document.getElementById('chat-image');
chatImage.addEventListener('click', openChatApp); // dashboard github and application

function openGettisGit() {
  window.open('https://github.com/NicoleBlazier/gettis-app', '_blank');
}

var gettisGit = document.getElementById('gettis-github');
gettisGit.addEventListener('click', openGettisGit);

function openGettisApp() {
  window.open('https://gettis-app-2023.netlify.app/', '_blank');
}

var gettisApp = document.getElementById('gettis-app');
gettisApp.addEventListener('click', openGettisApp);
var gettisImage = document.getElementById('gettis-image');
gettisImage.addEventListener('click', openGettisApp);

function openGmail() {
  window.open('mailto:nicole.blazier@gmail.com?subject=Job Opportunity');
}

var gmail = document.getElementById('gmail');
gmail.addEventListener('click', openGmail);

function openLinkedIn() {
  window.open('https://www.linkedin.com/in/nicole-blazier-55129723/', '_blank');
}

var linkedin = document.getElementById('linkedin');
linkedin.addEventListener('click', openLinkedIn);

function showNovartis() {
  var description = document.getElementsByClassName('description');

  for (var i = 0; i < description.length; i++) {
    if (description[i].id === 'Novartis') {
      description[i].style.display = 'block';
    } else {
      description[i].style.display = "none";
    }
  }
}

showNovartis(); // Show logo when hovering

function showLogo(e) {
  var logo = document.getElementsByClassName('blazier-logo');

  for (var i = 0; i < logo.length; i++) {
    console.log(logo[i].className);

    if (logo[i].className == 'blazier-logo show') {
      logo[i].className = logo[i].className.replace('blazier-logo show', 'blazier-logo hide');
    } else if (logo[i].className == 'blazier-logo hide') {
      logo[i].className = logo[i].className.replace('blazier-logo hide', 'blazier-logo show');
    }
  }
}

var blazierLogoOver = document.getElementById('blazier-logo-1');
blazierLogoOver.addEventListener('mouseover', function (e) {
  showLogo(e);
}, false);
var blazierLogoOut = document.getElementById('blazier-logo-2');
blazierLogoOut.addEventListener('mouseout', function (e) {
  showLogo(e);
}, false); // Highlight the nav bar or experience buttons

function navEvent(e) {
  var className = document.getElementsByClassName('nav-class');

  for (var i = 0; i < className.length; i++) {
    className[i].className = className[i].className.replace(" active", "");
  }

  e.srcElement.className += ' active';
}

var homeAnchor = document.getElementById('home-anchor');
homeAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);
var aboutmeAnchor = document.getElementById('aboutme-anchor');
aboutmeAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);
var skillsAnchor = document.getElementById('skills-anchor');
skillsAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);
var experienceAnchor = document.getElementById('experience-anchor');
experienceAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);
var projectsAnchor = document.getElementById('projects-anchor');
projectsAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);
var contactmeAnchor = document.getElementById('contactme-anchor');
contactmeAnchor.addEventListener('click', function (e) {
  navEvent(e);
}, false);

function showExperience(e, companyName) {
  var description = document.getElementsByClassName('description');

  for (var i = 0; i < description.length; i++) {
    description[i].style.display = "none";
  }

  var company = document.getElementsByClassName('company');

  for (var i = 0; i < company.length; i++) {
    company[i].className = company[i].className.replace(" active", "");
  }

  var name = document.getElementById(companyName);
  document.getElementById(companyName).style.display = "block";
  var nameClass = e.srcElement.className += " active";
}

var novartis = document.getElementById('novartis');
novartis.addEventListener('click', function (e) {
  showExperience(e, 'Novartis');
}, false);
var flexbox = document.getElementById('flexbox');
flexbox.addEventListener('click', function (e) {
  showExperience(e, 'Flexbox');
}, false);
var american = document.getElementById('american');
american.addEventListener('click', function (e) {
  showExperience(e, 'American');
}, false);
var louisiana = document.getElementById('louisiana');
louisiana.addEventListener('click', function (e) {
  showExperience(e, 'Louisiana');
}, false);
},{}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49280" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map