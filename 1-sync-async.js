/* eslint-disable no-var, no-unused-vars */
'use strict';
var App = App || {};
{
  const root = document.getElementById('root');
  const { createAndAppend } = App.helpers;
  let timerRunning = false;

  function synTimeout(callback, delay) {
    const stopTime = Date.now() + delay;
    while (Date.now() < stopTime);
    callback();
  }

  document
    .getElementById('start')
    .addEventListener('click', () => {
      if (timerRunning) {
        createAndAppend('p', root, 'timer already running');
      } else {
        createAndAppend('p', root, 'start timer');
        timerRunning = true;
        // switch between synTimeout and setTimeout
        synTimeout(() => {
          timerRunning = false;
          createAndAppend('p', root, 'stop timer');
        }, 5000);
      }
    });

  document
    .getElementById('hello')
    .addEventListener('click', () => {
      createAndAppend('p', root, 'Hello, world!');
    });
}
