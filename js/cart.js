let botonesEliminar = document.querySelectorAll(".boton-carrito-producto-eliminar")
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");
const botonLimpiar = document.querySelector("#carrito-acciones-vaciar");

function cargarProductosCarrito(){
if(productosEnCarrito){
contenedorCarritoProductos.innerHTML = ""
contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.remove("disabled")
contenedorCarritoAcciones.classList.remove("disabled")

productosEnCarrito.forEach(producto => {        
const div = document.createElement("div")
div.classList.add("carrito-producto")
div.innerHTML = `
<img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.nombre}"
<div class="carrito-producto-nombre">
    <h2>${producto.nombre}</h2></div><div class="carrito-producto-precio">
    <p>Precio</pl>
    <p>$${producto.precio}</p>
</div>
<button class="carrito-producto-eliminar" id="${producto.id}"><h2>Borrar</h2><i class="bi bi-trash-fill"></i></button>`;
contenedorCarritoProductos.append(div);})
} else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}
actualizarBotonesEliminar()
actualizarTotal();
}
cargarProductosCarrito()

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function eliminarDelCarrito(e) {
const idBoton = e.currentTarget.id;
const index = productosEnCarrito.findIndex(producto => producto.id == idBoton);     
productoEliminado = productosEnCarrito.splice(index, 1);
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
cargarProductosCarrito();
}
function actualizarTotal() {
const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio, 0);
total.innerText = `$${totalCalculado}`;
}
botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
productosEnCarrito.length = 0;
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); 
contenedorCarritoVacio.classList.add("disabled");
contenedorCarritoProductos.classList.add("disabled");
contenedorCarritoAcciones.classList.add("disabled");
contenedorCarritoComprado.classList.remove("disabled");
}
botonLimpiar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}