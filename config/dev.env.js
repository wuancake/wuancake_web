'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_MOCK: true,
  BASE_API: '"http://52.78.119.221:802/api/"'
})
