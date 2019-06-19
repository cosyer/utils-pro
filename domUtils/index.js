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

/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele HTMl元素
 * @param  {String} cls 类名
 */

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

/**
 *
 * @desc   html转成字符串
 * @param  {HTMLElement} ele HTMl元素
 * @returns {String} html字符串
 */

function html2Str(ele) {
  var temp = document.createElement("div");
  temp.appendChild(ele);
  return temp.innerHTML;
}

/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele HTML元素
 * @param {String} cls 类名
 */

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

/**
 *
 * @desc 为元素替换class
 * @param {HTMLElement} ele HTML元素
 * @param {String} oldCls 移除的类名
 * @param {String} newCls 新增的类名
 */

function replaceClass(ele, oldCls, newCls) {
  if (hasClass(ele, oldCls)) {
    removeClass(ele, oldCls);
    addClass(ele, newCls);
  } else {
    throw new Error("no such class");
  }
}

/**
 *
 * @desc   获取兄弟节点
 * @param  {HTMLElement} ele HTMl元素
 * @returns {Array} 兄弟节点的数组
 */

function siblings(ele) {
  var chid = ele.parentNode.children,
    eleMatch = [];
  for (var i = 0, len = chid.length; i < len; i++) {
    if (chid[i] != ele) {
      eleMatch.push(chid[i]);
    }
  }
  return eleMatch;
}

/**
 *
 * @desc   字符串转html
 * @param  {String} str 字符串
 * @returns {HTMLElement} 兄弟节点的数组
 */

function str2Html(str) {
  var temp = document.createElement("div");
  temp.innerHTML = str;
  return temp.children[0];
}

/**
 * @description 简易双向绑定
 * @param {Object} inputObj 输入的input
 * @param {Object} outputObj 输出的input
 */

function viewModel(inputObj, outputObj) {
  var model = {};
  var key = null;
  Object.defineProperty(model, "key", {
    set: function(value) {
      key = value;
      outputObj.value = value;
    },
    get: function() {
      return key;
    }
  });
  inputObj.addEventListener("input", function() {
    model["key"] = inputObj.value;
  });
}

module.exports = {
  hasClass,
  addClass,
  removeClass,
  replaceClass,
  getByStyle,
  html2Str,
  siblings,
  str2Html,
  viewModel
};
