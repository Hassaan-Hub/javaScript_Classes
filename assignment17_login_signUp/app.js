var users = [];
var posts = [];
var currentUser = null;


function signup(){
    users.push({
        name: name.value,
        email: email.value,
        password: pass.value
    })
    alert("signup success")
}


function login(){
    let user = users.find(s =>
        s.email === lEmail.value && s.password === lPass.value
    )

    if (user) {
        currentUser = user
        postSection.style.display = "block"
        alert("Login Success")
        showPost()
    }else{
        alert("enter valid email & password")
    }
}



