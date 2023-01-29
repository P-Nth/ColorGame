let gueser = document.getElementById("colorcode");
let display = document.querySelector(".autocolor");
let boxes = document.getElementsByClassName("colors");
let blockColor = Array.from(document.getElementsByClassName("colors"));
let num = 9;
let bgColor, randomColor, targetColor;

function random(RGB) {
  return Math.floor(Math.random() * RGB);
}

function generateRandom() {
  for (let i = 0; i < num; i++) {
    return `RGB(${random(255)}, ${random(255)}, ${random(255)})`;
  }
}

function displayRandom() {
  let colorBlock = "";
  for (let i = 0; i < num; i++) {
    colorBlock += `<div id="colors" class='colors' ></div>`;
  }
  return colorBlock;
}

display.innerHTML = [displayRandom()];

function mapColors() {
  display.innerHTML = [displayRandom()];
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = generateRandom();
  }
  bgColor = boxes[targetColorSelector()].style.backgroundColor;
  $(".colors").click(function () {
    if (this.style.backgroundColor == bgColor) {
      correctColor();
    } else {
      this.style.visibility = "hidden";
      document.getElementById(
        "winchapel"
      ).innerHTML = `<p id="loose">Try Again mate!</p>`;
      document.getElementById("loose").style.visibility = "visible";
    }
  });
}

function targetColorSelector() {
  randomColor = Math.floor(Math.random() * num);

  for (let i = 0; i < boxes.length; i++) {
    if (i == randomColor) {
      targetColor = gueser;
      targetColor.innerHTML = boxes[i].style.backgroundColor;
    }
  }
  return randomColor;
}

function correctColor() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = bgColor;
    boxes[i].style.visibility = "visible";
    document.getElementById(
      "winchapel"
    ).innerHTML = `<p id="win">Impressive</p>`;
    document.getElementById("win").style.visibility = "visible";
  }
}
