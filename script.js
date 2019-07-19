var cuadrito = document.getElementById("area_de_dibujo");
var btnBorrar = document.getElementById("borrar");
var papel = cuadrito.getContext("2d");
var x, y;
var boolMouseDraw;
document.addEventListener("mousedown", click);
document.addEventListener("mousemove", dibujarMouse);
document.addEventListener("mouseup", parar);
btnBorrar.addEventListener("click", borrar);

// agrego un bonus: cada vez que hagas un trazo el color será diferente.
var colorTrazo = colorAleatorio();

function colorAleatorio() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function click(evento) {
  boolMouseDraw = true;
  x = this.layerX;
  y = this.layerY;
}

function dibujarMouse(evento) {
  if(boolMouseDraw == true){
    dibujarLinea(colorTrazo, x, y, event.layerX, evento.layerY, papel);
    x = evento.layerX;
    y = evento.layerY;
  }
}

function parar() {
  boolMouseDraw = false;
  colorTrazo = colorAleatorio();
}

function borrar(){
  papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
}