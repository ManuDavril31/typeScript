# Instalacion de typeScript de manera global

npm install -g typescript

# Comprobar la version de typescript

tsc -v

# Compilar

# Este comando transpila el codigo de typescript a javascript y se crea un archivo .js

tsc index.ts

# Este comando ejecuta las instruciones del archivo js

node index.js

# Este comando transpila y ejecuta las instrucciones del archivo ts

tsc index.ts && node index.js

# Este comando crea un directorio [carpeta] en este caso llamada dist y dentro de él un archivo llamado index.js y ejecuta ese archivo

tsc --outDir dist index.js && node dist/index.js

# Para escuchar los cambios y volver a ejecutar el archivo

## Comando + directorio + archivo a escuchar + comando

tsc --outDir index.ts --watch

# Nos va a ayudar a configurar e iniciar todo nuestro proyecto de typescript

tsc --init

## Comando + nombrecarpeta+nombrearchivo.js

tsc && node dist/nombrearchivo.js

## Para evitar este error [Ver imagen], se pone false en la configura del tsconfig.json en la propiedad strictPropertyInitialization": false o se le agrega un signo de cierre admiraccion ! [Ver imagen]

https://ibb.co/gF9D3R1

## OTRAS ANOTACIUONES DESDE CURSO PLATZI

No vamos a instalar TypeScript de manera global, sino solo para el proyecto, ya que normalmente así se hace en mundo real. Se trabaja por proyecto.

Realicemos los siguientes pasos:

1. Creamos una carpeta para nuestro proyecto (el nombre que desees) e ingresamos a la misma. Mediante la terminal sería lo siguiente:

```
mkdir ts-project
cd tsc --version

```

2. Abrimos nuestro editor de código desde la ubicación de la carpeta del proyecto. Si usas Visual Studio Code, usando la terminal es así:

```
code .

```

3. Crearemos los siguientes archivos:
   Un archivo .gitignore en el editor o desde la terminal. Para su contenido, podemos utilizar la página gitignore.io. En nuestro programa necesitaremos las siguientes especificaciones: https://www.toptal.com/developers/gitignore/

Luego copiamos lo que nos genera la web y lo pegamos en nuestro gitignore desde nuestro editor de código.

4. Un archivo .editorconfig (opcional), si estás usando Visual Studio Code, con el fin de dar una configuración simple y sencilla a la hora de ejecutar código. Aquí copia y pega lo siguiente:

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

```

Para que funcione esta configuración debes tener instalado la siguiente extensión en tu Visual Studio Code: EditorConfig for VS Code

5. Necistaremos también tener creado una carpeta de nombre src dentro de nuestro proyecto

6. Ahora crearemos nuestro archivo package.json de manera simple desde la terminal y dentro de la ruta del proyecto:

`
npm init -y

`

7. Así debería estar quedando conformado nuestro proyecto previo al último paso

src
.editorconfig
.gitignore
package.json

8. Finalmente, instalemos TypeScript 😊. Desde la terminal y dentro de la ruta del proyecto, ejecuta:

`
npm install typescript --save-dev

`

9. Para verificar la versión instalada:

`
npx tsc --version

`
