//Si no sabemos el tipo de un valor podemos hacer un type_assertion -> podemos comvertir al valor que nosotros querramos

//TYPE ASSERTION
let channel: any = "Manuel";
//Dos sintaxis para converti la varible channel de tipo any a un string
let channelStr = <string>channel; //convertimos la variable channel a un string
let channelStr2 = channel as string; //convertimos la variable channel a un string
//otro ejemplo
const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main");
