/**
 * @desc   1行代码实现评级
 * @param  {Number} rate 评分 (0-5)
 * @return {String}
 */
function $getRate(rate) {
  return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
}

/**
 * @desc   标记dom区域的范围
 */
function $markDom(rate) {
  [].forEach.call($$("*"), function(a) {
    a.style.outline =
      "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
  });

  //   Array.prototype.forEach.call(
  //     document.querySelectorAll("*"),
  //     dom =>
  //       (dom.style.outline = `1px solid #${parseInt(
  //         Math.random() * Math.pow(2, 24)
  //       ).toString(16)}`)
  //   );
}

module.exports = { $getRate, $markDom };
