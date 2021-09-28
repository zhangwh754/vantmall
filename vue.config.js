module.exports = {
  lintOnSave: false ,
  configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'components': '@/components',
              'common': '@/common',
              'network': '@/network',
              'views': '@/views',
              'store': '@/store',
          }
      }
  },
}