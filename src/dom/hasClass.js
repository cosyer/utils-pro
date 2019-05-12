/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele HTML元素
 * @param {String} cls 类名
 * @return {Boolean}
 */
function hasClass(ele, cls) {
  // String对象的方法
  // return ele.className.indexOf(cls) !== -1;
  // return ele.className.search(cls) !== -1;
  // return ele.className.match(cls) !== null;

  // RegExp 对象方法
  // return new RegExp("(\\s|^)" + cls + "(\\s|$)").exec(ele.className) !== null;
  return new RegExp("(\\s|^)" + cls + "(\\s|$)").test(ele.className);
}

module.exports = hasClass;
