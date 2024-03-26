const square = document.querySelector(".square");
console.log(square.offsetLeft, "left");
console.log(square.offsetTop, "top");

document.addEventListener("keydown", function(e) {
    console.log(square.offsetLeft, "left");
    console.log(square.offsetTop, "top");


    if(e.code === "ArrowDown" && square.style.top != "280px"){
        square.style.top = `${square.offsetTop + 20}px`;
    } else if(e.code === "ArrowDown" && square.style.top === "280px"){
        square.style.top = 0 + "px";
    }

    if(e.code === "ArrowUp" && square.style.top > "0px"){
        square.style.top = `${square.offsetTop - 20}px`;
    } else if(e.code === "ArrowUp" && square.style.top === "0px"){
        square.style.top = 280 + "px";
    }

    if(e.code === "ArrowRight" && square.style.left != "280px"){
        square.style.left = square.offsetLeft + 20 + "px";
    } else if(e.code === "ArrowRight" && square.style.left === "280px"){
        square.style.left = 0 + "px";
    }

    if(e.code === "ArrowLeft" && square.style.left > "0px"){
        square.style.left = square.offsetLeft - 20 + "px";
    } else if(e.code === "ArrowLeft" && square.style.left === "0px"){
        square.style.left = 280 + "px";
    }

});