// Client -> API -> Server -> Database
// Asynchronous vs Synchronous:
// Callback function:
// Promise:
// Api integration:
// fetch:



// ============= Asynchronous vs Synchronous =============


// console.log("hello");

// let obj;

// setTimeout(() => {
//     obj = {
//         name: "ali",
//         age: 12
//     }
// }, 1000);

// setTimeout(() => {
//     console.log(obj);
// }, 1100);




// ============= Callback function =============


// let calBacFun = ((callBack) => {
//     setTimeout(() => {
//         obj = {
//             name: "hassaan",
//             age: 18
//         }
//         callBack(obj)
//     }, 2000);
// })

// let result = ((data) => {
//     console.log(data);
// })

// calBacFun(result)




// ============= Promise =============


// let prom = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             obj = {
//                 name: "welcome",
//                 greet: "hello"
//             }
//             resolve("successfully resolved")
//         }, 1000);
//     })
// }

// prom()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })




// ========== Fetch =============== 


// fatch("https://jsonplaceholder.typicode.com/posts")




// =========== Api integration ==========

// let body = document.querySelector("body");
// let mode = document.getElementById("mode");

// let currMode = "light"

// mode.addEventListener("click" , ()=>{
//     if (currMode === "light"){
//         currMode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }else{
//         currMode = "light"
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currMode);
// })


let theme = document.getElementById("theme");
let body = document.querySelector("body")
theme.addEventListener("change", ()=>{
    body.className = theme.value;
})


fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        console.log(data);
        data.forEach((val) => {
            let imgSrc = `https://i.pravatar.cc/150?img=${val.id}`;
            return document.getElementById("users").innerHTML += `
                <div class="card">
                    <div><img class="card-img" src="${imgSrc}" alt="${val.name}"></div>
                    <h3>${val.name}</h3>
                    <h3>${val.email}</h3>
                    <h3>${val.phone}</h3>
                </div>
            `

        });
    })
    .catch((err) => {
        console.log(err);
    })