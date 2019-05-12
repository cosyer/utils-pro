/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele HTML元素
 * @param {String} cls 类名
 */

var hasClass = require("./hasClass");

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    // 兼容写法
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
    // 现代浏览器
    // ele.classList.remove(cls);
    // ele.getAttribute("class").replace(reg, " ");
  } else {
    throw new Error("no such class");
  }
}
module.exports = removeClass;
