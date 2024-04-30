function darkMode(Element) {
  let x = document.getElementById(Element);
  x.style.transition = "background-color 0.5s ease";
  x.style.backgroundColor = "#333";
}

function darkModeText(Element) {
  let x = document.getElementById(Element);
  x.style.transition = "color 0.5s ease";
  x.style.color = "#333";
}

function darkModeCard(Element) {
  let x = document.getElementById(Element);
  x.style.backgroundColor = "#333";
}

function lightMode(Element) {
  let x = document.getElementById(Element);
  x.style.transition = "background-color 0.5s ease";
  x.style.backgroundColor = "white";
}

function lightModeText(Element) {
  let x = document.getElementById(Element);
  x.style.transition = "color 0.5s ease";
  x.style.color = "white";
}

function lightModeCard(Element) {
  let x = document.getElementById(Element);
  x.style.backgroundColor = "white";
}

function transparent(Element1, Element2) {
  let x = document.getElementById(Element1);
  let y = document.getElementById(Element2);
  x.style.display = "none";
  y.style.display = "flex";
}

function backgroundWrite(Element, color) {
  let x = document.getElementById(Element);
  x.style.backgroundColor = color;
}

function heightAdjust(Element) {
  let x = document.getElementById(Element);
  if (x.style.height <= "100vh") {
    x.style.height = "auto";
  } else {
    x.style.height = "100vh";
  }
}

function visitedOrNot(Element) {
  let x = document.getElementById(Element);
  x.style.color = "black";
}

