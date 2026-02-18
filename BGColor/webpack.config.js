const path = require('path');

module.exports = {
    mode:'production',
    entry: './src/js/index.js',
    output: {
        filename: 'bgcolor.js', // [fullhash]для рандомного изменения имени после изменения файла
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};