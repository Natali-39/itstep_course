const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlagin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    entry: './src/js/index.js',
    output: {
        filename: '[bundle].[fullhash].js', // [fullhash]для рандомного изменения имени после изменения файла
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlagin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'index.html'), //__dirname = D:\Savchenko N.N\WEB-pack>src/index.html
        }),
        new MiniCssExtractPlagin ({
            filename: '[name].[fullhash].css',
        }),
    ],
};