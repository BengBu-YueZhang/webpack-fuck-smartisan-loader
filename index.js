const fs = require('fs')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  console.log('***************************')
  console.log(options)
  return source
}