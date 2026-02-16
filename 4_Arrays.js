///let array_mixed = [1,"2", false,4]
let array_nums = [1, 2, 3, 4, 5];
// let square = (num) => {
//   return num * num;
// };
// let squred_nums = array_nums.map(square);
//console.log(squred_nums);
let squred_nums_correct = array_nums.map((num) => num * num); //map is exicuting this
//console.log(squred_nums);
//Filter
let age = [1, 10, 18, 20, 21, 3, 5, 28, 50];
let filtered_Age = age.filter((age) => {
  if (age >= 18) {
    return age;
  }
});
//console.log(filtered_Age);

//Reduce
let arraySpend_Februray = [
  { item: "Grocery", price: 25 },
  { item: "Clothing", price: 100 },
  { item: "Mobile", price: 250 },
  { item: "Trip", price: 500 },
];
let sum = arraySpend_Februray.reduce((prev, curr) => {
  //console.log(prev, "+", curr);

  return prev + curr.price;
}, 0);
console.log(sum);
