const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
watch = true

module.exports = {
	target: 'node',
	node: {
		__dirname: false,
		__filename: false,
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					'ts-loader'
				]
			}
		]
	},
	externals: [nodeExternals()],
	entry: "./src/index.ts",

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
	},
	mode,
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({ "global.GENTLY": false })
	],
	watch,
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};
