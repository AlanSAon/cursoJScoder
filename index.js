let ropa = parseInt(
  prompt(
    "Elegi que te gustaria comprar? 1.remera - 2.bermuda - 3.buzo - 4.campera"
  )
);
let seguirComprando = true;
let total = 0;
let pregunta;

class NewProduct {
  constructor(id, name, price, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.size = size;
  }
}

const remera = new NewProduct(1, "remera", 700, "L");
const bermuda = new NewProduct(2, "bermuda", 600, "L");
const buzo = new NewProduct(3, "buzo", 800, "L");
const campera = new NewProduct(4, "campera", 1000, "L");

while (seguirComprando === true) {
  if (ropa === remera.id) {
    total = total + remera.price;
  } else if (ropa === bermuda.id) {
    total = total + bermuda.price;
  } else if (ropa === buzo.id) {
    total = total + buzo.price;
  } else if (ropa === campera.id) {
    total = total + campera.price;
  }
  pregunta = parseInt(prompt("Quieres seguir comprando? 1.Si - 2.No"));
  if (pregunta === 1) {
    ropa = parseInt(
      prompt(
        "Elegi que te gustaria comprar? 1.remera - 2.bermuda - 3.buzo - 4.campera"
      )
    );
  } else {
    seguirComprando = false;
  }
}

let compraConDescuento = descuento(total);
alert(`El total de tu compra es ${compraConDescuento}`);

function descuento(valor) {
  let descuento = 0;
  if (valor <= 900) {
    descuento = 5;
  } else if (valor > 900 && valor <= 2000) {
    descuento = 10;
  } else {
    descuento = 15;
  }

  let valorDescuento = valor * (descuento / 100);
  let valorFinal = valor - valorDescuento;
  return valorFinal;
}
