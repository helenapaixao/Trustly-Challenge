 
export const proxy = require("http-proxy-middleware");

module.exports = function(app: { use: (arg0: any) => void; }) {
  app.use(
    proxy("/sneakers/index.json", {
      target: "https://voliveira.s3-sa-east-1.amazonaws.com",
      secure: false,
      changeOrigin: true
    })
  )
}