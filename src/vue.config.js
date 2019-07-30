module.exports = {
  lintOnSave: false,
  devServer: {
    open: true, // 配置自动启动浏览器
    host: 'localhost',
    port: '8080',
    before(app) {
      app.get('/api/seller', (res) => {
        res.json({
          // 这里是你的json内容
          errno: 0,
          data: '../static/data/shops.json'
        })
      })
    }
  }
}