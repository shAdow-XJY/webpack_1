const path = require('path')

//import plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",

    //js执行入口文件
    entry: './src/main.js',
    output: {
        // 将依赖的模块合并输出到一个bundle.js文件中
        filename: "bundle.js",
        // 将输出文件都放到dist目录下
        path: path.resolve(__dirname, './dist'),
    },

    // step Two 使用loader
    // module: {
    //     rules: [
    //         {
    //             //正则匹配 .css 结尾的文件
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader'],
    //         }
    //     ]
    // }

    //step Three 使用plugin
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [MiniCssExtractPlugin.loader,"css-loader"]
    //         }
    //     ]
    // },
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         //从.js中提取出来的.css文件名
    //         filename: `[name]_[contenthash:8].css`,
    //     })
    // ]

    // step four
    devServer: {
        port: 8080,
        hot: true,
        //为index.html的路径
        static: {
            directory: path.join(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                //正则匹配 .css 结尾的文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }

}