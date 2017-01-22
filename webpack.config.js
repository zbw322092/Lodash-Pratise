module.exports = {
	entry: './.internal/entry.js',
	output: {
		path: __dirname + '/dest',
		filename: "bundle.js"
	},
	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	}
}