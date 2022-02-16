// 声明全局变量
var index = 0;
// 为了停止轮播，要拿到main
var main = document.getElementById("main");

// 上一张图片按钮
var prev = document.getElementById("prev");
// 下一张图片按钮
var next = document.getElementById("next");

// 通过banner这个id，和div这个name，获得pics这个DOM，他是个数组
var pics = document.getElementById("banner").getElementsByTagName("div");
// 通过length，获取这个数组的长度
var pics_len = pics.length;
// 通过dots这个id，和span，获得dots，他是个数组
var dots = document.getElementById("dots").getElementsByTagName("span");
// 通过length，获取这个数组的长度
var dots_len = dots.length;

var timer = null;


function stopAutoPlay(){
    if(timer){
        clearInterval(timer);
    }
}


// 自动轮播
function startAutoPlay(){
    timer = setInterval(function (){
        index++;
        if (index>=3)index = 0;
        changeImg();
    }, 1000)
}


function changeImg(){
    for (let i = 0; i < pics_len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    pics[index].style.display = "block";
    dots[index].className = "active";
}


// 点击下一张【next】，图片循环
next.addEventListener("click", function (){
    index++;
    if (index >= pics_len){
        index = 0;
    }
    // console.log(index);
    // todo: 笔记，去掉类，这里得复习一下，怎么去掉类
    // pics[0].className = "";
    changeImg();
});

// 点击上一张【prev】，图片循环
prev.addEventListener("click", function (){
    index--;
    if (index <0) {
        index = dots_len-1;
    }
    // console.log(index);
    // todo: 笔记，去掉类，这里得复习一下，怎么去掉类
    // pics[0].className = "";
    changeImg();
});

// 给每一个小圆点绑定事件
for (let i = 0; i < dots.length; i++) {
    dots[i].setAttribute("data-id",i);
    dots[i].addEventListener("click", function (){
        index = this.getAttribute("data-id");
        changeImg();
    })
}

// 自动开启轮播
startAutoPlay()

// 鼠标滑入 停止轮播
main.addEventListener("mouseover", stopAutoPlay);

// 鼠标滑出，继续轮播
main.addEventListener("mouseout", startAutoPlay);




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