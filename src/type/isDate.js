/**
 * @desc   判断是否为日期类型
 * @param  {*} value
 * @return {Boolean}
 */

function isDate(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

module.exports = isDate;
