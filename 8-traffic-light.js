/* eslint-disable no-unused-vars */
'use strict';

{
  function trafficLight(color, delay) {
    return new Promise((resolve, reject) => {
      console.log(color);
      setTimeout(() => {
        resolve();
      }, delay);
    });
  }

  function loop() {
    trafficLight('\nGREEN', 3000)
      .then(() => trafficLight('ORANGE', 1000))
      .then(() => trafficLight('RED', 5000))
      .then(() => loop());
  }

  loop();
}
