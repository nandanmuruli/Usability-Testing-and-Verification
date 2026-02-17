// let name = "john";
// let lastName = "luthor";
//Template literals
//es5
// console.log("My name is " + name + "" + lastName);
// //es6
// console.log(`My name is ${name}  ${lastNamea}`);

//Ternary operators
//es5
//let age = 25;
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }
//es6
//age >= 18 ? console.log("Adult") : console.log("Minor");

//Object Destructing
// let user = {
//   f_name: "john",
//   l_name: "Müller",
//   age: 43,
// };
//es5
//let fname=user.f_name;
//let fage= user.age;
//es6
//let { f_name, age, l_name } = user;

//Spread Oparator
let n = [1, 2, 3, 4, 5];
let n2 = [6, 7, 8, 9, 10];
//es5
//for loop over both the arrays and create new array
//es6
let new_n = [...n, ...n2];

let info = ["test", "user", "ABC", "123", "1273563"];
function myBio(firstname, lastName, comapny, age, tel) {
  console.log(`${firstname}${lastName}${comapny}${age}`);
}
//es5
myBio(info[0], info[1], info[2]);
//es6
myBio(...info);
