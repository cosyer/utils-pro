/**
 * @desc   设置localStorage
 * @param  {String} name
 * @param  {Any} data
 */
function setStorage(name, data) {
  if (typeof data === "object") {
    window.localStorage.setItem(name, JSON.stringify(data));
  } else if (
    typeof data === "number" ||
    typeof data === "string" ||
    typeof data === "boolean"
  ) {
    window.localStorage.setItem(name, data);
  } else {
    alert("该类型不能用于本地存储~");
  }
}

/**
 * @desc   获取localStorage
 * @param  {String} name
 * @returns  {Any}
 */
function getStorage(name) {
  let data = window.localStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
}

/**
 * @desc   删除localStorage
 * @param  {String} name
 */
function removeStorage(name) {
  window.localStorage.removeItem(name);
}

/**
 * @desc   清空localStorage
 */
function clearStorage() {
  window.localStorage.clear();
}

module.exports = {
  setStorage,
  getStorage,
  removeStorage,
  clearStorage
};
