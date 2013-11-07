module.exports.nil = function (obj) {
  return obj == null;
};

module.exports.bool = function (obj) {
  return typeof obj === 'boolean';
};

module.exports.number = function (obj) {
  return typeof obj === 'number';
};

module.exports.string = function (obj) {
  return typeof obj === 'string';
};

module.exports.object = function (obj) { 
  return Object.prototype.toString.call(obj) === '[object Object]';
};

module.exports.array = function (obj) {
  return obj instanceof Array;
};

module.exports.func = function (obj) {
  return typeof obj === 'function';
};
