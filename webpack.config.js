// @ts-check
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === "production";

/** @type {webpack.Configuration} */
module.exports = {
    name: 'gwillz.com',
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : 'cheap-inline-module-source-map',
    optimization: {
        splitChunks: false,
    },
    module: {
        rules: [
            {
                test: /\.(js|json|ts)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: false,
                    experimentalWatchApi: true,
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    plugins: [
        new webpack.EnvironmentPlugin(process.env),
    ],
}
