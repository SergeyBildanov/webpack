const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules:[
            {
                test: /\.txt$/,
                use: "raw-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader"

                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new MiniCSSExtractPlugin()
    ]
}