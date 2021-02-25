const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://sample.precisiongenes.com.cn/api',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            },
            onProxyReq (proxyReq, req) {
                // 将本地请求的头信息复制一遍给代理。
                // 包含cookie信息，这样就能用登录后的cookie请求相关资源
                /*Object.keys(req.headers).forEach(function (key) {
                    if (key==='cookie'){
                        proxyReq.setHeader(key, 'cookie')
                    }else {
                        proxyReq.setHeader(key, req.headers[key])
                    }

                })*/
                // 代理的host 设置成被代理服务的，解决跨域访问
            },
        }));
};
