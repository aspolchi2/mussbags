class carritoDeCompras {
    constructor (producto, precio){
        this.producto = producto;
        this.precio = precio
    }
}

const CarteraConEstrellas = new carritoDeCompras("Cartera con estrellas", 1500);
const CarteraConCorazones = new carritoDeCompras("Cartera con Corazones ", 1350);
const Cinturones = new carritoDeCompras("Cinturones", 500 )
const Mochila = new carritoDeCompras ("Mochila", 1500)



console.log(CarteraConEstrellas);

let compras = 1  //prompt(`Bienvenide a MüssBags ingrese el numero del ITEM que desea comprar \n 
// ${CarteraConEstrellas.producto}, ${CarteraConEstrellas.precio} \n 
// ${CarteraConCorazones.producto}, ${CarteraConCorazones.precio} \n
// ${Cinturones.producto}, ${Cinturones.precio} \n 
// ${Mochila.producto}, ${Mochila.precio} \n
// Cuando no quiera agregar mas cosas al carrito ingrese FIN`)

const carritoFinal = []
while (compras != "FIN" ) {
   switch (compras) {
       case "1":
        carritoFinal.push(`${CarteraConEstrellas}`)
           
           break;

           case "1":
        carritoFinal.push(`${CarteraConEstrellas}`)
           
           break;
   
       default:
           break;
   }
    
}

console.log(carritoFinal);