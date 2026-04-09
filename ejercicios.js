// 1. El Constructor de Mascotas (Clases y Objetos)

class Mascota {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  
// 2. El Robot que Habla (Métodos)
 
  saludar() {
    console.log(`¡Hola! Soy un ${this.tipo} y me llamo ${this.nombre}`);
  }
}

// Dos mascotas diferentes
const mascota1 = new Mascota("Rex", "Perro");
const mascota2 = new Mascota("Michi", "Gato");

mascota1.saludar(); 
mascota2.saludar();



// 3. El Superperro Volador (Herencia)


class SuperMascota extends Mascota {
  constructor(nombre, tipo) {
    super(nombre, tipo);
  }

  usarPoder() {
    console.log("¡Estoy volando!");
  }
}

const superMascota = new SuperMascota("Krypto", "Superperro");
superMascota.saludar(); 
superMascota.usarPoder(); 


// 4. El Concierto de Animales (Polimorfismo)

class Gato extends Mascota {
  hacerSonido() {
    console.log("¡Miau!");
  }
}

class Perro extends Mascota {
  hacerSonido() {
    console.log("¡Guau!");
  }
}

const gato = new Gato("Whiskers", "Gato");
const perro = new Perro("Rex", "Perro");

gato.hacerSonido();  // ¡Miau!
perro.hacerSonido(); // ¡Guau!

const animales = [gato, perro];
animales.forEach(animal => animal.hacerSonido());


// 5. ¡Avísame cuando termines! (Callbacks)

function hacerTarea(materia, callback) {
  console.log(`Haciendo tarea de ${materia}...`);
  callback();
}

hacerTarea("Matemáticas", function () {
  console.log("¡Tarea terminada!");
});

// También con arrow function
hacerTarea("Historia", () => {
  console.log("¡Tarea terminada!");
});