/**
 * @desc   现金额转大写
 * @param  {Number} n
 * @returns {String}
 */
function digitUppercase(n) {
  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"]
  ];
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
 * @param {Number} len 截取长度
 * @returns {String}
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
 * @returns {String}
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
 * @returns {String}
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

/**
 * @desc 连字符转驼峰
 * @param {String} str
 * @returns {String}
 */
function hyphenToHump(str) {
  return str.replace(/-(\w)/g, function() {
    return arguments[1].toUpperCase();
  });
}

/**
 * @desc 驼峰转连字符
 * @param {String} str
 * @returns {String}
 */
function humpToHyphen(str) {
  return this.replace(/([A-Z])/g, "-$1").toLowerCase();
}

/**
 * @desc 判断一个字符在字符串中的个数
 * @param {String} str
 * @param {String} c
 * @returns {Number}
 */
function getNumInStr(str, c) {
  return str.split(c).length - 1;
}

/**
 * @desc 手机号处理中间4位替换成
 * @param {String} str
 * @returns {String}
 */
function replacePhone(phone) {
  // 正则
  // let reg = /^(\d{3})\d{4}(\d{4})$/;
  // return phone.replace(reg, "$1****$2");
  return phone.substr(0, 3) + "****" + phone.substr(7);
}

/**
 * @desc 大写每个单词的首字母
 * @param {String} str
 * @returns {String}
 */
function titleCase(str) {
  return s.toLowerCase().replace(/\b([\w|']+)\b/g, function(word) {
    //return word.slice(0, 1).toUpperCase() + word.slice(1);
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
}

/**
 * @desc 获取文件扩展名
 * @param {String} str
 * @returns {String}
 */
function getFileExtension(fileName) {
  return fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length);
}

/**
 * @desc 字符串反转
 * @param {String} str
 * @returns {String}
 */
function reverse(str) {
  // (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
  return str
    .split()
    .reverse()
    .join();
}

/**
 * @desc 去除空格
 * @param {String} str
 * @param  {Number}  type:  1-所有空格(默认)  2-前后空格  3-前空格 4-后空格
 * @returns {String}
 */
function trim(str, type) {
  type = type || 1;
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
 * @desc 字符串转base64
 * @param {String} str
 * @returns {String}
 */
function str2Base64(str) {
  // 对字符串进行编码
  var encode = encodeURI(str);
  // 对编码的字符串转化base64
  var base64 = btoa(encode);
  return base64;
}

/**
 * @desc 字符串转base64
 * @param {String} str
 * @returns {String}
 */
function Base642Str(base64) {
  // 对base64转编码
  var decode = atob(base64);
  // 编码转字符串
  var str = decodeURI(decode);
  return str;
}

module.exports = {
  digitUppercase,
  subStrWithEllpsis,
  b64EncodeUnicode,
  b64DecodeUnicode,
  hyphenToHump,
  humpToHyphen,
  getNumInStr,
  replacePhone,
  titleCase,
  getFileExtension,
  reverse,
  trim,
  str2Base64,
  Base642Str
};
