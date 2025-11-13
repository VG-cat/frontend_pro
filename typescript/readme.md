- ts-node
node环境的ts的解释执行器
```
ts-node 1.ts
```

- tsc
ts的编译器，输出js文件

pnpm i ts-node tsc -g 


## babel-loader vs ts-loader
babel-loader: 背后是babel,可以编译js,增加缓存优化
ts-loader: 背后是tsc


## vue + loader:
pnpm i vue@next
pnpm i -D @vue.compiler-sfc
vue-loader: 背后是vue-template-compiler