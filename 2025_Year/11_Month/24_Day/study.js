
const a = [{
    name: "고",
    age: 24,
}];

const arr = [1, 5, 3, 6, 7, 8, 4, 9];
let go = arr.reduce((a,c,) =>{
    return a + c;
})



console.log(arr.some((v,i) => v > 3));

// const arr = Array(5).fill(1).map((v, i) => {return i + 1 + v});

// arr.forEach((v, i) => {
//     console.log(i, v)
// })

// console.log("====");

// const arr2 = arr.filter((v, i) => {
//     return v > 3;
// })

// console.log(arr2);
