// clase producto

class Producto {
  constructor(id, nombre, precio, talle, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.talle = talle;
    this.imagen = imagen;
  }
}

// Productos
const producto1 = new Producto(1, "Remera", 700, "L", "img/fotoRemera.jpg");
const producto2 = new Producto(2, "Bermuda", 600, "L", "img/fotoBermuda.jpg");
const producto3 = new Producto(3, "Buzo", 800, "L", "img/fotoBuzo.jpg");
const producto4 = new Producto(4, "Campera", 1000, "L", "img/fotoCampera.jpg");
const producto5 = new Producto(5, "Pantalon", 850, "L", "img/fotoPantalon.jpg");

// Arreglo de productos
const productosArray = [producto1, producto2, producto3, producto4, producto5];

// Buscar elementos en el DOM

const divProductos = document.querySelector("#divProductos");

productosArray.forEach((producto) => {
  divProductos.innerHTML += `
    <div id="${producto.id}" class="card cardProducto">
    <img src="${producto.imagen}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">$${producto.precio}</p>
    <button id="${producto.id}" class="btn btn-primary">AGREGAR AL CARRITO</button>
    </div>
    </div>
    `;
});

// Carrito de compra


const botonesAgregar = document.querySelectorAll(".btn-primary");

botonesAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );

    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };
    saveLocal();
    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    console.log(carrito);
  };
});

// Finalizar compra

const botonFinalizar = document.querySelector("#finalizar");
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);
  alert(`El total de tu compra es ${totalCompra}`);
};

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
