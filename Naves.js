// 1. Plantilla Madre
class Nave {
  constructor(nombre, vida) {
    this.nombre = nombre;
    this.vida = vida;
  }

  recibirDaño(cantidad) {
    this.vida -= cantidad;
    if (this.vida < 0) this.vida = 0;
    console.log(`${this.nombre} recibe ${cantidad} de daño. Vida restante: ${this.vida}`);
  }

  atacar(objetivo) {
    // Este método será redefinido por las clases hijas
    console.log(`${this.nombre} ataca a ${objetivo.nombre}`);
  }
}

// 2. Escuadrón (Herencia)
class NaveAtaque extends Nave {
  atacar(objetivo) {
    console.log(`${this.nombre} ataca con fuerza a ${objetivo.nombre}`);
    objetivo.recibirDaño(20);
  }
}

class NaveDefensa extends Nave {
  atacar(objetivo) {
    console.log(`${this.nombre} ataca ligeramente a ${objetivo.nombre}`);
    objetivo.recibirDaño(10);
  }
}

// 3. Árbitro (Callback)
function combate(nave1, nave2, callback) {
  console.log("¡Comienza el combate!");
  
  while (nave1.vida > 0 && nave2.vida > 0) {
    nave1.atacar(nave2);
    if (nave2.vida <= 0) break;

    nave2.atacar(nave1);
    if (nave1.vida <= 0) break;

    console.log("--- Siguiente turno ---");
  }

  const ganador = nave1.vida > 0 ? nave1.nombre : nave2.nombre;
  callback(ganador);
}

// Ejemplo de uso:
const naveA = new NaveAtaque("Destructor", 100);
const naveB = new NaveDefensa("Fortaleza", 150);

combate(naveA, naveB, (ganador) => {
  console.log(`🎉 ¡El ganador es ${ganador}!`);
});