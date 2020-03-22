/**
 * @desc 函数防抖
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * @desc 函数节流
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    timeout = null;
  }
  return function() {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
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
  eleLink.download = fileName;
  eleLink.style.display = "none";
  // 字符内容转变成blob地址
  var blob = new Blob([filePath]);
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

/**
 * 导出csv文件
 * @param {Array<string>} columns ['name', 'age']
 * @param {String} fileName '文件名'
 * @param {Array<Object>} data 【{name:'cosyer',age:23}】
 */
function exportCSV(columns, filename, data) {
  var csv = "\ufeff";
  var _this = this;
  for (var i = 0; i < columns.length; i++) {
    var col = columns[i];
    csv += '"' + (col.header || col) + '"';
    if (i < columns.length - 1) {
      csv += ",";
    }
  }
  data.forEach(function(item) {
    csv += "\n";
    for (var i_1 = 0; i_1 < columns.length; i_1++) {
      var column = columns[i_1];
      csv += '"' + resolveFieldData(item, column) + '"';
      if (i_1 < columns.length - 1) {
        csv += ",";
      }
    }
  });
  var blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename + ".csv");
  } else {
    var link = document.createElement("a");
    link.style.display = "none";
    var isFF = window.navigator.userAgent.indexOf("Firefox") > -1;
    if (isFF) {
      document.body.appendChild(link);
    }
    if (typeof link.download !== "undefined") {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", filename + ".csv");
      link.click();
    } else {
      window.open(encodeURI("data:text/csv;charset=utf-8," + csv));
    }
    if (isFF) {
      document.body.removeChild(link);
    }
  }
}

// 构建csv格式
function resolveFieldData(data, field) {
  if (data && field) {
    if (field.indexOf(".") === -1) {
      return data[field];
    }
    var fields = field.spilt(".");
    var value = data;
    for (var i = 0, len = fields.length; i < len; i++) {
      if (value === null) {
        return null;
      }
      value = value[fields[i]];
    }
    return value;
  }
  return null;
}

/**
 * 封装ajax请求
 * @param {string} url
 * @param {string} method
 * @param {object} params
 * @returns
 */
function request(url, method = "GET", params = null) {
  return new Promise((resolve, reject) => {
    let xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open(method, url);
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject({
            code: xhr.status,
            response: xhr.response
          });
        }
      }
    });
    setTimeout(() => reject("timeout:1000"), 1000);
    xhr.send(JSON.stringify(params));
  });
}

/**
 * 递归优化（尾递归）
 * @param { function } f
 */
function tco(f) {
  let value;
  let active = false;
  let accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
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
  getSex,
  exportCSV,
  request,
  tco
};
