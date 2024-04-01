// take tag with class .square
const square = document.querySelector(".square");
const blocks = [];

  //creation random block
  for (let i = 0; i < 5; i++) {
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
    blocks.push(blockElem);
  }

document.addEventListener("keydown", function (e) {

  // arrow down
  if (e.code === "ArrowDown" && square.style.top != "280px") {
    square.style.top = `${square.offsetTop + 20}px`;
    // arrow down end of run
  } else if (e.code === "ArrowDown" && square.style.top === "280px") {
    square.style.top = 0 + "px";
  }

  // arrow up end of run
  if (e.code === "ArrowUp" && square.style.top > "0px") {
    square.style.top = `${square.offsetTop - 20}px`;
    // arrow up end of run
  } else if (e.code === "ArrowUp" && square.style.top === "0px") {
    square.style.top = 280 + "px";
  }

  // arrow rightn
  if (e.code === "ArrowRight" && square.style.left != "280px") {
    square.style.left = square.offsetLeft + 20 + "px";
    // arrow right end of run
  } else if (e.code === "ArrowRight" && square.style.left === "280px") {
    square.style.left = 0 + "px";
  }

  // arrow left
  if (e.code === "ArrowLeft" && square.style.left > "0px") {
    square.style.left = square.offsetLeft - 20 + "px";
    // arrow left end of run
  } else if (e.code === "ArrowLeft" && square.style.left === "0px") {
    square.style.left = 280 + "px";
  }
  // Collisioni
  // Controlliamo se la posizione corrente dello sprite collide con uno
  // dei blocchi

  // Nuova variabile

  const spriteSquare = square.getBoundingClientRect();

  for (let i = 0; i < blocks.length; i++) {
    const blockCoord = blocks[i].getBoundingClientRect();

    if (
      spriteSquare.left === blockCoord.left &&
      spriteSquare.top === blockCoord.top
    ) {
      console.warn("hit");
      blocks[i].remove();
      blocks.splice(i, 1);
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
      blocks.push(blockElem);
    }
  }
});
