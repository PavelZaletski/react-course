require('babel-register')({
    presets: ['react', 'env', "stage-2"],
    "plugins": [
        "transform-class-properties",
        "transform-object-rest-spread"
    ]
});

module.exports = require('./server');