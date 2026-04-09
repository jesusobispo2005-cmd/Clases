import {clase, clase_constructor, alumnos} from './clases.js'
// le asignamos la clase a una variable usando la palabra "new" antes del nombre de la clase
// al asignarle "new <nombre de la clase>" se esta creando un objeto independiente a una variable
// cada que hagamos esta declaracion a una variable nueva, cada variable nueva representa un objeto independiente con las mismas caracteristicas, asi como cuando todos compran el mismo modelo de telefono, son objetos independientes que hacen lo mismo, pero lo que se haga en uno no afecta a los demas

const saludando= new clase();

// para acceder auna propiedad o metodo de la clase toca recorrer la variable (que viene en representacion de la clase) como si se tratase de un json, siendo que en un json se recorre diciendo "variable.propiedad", ene ste caso seria "variable.metodo"
saludando.saludar()


//CONSTRUCTOR /////////////////////

// durante la declaracion se puede enviar datos dentro de los parentesis como parametros, esto se hace para que el constructor pueda precibirlos
// no es obligatorio enviar parametros tal y como lo han visto hasta ahora, con lo cual no es obligatorio colocar el constructor, el constructor solo se crea si se tiene planeado enviar parametros a la calse
const var_constructor=new clase_constructor("mario")

var_constructor.participar();


// enviar parametros a metodos

const saluda_Alumnos=new alumnos()

// a los metodos se les puede enviar parametros como si se tratasen de funciones, estos los reciben de manera directa EXACTAMENTE IGUAL que con las funciones (variable.metodo(propiedades))
saluda_Alumnos.alumnoA("felipe me lo invento")
saluda_Alumnos.alumnoB("cualquier cosa tambien vale", "todo junto")

// cada que agarremos la misma clase y se la asignemos a una variable nueva, esta representa un objeto nuevo, la delcaracion de la clase funciona como un molde y la asignacion de la clase a una variable representa la impresion del objeto, como cuando hacemos impresion 3D, se agarra un molde y se imprime varias veces pero lo que se haga con uno no afecta a los otros
const todo_bien=new alumnos()

todo_bien.alumnoA("melina")
todo_bien.alumnoB("jesus", "jaume")