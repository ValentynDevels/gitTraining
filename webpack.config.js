const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
module.exports = {
  entry: [__dirname + "/src/index.js", __dirname + "/src/style.scss"], // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: {  // where we defined file patterns and their loaders
      rules: [ 
        {
            test: /\.(sass|scss)$/,
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '/css/[name].css'
                  }
                 },
                 {
                   loader: 'extract-loader'
                 },
                 {
                   loader: 'css-loader?-url'
                 },
                 {
                   loader: 'postcss-loader'
                 },
                 {
                   loader: 'sass-loader'
                 }
               ],
          },
      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/html/index.html",
          inject: 'body'
      })
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './dist',  //source of static assets
      port: 7700, // port to run dev-server
  } 
};