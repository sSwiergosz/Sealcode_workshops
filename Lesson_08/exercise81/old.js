console.log("start");
const anArray = new Array(-1); // RangeError
anArray.push("0");
console.log(anArray);

const width = 12;
console.log(width * height); // ReferenceError

let list = ['element 1', 'Element 2' // SyntaxError
'Element 3'];
console.log(list[0].upperCase()); // TypeError

width.toFixed(30); //RangeError

const user = {
    first name: "Bartek", // SyntaxError
    lastName: "Nowak",
    age: 25
}
console.log(user.age.tostring()); // TypeError
