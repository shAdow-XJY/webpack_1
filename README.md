# webpack_1
> 《深入浅出Webpack》 入门学习（第1章）

> 安装，简单使用webpack构建，css-loader 和 extract-text-webpack-plugin

## step One - webpack run
1. 空项目下，运行一下命令安装webpack到本项目，之后会出现node_modules目录
```
    npm i -D webpack
```
2. 新建index.html, show.js, main.js
3. webpack.config.js(!!webpack的项目都是有这个文件放在根目录下的，或者是babel.config.js)
4. 之后terminal执行以下命令，即可进行webpack打包，之后可以看到 dist/bundle.js 文件出现。
```
    node_modules/.bin/webpack
```
5. 可以运行index.html看调用结果

---

## step Two - webpack css loader
1. 运行命令安装loader
```
    npm i -D style-loader css-loader
```
2. 新建show.css文件， 在main.js（即entry入口文件中引入）引入。
3. 在webpack.config.js 添加module使用loader
4. 在terminal执行webpack打包，之后可以看到 dist/bundle.js 文件中有CSS内容
5. 运行html查看

---

## step three - webpack plugin
1. 将css文件单独出一个文件而不是一起编译在bundle.js中，运行安装plugin
```
    npm i -D mini-css-extract-plugin
```
2. 按照官网写法，在main.js引入.css文件（不是require而是import，打包结果不一样）
3. webpack.config.js配置写好plugin
4. 执行webpack构建命令，查看dist下打包的文件中有.css
5. 运行html查看是否正常

---

## step four - webpack DevServer
1. 安装devserver,启动http服务而不是本地文件预览
```
    npm i -D webpack-dev-server
```
2. web.config.js配置添加devServer；index.html修改src路径
3. 执行DevServer启动命令
```
    webpack-dev-server
```
3. webpack开启监听模式，实时预览，修改entry依赖的文件保存会实时预览(整体刷新)
```
    webpack --watch
```
4. DevServer开启模块热更新(局部刷新),也可在webpack.config.js配置
```
    webpack-dev-server --hot
```
6. 执行构建的流程总结为下面几句：
```
    node_modules/.bin/webpack
    webpack-dev-server
```
7. 运行html，并修改show.css的字体颜色，返回网页查看效果
## reference
1. 《深入浅出Webpack》——吴浩麒麟
2. [nodejs的卸载及重装](https://blog.csdn.net/strawberry_x/article/details/113648770)
3. [css-loader 打包出问题](https://zhuanlan.zhihu.com/p/92468484)
4. [Webpack 4.x已经不再支持extract-text-webpack-plugin](https://blog.csdn.net/qq_38526769/article/details/82427800)
5. [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/)
6. [查看webpack版本](https://www.csdn.net/tags/NtTakg2sOTcyMy1ibG9n.html#:~:text=%E6%9F%A5%E7%9C%8B%20%E5%BD%93%E5%89%8D%E9%A1%B9%E7%9B%AE%20webpack%E7%89%88%E6%9C%AC%20%E5%9C%A8%E9%A1%B9%E7%9B%AE%20package.json%20%E4%B8%AD%E7%9A%84%20scripts,%E8%84%9A%E6%9C%AC%E5%91%BD%E4%BB%A4%E4%B8%AD%E5%86%99%E5%85%A5%E4%BB%A5%E4%B8%8B%E5%86%85%E5%AE%B9%20%22webpack%22%3A%20%22webpack%20--version%22%20%E7%84%B6%E5%90%8E%E6%89%93%E5%BC%80%E7%BB%88%E7%AB%AF%E5%9C%A8%E9%A1%B9%E7%9B%AE%E6%A0%B9%E8%B7%AF%E5%BE%84%E4%B8%8B%E8%BF%90%E8%A1%8C%EF%BC%9A%20npm%20run%20webpack)
7. [webpack devserver contentbase改为static](https://juejin.cn/post/7085273859934388260)
8. [webpack-dev-server 出现Cannot GET/](https://blog.csdn.net/qq_35056756/article/details/120859828)