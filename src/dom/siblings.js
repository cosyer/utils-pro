/**
 *
 * @desc   获取兄弟节点
 * @param  {HTMLElement} ele HTMl元素
 * @returns {Array} eleMatch 兄弟节点的数组
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

module.exports = siblings;
