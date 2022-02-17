// console.log(undefined == null);
// console.log(undefined === null);
// console.log("type of undefined is: " + typeof undefined);
// console.log("type of null is: " + typeof null);
// console.log(4);
// console.log([4]);


// 这俩为啥相等？？？
// https://class.imooc.com/lesson/788#mid=19778
// console.log(typeof 4);
// console.log(typeof [4]);

// 除了typeof还有instanceof来判断类型

console.log("4的类型是：" + typeof 4);
console.log("hello的类型是：" + typeof 'hello');
console.log("ture的类型是：" + typeof true);
console.log("undefined的类型是：" + typeof undefined);
console.log("null的类型是：" + typeof null);
console.log("{name: liuxin}的类型是：" + typeof {name: "liuxin"});
console.log("[1,2,3,4]的类型是：" + typeof [1,2,3,4]);

console.log("liuxin" instanceof Array);
console.log([1,2,3,4] instanceof Array);
console.log({} instanceof Object);