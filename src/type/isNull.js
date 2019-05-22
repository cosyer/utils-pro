/**
 * @desc   判断是否为null
 * @param  {*} value
 * @return {Boolean}
 */

function isNull(value) {
  // return value === null;
  return Object.prototype.toString.call(value).slice(8, -1) === "Null";
}

module.exports = isNull;
