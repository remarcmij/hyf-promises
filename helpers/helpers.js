'use strict';
/* eslint-disable no-unused-vars */

function createAndAppend(name, parent, innerHTML) {
  const child = document.createElement(name);
  parent.appendChild(child);
  if (innerHTML !== undefined) {
    child.innerHTML = innerHTML;
  }
  return child;
}

{
  function createCounter() {
    let counter = 0;
    return () => {
      const elem = document.getElementById('counter');
      elem.innerHTML = counter.toString();
      setInterval(() => {
        counter += 1;
        elem.innerHTML = counter.toString();
      }, 1000);
    };
  }

  window.onload = createCounter();
}
