const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals')
var Config = {
    entry:['./src/index.js'],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js',
    },
    devtool: false,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module:{
        rules:[
            {
                test:[/\.svg$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                loader:"file-loader",
                options:{
                    name:"build/media/[name].[ext]",
                    publicPath:url => url.replace('/build',"")
                }
            }
            ,
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use:'babel-loader'
            },
            {
               
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader',
                    {loader:'postcss-loader',
                     options:{sourceMap:true,ident:'postcss',plugins:[require('autoprefixer')()]}
                    }
                    ],
              }
        ]
    },
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true 
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      },
    plugins:[
        new webpack.DefinePlugin({
            __isBrowser__:'true'
        }),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            filename:'[hash].css',
            chunkFilename: '[id].css' 
          }),
          new Dotenv()
    ]
}

var server = {
  entry:['./src/server.js'],
  target:'node',
  externals: [nodeExternals()],
  output:{
    path:path.resolve(__dirname),
    filename:'serverBuild.js',
    libraryTarget:"commonjs2"
},
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/(node_modules)/,
        use:'babel-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['serverBuild.js']),      
  ]
}
module.exports = [Config,server] 