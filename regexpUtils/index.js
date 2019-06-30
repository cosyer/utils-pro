/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String}  str
 * @returns {Boolean}
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
 * @returns {Boolean}
 */
function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @returns {Boolean}
 */
function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );
}

/**
 *
 * @desc  严格的身份证号校验
 * @param  {String|Number} str
 * @returns {Boolean}
 */
function isStrictIdCard(str) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    alert("你输入的身份证长度或格式错误");
    return false;
  }
  //身份证城市
  var aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    alert("你的身份证地区非法");
    return false;
  }

  // 出生日期验证
  var sBirthday = (
      sId.substr(6, 4) +
      "-" +
      Number(sId.substr(10, 2)) +
      "-" +
      Number(sId.substr(12, 2))
    ).replace(/-/g, "/"),
    d = new Date(sBirthday);
  if (
    sBirthday !=
    d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
  ) {
    alert("身份证上的出生日期非法");
    return false;
  }

  // 身份证号码校验
  var sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432";
  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  var last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    alert("你输入的身份证号非法");
    return false;
  }
  return true;
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @returns {Boolean}
 */
function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
}

/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @returns {Boolean}
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
 * @returns {String}
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
 * @returns {String}
 */
function isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(n));
}

/**
 *
 * @desc   判断是否为座机号码
 * @param  {String} str
 * @returns {Boolean}
 */
function isTelNum(str) {
  return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
}

/**
 *
 * @desc   密码校验(密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
 * @param  {String} str
 * @returns {Boolean}
 */
function isPwd(str) {
  return /^[a-zA-Z]\w{5,17}$/.test(str);
}

/**
 *
 * @desc   判断是否为邮政编码
 * @param  {String} str
 * @returns {Boolean}
 */
function isPostal(str) {
  return /[1-9]\d{5}(?!\d)/.test(str);
}

/**
 *
 * @desc   判断是否为QQ号
 * @param  {String} str
 * @returns {Boolean}
 */
function isQQ(str) {
  return /^[1-9][0-9]{4,9}$/.test(str);
}

/**
 *
 * @desc   判断是否为金额(小数点2位)
 * @param  {String} str
 * @returns {Boolean}
 */
function isMoney(str) {
  return /^\d*(?:\.\d{0,2})?$/.test(str);
}

/**
 *
 * @desc   判断是否为IP地址
 * @param  {String} str
 * @returns {Boolean}
 */
function isIP(str) {
  return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(
    str
  );
}

/**
 *
 * @desc   判断是否为日期时间(xxxx-xx-xx xx:xx:xx 或 xxxx-xx-xx)
 * @param  {String} str
 * @returns {Boolean}
 */
function isDate(str) {
  return (
    /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(
      str
    ) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
  );
}

/**
 *
 * @desc   判断是否为英文
 * @param  {String} str
 * @returns {Boolean}
 */
function isEnglish(str) {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 *
 * @desc   判断是否为中文
 * @param  {String} str
 * @returns {Boolean}
 */
function isChinese(str) {
  return /^[\u4E00-\u9FA5]+$/.test(str);
}

/**
 *
 * @desc   判断是否为HTML
 * @param  {String} str
 * @returns {Boolean}
 */
function isHTML(str) {
  return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
}

/**
 *
 * @desc   检测密码强度
 * @param  {String} str
 * @returns {Number}
 */
function checkPwd(str) {
  var Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
}

module.exports = {
  isColor,
  isEmail,
  isIdCard,
  isStrictIdCard,
  isPhoneNum,
  isUrl,
  numToChinese,
  isPrime,
  isTelNum,
  isPwd,
  isPostal,
  isQQ,
  isMoney,
  isIP,
  isDate,
  isEnglish,
  isChinese,
  isHTML,
  checkPwd
};
