const { VueLoaderPlugin } = require('vue-loader');
// const {VueLoaderPlugin} = require('vue-loader/dist/plugin');
const path = require('path');
console.log(path);


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
            test: /\.vue$/,
            loader: 'vue-loader',
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                },
            },  
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        // VueLoaderPlugin,
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // The directory to serve content from
        },
        // contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
};
