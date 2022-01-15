

// //Creamos el carrito
// class carritoDeCompras {
//     constructor(producto, precio,) {
//         this.producto = producto;
//         this.precio = precio;
//         this.item = () => `${producto} $${precio}`;
//     }
// }
// //creamos objetos con los caracteristicas del carritoDeCompras
// const CarteraConEstrellas = new carritoDeCompras("Cartera con estrellas", 1499);
// const CarteraConCorazones = new carritoDeCompras("Cartera con corazones ", 1349);
// const Cinturones = new carritoDeCompras("Cinturones", 499)
// const Mochila = new carritoDeCompras("Mochila", 1599)




// //Prompt para que ingrese datos
// let compras = prompt(`Bienvenide a MüssBags ingrese el numero del ITEM que desea comprar \n 
// 1) ${CarteraConEstrellas.producto}, $${CarteraConEstrellas.precio}
// 2) ${CarteraConCorazones.producto}, $${CarteraConCorazones.precio}
// 3) ${Cinturones.producto}, $${Cinturones.precio}
// 4) ${Mochila.producto}, $${Mochila.precio}
// Cuando no quiera agregar mas cosas al carrito ingrese FIN`)



// //Array vacia para ir agregando cosas
// const carritoFinal = []
// const precioFinal = []

// //while para que el cliente haga loop en los items para comprar
// while (compras != "FIN") {
//     comprasInt = parseInt(compras) //pasamos el input del cliente a un INT por que los prompts devuelven Strings
//     switch (comprasInt) {
//         case 1:
//             carritoFinal.push(CarteraConEstrellas.item())
//             precioFinal.push(CarteraConEstrellas.precio)
//             break;
//         case 2:
//             carritoFinal.push(CarteraConCorazones.item())
//             precioFinal.push(CarteraConCorazones.precio)
//             break;
//         case 3:
//             carritoFinal.push(Cinturones.item())
//             precioFinal.push(Cinturones.precio)

//             break;
//         case 4:
//             carritoFinal.push(Mochila.item())
//             precioFinal.push(Mochila.precio)

//             break;
//         default:
//             alert("Ingresa el numero indicado en el prompt asqueroso este ")
//             break;
//     }
//     compras = prompt(`¿Desea comprar algo mas? ingrese el numero del ITEM que desea comprar
//     1) ${CarteraConEstrellas.producto}, $${CarteraConEstrellas.precio}
//     2) ${CarteraConCorazones.producto}, $${CarteraConCorazones.precio}
//     3) ${Cinturones.producto}, $${Cinturones.precio}
//     4) ${Mochila.producto}, $${Mochila.precio}
//     Cuando no quiera agregar mas cosas al carrito ingrese FIN`)

// }

// //notificamos del carrito al cliente
// alert(carritoFinal.join("  "))

// //hacemos un for para sumar todos los carritoDeCompras.precio
// let sum = 0;
// for (let i = 0; i < precioFinal.length; i++) {
//     sum += precioFinal[i]
// }

// alert(`El precio final es de = $${sum}`)


// //funcion para agregar el costo del envio si el precio final es menos de 5000
// function envioGratis(finalPrice) {
//     let precioConEnvio = sum + 300
//     if (finalPrice > 5000) {
//         alert("El envio es sin cargo ")
//     } else {
//         alert(`El costo del envio es de $300.
// precio final (envio incluido) = $${precioConEnvio}
// El envio es gratis a partir de los $5000`)
//     }
// }
// envioGratis(sum)


