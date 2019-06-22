/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
// 核心：split
function parseQueryString(url) {
  url = !url ? window.location.href : url;
  if (url.indexOf("?") === -1) {
    return {};
  }
  var search =
    url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  search = search.split("&");
  var query = {};
  for (var i = 0; i < search.length; i++) {
    var pair = search[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

// 核心：正则 better
function getQueryStringObject(url) {
  url = !url ? window.location.href : url;
  var reg = /([^?&=]+)=([^&]+)/g;
  var q = {};
  location.search.replace(
    reg,
    (m, k, v) => (q[decodeURIComponent(k)] = decodeURIComponent(v))
  );
  return q;
}

/**
 *
 * @desc   url获取指定参数
 * @param  {String} name
 * @return {*}
 */
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    // return unescape(r[2]); // 中文会乱码
    return decodeURI(r[2]);
  }
  return null;
}

/**
 *
 * @desc   对象序列化
 * @param  {Object} obj {name:'cosyer',age:25} => name=cosyer&age=25
 * @return {String}
 */
function stringfyQueryString(obj) {
  if (!obj) return "";
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + "[" + i + "]") +
            "=" +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }

    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }

  return pairs.join("&");
}

module.exports = {
  parseQueryString,
  getQueryStringObject,
  getQueryString,
  stringfyQueryString
};
