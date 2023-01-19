// Control de stock de Camisas a vender (ejemplo)
// Inicio de constructor
class Productos {
    constructor(modelo, talle, stock) {
        this.modelo = modelo;
        this.talle = talle
        this.stock = Number(stock);

    }
}
const productos = []

productos.push(new Productos("Road", "M", 5))
productos.push(new Productos("Safari", "M", 12))
productos.push(new Productos("Road", "L", 4))
productos.push(new Productos("Safari", "XL", 1))


alert("Antes de iniciar por favor abrí la consola")

console.log(productos)
let confirmar = true

do {
    opcion = Number(prompt("\n 1 --> Para agregar productos \n 2 --> Para filtar productos \n 3 --> para ver todos los productos \n 4 --> Para SALIR"))

    switch (opcion) {
        case 1:
            let nuevoProd = prompt("Queres ingresar un nuevo producto? \n NO para salir")
            while (nuevoProd != "NO") {
                let pregunta = new Productos(prompt("Ingresá el modelo de camisa "), prompt("Ingresa el talle \n XL \n L \n M \n S"), (prompt("Ingresá la cantidad")));
                productos.push(pregunta);
                nuevoProd = prompt("Queres ingresar un nuevo producto? \n NO para salir")
                console.log(productos)

            }

            break;
        case 2:
            function filtrarporstock(stock) {
                return productos.filter(propiedades => propiedades.stock >= Number(stock))
            }
            let filtrado = prompt("Ingresa el valor de stock a filtrar")
            console.log(filtrarporstock(filtrado))

            break;
        case 3:
            console.log(productos)
            break;
        case 4:
            alert("Gracias por usar nuestro programita")
    }

}
while (confirm("¿Querés seguir haciendo tareas?")) {}

alert("Gracias por usar nuestro programita")