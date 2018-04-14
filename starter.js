require('babel-register')({
    presets: ['react', 'env']
})

module.exports = require('./server/bin/www');