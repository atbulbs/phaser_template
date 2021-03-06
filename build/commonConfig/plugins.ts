import { Plugin } from 'webpack'
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve: Function = require('../utils/resolve')
const HTMLPlugin = require('html-webpack-plugin')
const copyPlugins = require('copy-webpack-plugin')

const commonPlugins: Plugin[] = [
  new copyPlugins(
    ['sounds', 'images', 'sprites', 'spines'].map(assetsType =>
      ({
        from: `static/${ assetsType }`,
        to: `static/${ assetsType }/`,
      })
    ),
    {
      copyUnmodified: true,
    }
  ),
  new VueLoaderPlugin(),
  new HTMLPlugin({
    template: resolve('index.html'),
    filename: 'index.html',
    title: 'all in typescript',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    },
  }),
]

module.exports = commonPlugins

export {}
