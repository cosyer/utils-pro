/**
 * @desc   判断是否为undefined
 * @param  {*} value
 * @return {Boolean}
 */

function isUndefined(value) {
  // return value === undefined;
  return Object.prototype.toString.call(value).slice(8, -1) === "Undefined";
}

module.exports = isUndefined;
