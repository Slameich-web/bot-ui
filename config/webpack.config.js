const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require('webpack');
const dotenv = require('dotenv')

const paths = require("./paths")
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const env = dotenv.config().parsed;
const envVars = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = [
    {
        entry: paths.appEntry,
        mode: process.env.NODE_ENV || "production",
        target: "web",
        output: {
            filename: "[name].js",
            path: paths.appBuild,
            clean: true,
        },
        devServer: {
            client: {
                logging: 'warn',
                overlay: true,
            },
            port: 3000,
            hot: true,
            historyApiFallback: true,
            compress: true,
            open: true,
            allowedHosts: "all",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.appIndexPath,
            }),
            new MiniCssExtractPlugin({
                filename: 'styles.[contenthash].css',
            }),
            new CleanWebpackPlugin(),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
            new webpack.DefinePlugin(envVars)
        ],
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "../src/components"),
                "@pages": path.resolve(__dirname, "../src/pages"),
                "@layouts": path.resolve(__dirname, "../src/layouts"),
                "@helpers": path.resolve(__dirname, "../src/helpers"),
                "@hooks": path.resolve(__dirname, "../src/hooks"),
                "@features": path.resolve(__dirname, "../src/features"),
                "@appTypes": path.resolve(__dirname, "../src/types"),
                "@icons": path.resolve(__dirname, "../src/assets/icons"),
                "@media": path.resolve(__dirname, "../src/assets/media"),
                process: "process/browser",
            },
            extensions: [".tsx", ".ts", ".js", ".css", ".module.css"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js)$/i,
                    exclude: /node_modules/,
                    use: "babel-loader",
                },
                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    config: path.resolve(paths.appRoot, "config/postcss.config.js")
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpg)$/i,
                    type: "asset/resource",
                },
                {
                    test: /\.svg$/,
                    exclude: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                    use: ['babel-loader', 'react-svg-loader'],
                },
                {
                    test: /\.svg$/,
                    include: path.resolve(__dirname, 'node_modules', 'font-awesome'),
                    use: [{
                        loader: 'file-loader',
                        options: {
                            jsx: true,
                        },
                    }],
                },
                {
                    test   : /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader : 'file-loader'
                }
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        format: {
                            comments: false,
                        },
                    },
                }),
            ]
        },
        performance: {
            hints: false,
        }
    },
];
