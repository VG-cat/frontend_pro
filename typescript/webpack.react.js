const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        index : './src/index.ts',
        react : './src/reactHtml.tsx'
    },
    output :{
        path : __dirname + '/dist',
        filename : '[name].bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.tsx?$/,
                use : [
                    'ts-loader',
                ],
                exclude : /node_modules/
            }
        ]
    },
    mode:'development',
    resolve : {
        extensions : ['.ts','.js','.tsx']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template : __dirname + '/template.html'
        })
    ],
    devServer:{
        static : __dirname + '/dist',
        port : 8080,
        hot:true,
        open:true,
    }
}