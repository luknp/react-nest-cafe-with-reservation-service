const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists
let isDevelopment;

module.exports = (env, argv) => {
    isDevelopment = argv.mode === 'development';
    return config(env);
};

const config = (env) => {
    const currentPath = path.join(__dirname);

    const basePath = currentPath + '/.env';

    const envPath = currentPath + '/' + env.NODE_ENV + '.env';
    let envKeys;
    try {
        const finalPath = fs.existsSync(envPath) ? envPath : basePath;

        const fileEnv = dotenv.config({ path: finalPath }).parsed;

        envKeys = Object.keys(fileEnv).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
            return prev;
        }, {});
    } catch (e) {
        throw new Error('No ".env" or "production.env" file was found!');
    }

    return {
        mode: isDevelopment ? 'development' : 'production',
        devServer: {
            historyApiFallback: true
        },
        entry: './src/index.tsx',
        devtool: isDevelopment ? 'inline-source-map' : 'source-map',
        resolve: {
            alias: {
                public: path.resolve(__dirname, './public'),
                shared: path.resolve(__dirname, './src/shared')
            },
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css'],
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.min.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    exclude: /\.module\.s(a|c)ss$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:7]',
                                },
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader', // Run postcss actions
                            options: {
                                plugins: function () { // postcss plugins, can be exported to postcss.config.js
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=8192',
                    options: {
                        limit: 8192
                    },
                },
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg|gif)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                esModule: false,
                            },
                        },
                    ],
                },

            ]
        },
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
        ]
    }
}