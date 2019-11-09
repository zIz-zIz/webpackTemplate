const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/dist"
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },{
                        loader: 'postcss-loader',
                        options:{
                            sourceMap: true,
                            config:{
                                path:'src/config/postcss.config.js'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.styl$/,
                
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },{
                        loader: 'postcss-loader',
                        options:{
                            sourceMap: true,
                            config:{
                                path:'src/config/postcss.config.js'
                            }
                        }
                    },{
                        loader: 'stylus-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    devServer:{
        overlay: true
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
};