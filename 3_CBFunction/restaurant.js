export const orderFood = (fooditeam, cb) =>{
    console.log("ordered"+ fooditeam);
    setTimeout(()=>{
        console.log(fooditeam+ "is reday")
        cb();
    },2000);
}