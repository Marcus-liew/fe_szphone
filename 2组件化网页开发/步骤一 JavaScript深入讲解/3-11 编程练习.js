// 现在有两个变量，分别是a = {name: 'xm'}, b = [4]，我们不用第三个变量来调换a和b的值。
// 任务
// （1）将两个对象合并成一个对象
// （2）ab分别取相应的自己要转换成的内容
// 提示：可以将两个对象放到一个数组中

var a = {name: 'xm'},
    b = [4];

console.log("a= " + a);
console.log("b= " + b);

b.push(a);

console.log(b); // b = [ 4, { name: 'xm' } ]
a = b[0];
b = b[1];
console.log("a= " + a);
console.log("b= " + b);