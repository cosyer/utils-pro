/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return "刚刚";
}

/**
 *
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */

function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
function timeLeft(startTime, endTime) {
  if (!startTime || !endTime) {
    return;
  }
  var startDate, endDate;
  if (startTime instanceof Date) {
    startDate = startTime;
  } else {
    startDate = new Date(startTime.replace(/-/g, "/")); //开始时间
  }
  if (endTime instanceof Date) {
    endDate = endTime;
  } else {
    endDate = new Date(endTime.replace(/-/g, "/")); //结束时间
  }
  var t = endDate.getTime() - startDate.getTime();
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return { d, h, m, s };
}

/**
 * @desc   日期格式转化
 * @param  {String} dateStr "2019/6/20"
 * @return {String} "2019-6-20"
 */
function skew2Horizontal(dateStr) {
  // let date = new Date();
  // let arr = date.toLocaleDateString().split("/");
  // arr = arr.map(item => {
  //   return parseInt(item) < 10 ? "0" + item : item;
  // });
  // let dateStr = arr.join("-");
  // return dateStr;
  return new Date(dateStr).toLocaleDateString().replace(/\//g, "-");
}

/**
 * @desc   已知年月求当月多少天
 * @param  {Number} year
 * @param  {Number} month
 * @return {Number}
 */
// Date API 处理日期溢出时，会自动往后推延响应时间
function getMonthCountDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
  // 32 - (32-当月天数) = 当月天数
  // return new Date(year, month , 0).getDate();
}

/**
 * @desc   Date扩展
 */
function dateExtend() {
  Date.prototype.format = function(format) {
    var o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      S: this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return format;
  };

  Date.prototype.addDays = function(d) {
    this.setDate(this.getDate() + d);
  };

  Date.prototype.addWeeks = function(w) {
    this.addDays(w * 7);
  };

  Date.prototype.addMonths = function(m) {
    var d = this.getDate();
    this.setMonth(this.getMonth() + m);
    //if (this.getDate() < d)
    //  this.setDate(0);
  };
}

/**
 * @desc   秒数转时分秒
 * @param  {String} 秒数 s
 * @return {String}
 */
function formatHMS(s) {
  var str = "";
  if (s > 3600) {
    str =
      Math.floor(s / 3600) +
      "h" +
      Math.floor((s % 3600) / 60) +
      "m" +
      (s % 60) +
      "s";
  } else if (s > 60) {
    str = Math.floor(s / 60) + "m" + (s % 60) + "s";
  } else {
    str = (s % 60) + "s";
  }
  return str;
}

module.exports = {
  formatPassTime,
  formatRemainTime,
  isLeapYear,
  isSameDay,
  timeLeft,
  skew2Horizontal,
  getMonthCountDay,
  dateExtend,
  formatHMS
};
