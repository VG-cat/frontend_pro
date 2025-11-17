type Flatterned<T> = T extends Array<infer U>  //inter做计算推断
    ? Flatterned<U>
    : T;

function flatter<T extends Array<any>>(arr: T): Flatterned<T>[] {
    return arr.reduce((acc, cur) => {
        return acc.concat(cur);
    }, [] as Flatterned<T>[]);
}

flatter([1, [2, [3, [4, [5]]]]]);

//  
type Autm = string | number | boolean;
type Nested<T> = (T | Nested<T>)[];
function flatter2<Autm>(arr: Nested<Autm>): Autm[] {
    return (
        new Array<Autm>()
        .concat(...arr.map(x => Array.isArray(x) ? flatter2(x) : x))
    );
}