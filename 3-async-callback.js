/* eslint-disable no-unused-vars */
'use strict';

{
  function wait(delay, callback) {
    setTimeout(() => {
      console.log('calling callback()');
      callback('Hello, world!');
    }, delay);
  }

  wait(2000, response => {
    console.log(response);
  });

  console.log('code ran to completion');
}
