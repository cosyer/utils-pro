/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */

function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(";");
  for (var i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split("=");
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
}

function getCookie2(name) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return "";
}

function getCookie3(name) {
  let v = window.document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}

/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date;
}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, "1", -1);
}

module.exports = { getCookie, getCookie2, getCookie3, setCookie, removeCookie };
