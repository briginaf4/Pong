//variaveis bolinha
let xbolinha=200;
let ybolinha=200;
let diametro=15;

let velocidadebolinha=6;
let velocidadebolinha=6;
//variaveis minha raquete
let xRaquetejogador=5;
let yRaquetejogador=15;
let alturaRaquetejogador=10;
let larguraRaquetejogador=90

//variaveis raquete oponente
let xRaqueteOponente=385;
let yRaqueteOponente=15;
let alturaRaqueteOponente=10;
let larguraRaqueteOponente=90;

let velocidadeyOponente 



//colisao
let colidiu = false

let posicaohorizontal;//x
let posicaovertical;//y



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  mostrarbolinha();
  movimentabolinha();
  verificarColisaoRquetejogador();
  mostrarRaquetejogador();
  movimentaRaquetejogador();
  mostrarRaqueteOponente();
  movimentaRaqueteOponente();
  }
  
  
  function mostrarbolinha(){
    fill("red")
    circle(xbolinha,ybolinha,diametro)}
  


  function movimentabolinha(){
    
   xbolinha+=velocidadexbolinha;
    ybolinha+=velocidadeybolinha;
  
  }
    
    
    
    
    
  function verificacolisao(){
   if(xbolinha>width||xbolinha<0);
    {velocidadexbolinha*=-1;}
    
      if(ybolinha>height||ybolinha<0);
    {velocidadeybolinha*=-1;}
    
    
  }
  
  
  
  
  function mostrarRaquetejogador(){
    fill("blue")
  rect(xRaquetejogador,yRaquetejogador,larguraRaquetejogador,alturaRaquetejogador);
//  stroke("blue");
}

  function movimentaRaquetejogador(){
    if(keyIsDown(UP_ARROW)){
      yRaquetejogador-=10; }
    
     if(keyIsDown(DOWN_ARROW)){
      yRaquetejogador+=10; }
    
    
  }

function verificarColisaoRaquetejogador(){
  colidiu =collideRectCircle(
  xRaquetejogador,  
  yRaquetejogador,
  alturaRquetejogador,
  larguraRaquetejogador,
    xbolinha,
    ybolinha,
    diametro/2 );
  if(colidiu ==tru){
  velocidadexbolinha *=-1  
    
  }
  
}


function mostraRaqueteOponente(){
   fill("blue")
  rect(xRaqueteOponente,yRaquetejogador,larguraRaquetejogador,alturaRaquetejogador);
//  stroke("blue");
  
}
function movimentaRaqueteOponente(){
  velocidadeyOponente= Ybolinha - yRaqueteOponente-
  alturaRaqueteOponente/2 - 30;
  YRaqueteOponente += velocidadeyOponente
  
}
function verificaColisaoRaqueteOponente(){
  colidiu= collideRectCircle(
  xRaqueteOponente,
    yRaqueteOponente,
   alturaRqueteOponente,
   larguraRaqueteOponente,
  xbolinha,
    ybolinha,
    diametro/2)
  if(colidiu==true){
   velocidadexbolinha *=-1 
    
    
    
  }
  
  
  
  
  
  
  
}














