const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    entry : {
        index : './src/index.ts',
        react : './src/reactHtml.tsx',
        vue : './src/app.vue'
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
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : [
                            '@babel/preset-env',
                            '@babel/preset-typescript-vue3',
                            '@babel/preset-typescript'     
                        ],
                    }
                },
                exclude : /node_modules/
            },
            {
                test : /\.vue$/,
                use : {
                    loader : 'vue-loader',
                },
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
        }),
        new VueLoaderPlugin()
    ],
    devServer:{
        static : __dirname + '/dist',
        port : 8080,
        hot:true,
        open:true,
    }
}