/**
 * @desc 计算百分比
 * @param { number } 被除数
 * @param { number } 除数
 * @returns { number }
 */
function getPercent(num, total) {
  if (isNaN(num) || isNaN(total)) {
    return 0;
  }
  return total === 0 ? 0 : Math.floor((num / total) * 100);
}

/**
 * @desc 分离string
 * @param { string }
 * @returns { object }
 */
function splitNumberAndUnit() {
  const matches = value.match(/(\d*\.?\d*)(.*)/);
  const num = matches && matches[1] ? parseInt(matches[1]) : undefined;
  const unit = ((num || num === 0) && matches && matches[2]) || undefined;
  return { num, unit };
}

module.exports = {
  getPercent,
  splitNumberAndUnit,
};
