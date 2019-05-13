/**
 * @description 简易双向绑定
 * @param {Object} inputObj 输入的input
 * @param {Object} outputObj 输出的input
 */

function viewModel(inputObj, outputObj) {
  var model = {};
  var key = null;
  Object.defineProperty(model, "key", {
    set: function(value) {
      key = value;
      outputObj.value = value;
    },
    get: function() {
      return key;
    }
  });
  inputObj.addEventListener("input", function() {
    model["key"] = inputObj.value;
  });
}

module.exports = viewModel;
