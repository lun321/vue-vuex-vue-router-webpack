/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-24 15:14:18
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 17:06:40
 */
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist'
   },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
    module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                'xml-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                'vue-loader'
                ]
            }
         ]
       },
       plugins: [
           new VueLoaderPlugin(),
           new CleanWebpackPlugin(),
           new HtmlWebpackPlugin({
                   title: 'Output Management'
                 })
        ] 
};