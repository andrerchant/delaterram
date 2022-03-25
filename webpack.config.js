const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = (isProd, plugins) => ({
  mode: isProd ? 'production' : 'development',
  entry: './src/js/app.js',
  devtool: isProd ? 'nosources-source-map' : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
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
        test: require.resolve('snapsvg/dist/snap.svg.js'),
        use: 'imports-loader?this=>window,fix=>module.exports=0',
      },
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
              // Prefer `dart-sass`
              implementation: require("sass"),
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
  const plugins = [];

  return config(isProd, {plugins});
};