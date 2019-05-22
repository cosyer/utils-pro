/**
 * @desc   判断是否为字符串类型
 * @param  {*} value
 * @return {Boolean}
 */

function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

module.exports = isString;
