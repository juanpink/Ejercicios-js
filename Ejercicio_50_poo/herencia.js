class Vehiculo {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    arrancar() {
        console.log("Estoy arrancando");
    }
}

class Automovil extends Vehiculo {
    constructor(nombre, color, marca, modelo) {
        super(nombre, color);
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log("Soy un automóvil y estoy arrancando");
    }

}

class Barco extends Vehiculo {
    constructor(nombre, color, eslora, manga) {
        super(nombre, color);
        this.eslora = eslora;
        this.manga = manga;
    }

    arrancar() {
        console.log("Soy un barco y estoy arrancando");
    }

}

let auto1 = new Automovil("Auto1", "Rojo", "Ford", "Fiesta");
let barco1 = new Barco("Barco1", "Azul", 100, 20);

auto1.arrancar();
barco1.arrancar();

console.log("auto1 --> ", typeof auto1);
console.log(auto1 instanceof Vehiculo);
console.log(auto1 instanceof Automovil);

console.log("barco1 --> ", typeof barco1);
console.log(barco1 instanceof Vehiculo);
console.log(auto1 instanceof Barco);
