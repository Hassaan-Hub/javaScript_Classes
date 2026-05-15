// Generators Function:

// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = generatorFunction();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());



// Classes:

class student{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    greet(){
        console.log(`hello ${this.name}`);
        
    }
}

// let result = new student("hassaan", 19)
// result.greet("ali")
// console.log(result);


// let obj = {
//     name: "hammad",
//     age: 20,
// }
// let obj1 = {
//     name: "hassaan",
//     age: 19,
// }

// obj.__proto__ = obj1



// Array methods:


// Array method:
// map()      == > return new array 
// forEach()  == > does not return new array
// concat()   == > return new array and merge two or more arrays 
// filter()   == > return new array and filter the elements based on condition
// find()     == > return first element that satisfies the condition 
// reduce()   == > return single value by applying a function on each element of the array  
// some()       == > return true if at least one element satisfies the condition
// every()      == > return true if all elements satisfy the condition
// includes()   == > return true if the element is found in the array


// let arr = ["hello", 123, "smit", false]

// let res = arr.map((val, idx)=>{
//   // console.log(val, idx);
//   return val
// })

// console.log(res);


// arr.forEach((val, idx)=>{
//   console.log(val, idx);
//   // return val
// })

// let arr = ["hello", 123, "smit", false, "hello"]
// let arr = ["hello", "smit", "world"]

// let res = arr.filter((val, idx)=>{
//   // console.log(val, idx);
//   return typeof val == "string"
// })

// console.log(res);

// let res = arr.find((val, idx)=>{
// //   console.log(val, idx);
//   return typeof val == "string"
// })

// console.log(res);

// let res = arr.some((val, idx)=>{
//   return val == "world"     //  false
// })
// console.log(res);

// let res = arr.every((val, idx)=>{
//   return typeof val == "string"
// })
// console.log(res);


// let arr = ["hello", 123, "smit", false, "hello"]

// let res = arr.includes("world")
// console.log(res);


// var num = [1, 2, 4, 6, 8, 9]

// let data = num.reduce((a , b) => {
// //   console.log(a + b);
//   return a + b
// })
// console.log(data);


// 1. 1 + 2 = 3
// 2. 3 + 4 = 7
// 3. 7 + 6 = 13
// 4. 13 + 8 = 21
// 5. 21 + 9 = 30