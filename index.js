const _ = require('lodash')
const foldCase = require('fold-case')

module.exports = function normalize_alias (alias) {
  return _.kebabCase(foldCase(_.trim(_.deburr(alias || ''))))
}
