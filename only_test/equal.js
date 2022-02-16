var xm = {
    age: 29,
    score: 99
};

var xh = {
    age: 29,
    score: 99
};

var a = [1,2,3,4];
var b = [1,2,3,4];

function equal_object(a, b){
    for (let index in a) {
        if (a[index] !== b[index]){
            return false;
        }
        return true;
    }
}
console.log(equal_object(xm, xh));

function equal_array(arr_1, arr_2){
    if (arr_1.length !== arr_2.length){
        return false;
    }
    for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] !== arr_2[i]){
            return false;
        }
        return true;
    }
}
console.log(equal_array(a, b));