//any 是双向的，任意值可以赋值any, any可以赋值任意值
let a1:any =1;

let a2:string = a1;

//unknown 是单向的，任意值可以赋值unknown, unknown不可以赋值任意值
//防止污染其他变量，使用unknown
let b1:unknown =1;

let b2:string = b1;