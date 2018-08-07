const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
		entry: './src/index.js',
		output: {
				filename: 'main.js',
				path: path.resolve(__dirname, 'dist')
		},
		devServer: {
				port: 9000
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
						},
						{
								test: /\.css$/,
								use: [
										'style-loader',
										'css-loader'
								]
						},
				]
		},
		plugins: [
				new HtmlWebPackPlugin({
						template: "./src/index.html",
						filename: "./index.html"
				})
		]
};