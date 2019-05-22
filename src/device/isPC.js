/**
 *
 * @desc 判断是否为PC端
 * @return {Boolean}
 */

function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > -1) {
      flag = false;
      break;
    }
  }
  return flag;
}

module.exports = isPC;
