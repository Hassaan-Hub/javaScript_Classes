var player = document.getElementById("player");

var x = 100;
var y = 300;
var speed = 10;

document.addEventListener("keydown", function (e) {

    if (e.key === "d") {
        x = x + speed;
    }
    else if (e.key === "a") {
        x = x - speed;
    }
    else if (e.key === "w") {
        y = y - speed;
    }
    else if (e.key === "s") {
        y = y + speed;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";
});