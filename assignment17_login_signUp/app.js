const { createElement } = require("react");

var users = [];
var posts = [];
var currentUser = null;


function signup() {
    if (name.value && email.value && password.value) {
        alert("Please fill all the fields")
    } else {
        let existingUser = users.find(u => u.email.value === email.value)

        if (existingUser) {
            alert("already exist this email try a new email")
        } else {
            users.push({
                name: name.value,
                email: email.value,
                password: pass.value
            })
            alert("signup succes")

            name.value = ""
            email.value = ""
            pass.value = ""
        }
    }
}



function login() {
    let user = users.find(s =>
        s.email === lEmail.value && s.password === lPass.value
    )

    if (user) {
        currentUser = user
        postSection.style.display = "block"
        alert("Login Success")
        showPosts()
    } else {
        alert("enter valid email & password")
    }
}

function dateTime() {
    var date = new Date()
    var daye = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = String(date.getMinutes()).padStart(2, '0')
    var ampam = hour >= 12 ? "PM" : "AM"; hour = hour % 12 || 12;
    return `${month}/${daye}/${year} : ${hour}:${minute} ${ampam}`
}

function addPost() {
    posts.push({
        id: dateTime(),
        text: postInput.value
    })
    postInput.value = ""
    showPosts()
}


function showPosts(){
    var postsDiv = document.getElementById("posts")

    posts.forEach(p =>{
        var box = document.createElement("div");

        // post Date & Time
        var id = document.createElement("p")
        id.innerText = p.id;

        // post text
        var text = document.createElement("p")
        text.innerText = p.text;

        // delete button
        var delBtn = document.createElement("button")
        delBtn.innerText = "Delete";
        
    })
}
