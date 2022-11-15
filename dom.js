const producto = [];

class NewProduct {
  constructor(id, name, price, size) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.size = size;
  }
}

const remera = new NewProduct(1, "Remera", 700, "L");
producto.push(remera);
const bermuda = new NewProduct(2, "Bermuda", 600, "L");
producto.push(bermuda);
const buzo = new NewProduct(3, "Buzo", 800, "L");
producto.push(buzo);
const campera = new NewProduct(4, "Campera", 1000, "L");
producto.push(campera);
const pantalon = new NewProduct(5, "Pantalon", 850, "L");
producto.push(pantalon);

const selectProd = document.getElementById("lista")
producto.forEach(elemento=>{
    const optionProd = document.createElement("option");
    optionProd.innerText = `${elemento.name} : $${elemento.price}`
    optionProd.setAttribute("id", `${elemento.id}`)
    selectProd.append(optionProd);
})

const carrito = [];
const botonIngresar = document.getElementById("ingresarProd");
const finalizarCompra = document.getElementById("finalizar");

botonIngresar.onclick = () => {
const indexProd = selectProd.selectedIndex;
const productoSeleccionado = producto[indexProd];
carrito.push(productoSeleccionado);
}

finalizarCompra.onclick = () => { 
let total = 0;
carrito.forEach(prod=>{
  total = total + prod.price
})
alert 
(`Elegiste ${carrito.length} productos y el total de la compra es de ${total}`);
}