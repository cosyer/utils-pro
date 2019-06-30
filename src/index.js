/**
import { arrayEqual } from '../index.d';
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
// let moduleExports = {};

// const r = require.context("./", true, /^\.\/.+\/.+\.js$/);
// r.keys().forEach(key => {
//   let attr = key.substring(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
//   moduleExports[attr] = r(key);
// });
const arrayUtils = require("../arrayUtils");
const cookieUtils = require("../cookieUtils");
const deviceUtils = require("../deviceUtils");
const domUtils = require("../domUtils");
const functionUtils = require("../functionUtils");
const keycodeUtils = require("../keycodeUtils");
const objectUtils = require("../objectUtils");
const randomUtils = require("../randomUtils");
const regexpUtils = require("../regexpUtils");
const stringUtils = require("../stringUtils");
const supportUtils = require("../supportUtils");
const dateUtils = require("../dateUtils");
const typeUtils = require("../typeUtils");
const urlUtils = require("../urlUtils");
const windowUtils = require("../windowUtils");
const localStorageUtils = require("../localStorageUtils");
const magicUtils = require("../magicUtils");
const uuidUtils = require("../uuidUtils");

module.exports = {
  arrayUtils,
  cookieUtils,
  deviceUtils,
  domUtils,
  functionUtils,
  keycodeUtils,
  objectUtils,
  randomUtils,
  regexpUtils,
  stringUtils,
  supportUtils,
  dateUtils,
  typeUtils,
  urlUtils,
  windowUtils,
  localStorageUtils,
  magicUtils,
  uuidUtils
};
