/**
 *
 * @desc 获取滚动条距顶部的距离
 */
function getScrollTop() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  );
}

/**
 *
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
function offset(ele) {
  var pos = {
    left: 0,
    top: 0
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele = ele.offsetParent;
  }
  return pos;
}

var requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 */
function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }
  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = (diff / duration) * 10;
  requestAnimFrame(function() {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (
      (diff > 0 && getScrollTop() >= to) ||
      (diff < 0 && getScrollTop() <= to)
    ) {
      return;
    }
    scrollTo(to, duration - 16);
  });
}

/**
 *
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

/**
 *
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */

function windowResize(downCb, upCb) {
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === "function" ? downCb : function() {};
  upCb = typeof upCb === "function" ? upCb : function() {};
  window.addEventListener("resize", () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
}

module.exports = { getScrollTop, offset, scrollTo, setScrollTop, windowResize };
