//ES5 syntax
//return and console
function addNumbers(num1,num2){
    var num3 = num1 + num2;
    return num3;
    //return num1+num2;
}
var sum = addNumbers(2,4);
console.log(sum);
//or
//console.log(addNumbers(2,4));

/****************************************************/
//ES6 arrow Function

let addNumbersES6 = (n1,n2)=>{
return n1+n2;
}
//or
let addNumbersES6_2 = (n1,n2) => n1+n2

addNumbersES6(5,6);
addNumbersES6_2(4,9);

//concat two strings and two arrays!--Reference assignment
