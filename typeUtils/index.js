/**
 * @desc   判断是否为数组
 * @param  {*} value
 * @returns {Boolean}
 */

function isArray(value) {
  // es6判断
  if (Array.isArray) {
    return Array.isArray(value);
  }
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

/**
 * @desc   判断是否为布尔类型
 * @param  {*} value
 * @returns {Boolean}
 */

function isBoolean(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

/**
 * @desc   判断是否为日期类型
 * @param  {*} value
 * @returns {Boolean}
 */

function isDate(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * @desc   判断是否为假值
 * @param  {*} o
 * @returns {Boolean}
 */

function isFalse(o) {
  if (
    o == "" ||
    o == undefined ||
    o == null ||
    o == "null" ||
    o == "undefined" ||
    o == 0 ||
    o == false ||
    o == NaN
  )
    return true;
  return false;
}

/**
 * @desc   判断是否为函数
 * @param  {*} value
 * @returns {Boolean}
 */

function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * @desc   判断是否为null
 * @param  {*} value
 * @returns {Boolean}
 */

function isNull(value) {
  // return value === null;
  return Object.prototype.toString.call(value).slice(8, -1) === "Null";
}

/**
 * @desc   判断是否为数字类型
 * @param  {*} value
 * @returns {Boolean}
 */

function isNumber(value) {
  // '[object Number]'
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * @desc   判断是否为对象
 * @param  {*} value
 * @returns {Boolean}
 */

function isObj(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * @desc   判断是否为字符串类型
 * @param  {*} value
 * @returns {Boolean}
 */

function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * @desc   判断是否为真值
 * @param  {*} o
 * @returns {Boolean}
 */

function isTrue(o) {
  return !isFalse(o);
}

/**
 * @desc   判断是否为undefined
 * @param  {*} value
 * @returns {Boolean}
 */

function isUndefined(value) {
  // return value === undefined;
  return Object.prototype.toString.call(value).slice(8, -1) === "Undefined";
}

/**
 * @desc   判断是否为Promise对象
 * @param  {*} value
 * @returns {Boolean}
 */

function isPromise(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

/**
 * @desc   判断是否为Map
 * @param  {*} value
 * @returns {Boolean}
 */

function isMap(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Map";
}

/**
 * @desc   判断是否为WeakMap
 * @param  {*} value
 * @returns {Boolean}
 */

function isWeakMap(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakMap";
}

/**
 * @desc   判断是否为Set
 * @param  {*} value
 * @returns {Boolean}
 */

function isSet(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Set";
}

/**
 * @desc   判断是否为WeakSet
 * @param  {*} value
 * @returns {Boolean}
 */

function isWeakSet(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakSet";
}

/**
 * @desc   判断是否为Symbol
 * @param  {*} value
 * @returns {Boolean}
 */

function isSymbol(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
}

/**
 * @desc   判断是否为BigInt
 * @param  {*} value
 * @returns {Boolean}
 */

function isBigInt(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "BigInt";
}

/**
 * @desc   检测value的类型
 * @param  value 要检测的值
 * @returns 返回检测值的类型
 * @example
 * ```ts
 * getType(1) // => 'Number'
 * getType(true) // => 'Boolean'
 * getType([]) // => 'Array'
 * getType(/hello/) // => 'RegExp'
 * ```
 */
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = {
  isArray,
  isBoolean,
  isDate,
  isFalse,
  isFunction,
  isNull,
  isNumber,
  isObj,
  isString,
  isTrue,
  isUndefined,
  isPromise,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isSymbol,
  isBigInt,
  getType
};
