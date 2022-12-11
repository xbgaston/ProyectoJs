let productos = [
    { 
        id:"Chori",
        nombre:"Tapa de Asado",
        imagen:"./img/choripan.simple.jpg",
        precio:1400
    },
    {
        id:"Chori",
        nombre:"Choripan Simple",
        imagen:"./img/choripan.simple.jpg",
        precio:700
    },
    {
        id:"Chori",
        nombre:"Choripan Completo",
        imagen:"./img/choripan.simple.jpg",
        precio:800
    },
    {
        id:"Chori",
        nombre:"Vacio",
        imagen:"./img/choripan.simple.jpg",
        precio:1700
    },
    {   id:"Chori",
        nombre:"Pollo",
        imagen:"./img/choripan.simple.jpg",
         precio:1200
    },
    {
        id:"chori",
        nombre:"Tira de Asado",
        imagen:"./img/choripan.simple.jpg",
        precio:1500
    },
    { 
        id:"chori",
        nombre:"MorciPan",
        imagen:"./img/choripan.simple.jpg",
        precio:900
    },
    {
        id:"chori",
        nombre:"Bondiola",
        imagen:"./img/choripan.simple.jpg",
        precio:1900},
]
const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
// ejem
const pedirProductos = () => {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
        },1000)
    })
    }
let productosCargados =  []
function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio>${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}"></button>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div)
    })
}
cargarProductos(productos);
pedirProductos()
    .then((res) => {
        productosCargados = res;
        console.log(productos)
})
let comprar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")

comprar.forEach(boton =>{boton.addEventListener ("click", (e) =>{
    
    const idBoton = e.currentTarget.id;
    console.log(idBoton)
    const productoAgregado = productos.find(producto => producto.id == idBoton)
    console.log(productoAgregado);
    productosEnCarrito.push(productoAgregado)
    console.log(productosEnCarrito);
    actualizarNumerito()
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
})  
})
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.length
    numerito.innerText = nuevoNumerito
}
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
    if (productosEnCarritoLS) {
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito();
    } else {
        productosEnCarrito = [];
}



//nop
/* setTimeout(()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
    })
},5000)
     */