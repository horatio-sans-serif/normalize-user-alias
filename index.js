const _ = require('lodash')

module.exports = function normalize_alias (alias) {
  return _.kebabCase(_.toLower(_.trim(_.deburr(alias || ''))))
}
