require('babel-register')({
    presets: ['react', 'env', "stage-2", "stage-3"],
    "plugins": [
        "transform-class-properties",
        "transform-object-rest-spread",
        "react-loadable/babel"
    ]
});

module.exports = require('./server');