// bienvenida
alert("Bienvenido a la tienda de lautaro.");

//categorias dispoibles
const categorias = ["Zapatillas", "Remeras"];
alert("aca encontras los mejores precios: " + categorias.join(", "));

//todos los productos,si no hay stock se muestra igual,datas y precios
const productos = [
    { nombre: "Zapatillas Nike", categoria: "Zapatillas", descripcion: "Zapatillas deportivas de la marca Nike.", precio: 99.99 },
    { nombre: "Remera Adidas", categoria: "Remeras", descripcion: "Remera deportiva de la marca Adidas.", precio: 29.99 },
    { nombre: "Zapatillas Reebok", categoria: "Zapatillas", descripcion: "Zapatillas deportivas de la marca Reebok.", precio: 79.99 },
    { nombre: "Remera Puma", categoria: "Remeras", descripcion: "Remera deportiva de la marca Puma.", precio: 24.99 }
];

productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

const seleccion = prompt("Productos disponibles:\n\n" + productos.map(p => p.nombre).join("\n") + "\n\n¿Qué producto desea comprar?");

//mostrar la data del producto seleccionado.
let productoSeleccionado = null;

for (const producto of productos) {
    if (producto.nombre === seleccion) {
        productoSeleccionado = producto;
        break;
    }
}

if (productoSeleccionado) {
    const confirmacion = confirm(
        "Nombre: " + productoSeleccionado.nombre +
        "\nDescripción: " + productoSeleccionado.descripcion +
        "\nPrecio: $" + productoSeleccionado.precio.toFixed(2) +
        "\n\n¿Desea completar la compra?"
    );

    if (confirmacion) {
        const fechaEntrega = new Date();
        fechaEntrega.setDate(fechaEntrega.getDate() + 7); // Supongamos que la entrega será en 7 días.
        alert("¡Gracias por su compra! Su pedido llegará el " + fechaEntrega.toDateString() + ".");
    } else {
        alert("Gracias por visitarnos. ¡Hasta pronto!");
    }
} 
//si no se encuentra el producto
else {
    const reintentar = confirm("El producto no se encuentra en la lista. ¿Desea intentar nuevamente?");
    if (reintentar) {
        alert("Por favor, inténtelo nuevamente.");
    } 
    // msj final
    else {
        alert("Gracias por su visita lo esperamos en la tienda de L.vazquez");
    }
}
