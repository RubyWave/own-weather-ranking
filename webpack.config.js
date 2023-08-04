const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//to have CSS in separate files, not in JS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000
    },
    module: {
        rules: [
            //Babel compiling
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            //SCSS compiling
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            }
        ]
    },
    // pass all js files through Babel
    resolve: {
        extensions: [".*", ".js", ".jsx", ".scss"]
    }

};
