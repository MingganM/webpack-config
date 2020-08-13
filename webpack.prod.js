const webpackCommon = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackCommon, {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            scriptLoading: "defer",
            minify: {
                removeComments: true,
            }
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, //either sass or scss
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
});