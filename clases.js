//  las clases se declaran parecido a las funciones, la diferencia es que estas no llevan parentesis, pero si que pueden recibir parametros (que veremos como funciona eso mas adelante)
export class clase{

    // las variables al igual que en una funcion solo existen dentro de la clase, no pueden exsistir fuera de esta

    // las variables de una clase se les puede considerar como propiedades (asi como las de un json)
    // las variables de una clase se declaran sin el uso de la palabra "const", "let" ni "var"
    nombre="fernando";
    saludar(){
        // los metodos funcionan igual que las funciones, estos reciben parametros y aqui se pueden declarar variables igual que en una funcion (const, let, var) pero se sigue cumplendo la regla de que lo que se hace dentro del metodo existe solo en el metodo

        // si quiero usar un metodo o propiedad de la clase debo usar la palabra reservada "this" que hace referencia a la clase, seguido deel nombre de la propiedad (this.propiedad)
        console.log(`hola ${this.nombre}`)
    }
}


// CONSTRUCTOR ///////////////////////////

export class clase_constructor{
    // el constructor se encarga de recibir los parametros que reciba la clase, por lo general se le asigna dicho parametro a una variable para que esta quede disponible para el resto de la clase
    constructor(nombre){

        // se usa "this.variable=parametro" para asignarle el valor a una variable que sera accesible por el resto de la clase
        this.nombre=nombre;
    }

    participar(){
        console.log(`${this.nombre} pasa adelante`)
    }
}


// enviar parametros a los metodos

export class alumnos{
    // los metodos pueden recibir parametros de la misma manera que una funcion recibe parametros, esto va desde 0 parametros hasta X cantidad de parametros (igual que una funcion)
    alumnoA(nombre){
        console.log(`hola ${nombre}`)
    }

    alumnoB(nombreA, nombreB){
        console.log(`hola ${nombreA} y hola ${nombreB}`)

    }
}


// herencia

export class padre{

    casa(nombre){
        console.log(`${nombre} vive en esta casa`)
    }
}

// para usar herencia decimos que el hijo exteniende (extends) del padre, al hacer esto durante el uso puede hacer uso de los metodos y propiedades del padre
export class hijo extends padre{

}


// polimofismo

export class madre{

    casa(nombre){
        console.log(`${nombre} vive aca`)

    }
}

export class hija extends madre{

    casa(nombre){
        console.log(`${nombre} no vive aca`)

    }
}

export class nieto extends hija{

    casa(nombre){
        console.log(`el nieto ${nombre} vive aqui`)
    }
}


// callback
export class recibidor {
    constructor(ClaseReferencia) {
        // 'ClaseReferencia' es el molde (la clase Padre)
        // Usamos 'new' para crear una instancia real dentro de esta clase
        this.instancia_callback = new ClaseReferencia();
    }

    casa_callback(nombre) {
        // Invocamos el método 'casa' de la instancia que creamos arriba, instancia que viene en representacion de la clase llamada"padre"
        this.instancia_callback.casa(nombre);
    }
}