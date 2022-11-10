//SINTAXIS FUNCIONES EN TYPESCRIPT

//clasica
//En esta función le especificamos a typeScript que está funcion no devuelve nada, no hay return y le asignamos el tipo void
function greet1(name: string): void {
  console.log(`Función clásica: ${name}`);
}

//funcion de flecha
const greet2 = (name: string) => {
  console.log(`Función flecha: ${name}`);
};

//Ejecitando la función
greet1("Manuel");
greet2("Victoria");

//En esta funcion typeScript infiere que el valor de retorno es de tipo number
function getNumber() {
  return Math.floor(Math.random() * 100);
}

console.log(getNumber());

//En esta función le expecificamos a typescript que el valor de retorno es de tipo number
function getNumber2(): number {
  return Math.floor(Math.random() * 100);
}

console.log(getNumber2());

//Funcion en la que pasamos un dato de tipo OB JECT
function printPosition(position: { lat: number; long: number }): void {
  console.log(
    `Latitude & Longitude are: LAT: ${position.lat} LONG: ${position.long}`
  );
}

printPosition({ lat: 15, long: 20 });

//En esta función le especificamos a typeScript que está funcion no devuelve nada, no hay return y le asignamos el tipo void además le asignamos un valor por defecto
function greet3(name: string = "Victoria"): void {
  console.log(`Función clásica: ${name}`);
}
greet3();
