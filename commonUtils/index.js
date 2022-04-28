/**
 * @desc 安全的parse json字符串
 * @param {string}
 * @returns {Object | undefined}
 */
function safelyParseJson(jsonStr) {
  // 如果JSON.parse失败，会抛错，会出现问题
  try {
    const obj = jsonStr ? JSON.parse(jsonStr) : {};
    return obj;
  } catch(err) {
    return undefined;
  }
}

module.exports = {
  safelyParseJson,
};
