var diryJ, dirxJ, jog, velJ, pjx, pjy;
var tamTelaW, tamTelaH;
var jogo;
var frames;

function teclaDw() {
  var tecla = event.keyCode;
  if (tecla == 38) {
    // CIMA
    diryJ = -1;
  } else if (tecla == 40) {
    diryJ = 1;
    // BAIXO
  } else if (tecla == 37) {
    dirxJ = -1;
    // ESQUERDA
  } else if (tecla == 39) {
    dirxJ = 1;
    // DIREITA
  }
  if (tecla == 32) {
    //ESPAÇO
    //TIRO
    atira(pjx+17, pjy);
  }
}

function teclaUp() {
  var tecla = event.keyCode;
  if (tecla == 38 || tecla == 40) {
    diryJ = 0;
  } else if (tecla == 39 || tecla == 37) {
    dirxJ = 0;
  }
}

function atira(x, y) {
  var t = document.createElement("div");
  var att1 = document.createAttribute("class");
  var att2 = document.createAttribute("style");
  att1.value = "tiroJog";
  att2.value = "top:" + y + "px; left:" + x + "px";
  t.setAttributeNode(att1);
  t.setAttributeNode(att2);
  document.body.appendChild(t);
}

function controlaJogador() {
  pjy += diryJ * velJ;
  pjx += dirxJ * velJ;
  jog.style.top = pjy + "px";
  jog.style.left = pjx + "px";
}

function gameLoop() {
  if (jogo) {
    //funcoes de controle
    controlaJogador();
  }
  frames = requestAnimationFrame(gameLoop);
}

function inicia() {
  jogo = true;
  //Ini tela
  tamTelaH = window.innerHeight;
  tamTelaW = window.innerWidth;

  //Ini jogador
  dirxJ = diryJ = 0;
  pjx = tamTelaW / 2;
  pjy = tamTelaH / 2;
  velJ = 5;
  jog = document.getElementById("navJog");

  console.log("jog exist? " + jog);
  jog.style.color = "red";
  jog.style.top = pjy + "px";
  jog.style.left = pjx + "px";

  gameLoop();
}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);
