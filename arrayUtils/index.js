/**
 *
 * @desc 判断两个数组(内容/非对象)是否相等
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns {Boolean}
 */
function equal(arr1, arr2) {
  // the same array
  if (arr1 === arr2) return true;
  // compare lengths - can save a lot of time
  if (arr1.length != arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/**
 * @desc 数组最大值
 * @param {Array} arr
 * @returns {Number}
 */
function max(arr) {
  // 1. es6拓展运算符...
  // Math.max(...arr)
  // 2. es5 apply(与方法1原理相同)
  // Math.max.apply(null,arr)
  //   3. 数组sort
  // arr.sort((a,b)=>{
  // 	return b-a // 降序
  // })
  // 4. 数组reduce
  // arr.reduce((a,b)=>{
  // 	return a>b?a:b
  // })
  // for循环
  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    max = max < arr[i + 1] ? arr[i + 1] : max;
  }
  return max;
}

/**
 * @desc 数组最小值
 * @param {Array} arr
 * @returns {Number}
 */
function min(arr) {
  return Math.min.apply(null, arr);
}

/**
 * @desc 数组求和
 * @param {Array} arr
 * @returns {Number}
 */
function sum(arr) {
  // var sum = 0;
  // var i;
  // for (i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;
  return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * @desc 计算数组中某值出现的次数
 * @param {Array} arr
 * @param {Number} value
 * @returns {Number}
 */
function count(arr, value) {
  return arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
}

/**
 * @desc 类数组对象转数组
 * @param {Object} obj
 * @returns {Array}
 */
function arguments2Arr(obj) {
  // 类数组对象转数组
  // console.log([].slice.call(arguments));
  // console.log(Array.from(arguments));
  // console.log([...arguments]);
  return Array.prototype.slice.call(obj);
}

/**
 * @desc 判断一个元素是否在数组中
 * @param {Array} arr
 * @param {Any} value
 * @returns {Boolean}
 */
function contains(arr, value) {
  return ~arr.indexOf(value) ? true : false;
}

/**
 * @desc 数组去重
 * @param {Array} arr
 * @returns {Array}
 */
function unique(arr) {
  // [...new Set(arr);
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr));
  } else {
    var n = {},
      r = [];
    for (var i = 0; i < arr.length; i++) {
      if (!n[arr[i]]) {
        n[arr[i]] = true;
        r.push(arr[i]);
      }
    }
    return r;
  }
}

/**
 * @desc 数组平均值
 * @param {Array} arr
 * @returns {Number}
 */
function average(arr) {
  return sum(arr) / arr.length;
}

/**
 * @desc 数组排序
 * @param  {Array} 数组
 * @param  {type} 1：从小到大   2：从大到小   3：随机
 * @returns {Array}
 */
function sort(arr, type = 1) {
  return arr.sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
}

/**
 * @desc 求数组并集
 * @param  {Array} a
 * @param  {Array} b
 * @returns {Array}
 */
function union(a, b) {
  var newArr = a.concat(b);
  return unique(newArr);
}

/**
 * @desc 求数组的交集
 * @param  {Array} a
 * @param  {Array} b
 * @returns {Array}
 */
function intersect(a, b) {
  a = unique(a);
  b = unique(b);
  var c = a.length > b.length ? a : b;
  var d = a.length > b.length ? b : a;
  return d.map(function(o) {
    return contains(c, o) ? o : null;
  });
  // return a.filter(v => b.includes(v));
}

/**
 * @desc 数组相同项的次数
 * @param  {Array} a
 * @param  {str/number} b
 * @returns {Number}
 */
function countOccurrences(a, b) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}

module.exports = {
  equal,
  max,
  min,
  sum,
  count,
  arguments2Arr,
  contains,
  unique,
  average,
  sort,
  union,
  intersect,
  countOccurrences
};
