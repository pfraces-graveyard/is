var tofs = {
  nil: function (obj) { return obj == null; },
  bool: function (obj) { return typeof obj === 'boolean'; },
  number: function (obj) { return typeof obj === 'number'; },
  string: function (obj) { return typeof obj === 'string'; },
  object: function (obj) { 
    return Object.prototype.toString.call(obj) === '[object Object]'
  },
  array: function (obj) { return obj instanceof Array; },
  func: function (obj) { return typeof obj === 'function'; }
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
