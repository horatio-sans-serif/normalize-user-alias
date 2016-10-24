const normalize = require('.')

const assert = require('assert')

assert.equal(normalize('jose'), 'jose')
assert.equal(normalize('JOSE'), 'jose')
assert.equal(normalize('JOSE '), 'jose')
assert.equal(normalize(' JOSE'), 'jose')
assert.equal(normalize(' JOSE '), 'jose')
assert.equal(normalize('JoSe'), 'jose')
assert.equal(normalize('José'), 'jose')
assert.equal(normalize('José'), 'jose')
assert.equal(normalize('José Smith'), 'jose-smith')
assert.equal(normalize('José ümlaUT Debugger'), 'jose-umlaut-debugger')
