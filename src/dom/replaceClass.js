/**
 *
 * @desc 为元素替换class
 * @param {HTMLElement} ele HTML元素
 * @param {String} oldCls 移除的类名
 * @param {String} newCls 新增的类名
 */

var hasClass = require("./hasClass");

var addClass = require("./addClass");

var removeClass = require("./removeClass");

function replaceClass(ele, oldCls, newCls) {
  if (hasClass(ele, oldCls)) {
    removeClass(ele, oldCls);
    addClass(ele, newCls);
  } else {
    throw new Error("no such class");
  }
}

module.exports = replaceClass;
