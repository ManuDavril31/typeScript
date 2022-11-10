//TIPOS BÁSICOS EN TYPESCRIPT

let myTypeString: string = "Hello World";
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

//ARRAY
//DECLARANDO ARRAY DE FORMAS DISTINTA SIENDO LO MISMO
let arrNumber: number[] = [1, 2, 3];
let arrNumber2: Array<number> = [1, 2, 3];

let arrString: string[] = ["Uno", "Dos", "Etc"];
let arrString2: Array<string> = ["Uno", "Dos", "Etc"];

//any

let arrAny: any[] = [1, true, false, "hola"];
let arrAny2: Array<any> = [1, true, false, "hola"];

//Tuple sabe cuantos elementos contiene el array y que tipo hay en cada posición
let tuplePlayers: [string, number, boolean] = ["Manuel", 2, true];

//Tuple Array
let players: [number, string][];
//aqui estamos indicando que esto será un array de tupla donde en la posicion cero esde tipo number y la posicion uno de tipo string

players = [
  [1, "hola"],
  [2, "mundo"],
  [3, "world"],
];

//INFERENCIA DE TIPOS:
//TypeScript se encarga de asignar el tipo de dato a una varible dependiendo del valor inicial que se le asigne a la variable

let myVarible;
let myVarible1: string;
let myVarible2 = "Hola mnudo";
let myVarible3 = 3;

//COMPOSICION DE TIPOS
//Podemos crear tipos bastante complejos y combinar distintos tipos

//Unions
//Podemos declarar que una variable puede ser de dos o más tipos
//esta varible podria ser de tipo string | number | null -- a esto de le llama Unions types o composicion de tipos
let myVarible4: string | number | null;
