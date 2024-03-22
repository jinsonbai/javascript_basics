//loop statements
//for loop
for (let index = 1; index <6; index++) {
    console.log(index);
    
}

let fruits = ["apple", "orange","grapes", "orange","banana"]
// for (let index = 0; index < fruits.length; index++) {
//        console.log(fruits[index]);
// }
// for(x of fruits){
//     console.log(x);
// }
// fruits.forEach(element => {
//     console.log(element)gvgvjbh
// });

let person = {
    name:"jinson",
    age:20,
    place:"TVM",
};
// object
for (let x in person) {
    console.log(x);
}
// value
for (let x in person) {
    console.log(person[x]);
}

// while loop
let j=0
while (j<5) {
    j++;
    console.log(j);
}
let k = 0;
while (k<fruits.length) {
    console.log(fruits[k]);
    k++;
}

// do while exit controlled
let p = 1;
do {
    console.log(p);
    p++;
} while (p<6);