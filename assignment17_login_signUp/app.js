var users = [];
var posts = [];
var currentUser = null;


function signup() {
    if (name.value && email.value && password.value) {
        alert("Please fill all the fields")
    }else {
        let existingUser = users.find(u => u.email.value === email.value)
        
        if(existingUser){
            alert("already exist this email try a new email")
        }else{
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
        showPost()
    } else {
        alert("enter valid email & password")
    }
}



