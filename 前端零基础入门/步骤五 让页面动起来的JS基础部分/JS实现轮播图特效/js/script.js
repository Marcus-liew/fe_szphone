// 声明全局变量
var index = 0;
// 上一张图片按钮
var prev = document.getElementById("prev");
// 下一张图片按钮
var next = document.getElementById("next");

// 获取总的图片个数，通过div的数量,获得的是个数组，所以通过length，获取这个数组的长度
var pics = document.getElementById("banner").getElementsByTagName("div").length;



// 添加鼠标点击，图片循环事件
next.addEventListener("click", function (){
    index++;
    if (index >= pics){
        index = 0;
    }
});



// 封装document.getElementById()函数
// function byId(id){
//     return typeof(id) === "string"? document.getElementById(id):id;
// }

// 通用事件绑定方法
// 使用的时候直接
// add_handler(next, "click", function (){alert("333")});
// 就可以了
// 本次先不用了
// function add_handler(element, type, handler){
//     if (element.addEventListener){
//         element.addEventListener(type, handler, true);
//     }else {
//         element["on" + type] = handler;
//     }
// }