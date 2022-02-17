// console.log(undefined == null);
// console.log(undefined === null);
// console.log("type of undefined is: " + typeof undefined);
// console.log("type of null is: " + typeof null);
// console.log(4);
// console.log([4]);


// 这俩为啥相等？？？
// https://class.imooc.com/lesson/788#mid=19778

console.log(typeof [4]);

var a = [1,2,3,4];
console.log(a);
console.log(a.length);
for (const aKey in a) {
    console.log(a[aKey]);
}
