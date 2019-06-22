/**
 * @desc   现金额转大写
 * @param  {Number} n
 * @return {String}
 */
function digitUppercase(n) {
  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟"]];
  var head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  var s = "";
  for (var i = 0; i < fraction.length; i++) {
    s += (
      digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]
    ).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
    var p = "";
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, "元")
      .replace(/(零.)+/g, "零")
      .replace(/^整$/, "零元整")
  );
}

/**
 * @desc   截取字符串 剩余部分用...代替
 * @param  {String} str 字符串
 * @return {Number} len 截取长度
 */
function subStrWithEllpsis(str, len) {
  var length = str.length;
  var result = str.substr(0, len);
  if (len < length) {
    return result + "...";
  } else {
    return result;
  }
}

/**
 * @desc unicode字符串base64编码
 * @param {String} str
 */
function b64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode("0x" + p1);
    })
  );
}

/**
 * @desc unicode字符串base64解码
 * @param {String} str
 */
function b64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(c => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

module.exports = {
  digitUppercase,
  subStrWithEllpsis,
  b64EncodeUnicode,
  b64DecodeUnicode
};
