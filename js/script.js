// take tag with class .square
const square = document.querySelector(".square");
const containerElem = document.querySelector(".container");
const blocks = [];
const arrayPoint = [];
let punteggio = 0;

// user coordinates
square.style.top = 20 + "px";
square.style.left = 20 + "px";

//creation walls for playing field
for (let i = 0; i < blocksCoords.length; i++) {
  // create new element
  const blockElem = document.createElement("div");
  blockElem.classList = "block";
  // variable height and width
  const topC = blocksCoords[i][1];
  const leftC = blocksCoords[i][0];

  // assign cordinates ad element
  blockElem.style.top = topC + "px";
  blockElem.style.left = leftC + "px";

  // insert new element on body
  document.querySelector(".container").append(blockElem);
  blocks.push(blockElem);
}

//  insert point in container
for (let x = 8; x < containerElem.offsetWidth; x += 20) {
  for (let y = 8; y < containerElem.offsetHeight; y += 20) {
    // if coordinate point is the same of coordinate sprite, not create point
    if (x - 8 === square.offsetLeft && y - 8 === square.offsetTop) continue;

    let point = document.createElement("span");
    point.classList = "point";
    point.style.left = x + "px";
    point.style.top = y + "px";
    containerElem.append(point);
    arrayPoint.push(point);
  }
}

//  when user touch arrow of keyboard
document.addEventListener("keydown", function (e) {
  const spriteSquare = square.getBoundingClientRect();
  // arrow down
  if (e.code === "ArrowDown" && square.style.top != "280px") {
    //   remove point
    for (let i = 0; i < arrayPoint.length; i++) {
      const pointCoord = arrayPoint[i].getBoundingClientRect();

      // controll
      if (
        spriteSquare.left === pointCoord.left - 8 &&
        spriteSquare.top + 20 === pointCoord.top - 8
      ) {
        // increment points
        punteggio += 1;
        // refresh points to video
        document.getElementById("punteggio").innerHTML = punteggio;
        // remove point to video
        arrayPoint[i].remove();
        // remove point to array
        arrayPoint.splice(i, 1);
        console.log(arrayPoint.length);
      }
    }
    //   /remove point

    // move square and rotate
    square.style.transform = "rotate(90deg)";
    square.style.top = square.offsetTop + 20 + "px";
  }

  //arrowup
  if (e.code === "ArrowUp" && square.style.top > "0px") {
    //   remove point
    for (let i = 0; i < arrayPoint.length; i++) {
      const pointCoord = arrayPoint[i].getBoundingClientRect();

      // controll
      if (
        spriteSquare.left === pointCoord.left - 8 &&
        spriteSquare.top - 20 === pointCoord.top - 8
      ) {
        // increment points
        punteggio += 1;
        // refresh points to video
        document.getElementById("punteggio").innerHTML = punteggio;
        // remove point to video
        arrayPoint[i].remove();
        // remove point to array
        arrayPoint.splice(i, 1);
        console.log(arrayPoint.length);
      }
    }
    //   /remove point

    // move square and rotate
    square.style.transform = "rotate(-90deg)";
    square.style.top = square.offsetTop - 20 + "px";
  }

  // arrow right
  if (e.code === "ArrowRight" && square.style.left != "280px") {
    //  remove point
    for (let i = 0; i < arrayPoint.length; i++) {
      const pointCoord = arrayPoint[i].getBoundingClientRect();

      // controll
      if (
        spriteSquare.left + 20 === pointCoord.left - 8 &&
        spriteSquare.top === pointCoord.top - 8
      ) {
        // increment points
        punteggio += 1;
        // refresh points to video
        document.getElementById("punteggio").innerHTML = punteggio;
        // remove point to video
        arrayPoint[i].remove();
        // remove point to array
        arrayPoint.splice(i, 1);
        console.log(arrayPoint.length);
      }
    }
    //   /remove point

    // move square and rotate
    square.style.transform = "rotate(0deg)";
    square.style.left = square.offsetLeft + 20 + "px";
  }

  // arrow left
  if (e.code === "ArrowLeft" && square.style.left > "0px") {
    //   remove point
    for (let i = 0; i < arrayPoint.length; i++) {
      const pointCoord = arrayPoint[i].getBoundingClientRect();

      // controll
      if (
        spriteSquare.left - 20 === pointCoord.left - 8 &&
        spriteSquare.top === pointCoord.top - 8
      ) {
        // increment points
        punteggio += 1;
        // refresh points to video
        document.getElementById("punteggio").innerHTML = punteggio;
        // remove point to video
        arrayPoint[i].remove();
        // remove point to array
        arrayPoint.splice(i, 1);
        console.log(arrayPoint.length);
      }
    }
    //   /remove point

    // move square and rotate
    square.style.transform = "scalex(-1)";
    square.style.left = square.offsetLeft - 20 + "px";
  }

  // controll Wall Collision

  // New variable
  const spriteSquareCollision = square.getBoundingClientRect();

  for (let i = 0; i < blocks.length; i++) {
    const blockCoord = blocks[i].getBoundingClientRect();

    // remove square
    if (
      spriteSquareCollision.left === blockCoord.left &&
      spriteSquareCollision.top === blockCoord.top
    ) {
      square.remove();
      alert("Hai perso! hai totalizzato " + punteggio + " punti");
      // /remove square
    }
  }
});


// elimina pallini sul muro
for (let x = 0; x < blocks.length; x++) {
  const ciccio = blocks[x].getBoundingClientRect();
  for (let y = 0; y < blocks.length; y++) {
    const riccio = arrayPoint[y].getBoundingClientRect();
    
    if(ciccio.left === riccio.left - 8 && ciccio.top === riccio.top - 8){
             // remove point to video
             arrayPoint[y].remove();
             // remove point to array
             arrayPoint.splice(y,1);
    }
    
    
  }
}
  console.log(blocks[0].getBoundingClientRect(),"muro");
  console.log(arrayPoint[0].getBoundingClientRect(),"mangiare");