let people = ["Ron", "john", "Dave"];
let iskayoComing = true;

//creation of promise

const kayo = new Promise((resolve, reject) => {
  //require 2s for to complete the promise
  setTimeout(() => {
    if (iskayoComing) {
      resolve("Kayo Arrived");
    } else {
      reject("Kayo is sick and can not bake a cake");
    }
  }, 3000);
});
//ES5 way of consuming
// const party = async () => {
//   //consume promise
//   kayo
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log("paty is started.........");
//   //or
//   prople.forEach((p) => console.log(p + "arrived."));
// };
// party();

//es6

const party_ES6 = async () => {
  try {
    // Execution "pauses" here until the promise settles
    const res = await kayo;
    console.log(res);
  } catch (err) {
    // If the promise rejects, it jumps straight here
    console.log("Caught error:", err);
  }
  // This runs after everything else is done
  console.log("Party is starting...");
  people.forEach((p) => console.log(p + " arrived."));
};
party_ES6();
