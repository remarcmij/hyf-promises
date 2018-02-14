'use strict';

{
  function trafficLight(color, delay, callback) {
    console.log(color);
    setTimeout(callback, delay);
  }

  function loop() {
    trafficLight('\nGREEN', 3000, () => {
      trafficLight('ORANGE', 1000, () => {
        trafficLight('RED', 5000, () => {
          loop();
        });
      });
    });
  }

  loop();
}
