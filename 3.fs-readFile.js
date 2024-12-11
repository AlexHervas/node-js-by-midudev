const fs = require('node:fs');

console.log('Leyendo el primer archivo');
/* 
   con readFileSync node no sabe cuando ha terminado de leer el archivo
   y el proceso no continua hasta ser leido. Necesitamos usar readFile ya que es asíncrono
   y deja que el hilo de ejecución siga mientras va leyengo el archivo
*/
fs.readFile('./archivo.txt', 'utf-8', (error, text) => { // ejecuta el callback cuando termina
    console.log(text);
})

console.log('Hacer cosas mientras se lee el archivo...');

console.log('Leyendo el segundo archivo');

fs.readFile('./archivo2.txt', 'utf-8', (error, text) => {
    console.log(text);
})
