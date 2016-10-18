var webpack = require('webpack');
var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = {
	entry:[
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/main.js'
	],
	output:{
		path: path.join(__dirname, 'dist'),
		filename:'bundle.js',
		publicPath:'/static/'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new openBrowserWebpackPlugin({ url: 'http://localhost:8080' })
	],
	module:{
		loaders:[

			{test:/\.js$/, loader:'babel-loader', include:path.resolve(__dirname, 'src')},
			{test:/\.css$/, loader:'style!css'},
            {test:/\.vue$/, loader:'vue'}
		]
	},
	resolve:{
		extensions:['','.js','.jsx','.json','.css','.vue']
	},
	devtool:'cheap-module-source-map',

}