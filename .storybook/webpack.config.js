var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');


module.exports = {
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
            }
        ]
    }
};
