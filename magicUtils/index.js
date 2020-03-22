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
    if (e.keyCode === 123) {
      return false;
      //屏蔽Ctrl+Shift+I
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
      //屏蔽Shift+F10
    } else if (e.shiftKey && e.keyCode === 121) {
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

/**
 * 加法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
function $add(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

/**
 * 减法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
function $sub(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}
/**
 * 除法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
function $division(num1, num2) {
  let t1, t2, r1, r2;
  try {
    t1 = num1.toString().split(".")[1].length;
  } catch (e) {
    t1 = 0;
  }
  try {
    t2 = num2.toString().split(".")[1].length;
  } catch (e) {
    t2 = 0;
  }
  r1 = Number(num1.toString().replace(".", ""));
  r2 = Number(num2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

/**
 * 乘法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
function $mcl(num1, num2) {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
}

module.exports = {
  $getRate,
  $markDom,
  $forbiddenConsole,
  $titleTreat,
  $add,
  $sub,
  $division,
  $mcl
};
