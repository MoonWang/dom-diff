const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'lib': path.resolve('lib')
        }
    }
}