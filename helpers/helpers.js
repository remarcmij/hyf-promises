/* eslint-disable no-var */
'use strict';
var App = App || {};
{
  let counter = 0;

  function updateCounter() {
    const elem = document.getElementById('counter');
    elem.innerHTML = counter.toString();
    setInterval(() => {
      counter += 1;
      elem.innerHTML = counter.toString();
    }, 1000);
  }

  function createAndAppend(name, parent, innerHTML) {
    const child = document.createElement(name);
    parent.appendChild(child);
    if (innerHTML !== undefined) {
      child.innerHTML = innerHTML;
    }
    return child;
  }

  App.helpers = {
    createAndAppend
  };

  window.addEventListener('load', updateCounter);
}
