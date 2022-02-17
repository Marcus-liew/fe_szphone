function add(a, b){
    return a + b;
}

function fn(x){
    x.person = 'xm';
    x = function (){};
    x.person = 'xm';
}
fn(add);
console.log(add.person);