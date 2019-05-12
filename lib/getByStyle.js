/**
 *
 * @desc   获取行间样式属性
 * @param  {HTMLElement} ele HTMl元素
 * @param  {String} name css属性名称
 * @returns  {String} css属性值
 */

function getByStyle(ele, name) {
  if (ele.currentStyle) {
    // 兼容IE
    return ele.currentStyle[name];
  } else {
    // 兼容谷歌火狐
    return getComputedStyle(ele, false)[name];
  }
  // style:各大浏览器都兼容,能设置样式和获取样式,但是获取不了外部样式,如果写了行内没有的样式,返回的是空值
  // return ele.style.attr[name的驼峰形式];
}

module.exports = getByStyle;
