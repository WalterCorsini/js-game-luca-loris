// take tag with class .square
const square = document.querySelector(".square");
// debug 
//show offset top and left
console.log(square.offsetLeft, "left");
console.log(square.offsetTop, "top");

document.addEventListener("keydown", function(e) {
    
    //debug
    console.log(square.offsetLeft, "left");
    console.log(square.offsetTop, "top");

    // arrow down
    if(e.code === "ArrowDown" && square.style.top != "280px"){
        square.style.top = `${square.offsetTop + 20}px`;
    // arrow down end of run
    } else if(e.code === "ArrowDown" && square.style.top === "280px"){
        square.style.top = 0 + "px";
    }

    // arrow up end of run
    if(e.code === "ArrowUp" && square.style.top > "0px"){
        square.style.top = `${square.offsetTop - 20}px`;
    // arrow up end of run
    } else if(e.code === "ArrowUp" && square.style.top === "0px"){
        square.style.top = 280 + "px";
    }

    // arrow rightn
    if(e.code === "ArrowRight" && square.style.left != "280px"){
        square.style.left = square.offsetLeft + 20 + "px";
    // arrow right end of run
    } else if(e.code === "ArrowRight" && square.style.left === "280px"){
        square.style.left = 0 + "px";
    }

    // arrow left
    if(e.code === "ArrowLeft" && square.style.left > "0px"){
        square.style.left = square.offsetLeft - 20 + "px";
    // arrow left end of run
    } else if(e.code === "ArrowLeft" && square.style.left === "0px"){
        square.style.left = 280 + "px";
    }

});

//creation random block
for(let i = 0; i < 5; i++){

    // create new element
    const blockElem = document.createElement("div");
    blockElem.classList = "block";
    // variable eight and widthrandom
    const topC = Math.floor(Math.random() * (280 / 20)) * 20;
    const leftC = Math.floor(Math.random() * (280 / 20)) * 20;

    // assign cordinates ad element
    blockElem.style.top = topC + "px";
    blockElem.style.left = leftC + "px";

    // insert new element on body
    document.querySelector(".container").append(blockElem);
}