module.exports = require('babel-jest').createTransformer({
  rootMode: 'upward',
  rootDir: './src/test',
  testEnvironment: 'node'
});