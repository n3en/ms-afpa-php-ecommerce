const path = require("path");

config = {
    entry: "./assets/main.js",
    mode: "development",
    module: {
        rules: [
            {test: /\.css$/, use: ["style-loader", "css-loader"]},
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    output: {
        path: path.resolve(__dirname, "public/assets"),
        filename: "app.bundle.js",
        library: {
            name: "assets",
            type: "this",
        },
    }
};

module.exports = config;