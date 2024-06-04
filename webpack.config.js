const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    publicPath: 'https://dev.visionlighter.com/'
  },
  target: 'web',
  devServer: {
    historyApiFallback: true,
    port: '5000',
    static: {
      directory: path.join(__dirname, 'public')
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    open: true,
    hot: true,
    liveReload: true,
    allowedHosts: 'all',
    // server: {
    //   type: 'http'
    // },
    // server: {
    //   type: 'https',
      // options: {
      //   minVersion: 'TLSv1.1',
      //   key: fs.readFileSync('SSL/visionlighter.site.key'),
      //   pfx: fs.readFileSync('SSL/visionlighter.site.pfx'),
      //   cert: fs.readFileSync('SSL/visionlighter.site.crt'),
      //   ca: fs.readFileSync('SSL/certs/visionlighter.pem'),
      //   passphrase: '',
      //   requestCert: true,  
      // }
    // },
    // proxy: [
    //   {
    //     context: ['/api'],
    //     target: 'https://visionlighter.dev:8443',
    //     secure: false
    //   }
    // ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader', 
      },
      {
        test: /\.(sass|css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(less)$/,
        use: [ 'less-loader' ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
};