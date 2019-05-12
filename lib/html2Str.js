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

module.exports = html2Str;
