/**
 *
 * @desc 判断两个数组(内容/非对象)是否相等
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
  // the same array
  if (arr1 === arr2) return true;
  // compare lengths - can save a lot of time
  if (arr1.length != arr2.length) return false;
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = arrayEqual;
