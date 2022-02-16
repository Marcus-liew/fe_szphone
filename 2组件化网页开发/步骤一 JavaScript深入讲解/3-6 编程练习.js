// 现在有两个变量，分别是a = 3, b = 4，那么我们不用第三个变量来调换a和b的值。
// 任务
// （1）把a赋值为两个数的和
// （2）此时a减去b就是转换后b的值
// （3）a减去转换后的b的值就是转换后的a的值

var a = 3,
    b = 4;
console.log(a);
console.log(b);

a = a + b;  // a=7 b=4
b = a - b;  // b=7-4 =>3
a = a - b;  // a=7-3 =>4

console.log(a);
console.log(b);