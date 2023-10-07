// ingresar nombre
var nombre = prompt("Por favor, introduce tu nombre:");
//verifica que el usuario ingrese algo,si esta vacio lo cancela
if (nombre !== null && nombre !== ""){
  // msj de bienvenida
  alert("¡Bienvenido a nuestro ecommerce, " + nombre + "!");
  
  // opciones
  var categoria = prompt("eliga pantalones o remeras\nElija la opción 1 si son remeras, opción 2 si son pantalones:");
  
  // muestra algo diferente segun opcion 1 o 2
  //opcion 1
  if (categoria === "1") {
    var precioRemera = 20; // de aca se pude cambiar el precio de las remeas
    var confirmacion = confirm("Usted eligió remera. Su precio es de $" + precioRemera + ". ¿quiere llevar el producto?");
    if (confirmacion) {
      // Pedir la dirección para el envío
      var direccionEnvio = prompt("Ingrese su dirección:");
        //controla que lo que ingrese el usuario no este vacio si es asi lo cancela
      if (direccionEnvio !== null && direccionEnvio !== "") 
      {
        alert("Su artículo será enviado a: " + direccionEnvio);
        alert("muchas gracias por confiar en nosotros");
      } 
      //si no pone nada sale esto
      else {
        alert("Dirección de envío no válida. Muchas gracias por su visita.");
      }
    } else {
      alert("Muchas gracias por su visita.");
    }
    //opcion de pantalones
  } else if (categoria === "2") {var precioPantalon = 200; // de aca se pude cambiar el precio del pantalon
  var confirmacion = confirm("Usted eligió el pantalon. Su precio es de $" + precioPantalon + ". ¿quiere llevar el producto?");
  if (confirmacion) {
    // Pedir la dirección para el envío
    var direccionEnvio = prompt("Ingrese su dirección:");
      //controla que lo que ingrese el usuario no este vacio si es asi lo cancela
    if (direccionEnvio !== null && direccionEnvio !== "") 
    {
      alert("Su artículo será enviado a: " + direccionEnvio);
      alert("muchas gracias por confiar en nosotros");
    } 
    //si no pone nada sale esto
    else {
      alert("Dirección de envío no válida. Muchas gracias por su visita.");
    }
  } else {
    alert("Muchas gracias por su visita.");}
}
}
  
