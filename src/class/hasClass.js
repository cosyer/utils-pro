/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele HTML元素
 * @param {String} cls 类名
 * @return {Boolean}
 */
function hasClass(ele, cls) {
  return new RegExp("(\\s|^)" + cls + "(\\s|$)").test(ele.className);
}

module.exports = hasClass;
