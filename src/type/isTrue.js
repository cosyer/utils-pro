/**
 * @desc   判断是否为真值
 * @param  {*} o
 * @return {Boolean}
 */

var isFalse = require("./isFalse");
function isTrue(o) {
  return !isFalse(o);
}

module.exports = isTrue;
