
type OBB ={
    a:string,
    b?:{
        c:string
    },
}

const test = (obj:OBB):void=>{
    console.log(obj.b!.c)  //跳过ts的 null 检查
}

test({a:'a'})