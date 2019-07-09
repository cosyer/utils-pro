/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 * @return {Any}
 */
function deepClone(values) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null === values || "object" !== typeof values) return values;

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}

/**
 *
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}

module.exports = { deepClone, isEmptyObject };
