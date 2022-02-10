// function print() {
//     document.getElementById("demo").innerHTML="RUNOOB!";
// }
// setTimeout(print, 3000);

// setTimeout(function () {
//     document.getElementById("demo").innerHTML="RUNOOB!";
// }, 3000);

var num=0;
for (let i=0; i<10; i++){
    if (i==3){
        continue;
    }
    num++;
}
console.log(num);