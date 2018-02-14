'use strict';

{
  function waitPromise(response) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('calling resolve()');
        resolve(response);
      }, 2000);
    });
  }

  const wp = waitPromise('Hello, world!');
  console.log('type of a promise is: ' + typeof wp);

  wp.then(value => {
    console.log('promise RESOLVED: ' + value);
  });

  function handler(promise) {
    promise.then(value => {
      console.log('promise RESOLVED: ' + value);
    });
  }

  handler(wp);
}
