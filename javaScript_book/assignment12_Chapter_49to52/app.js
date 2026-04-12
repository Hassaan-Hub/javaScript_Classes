// 1. Create a signup form and display form data in your web
// page on submission.

// function sumbitButton(){
//     var input = document.getElementById("inputText").value
//     console.log(input.trim(""));
// }




// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// function readMore() {
//     var show = document.getElementById("showText")
//     var hide = document.getElementById("hideText")
//     var btn = document.getElementById("btnReadMore")

//     if(hide.style.display === "none"){
//         hide.style.display = "block"
//         show.style.display = "none"
//         btn.innerHTML = "Read Less"
//     }else{
//         show.style.display = "block"
//         hide.style.display = "none"
//         btn.innerHTML = "Read More"
//     }
// }




// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


// let table = document.getElementById("studentTable");
//     let editRowIndex = -1;

// function addStudent() {
//     let name = document.getElementById("name").value;
//     let className = document.getElementById("class").value;
//     let roll = document.getElementById("roll").value;

// if (name === "" || className === "" || roll === "") {
//     alert("Please fill all fields");
//     return;
// }

// let row = table.insertRow(-1);

//     row.insertCell(0).innerHTML = name;
//     row.insertCell(1).innerHTML = className;
//     row.insertCell(2).innerHTML = roll;
//     row.insertCell(3).innerHTML = `
//         <button onclick="editStudent(this)">Edit</button>
//         <button onclick="deleteStudent(this)">Delete</button>
//     `;

//     document.getElementById("name").value = "";
//     document.getElementById("class").value = "";
//     document.getElementById("roll").value = "";
// }

// function deleteStudent(btn) {
//     let row = btn.parentNode.parentNode;
//     row.remove();
// }

// function editStudent(btn) {
//     let row = btn.parentNode.parentNode;
//     editRowIndex = row.rowIndex;
        
//     document.getElementById("editName").value = row.cells[0].innerHTML;
//     document.getElementById("editClass").value = row.cells[1].innerHTML;
//     document.getElementById("editRoll").value = row.cells[2].innerHTML;

//     document.getElementById("editBox").style.display = "block";
// }

// function updateStudent() {
//     let name = document.getElementById("editName").value;
//     let className = document.getElementById("editClass").value;
//     let roll = document.getElementById("editRoll").value;

//     let row = table.rows[editRowIndex];

//     row.cells[0].innerHTML = name;
//     row.cells[1].innerHTML = className;
//     row.cells[2].innerHTML = roll;

//     document.getElementById("editBox").style.display = "none";
// }