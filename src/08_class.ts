//Las clases sirven para organizar el código, unidad de encapsulamiento

//CLASES

class Employee {
  //dentron de la clase tendremos atributos y metodos.
  //Atributos: Son conocidos con los estados de la clase, las cuales podemos controlar tande dentro como fuera de la clase
  //Métodos: Acciones que podemos llevar a cabo dentro de la clase pero también fuera de la clase dependiendo de la visibilidad que se le de
  //Constructor(){}: Toda clase tiene un método llamado Constructor(){} y es el primer método que se ejecuta cuando la clase en instanseada
}

class Employee1 {
  //ATRIBUTOS - PROPIEDADE DE LA CLASE
  id: number;
  name: string;
  dept: string;
  //CONSTRUCTOR
  constructor(id: number, name: string, dept: string) {
    //asignamos los datos pasados por los parametros
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.showInfo();
  }
  //MÉTODOS
  //-dentro de la clase para crear un método no se agraga la palabra reservada const.
  showInfo(): void {
    //Para acceder a las propiedades/Atriburtos y métodos de la clase se antepone la palabra reservada this.
    console.log(`${this.name} | ${this.dept}`);
  }
}

const empleado = new Employee1(0, "Manuel", "Sistemas");

//Asignación automatica

class Employee3 {
  //ATRIBUTOS - PROPIEDADE DE LA CLASE
  //DE ESTA FORMA TYPESCRIP HACE LA ASIGNACION AUTOMATICA DE LAS PROPIEDADES
  //CONSTRUCTOR
  constructor(public id: number, public name: string, public dept: string) {
    //asignamos los datos pasados por los parametros
    this.showInfo();
  }
  //MÉTODOS
  //-dentro de la clase para crear un método no se agraga la palabra reservada const.
  showInfo(): void {
    //Para acceder a las propiedades/Atriburtos y métodos de la clase se antepone la palabra reservada this.
    console.log(`${this.name} | ${this.dept}`);
  }
}

const emplead3 = new Employee3(0, "Manuel", "Sistemas");

//ACCESS CONTROL KEYWORDS
//Palabras reservadas que controlan el acceso a nuestra clase
// - public: publica por defecto
// - private: privada
// - protected: protegida

class Employee2 {
  //ATRIBUTOS - PROPIEDADE DE LA CLASE
  //En este caso cuando le decimos o le asignamos la palabra reservada private a un atributo o propiedad de la clase, ya no se va a poder acceder desde afuera de la clase
  private id: number;
  name: string;
  dept: string;
  //CONSTRUCTOR
  constructor(id: number, name: string, dept: string) {
    //asignamos los datos pasados por los parametros
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.showInfo2();
  }
  //MÉTODOS
  //-dentro de la clase para crear un método no se agraga la palabra reservada const.
  showInfo2(): void {
    //Para acceder a las propiedades/Atriburtos y métodos de la clase se antepone la palabra reservada this.
    console.log(`${this.name} | ${this.dept}`);
  }
}

const empleado2 = new Employee2(2, "Victoria", "Ventas");
//ahora si intentamos acceder a la propiedad id, esta no se va a mostrar, empleado2.id -  ERROR porque en la defincion de la clase esta como privada.
//console.log(empleado2.id); //La propiedad id es privada y solo se puede acceder a ella en la clase Employee2
console.log(empleado2.dept);
console.log(empleado2.name);
