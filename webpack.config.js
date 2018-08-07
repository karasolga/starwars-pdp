const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
		entry: './src/index.js',
		output: {
				filename: 'main.js',
				path: path.resolve(__dirname, 'dist')
		},
		module: {
				rules: [
						{
								test: /\.(js|jsx)$/,
								exclude: /node_modules/,
								use: {
										loader: "babel-loader"
								}
						},
						{
								test: /\.html$/,
								use: [
										{
												loader: "html-loader",
												options: { minimize: true }
										}
								]
						}
				]
		},
		plugins: [
				new HtmlWebPackPlugin({
						template: "./src/index.html",
						filename: "./index.html"
				})
		]
};