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
 * @desc 获取滚动条位置
 * @returns {Object}
 */
function getScrollPos() {
  return {
    x:
      window.pageXOffset !== undefined ? window.pageXOffset : window.scrollLeft,
    y: window.pageYOffset !== undefined ? window.pageYOffset : window.scrollTop
  };
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

/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 */
function scrollTo(to, duration) {
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

/**
 * @desc 回到顶部
 */
function goTop() {
  var iScrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  var timer = setInterval(function() {
    //定时器
    scrollTo(0, (iScrollTop -= 100));
    if (iScrollTop <= 0) {
      clearInterval(timer); //清除定时器
    }
  }, 100);
  // 设置滚动行为改为平滑的滚动
  // window.scrollTo({
  //   top: 1000,
  //   behavior: "smooth"
  // });

  // var c = document.documentElement.scrollTop || document.body.scrollTop;
  // if (c > 0) {
  // ​ window.requestAnimationFrame(scrollToTop);
  // ​ window.scrollTo(0, c - c / 8);
  // }
}

/**
 * @desc 获取鼠标位置
 * @returns {Object}
 */
function getCoordInDocument() {
  e = e || window.event;
  var x =
    e.pageX ||
    e.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft);
  var y =
    e.pageY ||
    e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
  return {
    x: x,
    y: y
  };
}

/**
 * @desc 禁止鼠标滚动
 */
function disableScroll() {
  var keys = [37, 38, 39, 40];

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function keydown(e) {
    for (var i = keys.length; i--; ) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }

  function wheel(e) {
    preventDefault(e);
  }

  function disable_scroll() {
    if (window.addEventListener) {
      window.addEventListener("DOMMouseScroll", wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
  }
  disable_scroll();
}

/**
 * @desc 允许鼠标滚动
 */
function enableScroll() {
  var keys = [37, 38, 39, 40];

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function wheel(e) {
    preventDefault(e);
  }

  function enable_scroll() {
    if (window.removeEventListener) {
      window.removeEventListener("DOMMouseScroll", wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
  }
  enable_scroll();
}

/**
 *
 * @desc 检测页面是否滚动到页面底部
 * @returns {Boolean} value
 */
function bottomVisible() {
  var value =
    document.documentElement.clientHeight + window.scrollY >=
    (document.documentElement.scrollHeight ||
      document.documentElement.clientHeight);
  return value;
}

/**
 * 获取窗口可视范围的高度
 */
function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
}

/**
 *  获取滚动条距左边的高度
 */
function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}

/**
 * 开启全屏
 * @param {*} element
 */
function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
 *  关闭全屏
 */
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/**
 * 返回当前滚动条位置
 */
function getScrollPosition(el = window) {
  ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  });
}

/**
 * 滚动到指定元素区域
 */
function smoothScroll(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth"
  });
}

/**
 * http跳转https
 */
function httpsRedirect() {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
}

module.exports = {
  getScrollTop,
  offset,
  scrollTo,
  setScrollTop,
  windowResize,
  goTop,
  getScrollPos,
  getCoordInDocument,
  disableScroll,
  enableScroll,
  bottomVisible,
  getClientHeight,
  getPageScrollLeft,
  launchFullscreen,
  exitFullscreen,
  getScrollPosition,
  smoothScroll
};
