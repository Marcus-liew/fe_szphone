// 声明全局变量
var index = 0;

function byId(id){
    return typeof(id) === "string"? document.getElementById(id):id;
}