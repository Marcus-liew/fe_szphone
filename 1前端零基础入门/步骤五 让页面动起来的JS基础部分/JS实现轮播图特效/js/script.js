// 声明全局变量
var index = 0;
var timer = null;
//
var main = byId("main"), // 为了停止轮播，要拿到main
    banner = byId("banner"),
    prev = byId("prev"), // 上一张图片按钮
    next = byId("next"), // 下一张图片按钮
    pics = byId("banner").getElementsByTagName("div"), // 通过banner这个id，和div这个name，获得pics这个DOM，他是个数组
    pics_len = pics.length, // 通过length，获取这个数组的长度
    dots = byId("dots").getElementsByTagName("span"), // 通过dots这个id，和span，获得dots，他是个数组
    dots_len = dots.length, // 通过length，获取这个数组的长度

    menuContent = byId("menu-content"),
    menuItems = menuContent.getElementsByTagName("div"),
    subMenu = byId("sub-menu"),
    innerBox = subMenu.getElementsByClassName("inner-box");


subMenu.addEventListener("mouseover", function () {
    subMenu.className = "sub-menu";
});

subMenu.addEventListener("mouseout", function () {
    subMenu.className = "sub-menu hide";
});


banner.addEventListener("mouseout", function () {
    subMenu.className = "sub-menu hide";
});

menuContent.addEventListener("mouseout", function () {
    subMenu.className = "sub-menu hide";
});

// 停止轮播
function stopAutoPlay() {
    if (timer) {
        clearInterval(timer);
    }
}
// 自动轮播
function startAutoPlay() {
    timer = setInterval(function () {
        index++;
        if (index >= 3) index = 0;
        changeImg();
    }, 3000)
}

// 更改图片
function changeImg() {
    for (let i = 0; i < pics_len; i++) {
        pics[i].style.display = "none";
        dots[i].className = "";
    }
    pics[index].style.display = "block";
    dots[index].className = "active";
}

// 点击下一张【next】，图片循环
next.addEventListener("click", function () {
    index++;
    if (index >= pics_len) {
        index = 0;
    }
    changeImg();
});

// 点击上一张【prev】，图片循环
prev.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = dots_len - 1;
    }
    // console.log(index);
    // todo: 笔记，去掉类，这里得复习一下，怎么去掉类
    // pics[0].className = "";
    changeImg();
});

// 给每一个小圆点绑定事件
for (let i = 0; i < dots.length; i++) {
    dots[i].setAttribute("data-id", i);
    dots[i].addEventListener("click", function () {
        index = this.getAttribute("data-id");
        changeImg();
    })
}


for (let i = 0, idx; i < menuItems.length; i++) {
    menuItems[i].setAttribute("data-index", i);
    menuItems[i].addEventListener("mouseover", function () {
        subMenu.className = "sub-menu";
        idx = this.getAttribute("data-index");
        for (let j = 0; j < innerBox.length; j++) {
            innerBox[j].style.display = "none";
            menuItems[j].style.background = "none";
        }
        innerBox[idx].style.display = "block";
        menuItems[idx].style.background = "rgba(0,0,0,0.1)";
    });
}


// 自动开启轮播
startAutoPlay()
// 鼠标滑入 停止轮播
main.addEventListener("mouseover", stopAutoPlay);
// 鼠标滑出，继续轮播
main.addEventListener("mouseout", startAutoPlay);
// 封装document.getElementById()函数
function byId(id) {
    return typeof (id) === "string" ? document.getElementById(id) : id;
}

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
