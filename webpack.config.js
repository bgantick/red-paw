const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const spawn = require('child_process').spawn;
const chalk = require('chalk');
const log = console.log;
let node;

module.exports = {
  mode: 'development',
  entry: ['./src/js/site.js', './src/sass/site.scss'],
  devtool: '#eval-source-map',
  serve: {
    port: 3001,
    clipboard: false,
    on: {
      'listening': ({ server, options }) => {
        log(chalk.bgGreen.black('Launching Apostrophe...'));
        if (node) node.kill();
        node = spawn('node', ['app.js'], {stdio: 'inherit'});
      },
      'build-finished': ({ stats, err }) => {
        if (err) {
          log.error(err.stack || err);
          if (err.details) {
            log.error(err.details);
          }
          return;
        }
        log(chalk.bgGreen.black('Build complete.'));
        if (stats.hasErrors()) {
          log(chalk.red(stats.toJson().errors));
        }
        if (stats.hasWarnings()) {
          log(chalk.yellow(stats.toJson().warnings));
        }
      }
    },
    dev: {
      writeToDisk: true,
      publicPath: '/',
      logLevel: 'silent'
    }
  },
  output: {
    path: path.resolve(__dirname, 'lib/modules/apostrophe-assets/public/'),
    filename: 'js/site.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/site.css'
    }),
    new StyleLintPlugin({
      failOnError: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
