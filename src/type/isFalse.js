/**
 * @desc   判断是否为假值
 * @param  {*} o
 * @return {Boolean}
 */

function isFalse(o) {
  if (
    o == "" ||
    o == undefined ||
    o == null ||
    o == "null" ||
    o == "undefined" ||
    o == 0 ||
    o == false ||
    o == NaN
  )
    return true;
  return false;
}

module.exports = isFalse;
