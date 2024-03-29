const path = require("path");
const  webpack  = require("webpack");
module.exports = {
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js",
    },
    mode: "development",
    target: "node",
    experiments: {
        topLevelAwait: true,
    },
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                use: ["raw-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            "NODE_ENV",
            "SECRET",
            "PORT",
            "MONGODB_URI",
            "SMTP_EMAIL",
            "SMTP_PASSWORD",
        ]),
    ],
};
