/* eslint-disable no-unused-vars */
'use strict';

{
  function wait(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('calling resolve()');
        resolve('Hello, world!');
      }, delay);
    });
  }

  const promise = wait(2000);
  console.log('type of a promise is: ' + typeof promise);

  promise.then(value => {
    console.log('promise RESOLVED: ' + value);
  });

  console.log('code ran to completion');
}
