/* global module, __dirname */

module.exports = {
     entry: './oxpecker.js',
     output: {
         path: __dirname,
         filename: 'bookmarklet.js'
     },
     module: {
       loaders: [
         {
           test: /\.css$/,
           loader: "style-loader!css-loader"
         }
       ]
     }
 };