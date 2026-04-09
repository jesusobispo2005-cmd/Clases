const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const filas = 40;
const columnas = 40;
const tamaño = 10;

canvas.width = columnas * tamaño;
canvas.height = filas * tamaño;

let pausado = false;


// 🔹 Crear grid aleatorio
function crearGridAleatorio() {
  let grid = [];
  for (let i = 0; i < filas; i++) {
    let fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(Math.random() < 0.3 ? 1 : 0); 
    }
    grid.push(fila);
  }
  return grid;
}

let grid = crearGridAleatorio(); // Inicialización aleatoria


// Dibujar
function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {

      ctx.fillStyle = grid[i][j] ? "white" : "black";
      ctx.fillRect(j * tamaño, i * tamaño, tamaño, tamaño);

      // líneas
      ctx.strokeStyle = "#333";
      ctx.strokeRect(j * tamaño, i * tamaño, tamaño, tamaño);
    }
  }
}


// Contar vecinos
function contarVecinos(x, y) {
  let vecinos = 0;

  for (let i = -1; i <= 1; i++) {  //Recorremos las filas vecinas
    for (let j = -1; j <= 1; j++) { //Recorremos las columnas vecinas

      if (i === 0 && j === 0) continue; //Evitamos contar la celda central como vecina

      //Calculamos las coordenadas reales de la vecina
      let nx = x + i; 
      let ny = y + j;

      //Comprobamos que la vecina exista dentro del grid
      if (nx >= 0 && nx < filas && ny >= 0 && ny < columnas) {
        vecinos += grid[nx][ny];
      }
    }
  }

  return vecinos;
}

function siguienteGeneracion(){

    let nueva = JSON.parse(JSON.stringify(grid)); //Creamos una copia profunda del grid actual

    //Recorremos las filas verticalmente y horizontalmente.
    for(let i = 0; i < filas; i++){
        for(let j = 0; j < columnas; j++){

            let vecinos = contarVecinos(i, j);

            //Si la celda esta viva
            if(grid[i][j]=== 1){
                if(vecinos < 2 || vecinos > 3){ // Si tiene menos de 2 vecinos muere y si tiene mas de 3 muere 
                    nueva[i][j] = 0;
                }
            }else{
            //Si la celda esta muerta
                if (vecinos ===3){
                    nueva[i][j]= 1; // nace 1
                }
            }
        }
    }
    grid = nueva;
}

// 🔹 Reset del grid
function resetGrid() {
  grid = crearGridAleatorio();
}

// 🔹 Botón reset
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetGrid);


//LOOP
function loop(){
    //Llama a la función que dibuja el grid en el canvas.
    dibujar();

    if (!pausado){
        //calcula la siguiente generación si pausado es false
        siguienteGeneracion();
    }

    setTimeout(() => {
        requestAnimationFrame(loop);
    }, 100)
}

loop();