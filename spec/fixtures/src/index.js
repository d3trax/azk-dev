var BPromise = require('bluebird');

// Simple example of the es6 code
export class MyClass {
  static divide(x, y) {
    // if (true) console.log("hello");
    return x / y;
  }

  static delay() {
    return BPromise.coroutine(function* () {
      yield BPromise.delay(100);
      return true;
    })();
  }
}
