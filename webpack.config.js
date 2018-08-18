var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "./assets/css/[name].css"
});

module.exports = {
	entry: {
		main: [
			'./assets/scss/main.scss',
			'./assets/js/base.js'
		]
	},
	output: {
		filename: "./assets/js/[name].js"
	},
	module: {
       rules: [{
           test: /\.scss$/,
           use: extractSass.extract({
               use: [{
                   loader: "css-loader"
               }, {
                   loader: "sass-loader",
                   options: {
                    }
               }],
               fallback: "style-loader"
           })
	   }, {
           test: /^(?!.*(\.scss|\.css|\.js|\.vue))/,
           use: [{
               loader: "url-loader"
           }]
       }]
	},
	plugins: [
		extractSass
	]
};
