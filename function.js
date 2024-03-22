// function
function add(a,b){
    let c = a+b;
    console.log(c);
}
add(2,3);
greet("john");
function greet(name){
    console.log("hello",name);
}
gree("jinson");
function gree(names){
    console.log("hello"+names);
}

// print ouutside function
let x=10;
let y=20;
function add(x,y){
    let z = x+y;
    return z;
}
let p = add(2,3);
console.log(p);

//  square of a number
let jk = squ(2)
function squ(s){
   let square = s*s;
   return square;
}
console.log(jk);

// fahrenheit to celsius function

let c = fa(100)
function fa(f){
    let cel = (f - 32)*5/9
    return cel;
}
console.log(c)
