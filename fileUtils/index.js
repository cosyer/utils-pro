/**
 * 获取文件base64编码
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
function fileToBase64String(
  file,
  format = ["jpg", "jpeg", "png", "gif"],
  size = 20 * 1024 * 1024,
  formatMsg = "文件格式不正确",
  sizeMsg = "文件大小超出限制"
) {
  return new Promise((resolve, reject) => {
    // 格式过滤
    let suffix = file.type.split("/")[1].toLowerCase();
    let inFormat = false;
    for (let i = 0; i < format.length; i++) {
      if (suffix === format[i]) {
        inFormat = true;
        break;
      }
    }
    if (!inFormat) {
      reject(formatMsg);
    }
    // 大小过滤
    if (file.size > size) {
      reject(sizeMsg);
    }
    // 转base64字符串
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let res = fileReader.result;
      resolve({ base64String: res, suffix: suffix });
      reject("异常文件，请重新选择");
    };
  });
}

/**
 * file转base64
 * @param { * } file 图片文件
 */
function fileToBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    return e.target.result;
  };
}

/**
 *  base64转file
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
function base64ToFile(base64, filename) {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split("/")[1]; // 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime });
}

/**
 *  base64转blob
 *  @param { base64 } base64
 */
function base64ToBlob(base64) {
  let arr = base64.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 *  blob转file
 *  @param { blob } blob
 *  @param { string } fileName
 */
function blobToFile(blob, fileName) {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
}

/**
 *  文件大小转换
 *  @param { string } input
 */
function binaryFormatter(input) {
  const unitArr = [
    ["B", "BYTE"],
    ["KB", "KI", "KIB", "K"],
    ["MB", "MI", "MIB", "M"],
    ["GB", "GI", "GIB", "G"],
    ["TB", "TI", "TIB", "T"],
    ["PB", "PI", "PIB", "P"],
    ["EB", "EI", "EIB", "E"],
    ["ZB", "ZI", "ZIB", "Z"],
    ["YB", "YI", "YIB", "Y"],
  ];
  const k = 1024;
  const dm = 2;
  const pattern = /^(-?)(\d+(\.\d+)?)([A-Z]*)$/;
  const exponentialPattern = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)/;

  const inputStr = String(input).toUpperCase().replace(/\s+/g, "");

  if (exponentialPattern.test(inputStr)) {
    // 如果是科学计数法数字
    return cleverToFixed(input);
  }

  if (!pattern.test(inputStr)) {
    return input;
  }

  const splitOperator = pattern.exec(inputStr)[1];
  const splitNumber = pattern.exec(inputStr)[2];
  const splitUnit = pattern.exec(inputStr)[4];

  let inputBytes;
  if (splitUnit === "") {
    inputBytes = Math.round(parseFloat(splitNumber));
  } else {
    const unitIndex = findIndex(unitArr, (o) => {
      if (indexOf(o, splitUnit) > -1) {
        return o;
      }
    });
    if (unitIndex === -1) {
      return inputStr;
    }
    inputBytes = Math.round(parseFloat(splitNumber)) * Math.pow(k, unitIndex);
  }

  const i =
    inputBytes === 0 ? 0 : Math.floor(Math.log(inputBytes) / Math.log(k));
  const op = splitOperator === "-" ? -1 : 1;
  return (
    op * parseFloat((inputBytes / Math.pow(k, i)).toFixed(dm)) + unitArr[i][0]
  );
}

module.exports = {
  fileToBase64String,
  base64ToFile,
  base64ToBlob,
  blobToFile,
  fileToBase64,
  binaryFormatter,
};
