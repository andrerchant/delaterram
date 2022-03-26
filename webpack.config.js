const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (isProd, plugins) => ({
  mode: isProd ? 'production' : 'development',
  entry: './src/js/app.js',
  devtool: isProd ? 'nosources-source-map' : 'source-map',
  plugins,
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.min.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sourceMap: isProd,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[hash][ext]',
        },
      },
      {
        test: /\.(mp3|ogg|mp4|webm)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/videos/[hash][ext]',
        },
      },
    ]
  }
});

module.exports = (env) => {
  console.log('Production: ', !!env.production); // true
  const isProd = env.production;
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/favicon.ico' },
        { from: './src/manifest.json' },
        { from: './src/assets/videos', to: 'assets/videos' },
        { from: './src/assets/images/icons', to: 'assets/images/icons' },
        { from: './src/assets/images/photos', to: 'assets/images/photos' },
        { from: './src/assets/images/PromoFoto_mid.jpg', to: 'assets/images' }
      ]
    }),
  ];

  return config(isProd, plugins);
};