const { test, expect } = require('@playwright/test');
const { hello, helloworld } = require('./hello');

test('hello returns the correct greeting', () => {
  expect(hello()).toBe('hello');
});

test('helloworld returns the correct greeting', () => {
  expect(helloworld()).toBe('Hello, world!');
});  

// const {test, expect} = require('@playwright/test')
// const { hello, helloworld } = require('./hello')

// console.log(hello());
// console.log(helloworld());  

// run specific test file
// npx playwright test tests/my_first_test.spec.js --project=chromium
