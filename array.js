let colors=["red","blue"];
console.log(colors[1]);
console.log(colors.length);
colors.push("green");
console.log(colors);
// add element in starting index
colors.unshift("pink");
colors[0]="black"
console.log(colors);
colors.unshift("pink");
console.log(colors);
//delete last element
colors.pop();
console.log(colors);
// delete first element
colors.shift()
console.log(colors);
// finding index of a value in array
console.log(colors.indexOf("blue"));


// Array of object
const fruits = [
    {name:"apple",price:200},
{name: "orange", price:150},
{name:"banana",price:100}]
console.log(fruits[2].name);
let veg =["potato","onion","tomato"]
veg.splice(2,0,"brinjal","chilli")
console.log(veg);
veg.splice(2,2)
console.log(veg);