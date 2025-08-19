function add(a,b){
    return a+b;
}
let res=function(a,b){
    return a-b;
}//匿名函数
var res1 = (a,b) => {
    return a*b;
}//箭头函数
console.log(add(1,2));
console.log(res(1,2));
console.log(res1(1,2));