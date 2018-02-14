# hyf-promises

Examples included in this repo:

### 1-sync-async

This example demonstrates the difference between synchronous, blocking code and asynchronous, non-blocking code. Run this example by opening `index.html` in the browser.

There are two buttons:

**[CLICK ME]** This button appends `<p>Hello, world!</p>` to the document each time the button is clicked.

**[START]** This button starts a timer (synchronous or asynchronous) with a delay of 5 seconds.

The synchronous timer blocks the UI, so that the buttons become unresponsive while the timer is running. All intermediate button clicks are processed when the timer finishes.

The asynchronous timer is non-blocking. The UI remains responsive.

### 2-resolve

Create a promise (`typeof promise === 'object'`) and a `.then`.

### 3-reject

Create a promise that gets rejected before it could be resolved. Catch the rejection.

### 4-multi-then

Demonstrate that multiple `.then` methods are all called.

### 5-traffic-light

Demonstrate 'callback hell'.

### 6-traffic-light

Show how promises can help to avoid 'callback hell'.





