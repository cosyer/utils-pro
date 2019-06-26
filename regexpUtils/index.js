/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @return {Boolean}
 */
function isColor(str) {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
    str
  );
}

/**
 *
 * @desc   判断是否为邮箱地址
 * @param  {String}  str
 * @return {Boolean}
 */
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    str
  );
}

/**
 *
 * @desc   将阿拉伯数字翻译成中文的大写数字
 * @param  {Number} num
 * @return {String}
 */
function numToChinese(num) {
  var AA = new Array(
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十"
  );
  var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
    k = 0,
    re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6];
    for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
  }
  if (re == "一十") re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
}

/**
 *
 * @desc   判断是否是质数
 * @param  {Number} n
 * @return {String}
 */
function isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(n));
}

module.exports = {
  isColor,
  isEmail,
  isIdCard,
  isPhoneNum,
  isUrl,
  numToChinese,
  isPrime
};
