'use strict';

{
  function wait(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('calling resolve()');
        resolve('Hello, world!');
      }, delay);
      setTimeout(() => {
        console.log('calling reject()');
        reject(new Error('wait cancelled'));
      }, 1000);
    });
  }

  const promise = wait(2000);
  console.log('type of a promise is: ' + typeof promise);

  promise.then(value => {
    console.log('promise RESOLVED: ' + value);
  }, error => {
    console.log('promise REJECTED: ' + error.message);
  });

  console.log('code ran to completion');
}
