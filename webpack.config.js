import path from "path";

export default {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        loaders: [ 'babel-loader' ]
      },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ]
  },
  resolve: {
    extensions: [ ' ', '.js' ],
  },
}










// const merge = require('webpack-merge');
//
// const parts = require('./webpack.parts');

// const PATHS = {
//     app: path.join(__dirname, 'src/index.js'),
//     build: path.resolve(__dirname, 'build'),
// };
//
// const commonConfig = merge([
//     {
//         entry: {
//             app: PATHS.app,
//         },
//         output: {
//             path: PATHS.build,
//             filename: 'bundle.js',
//             publicPath: '/',
//         },
//         resolve: {
//             extensions: ['.js', '.jsx']
//         },
//         plugins: [
//             new HtmlWebpackPlugin({
//                 title: 'Todo React SQL',
//             }),
//         ],
//     },
//     parts.lintJavaScript({ include: PATHS.app }),
//     parts.loadCSS(),
//     parts.loadBabel({ include: PATHS.app, exclude(path) {return path.match(/node_modules/);} }),
// ]);
//
// const productionConfig = merge([
//
// ]);
//
// // const developmentConfig = merge([
// //     parts.devServer({
// //         host: process.env.HOST,
// //         port: process.env.PORT,
// //     }),
// // ]);
// // "nodemon --watch webpack.config.js --exec \"webpack-dev-server --env development\"",
//
//
// module.exports = (env) => {
//     if (env === 'production') {
//         return merge(commonConfig, productionConfig);
//     }
//     return merge(commonConfig, productionConfig);
// };
