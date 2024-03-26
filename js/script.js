const square = document.querySelector(".square");
console.log(square.offsetLeft, "left");
console.log(square.offsetTop, "top");

document.addEventListener("keydown", function(e) {
    console.log(square.offsetLeft, "left");
    console.log(square.offsetTop, "top");


    if(e.code === "ArrowDown" && square.style.top != "280px"){
        square.style.top = `${square.offsetTop + 20}px`;
        console.log(square.style.top, "top")
    } else{
        console.log("sei arrivato alla fine");
    }

// 
    if(e.code === "ArrowUp" && square.style.top > "0px"){
        square.style.top = `${square.offsetTop - 20}px`;
        console.log(square.style.top, "top")
    }

    if(e.code === "ArrowRight" && square.style.left != "280px"){
        square.style.left = square.offsetLeft + 20 + "px";
        console.log(square.style.left, "left")
    }

    if(e.code === "ArrowLeft" && square.style.left > "0px"){
        square.style.left = square.offsetLeft - 20 + "px";
        console.log(square.style.left, "left")
    }

});