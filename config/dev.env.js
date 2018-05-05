'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_MOCK: true,
  BASE_API: '"http://13.144.107.36:8008/"'
})
