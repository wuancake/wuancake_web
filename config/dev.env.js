'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_MOCK: false,
  BASE_API: '"http://13.114.107.36:8008/"'
})
