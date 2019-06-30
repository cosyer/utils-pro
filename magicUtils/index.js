/**
 * @desc   1行代码实现评级
 * @param  {Number} rate 评分 (0-5)
 * @returns {String}
 */
function $getRate(rate) {
  return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
}

/**
 * @desc 标记dom区域的范围
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

/**
 * @desc 拦截控制台、右键和F12
 */
function $forbiddenConsole(rate) {
  document.onkeydown = function() {
    var e = window.event || arguments[0];
    //屏蔽F12
    if (e.keyCode == 123) {
      return false;
      //屏蔽Ctrl+Shift+I
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
      //屏蔽Shift+F10
    } else if (e.shiftKey && e.keyCode == 121) {
      return false;
    }
  };
  //屏蔽右键单击
  document.oncontextmenu = function() {
    return false;
  };
}

/**
 * @desc 崩溃欺骗
 */
function $titleTreat() {
  var OriginTitle = document.title;
  var titleTime;
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      $('[rel="icon"]').attr("href", "/img/TEP.ico");
      document.title = "╭(°A°`)╮ 页面崩溃啦 ~";
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr("href", "/favicon.ico");
      document.title = "(ฅ>ω<*ฅ) 噫又好了~" + OriginTitle;
      titleTime = setTimeout(function() {
        document.title = OriginTitle;
      }, 2000);
    }
  });
}

module.exports = { $getRate, $markDom, $forbiddenConsole, $titleTreat };
