/**
 * @desc   判断是否为函数
 * @param  {*} value
 * @return {Boolean}
 */

function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

module.exports = isFunction;
