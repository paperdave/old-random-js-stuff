// Dath, by dave caruso
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], () => factory(Math));
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(Math);
  } else {
    root.Dath = factory(Math);
    root.Math = root.DMath
  }
}(typeof self !== 'undefined' ? self : this, function (Math) {
  if (Math.dacos) {
    return Math;
  }
  const toRad = (x) => x * (Math.PI/180);
  const toDeg = (x) => x * (180/Math.PI);

  const degreeParamaters = (f) => {
    return (x) => f(toRad(x))
  }
  const degreeReturn = (f) => {
    return f.length === 1
      ? (x) => toDeg(f(x))
      : (x, y) => toDeg(f(x, y))
  }

  const dmath = {
    ...Object.getOwnPropertyNames(Math).reduce((obj, key) => {
      obj[key] = Math[key];
      return obj;
    }, {}),
    dacos: degreeReturn(Math.acos),
    dacosh: degreeReturn(Math.acosh),
    dasin: degreeReturn(Math.asin),
    dasinh: degreeParamaters(Math.asinh),
    datan: degreeReturn(Math.atan),
    datan2: degreeReturn(Math.atan2),
    datanh: degreeParamaters(Math.atanh),
    dcos: degreeParamaters(Math.cos),
    dcosh: degreeParamaters(Math.cosh),
    dsin: degreeParamaters(Math.sin),
    dsinh: degreeParamaters(Math.sinh),
    dtan: degreeParamaters(Math.tan),
    dtanh: degreeParamaters(Math.tanh),
    deg2rad: toRad,
    rad2deg: toDeg,
  };

  return dmath;
}));
