module.exports = function (obj) {
  var is = {
    nil: false,
    bool: false,
    number: false,
    string: false,
    object: false,
    array: false,
    func: false
  };

  /**
   * obj == null must be the first check to avoid TypeError exception
   */
  if (obj == null) is.nil = true;

  else if (typeof obj === 'string') is.string = true;
  else if (typeof obj === 'function') is.func = true;

  /**
   * typeof [] === 'object' so arrays must be checked before objects
   */
  else if (obj instanceof Array) is.array = true;
  else if (typeof obj === 'object') is.object = true;

  /**
   * bool and number checks at the end because they are the
   * less used
   */
  else if (typeof obj === 'number') is.number = true;
  else if (typeof obj === 'boolean') is.bool = true;

  return is;
};
