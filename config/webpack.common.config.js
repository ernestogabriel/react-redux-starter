const webpack = require('webpack');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./common-paths');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                options: {
                    failOnWarning: true,
                    failOnerror: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                //exclude: /node_modules/
            },
            {
                test: /\.svg|.png|.jpg$/,
                loader: 'url-loader',
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 3
                }
            }
        }
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin('styles.css'),
        new CleanWebPackPlugin(['public'], { root: commonPaths.root }),
        new HtmlWebPackPlugin({
            template: commonPaths.template,
            favicon: commonPaths.favicon,
            inject: true
        })
    ]
};

module.exports = config;