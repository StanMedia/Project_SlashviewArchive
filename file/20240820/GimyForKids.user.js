// ==UserScript==
// @name         Gimy for kids
// @namespace    http://tampermonkey.net/
// @version      2025-11-04
// @description  Prevent unnecessary content from appearing in children's view.
// @updateURL    https://content.slashview.com/file/20240820/GimyForKids.user.js
// @downloadURL  https://content.slashview.com/file/20240820/GimyForKids.user.js
// @author       Slashview
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slashview.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

// ==ChangeLog==
// 2025-11-04 由於Gimy網址超級多變，HTML架構上也不盡相同，因此改變思路
// 1. 一律進入後再判斷網址是否出現Gimy。
// 2. 依據ul>li之內容來判斷選單並移除。
// ==/ChangeLog==

(function() {
  'use strict';
  if (!/gimy/i.test(location.hostname)) return;
  document.querySelectorAll('ul').forEach(ul => {
    const liItems = ul.querySelectorAll('li');
    if (liItems.length === 0) return;
    const firstText = liItems[0].textContent.trim();
    if (firstText === '首頁') {
      for (let i = 5; i < liItems.length; i++) {
        liItems[i].remove();
      }
    }
  });
})();