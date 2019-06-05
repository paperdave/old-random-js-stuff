/* global define, module */
/* eslint-disable no-console */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.ghostConsole = factory());
    });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ghostConsole = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  const obj = {};
  const ghost = (func) => (...args) => (setTimeout(func.bind(console, ...args)), undefined);

  Object.keys(console)
    .filter(x => typeof console[x] === 'function')
    .forEach((key) => {
      obj[key] = ghost(console[key]);
    });

  return obj;
}));
