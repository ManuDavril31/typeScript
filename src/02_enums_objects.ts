//ENUM
//Nos pérmiten definir un conjunto de constantes con nombres
//Los enum pueden ser numericos o de cadenas de texto

enum Roles {
  User = "USER",
  Admin = "ADMIN",
  SuperAdmin = "SUPERADMIN",
}

console.log(Roles.Admin);

//OBJECTS

const roles = {
  User: 0,
  Admin: 1,
  SuperAdmin: 2,
};

console.log(roles.User);
