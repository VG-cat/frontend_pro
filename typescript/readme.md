# 编译ts
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

# ts

```
const a: number = 1; //字面量类型
let b: number = 2;  //字符串类型
```


```
! 非空断言,跳过tsnull检查
? 可空断言,遇到null或undefined时,直接返回undifined
?? 逻辑空值合并
```