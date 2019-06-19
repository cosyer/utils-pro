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
function isSameDay(date1, date2) {
  if (!date2) {
    date2 = new Date();
  }
  var date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate();
  var date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate();

  return (
    date1_date === date2_date &&
    date1_month === date2_month &&
    date1_year === date2_year
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

module.exports = {
  formatPassTime,
  formatRemainTime,
  isLeapYear,
  isSameDay,
  timeLeft
};
