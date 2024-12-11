/* 
    De esta forma lee los 2 archivos en paralelo
 */

import { readFile } from "node:fs/promises";

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log(text);
    console.log(secondText);
})