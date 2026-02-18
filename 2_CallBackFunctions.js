//passing a function as parameter is called callback function
//ES5
function print(n) {
  console.log(n);
}
function calculator(n1, n2, cb) {
  var sum = n1 + n2;
  //print(sum);
  cb(sum)
}
calculator(2, 3, print);
