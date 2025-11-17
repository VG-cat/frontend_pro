module.exports = {
    entry : {
        index : './src/index.ts'
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
                test : /\.ts$/,
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
    }
}