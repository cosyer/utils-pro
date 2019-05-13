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

module.exports = str2Html;
