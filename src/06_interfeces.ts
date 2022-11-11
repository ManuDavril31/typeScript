//QUE ES UNA INTERFACES

//Una interface es un contrato de código. definen la forma de la data, con la cual vamos a trabajar. ES UNA ESPECIE DE MOLDE

//DEFINIENDO UNA INTERFACE

interface Book {
  //palabra reservada interface y el nombre es Book
  id: number;
  title: string;
  author: string;
  coAuthor?: string; //el signo de interrogación significa que la propiedad es opcional
  isLoan?: (id: number) => void; // de tipo función la cual recibe como parametro un number y no retorna nada
}

//VARIABLE DE TIPO BOOK
const book: Book = {
  id: 0,
  title: "MioCid",
  author: "Unknow",
  coAuthor: "UnkNow",
  isLoan: () => console.log(5),
};

//ARRAY DE TIPO BOOK
const books: Book[] = [];

//FUNCION CON RETORNO DE TIPO BOOK
function getBook(): Book {
  return {
    id: 1,
    title: "My tittle",
    author: "Manuel",
    coAuthor: "Coauthor",
  };
}

const myBook = getBook();
console.log(myBook.author, myBook.id, myBook.title);

//destructuring
const { id, author, title, coAuthor } = getBook();
console.log(id, author, title, coAuthor);

//FUNCION QUE COMO PARAMETRO RECIBE UN TIPO Book Y COMO VALOR DE RETORNO es de tipo Book
function createBook(book: Book): Book {
  return book;
}

const newBook: Book = {
  id: 2,
  title: "new Book",
  author: "new Author",
  coAuthor: "new CoAuthor",
};

createBook(newBook);
console.log(createBook(newBook).title);

//minute: 1:13:20 URL: https://www.youtube.com/watch?v=IJ_mpJRaHmc&ab_channel=DominiCode
