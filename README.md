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
