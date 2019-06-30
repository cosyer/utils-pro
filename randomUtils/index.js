/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
function randomColor() {
  // return (
  //   "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  // );
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  );
}

/**
 *
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 符合密码学要求的随机值
function randomNum2(min, max) {
  var minValue = min || "";
  var maxValue = max || "";
  var cryptoObj = window.crypto || window.msCrypto;
  var array = new Uint32Array(1);
  cryptoObj && cryptoObj.getRandomValues(array);
  var result = 0;
  if (minValue || maxValue) {
    if (!maxValue) {
      minValue = 0;
      maxValue = min;
    }
    result =
      parseInt(minValue, 10) +
      (array[0] % (parseInt(maxValue, 10) - parseInt(minValue, 10)));
  } else {
    result = array[0];
  }
  return result;
}

module.exports = { randomColor, randomNum, randomNum2 };
