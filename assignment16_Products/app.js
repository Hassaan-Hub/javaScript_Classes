var products = {
    cars: {
        honda: {
            model: "Civic",
            year: 2026,
            color: "black",
            img: "images/civic2026.avif"
        },
        kia: {
            model: "Sportage",
            year: 2026,
            color: "white",
            img: "https://kiamotors-portqasim.com/wp-content/uploads/2020/07/Kia-Sportage-Alpha-1-1-798x466.jpg"
        },
        toyota: {
            model: "Grendis",
            year: 2022,
            color: "blue",
            img: "https://imgcdn.zigwheels.pk/large/gallery/color/14/114/toyota_corolla-altis-grande_strong_blue.jpg"
        }
    },
    bikes: {
        royalEnfield: {
            model: "Royal Enfield Classic 350",
            year: 2023,
            color: "red",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-Mb8zjzIImAk3qr5DrWVSu42Vczsz5PxGA&s"
        },
        yamaha: {
            model: "Yamaha YZF R15",
            year: 2024,
            color: "blue",
            img: "https://i.pinimg.com/736x/57/15/de/5715defee6441aa788b15884a1467718.jpg"
        },
        suzuki: {
            model: "Suzuki Gixxer",
            year: 2022,
            color: "black",
            img: "https://media.istockphoto.com/id/594474448/photo/suzuki-gsx-r750.jpg?s=612x612&w=0&k=20&c=uCwfSf44Rya81hZyyxPTqVD815KOSpQ9uZSuZ4WUJ5Y="
        }
    },
    phones: {
        summsung: {
            model: "Galaxy S26 Ultra",
            year: 2026,
            color: "black",
            img: "https://phonebolee.com/images/Samsung-Galaxy-S26-Ultra.jpg"
        },
        apple: {
            model: "iPhone 17 Pro max",
            year: 2026,
            color: "orange",
            img: "https://www.mobiledokan.com/media/apple-iphone-17-pro-max-cosmic-orange-official-image.webp"
        },
        google: {
            model: "Pixel 10 Pro",
            year: 2026,
            color: "blue",
            img: "https://eezepc.com/wp-content/uploads/2025/09/google1.webp"
        }
    }
}



// -------------------------------------------------------------------- cars products.

var main = document.getElementById("cards");

var proMain1 = document.createElement("div");
proMain1.style.display = "flex";
proMain1.style.flexWrap = "wrap";
proMain1.style.justifyContent = "space-around";
proMain1.style.gap = "20px";
proMain1.style.marginTop = "30px";

var product1 = document.createElement("div");
var img1 = document.createElement("img");
var p1 = document.createElement("p");

product1.style.backgroundColor = "#686dab";
product1.style.borderRadius = "15px";
product1.style.width = "300px";
product1.style.height = "250px";
product1.style.verticalAlign = "top";
img1.src = products.cars.honda.img;
img1.width = 300;
img1.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p1.innerText = products.cars.honda.model + " - " + products.cars.honda.year + " - " + products.cars.honda.color;
p1.style.fontSize = "20px";
p1.style.fontWeight = "bold";
p1.style.color = "white";
p1.style.textAlign = "center";


product1.appendChild(img1);
product1.appendChild(p1);
proMain1.appendChild(product1);
main.appendChild(proMain1);


// Second Product Card
var product2 = document.createElement("div");
var img2 = document.createElement("img");
var p2 = document.createElement("p");

product2.style.backgroundColor = "#686dab";
product2.style.borderRadius = "15px";
product2.style.width = "300px";
product2.style.height = "250px";
product2.style.verticalAlign = "top";
img2.src = products.cars.kia.img;
img2.width = 300;
img2.height = 200;
img2.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p2.innerText = products.cars.kia.model + " - " + products.cars.kia.year + " - " + products.cars.kia.color;
p2.style.fontSize = "20px";
p2.style.fontWeight = "bold";
p2.style.color = "white";
p2.style.textAlign = "center";

product2.appendChild(img2);
product2.appendChild(p2);
proMain1.appendChild(product2);
main.appendChild(proMain1);

// Third Product Card
var product3 = document.createElement("div");
var img3 = document.createElement("img");
var p3 = document.createElement("p");

product3.style.backgroundColor = "#686dab";
product3.style.borderRadius = "15px";
product3.style.width = "300px";
product3.style.height = "250px";
product3.style.verticalAlign = "top";
img3.src = products.cars.toyota.img;
img3.width = 300;
img3.height = 200;
img3.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
p3.innerText = products.cars.toyota.model + " - " + products.cars.toyota.year + " - " + products.cars.toyota.color;
p3.style.fontSize = "20px";
p3.style.fontWeight = "bold";
p3.style.color = "white";
p3.style.textAlign = "center";

product3.appendChild(img3);
product3.appendChild(p3);
proMain1.appendChild(product3);
main.appendChild(proMain1);




// -------------------------------------------------------------------- bikes products.

// var proMain2 = document.createElement("div");
// proMain2.style.display = "flex";
// proMain2.style.justifyContent = "space-around";
// proMain2.style.gap = "20px";
// proMain2.style.marginTop = "30px";
// var product4 = document.createElement("div");
// var img4 = document.createElement("img");
// var p4 = document.createElement("p");

// product4.style.backgroundColor = "#686dab";
// product4.style.borderRadius = "15px";
// product4.style.width = "300px";
// product4.style.height = "250px";
// product4.style.verticalAlign = "top";
// img4.src = products.bikes.honda.img;
// img4.width = 300;
// img4.style.borderRadius = "10px" + " " + "10px" + " " + "0px" + " " + "0px";
// p4.innerText = products.bikes.royalEnfield.model + " - " + products.bikes.royalEnfield.year + " - " + products.bikes.royalEnfield.color;
// p4.style.fontSize = "20px";
// p4.style.fontWeight = "bold";
// p4.style.color = "white";
// p4.style.textAlign = "center";


// product4.appendChild(img4);
// product4.appendChild(p4);
// proMain1.appendChild(product4);
// main.appendChild(proMain1);


