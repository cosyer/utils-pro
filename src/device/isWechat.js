/**
 *
 * @desc 判断是否为微信浏览器
 * @return {Boolean}
 */

function isWechat() {
  var userAgentInfo = navigator.userAgent;
  return /(?:micromessenger)/.test(userAgentInfo);
}

module.exports = isWechat;
