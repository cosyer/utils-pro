/**
 *
 * @desc 判断是否微信小程序
 * @return {Boolean}
 */

function isMiniProgram() {
  return window.__wxjs_environment === "miniprogram";
}

module.exports = isMiniProgram;
