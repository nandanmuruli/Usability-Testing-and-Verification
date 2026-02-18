let car = {
    car_name: "BMW",
    model: "x1SUV", 
    weight: 1000,
    start: () => {
        console.log("Car started");
    },
    car_details:{
        insurenceValidity: "Untill 2030",
        isFined: false,
    },
};
console.log(car.car_name);
console.log(car.car_details.isFined);
console.log(car.start());