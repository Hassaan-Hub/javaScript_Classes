let fileInput = document.getElementById("fileInput");
let previweImage = document.getElementById("previweImage");
let uploadBtn = document.getElementById("uploadBtn");
let uploadedImage = document.getElementById("uploadedImage");


fileInput.addEventListener("change", () => {
    // console.log("add image");
    // console.log(fileInput.files[0]);

    const file = fileInput.files[0];
    // console.log(file);

    const reader = new FileReader()
    // console.log(reader);
    reader.readAsDataURL(file)
    // console.log(reader);


    reader.onload = (event) => {
        const fileContent = event.target.result;
        
        // console.log(fileContent);
        previweImage.src = fileContent;
        previweImage.style.display = "block";
    }

    uploadBtn.disabled = false;
})



async function uploadImage() {
    const file1 = fileInput.files[0]
    // console.log(file);

    let formate = new FormData()
    console.log(formate);

    formate.append("file", file1)
    formate.append("upload_preset", "save-practice")

    const response = await fetch("https://api.cloudinary.com/v1_1/dg4zfs5xn/image/upload",
        {
            method: "POST",
            body: formate
        }
    );
    console.log("Image uploaded successfully");


}

uploadBtn.addEventListener('click', uploadImage)