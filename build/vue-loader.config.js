module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev,
    cssModules: {},
    // hotReload: false
    loaders: {
      // 'docs': docsLoader
    }
  }
}