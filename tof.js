var nil = function (obj) {
  return obj == null;
};

var bool = function (obj) {
  return typeof obj === 'boolean';
};

var number = function (obj) {
  return typeof obj === 'number';
};

var string = function (obj) {
  return typeof obj === 'string';
};

var object = function (obj) { 
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var array = function (obj) {
  return obj instanceof Array;
};

var func = function (obj) {
  return typeof obj === 'function';
};

var primitive = function (obj) {
  return typeof obj !== 'object' && !func(obj);
};

var tree = function (obj) {
  return array(obj) || object(obj);
};

var tofs = {
  nil: nil,
  bool: bool,
  number: number,
  string: string,
  object: object,
  array: array,
  func: func,
  primitive: primitive,
  tree: tree
};

var Tof = function (obj) {
  this.obj = obj;
};

module.exports = function (obj) {
  return new Tof(obj);
};

for (var tof in tofs) (function () {
  var prop = tof;

  Tof.prototype[prop] = function () {
    return tofs[prop](this.obj);
  };

  module.exports[prop] = tofs[prop];
})();
