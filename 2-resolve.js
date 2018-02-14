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

  const promise = waitPromise('Hello, world!');
  console.log('type of a promise is: ' + typeof promise);

  promise.then(value => {
    console.log('promise RESOLVED: ' + value);
  });
}
