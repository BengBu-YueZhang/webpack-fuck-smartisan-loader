const fs = require('fs')
const loaderUtils = require('loader-utils')
const defaultOptions = {
  from: '罗永浩',
  to: '罗永浩太君'
}

module.exports = function (source) {
  this.cacheable && this.cacheable()
  const options = Object.assign({}, defaultOptions, loaderUtils.getOptions(this))
  const { to, from } = options
  const reg = new RegExp(from)
  const regResult = reg.exec(source)
  if (regResult) {
    source = source.replace(reg, to)
  }
  return source
}