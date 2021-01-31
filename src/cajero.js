class Billetes {
  constructor(v, c){
    this.valor = v;
    this.cantidad = c;

    this.imagen = new Image;
    this.imagen.src = imagen[this.valor];
  }
}

var imagen  = [];
imagen[100] = "img/billetes-100.jpg";
imagen[50] = "img/billetes-50.jpg";
imagen[20] = "img/billetes-20.jpg";
imagen[10] = "img/billetes-10.jpg";
imagen[5] = "img/billetes-5.jpg";
imagen[1] = "img/billetes-1.jpg";

var caja = [];
var entregado = [];
var papeles = 0;
var div = 0;
var dinero = 0;

caja.push(new Billetes(100, 5));
caja.push(new Billetes(50, 10));
caja.push(new Billetes(20, 30));
caja.push(new Billetes(10, 10));
caja.push(new Billetes(5, 40));
caja.push(new Billetes(1, 50));

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);

function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else{
        papeles = div;
      }
      entregado.push(new Billetes(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }
  if (dinero > 0) {

    resultado.innerHTML = "<br>" + "No tengo disponible la cantidad solicitada";
  }
  else{
    for (var e of entregado) {
      if (e.cantidad > 0) {
        let h = 0
        while (h < e.cantidad) {
          resultado.innerHTML += `<img src=${imagen[e.valor]} />`;
          resultado.innerHTML += "<br />";
          h++
        }
      }
    }
  }
}
