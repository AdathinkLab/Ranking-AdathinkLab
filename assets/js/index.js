
const data = [
  //Image,Name,Total Kahoot,Puntos Kahoot,Total Retos,Puntos Retos,Puntos
	["first",   "Jean Oscoso",                   2, 10, 2, 10, 20],
	["second",  "Pao Huaripayta Gonzales",       2,  6, 1,  5, 11],
	["third",   "Leyci Marleni Alarcon Machuca", 0,  0, 1,  5,  5],
	["man",     "Jean Marco Espinoza Flores",	   1,  5,	0,	0,  5],
	["girl",    "Marines Huamani",	             1,	 4,	0,	0,	4],
	["girl",    "Cielo Torres",	                 1,	 2,	0,	0,	2],
	["girl",    "Kiswari Martinez",              1,	 2,	0,	0,	2],
	["girl",    "Kriss Miñano",                  1,	 1,	0,	0,  1]
]

const path_images = "./assets/images";
const sound_bubble = document.getElementById("bubble-sound");
let current_selected = null;

document.addEventListener("DOMContentLoaded", function (event) {
  load_table();
  sound_bubble.muted = false;
});

document.getElementById("body-ranking").addEventListener("mouseout", function (event) {
    var x = event.clientX, y = event.clientY, elementMouseIsOver = document.elementFromPoint(x, y);

    if(elementMouseIsOver.localName === "th" || elementMouseIsOver.localName === "div") {
      current_selected = null
    }
});

function load_table() {
  body_ranking = document.getElementById("body-ranking");
  body_string = "";
  data.forEach((element, index) => {
    class_place = index === 0 ? "first-place" : index === 1 ? "second-place" : index === 2 ? "third-place" : "";
    
    body_string += `
    <tr class="ranking-row ${class_place}" onmouseover="play_bubble(this);" onclick="active_fireworks(${index === 0})">
      <td>
        <span>
          <img src="${path_images}/code-${element[0]}.png" class="image-position">
        </span>
      </td>
      <td>${element[1]}</td>
      <td class="has-text-centered">${element[2]}</td>
      <td class="has-text-centered">${element[3]}</td>
      <td class="has-text-centered">${element[4]}</td>
      <td class="has-text-centered">${element[5]}</td>
      <td class="has-text-centered">${element[6]}</td>
    </tr>
    `
  });
  body_ranking.innerHTML = body_string;
}

function play_bubble(me) {
  if (current_selected !== me) {
    current_selected = me;

    sound_bubble.play();

    setTimeout(() => {
      sound_bubble.pause();
      sound_bubble.currentTime = 0;
    }, 250);
  }
}

function active_fireworks(allowed) {
  if (allowed) {
    let i = 0;
    element = document.getElementById("canvas");
    element.classList.remove("display-none");
    element.classList.add("display-block");

    setTimeout(() => {
      element.classList.remove("display-block");
      element.classList.add("display-none");
      element.style.opacity = 1;
    }, 5000);

    setTimeout(() => {
      setInterval(function () {
        if (i >= 10) {
          clearInterval(k);
        } else {
          element.style.opacity = 1 - i / 10;
          i++;
        }
      }, 100);
    }, 3000);
  }
}