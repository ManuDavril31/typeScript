//Podemos reutilizar las interfaces y extenderlas

interface Person {
  id: number;
  name: string;
}

//en este ejemplo como la interface Empleado y Cliente son persona, quitamos las propiedades id y name y extendemos esas propiedades de la interface Persona
interface Employee extends Person {
  //   id: number;
  //   name: string;
  dept: string;
}
interface Costomer extends Person {
  //   id: number;
  //   name: string;
  country: string;
}

//AL declarar una variable de tipo Employee nos damos cuenta que las propiedades id y name son requeridas, lo cual indica que dichas propiedades fueron extendidas de la interface Persona

const emp: Employee = {
  id: 0,
  name: "Manuel",
  dept: "Sistemas",
};

//IMPLEMENTS

interface Animals {
  name: string;
  getDogs: () => void;
  getCats: () => void;
}

class Zoo implements Animals {
  name = "hola";
  getDogs(): void {}
  getCats(): void {}
}
