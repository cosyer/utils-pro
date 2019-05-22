/**
 * @desc   判断是否为数组
 * @param  {*} value
 * @return {Boolean}
 */

function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

// var a = [];
// // 1.基于instanceof
// a instanceof Array;
// // 2.基于constructor
// a.constructor === Array;
// // 3.基于Object.prototype.isPrototypeOf
// Array.prototype.isPrototypeOf(a);
// // 4.基于getPrototypeOf
// Object.getPrototypeOf(a) === Array.prototype;

// // 以上方法都有局限 比如执行环境不同iframe下的Array和window下的Array不同
// // 5.基于Object.prototype.toString
// Object.prototype.toString.apply(a) === "[object Array]";
// // 6.Array.isArray es6
// Array.isArray(a);

module.exports = isArray;
