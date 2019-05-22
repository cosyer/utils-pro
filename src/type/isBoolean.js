/**
 * @desc   判断是否为布尔类型
 * @param  {*} value
 * @return {Boolean}
 */

function isBoolean(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

module.exports = isBoolean;
