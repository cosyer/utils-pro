/**
 * @desc   判断是否为数字类型
 * @param  {*} value
 * @return {Boolean}
 */

function isNumber(value) {
  // '[object Number]'
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

module.exports = isNumber;
