const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',

    output: {
        filename: 'mobile-bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        open: true,
        port: 3000,
        hot: true,
        contentBase: './dist',
        proxy: {
            "/api/*": {
                target: "https://recruit.topviewclub.cn",
                ws: true,
                changeOrigin: true,
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: path.join(__dirname, 'index.html'), 
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
            }
        })
    ],
    module: {
        rules: [
            {
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.Zepto!script-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },     
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader']
            },

            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader"
                },{
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
           
        ]

    }
};