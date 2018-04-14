require('babel-register')({
    presets: ['react', 'env']
});

module.exports = require('./app');