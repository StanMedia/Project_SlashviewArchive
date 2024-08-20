// ==UserScript==
// @name         Gimy for kids
// @namespace    http://tampermonkey.net/
// @version      2024-08-20
// @description  Prevent unnecessary content from appearing in children's view.
// @author       Slashview
// @match        *://gimy.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slashview.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';
  var oLists = document.querySelectorAll('ul.nav.navbar-nav > li');
  for (var i = 0; i < oLists.length; i++) {
    if (i > 5) {
      var oItem = oLists[i];
      oItem.parentNode.removeChild(oItem);
    }
  }
})();