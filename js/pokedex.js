const COVERWIDTH = 379;

const canvas = document.getElementById("pokedex");
const context = canvas.getContext("2d");


const image = document.getElementById("img");
const back = document.getElementById("back");
const front = document.getElementById("front");
const pokemon = document.getElementById("pokemon");

context.drawImage(image, 0,0);
context.drawImage(back, 0,0);

function fillDescription(data){

  let x=460;
  let y=180;
  const maxLineLengthE = 22;
  const maxLineLengthD = 25;

  context.fillStyle = "white";

  context.font = "20pt Courier New";
  context.fillText(data.name, x, y); y+=40;

  context.font = "12pt Courier New";
  context.fillText("Typ:", x, y); y+=20;
  context.fillText(data.type, x, y); y+=40;

  context.fillText("Ewolucja:", x, y); y+=20;
  for(let i=0;i<data.evolution.length;i++) {
    //context.fillText((i+1) + ". " + data.evolution[i], x, y); y+=20;

    const wordsE = data.evolution[i].split(" ");
    let lineE = (i+1) + ". ";
    for(let j=0;j<wordsE.length;j++) {
      lineE+=wordsE[j]+" ";

      if(j===wordsE.length-1 || lineE.length+wordsE[j+1].length>maxLineLengthE) {
        context.fillText(lineE, x, y); y+=20;
        lineE="   ";
      }
    }
  } y+=20;

  context.font = "10pt Courier New";
  const wordsD = data.description.split(" ");
  let lineD = "";
  for(let i=0;i<wordsD.length;i++) {
    lineD+=wordsD[i]+" ";

    if(i===wordsD.length-1 || lineD.length+wordsD[i+1].length>maxLineLengthD) {
      context.fillText(lineD, x, y); y+=20;
      lineD="";
    }
  }

}

let toLeft = 2;
let cover_width = 379;

let opened = false;
let busy = false;



let isBack = true;
function openLoop() {

  let fracPI = 0;

  const card = game.lastCard;
  const pokemonNumber = card.id;
  pokemon.setAttribute("src", "img/pokemons/images/"+(pokemonNumber)+".png");

  const openCover = setInterval(function() {

    fracPI+=0.02;
    context.clearRect(0,0,canvas.width,canvas.height);

    context.drawImage(image, 0,0);

    cover_width = Math.abs(COVERWIDTH*Math.cos(Math.PI * fracPI));

    if(isBack) {

      toLeft = Math.abs(COVERWIDTH*(1-Math.cos(Math.PI * fracPI)));
      context.drawImage(back, toLeft, 0, cover_width, 542 );

      if(fracPI>=0.5) {
        isBack=false;
      }

    } else {
      context.drawImage(front, toLeft, 0, cover_width, 542 );

      if(fracPI>=1) {
        clearInterval(openCover);

        context.drawImage(pokemon, 100, 170, 150, 150 );

        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const parsedFile = JSON.parse(this.responseText);

                const pokemonData = parsedFile.pokemons[pokemonNumber-1];
                fillDescription(pokemonData);
            }
        };

        xhttp.open("GET", "json/pokemon_data.json", true);
        xhttp.send();

        busy=false;
      }
  }
}, 5);

}

function closeLoop() {

  let fracPI = 1;

  const closeCover = setInterval(function() {
    fracPI-=0.02;
    context.clearRect(0,0,canvas.width,canvas.height);

    context.drawImage(image, 0,0);

    cover_width = Math.abs(COVERWIDTH*Math.cos(Math.PI * fracPI));

    if(!isBack) {

      context.drawImage(front, toLeft, 0, cover_width, 542 );

      if(fracPI<=0.5) {
        isBack=true;
      }

    } else {
      toLeft = Math.abs(COVERWIDTH*(1-Math.cos(Math.PI * fracPI)));
      context.drawImage(back, toLeft, 0, cover_width, 542 );

      if(fracPI<=0) {
        clearInterval(closeCover);
        slideRight();
      }
    }
  }, 5);

}

const button = document.getElementById("showPokedex");
const pokedexCover = document.querySelector(".page2__pokedex");
let leftPosition = -35;
let isHiden = true;

function slideLeft() {

  pokedexCover.style.display="flex";

  let leftSlider = setInterval(function() {

    leftPosition+=2;
    canvas.style.left = leftPosition+"%";

    if(leftPosition>=25) {
      clearInterval(leftSlider);
      openLoop();
    }
  }, 10)
}

function slideRight() {
  let rightSlider = setInterval(function() {

    leftPosition-=2;
    canvas.style.left = leftPosition+"%";

    if(leftPosition<=-35) {
      clearInterval(rightSlider);
      pokedexCover.style.display="none";

      busy = false;
    }
  }, 10)
}

button.addEventListener("click", function() {

  if(game.isPair) return;
  //console.log(clickedButtons);
  if(busy) return;
  busy = true;

  if(isHiden) slideLeft();
  else closeLoop();

  isHiden = !isHiden;
});