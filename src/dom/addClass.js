/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele HTMl元素
 * @param  {String} cls 类名
 */

var hasClass = require("./hasClass");

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    // 兼容写法
    if (ele.className === "" || ele.classList.length === 0) {
      ele.className = cls;
    } else {
      ele.className += " " + cls;
    }
    // 现代浏览器
    // ele.classList.add(cls);
    // ele.setAttribute("class", ele.getAttribute("class").concat(" " + cls));
  } else {
    throw new Error("the class has already existed");
  }
}

module.exports = addClass;
