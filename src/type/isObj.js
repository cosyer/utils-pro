/**
 * @desc   判断是否为对象
 * @param  {*} value
 * @return {Boolean}
 */

function isObj(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

module.exports = isObj;
