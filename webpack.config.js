const webpack = require('webpack');
const path = require('path');
const sourcePath = path.join(__dirname, './');
const sourceOutPath = path.join(__dirname, './assets/js/');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env) {
    const nodeEnv = env && env.prod ? 'production' : 'development';
    const isProd = nodeEnv === 'production';
    const plugins = [
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv) 
            }
        }),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({ filename: 'bundle.css',disable: false, allChunks: true})

    ];

    if (isProd) {
        plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),

            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                output: {
                    comments: false,
                },
            })
        );
    }

    return {
        devtool: isProd ? 'source-map' : 'eval',
        context: sourcePath,
        entry: {
            app: [
                './assets/js/jquery-3.3.1.min.js',
                 './assets/js/bootstrap.min.js',
                 './assets/js/video.js',
                 './assets/js/aos.js',
                 './assets/js/smooth-scroll.js',
                 './assets/js/jquery.matchHeight.js',
                 './assets/js/main.js'
                ],
        },
        output: {
            path: sourceOutPath,
            filename: '[name].bundle.js',
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ],
                },
                {
                    test: /\.css/,
                    use: [{
                        loader: "css-loader" // translates CSS into CSS
                    }]
                }]
              },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve(__dirname, 'node_modules'),
                sourcePath
            ]
        },

        plugins,

        performance: isProd && {
            maxAssetSize: 50000000,
            maxEntrypointSize: 50000000,
            hints: 'warning',
        },

        stats: {
            colors: {
                green: '\u001b[32m',
            }
        },
        devServer: {
            // contentBase: './',
            historyApiFallback: false,	
            port: 4000,
            compress: isProd,
            inline: isProd, 
            hot: isProd,
            stats: {
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                // publicPath: false,
                timings: true,
                version: false,
                warnings: true,
                colors: {
                    green: '\u001b[32m',
                }
            },
        }
    };
};
