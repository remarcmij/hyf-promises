'use strict';

{
  let loopCount = 0;

  // replace with setTimeout for async version
  function synTimeout(callback, delay) {
    loopCount = 0;
    const stopTime = Date.now() + delay;
    while (Date.now() < stopTime) {
      loopCount++;
    }
    callback();
  }

  document
    .getElementById('start')
    .addEventListener('click', () => {
      console.log('start timer');
      synTimeout(() => {
        console.log('done', loopCount);
      }, 5000);
    });

  document
    .getElementById('hello')
    .addEventListener('click', () => {
      const root = document.getElementById('root');
      const p = document.createElement('p');
      p.innerHTML = 'Hello';
      root.appendChild(p);
    });
}
