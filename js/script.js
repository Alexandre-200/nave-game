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

function controlaJogador() {
  //pjy+=
}

function gameLoop() {
  if (jogo) {
    //funcoes de controle
  }
  frames = requestAnimationFrame(gameLoop);
}

function inicia() {
  jogo = false;
  //Ini tela
  tamTelaH = window.innerHeight;
  tamTelaW = window.innerWidth;

  //Ini jogador
  dirxJ = diryJ = 0;
  pjx = tamTelaW / 2;
  pjy = tamTelaH / 2;
  velJ = 5;
  jog = document.getElementById("naveJog");
  jog.style.top = pjy + "px";
  jog.style.left = pjx + "px";
}

window.addEventListener("load", inicia);
document.addEventListener("keydown", teclaDw);
document.addEventListener("keyup", teclaUp);
