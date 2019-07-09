/**
 * @desc 函数防抖 
 * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
 * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @example 适用场景：如在线编辑的自动存储防抖。
 * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}  atBegin       可选，默认为false。
 *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                    如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
 * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                  执行去抖动功能时，，调用`callback`。
 *
 * @return {Function} 新的防抖函数。
 */
function debounce(delay, atBegin, callback) {
  return callback === undefined
    ? throttle(delay, atBegin, false)
    : throttle(delay, callback, atBegin !== false);
}

/**
 * @desc   函数节流。
 * 适用于限制`resize`和`scroll`等函数的调用频率
 *
 * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}   noTrailing     可选，默认为false。
 *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
 *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
 *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
 * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                    执行去节流功能时，调用`callback`。
 * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
 *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
 *
 * @return {Function}  新的节流函数
 */
function throttle(delay, noTrailing, callback, debounceMode) {
  // After wrapper has stopped being called, this timeout ensures that
  // `callback` is executed at the proper times in `throttle` and `end`
  // debounce modes.
  var timeoutID;

  // Keep track of the last time `callback` was executed.
  var lastExec = 0;

  // `noTrailing` defaults to falsy.
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }

  // The `wrapper` function encapsulates all of the throttling / debouncing
  // functionality and when executed will limit the rate at which `callback`
  // is executed.
  function wrapper() {
    var self = this;
    var elapsed = Number(new Date()) - lastExec;
    var args = arguments;

    // Execute `callback` and update the `lastExec` timestamp.
    function exec() {
      lastExec = Number(new Date());
      callback.apply(self, args);
    }

    // If `debounceMode` is true (at begin) this is used to clear the flag
    // to allow future `callback` executions.
    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      // Since `wrapper` is being called for the first time and
      // `debounceMode` is true (at begin), execute `callback`.
      exec();
    }

    // Clear any existing timeout.
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    if (debounceMode === undefined && elapsed > delay) {
      // In throttle mode, if `delay` time has been exceeded, execute
      // `callback`.
      exec();
    } else if (noTrailing !== true) {
      // In trailing throttle mode, since `delay` time has not been
      // exceeded, schedule `callback` to execute `delay` ms after most
      // recent execution.
      //
      // If `debounceMode` is true (at begin), schedule `clear` to execute
      // after `delay` ms.
      //
      // If `debounceMode` is false (at end), schedule `callback` to
      // execute after `delay` ms.
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      );
    }
  }

  // Return the wrapper function.
  return wrapper;
}

/**
 *
 * @desc 彩色控制台
 * @param {String} str
 * @param {String} colorStyle
 */

function chalkPrint(str, colorStyle) {
  str = String(str) || "";
  console.log("%c" + str, `font-weight: bold; color: ${colorStyle}`);
}

/**
 * @desc toFixed扩展
 */
function toFixedExtend() {
  // 直接替换原型链上的方法，方便使用
  Number.prototype.toFixed = function(n) {
    // n为期望保留的位数，超过限定，报错！
    if (n > 20 || n < 0) {
      throw new RangeError(
        "toFixed() digits argument must be between 0 and 20"
      );
    }
    // 获取数字
    const number = this;
    // 如果是NaN,或者数字过大，直接返回'NaN'或者类似'1e+21'的科学计数法字符串
    if (isNaN(number) || number >= Math.pow(10, 21)) {
      return number.toString();
    }
    // 默认保留整数
    if (typeof n === "undefined" || n === 0) {
      return Math.round(number).toString();
    }

    // 先获取字符串
    let result = number.toString();
    // 获取小数部分
    const arr = result.split(".");

    // 整数的情况，直接在后面加上对应个数的0即可
    if (arr.length < 2) {
      result += ".";
      for (let i = 0; i < n; i += 1) {
        result += "0";
      }
      return result;
    }

    // 整数和小数
    const integer = arr[0];
    const decimal = arr[1];
    // 如果已经符合要求位数，直接返回
    if (decimal.length === n) {
      return result;
    }
    // 如果小于指定的位数，补上
    if (decimal.length < n) {
      for (let i = 0; i < n - decimal.length; i += 1) {
        result += "0";
      }
      return result;
    }
    // 如果到这里还没结束，说明原有小数位多于指定的n位
    // 先直接截取对应的位数
    result = integer + "." + decimal.substr(0, n);
    // 获取后面的一位
    let last = decimal.substr(n, 1);
    if (/^\d(9){5,}[89]$/.test(decimal.substr(n))) {
      last += last + 1;
    }
    // 大于等于5统一进一位
    if (parseInt(last, 10) >= 5) {
      // 转换倍数，转换为整数后，再进行四舍五入
      const x = Math.pow(10, n);
      // 进一位后，转化还原为小数
      result = (Math.round(parseFloat(result) * x) + 1) / x;
      // 再确认一遍
      result = result.toFixed(n);
    }
    return result;
  };
}

/**
 * @desc 求最大公约数
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
function gcd(x, y) {
  return !y ? x : gcd(y, x % y);
}

/**
 * @desc 阶乘
 * @param {Number} n
 * @returns {Number}
 */
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

/**
 * @desc RGB到十六进制
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {String}
 */
function rgbToHex(r, g, b) {
  // ((1<<24) + (rgb.r<<16) + (rgb.g<<8) + rgb.b).toString(16).substr(1);
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}

/**
 * @desc 判断奇数
 * @param {Number} n
 * @returns {Boolean}
 */
function isOdd(n) {
  return n % 2 === 1;
}

/**
 * @desc 判断偶数
 * @param {Number} n
 * @returns {Boolean}
 */
function isEven(n) {
  return n % 2 === 0;
}

/**
 * @desc 复制到粘贴板
 * @param {String} str
 */
function copy(str) {
  if (window.clipboardData) {
    // 兼容ie11以下浏览器
    window.clipboardData.setData("Text", str);
  } else {
    var $input = document.createElement("input");
    var body = document.querySelector("body");
    $input.value = str;
    body.appendChild($input);
    $input.select();
    document.execCommand("copy");
    // $input.remove();
    body.remove($input);
  }
}

/**
 * @desc 复制添加版权信息
 */
function copyWithCopyRight() {
  if (window.clipboardData) {
    // IE
    document.body.oncopy = function() {
      event.returnValue = false;
      var t = document.selection.createRange().text;
      var s = " 原文链接：" + location.href;
      clipboardData.setData("Text", t + "\r\n" + s);
    };
  } else {
    function addLink() {
      var body_element = document.getElementsByTagName("body")[0];
      var selection;
      selection = window.getSelection();
      var pagelink = " 原文链接：" + location.href;
      var copytext = selection + pagelink;

      var newdiv = document.createElement("div");
      newdiv.style.position = "absolute";
      newdiv.style.left = "-99999px";
      body_element.appendChild(newdiv);
      newdiv.innerHTML = copytext;
      selection.selectAllChildren(newdiv);
      window.setTimeout(function() {
        body_element.removeChild(newdiv);
      }, 0);
    }
    document.oncopy = addLink;
  }
}

/**
 * @desc 前端生成并下载文件
 * @param {String} fileName
 * @param {String} filePath
 */
function createAndDownloadFile(fileName, filePath) {
  // 创建隐藏的可下载链接
  var eleLink = document.createElement("a");
  eleLink.download = filename;
  eleLink.style.display = "none";
  // 字符内容转变成blob地址
  var blob = new Blob([fileName]);
  eleLink.href = URL.createObjectURL(blob);
  // 触发点击
  document.body.appendChild(eleLink);
  eleLink.click();
  // 然后移除
  // URL.revokeObjectURL(blob);
  document.body.removeChild(eleLink);
}

/**
 * @desc 版本号比较
 * @param {String} v1
 * @param {String} v2
 * @returns {Number} 1 v1>v2;-1 v1<v2;0 v1=v2
 */
function compareVersion(v1, v2) {
  v1 = v1.split(".");
  v2 = v2.split(".");
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

/**
 * @desc 年份计算生肖
 * @param {Number} year
 * @returns {String}
 */
function setChineseZodiac(year) {
  var startYear = 1804;
  if (year < startYear) {
    startYear = startYear - (12 + 12 * ((startYear - year) / 12));
  }
  var constants = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪"
  ];
  return constants[(year - startYear) % 12]; //加一是因为constants里是1起始地
}

/**
 * 日期计算星座
 * @param {Number} month
 * @param {Number} day
 * @returns {String}
 */
function setConstellation(month, day) {
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "水瓶座";
  }
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "双鱼座";
  }
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "白羊座";
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "金牛座";
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return "双子座";
  }
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    return "巨蟹座";
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "狮子座";
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "处女座";
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "天秤座";
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "天蝎座";
  }
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "射手座";
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "摩羯座";
  }
}

/**
 * 根据身份证号获得出生日期
 * @param {String} psidno
 * @returns {String}
 */
function getBirthday(psidno) {
  var birthdayno, birthdaytemp;
  if (psidno.length === 18) {
    birthdayno = psidno.substring(6, 14);
  } else if (psidno.length === 15) {
    birthdaytemp = psidno.substring(6, 12);
    birthdayno = "19" + birthdaytemp;
  } else {
    chalkPrint("错误的身份证号码，请核对！");
    return false;
  }
  var birthday =
    birthdayno.substring(0, 4) +
    "-" +
    birthdayno.substring(4, 6) +
    "-" +
    birthdayno.substring(6, 8);
  return birthday;
}

/**
 * 根据身份证号获取性别
 * @param {String} psidno
 * @returns {Number} 1男2女
 */
function getSex(psidno) {
  var sexno, sex;
  if (psidno.length === 18) {
    sexno = psidno.substring(16, 17);
  } else if (psidno.length === 15) {
    sexno = psidno.substring(14, 15);
  } else {
    chalkPrint("错误的身份证号码，请核对！");
    return false;
  }
  var tempid = sexno % 2;
  if (tempid === 0) {
    sex = 2;
  } else {
    sex = 1;
  }
  return sex;
}

module.exports = {
  debounce,
  throttle,
  chalkPrint,
  toFixedExtend,
  gcd,
  factorial,
  rgbToHex,
  isOdd,
  isEven,
  copy,
  copyWithCopyRight,
  createAndDownloadFile,
  compareVersion,
  setChineseZodiac,
  setConstellation,
  getBirthday,
  getSex
};
