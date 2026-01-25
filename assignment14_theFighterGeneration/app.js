var player = document.getElementById("player");
var player1 = document.getElementById("player1");

var x = 100;
var y = 300;

var x1 = 300;
var y1 = 300;

var speed = 10;
var speed1 = 10;

document.addEventListener("keydown", function (e) {

    // 🔴 Player 1 (Arrow Keys)
    if (e.key === "ArrowRight") {
        x += speed;
    }
    else if (e.key === "ArrowLeft") {
        x -= speed;
    }
    else if (e.key === "ArrowUp") {
        y -= speed;
    }
    else if (e.key === "ArrowDown") {
        y += speed;
    }

    // 🔵 Player 2 (W A S D)
    if (e.key === "d") {
        x1 += speed1;
    }
    else if (e.key === "a") {
        x1 -= speed1;
    }
    else if (e.key === "w") {
        y1 -= speed1;
    }
    else if (e.key === "s") {
        y1 += speed1;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    player1.style.left = x1 + "px";
    player1.style.top = y1 + "px";
});
