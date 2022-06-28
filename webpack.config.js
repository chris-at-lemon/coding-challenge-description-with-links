var webpack = require("webpack");


module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader"
                }
          
            }
        ]
    }
};
