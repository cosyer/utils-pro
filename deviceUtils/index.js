/**
 *
 * @desc 获取浏览器类型和版本
 * @return {String}
 */
function getExplorer() {
  var sys = {},
    ua = navigator.userAgent.toLowerCase(),
    s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (sys.safari = s[1])
    : 0;
  // 根据关系进行判断
  if (sys.ie) return "IE: " + sys.ie;
  if (sys.edge) return "EDGE: " + sys.edge;
  if (sys.firefox) return "Firefox: " + sys.firefox;
  if (sys.chrome) return "Chrome: " + sys.chrome;
  if (sys.opera) return "Opera: " + sys.opera;
  if (sys.safari) return "Safari: " + sys.safari;
  return "Unknown";
}

// 判断当前浏览类型
function BrowserType() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  var isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari =
    userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1; //判断是否Safari浏览器
  var isChrome =
    userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) {
      return "IE7";
    } else if (fIEVersion === 8) {
      return "IE8";
    } else if (fIEVersion === 9) {
      return "IE9";
    } else if (fIEVersion === 10) {
      return "IE10";
    } else if (fIEVersion === 11) {
      return "IE11";
    } else {
      return "0";
    } //IE版本过低
  } //isIE end

  if (isFF) {
    return "FF";
  }
  if (isOpera) {
    return "Opera";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isChrome) {
    return "Chrome";
  }
  if (isEdge) {
    return "Edge";
  }
  return "Unknown";
}

/**
 *
 * @desc 判断是否微信小程序
 * @return {Boolean}
 */

function isMiniProgram() {
  return window.__wxjs_environment === "miniprogram";
}

/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
function getOS() {
  var userAgent =
    ("navigator" in window &&
      "userAgent" in navigator &&
      navigator.userAgent.toLowerCase()) ||
    "";
  var vendor =
    ("navigator" in window &&
      "vendor" in navigator &&
      navigator.vendor.toLowerCase()) ||
    "";
  var appVersion =
    ("navigator" in window &&
      "appVersion" in navigator &&
      navigator.appVersion.toLowerCase()) ||
    "";

  if (
    /iphone/i.test(userAgent) ||
    /ipad/i.test(userAgent) ||
    /ipod/i.test(userAgent)
  )
    return "ios";
  if (/android/i.test(userAgent)) return "android";
  if (/win/i.test(appVersion) && /phone/i.test(userAgent))
    return "windowsPhone";
  if (/mac/i.test(appVersion)) return "MacOSX";
  if (/win/i.test(appVersion)) return "windows";
  if (/linux/i.test(appVersion)) return "linux";
}

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

/**
 *
 * @desc 判断是否为微信浏览器
 * @return {Boolean}
 */

function isWechat() {
  var userAgentInfo = navigator.userAgent;
  return /(?:micromessenger)/.test(userAgentInfo);
}

module.exports = {
  getExplorer,
  BrowserType,
  isMiniProgram,
  getOS,
  isPC,
  isWechat
};
