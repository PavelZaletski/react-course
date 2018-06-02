require('babel-register')({
    presets: ['react', 'env'],
    "plugins": [
        "transform-class-properties",
        "transform-object-rest-spread"
    ]
});

module.exports = require('./server');