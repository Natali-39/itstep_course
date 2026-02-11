const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlagin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    entry: './src/js/game.ts',
    output: {
        filename: '[name].[fullhash].js', // [fullhash]для рандомного изменения имени после изменения файла
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
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
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.[mc]?[jt]sx?$/i,
                exclude: /node_modules/,
                use: [
                  { 
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        plugins: [
                          'babel-plugin-react-compiler',
                        ],
                        presets: [
                          ["@babel/preset-env"],
                          ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    }
                  },
                ]
            },
            
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.resolve(__dirname, 'src/index.html'), //__dirname = D:\Savchenko N.N\WEB-pack>src/index.html
        }),
        new MiniCssExtractPlagin ({
            filename: '[name].[fullhash].css',
        }),
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: [path.join(__dirname, 'src')],
        compress: true,
        port: 9000,
        hot: true,
    }
};