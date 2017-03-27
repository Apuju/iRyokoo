var path = require("path");
var webpack = require("webpack");

const definePlugin = new webpack.DefinePlugin({
  __DEBUG__: (process.env.npm_package_config_build_debug === true || process.env.npm_package_config_build_debug === "true")
});

const devtool = (process.env.npm_package_config_build_debug === true || process.env.npm_package_config_build_debug === "true")?"#source-map":"";

module.exports = {
  entry: {
    "main": path.join(__dirname, "app.js"),
	  "menu": path.join(__dirname, "src/menu/menuApp.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  externals:{
  },
  module:{
    loaders: [
	  {test: /\.js$/, exclude: /node_modules/, loader: "babel", query:{ presets:["es2015","react","stage-0"]}},
	  {test: /\.css$/, include: /css/, loaders: ["style","css"]},
	  {test: /.(png|gif|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000'}
	 ]
  },
  plugins: [
    definePlugin,
    new webpack.OldWatchingPlugin()
  ],
  devtool: devtool
};
