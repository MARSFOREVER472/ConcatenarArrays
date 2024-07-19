// CREAREMOS 2 ARREGLOS DENTRO DE ESTE ARCHIVO...

let arreglo1 = ["Maria", "John", "Peter", "Michael"]; // ARREGLO 1.
let arreglo2 = ["Steve", "Sandra", "Josh", "Henry", "Robert", "Aaron"]; // ARREGLO 2.

// LO VAMOS A IR COMBINANDO SENTENCIA POR SENTENCIA MEDIANTE UNA FUNCIÓN...

// MÉTODO 1:

let combinarArreglo = arreglo1.concat(arreglo2);
console.log(combinarArreglo);

// MÉTODO 2:

let combArreglo = [].concat(arreglo1, arreglo2);
console.log(combinarArreglo);

// MÉTODO 3 (SPREAD OPERATOR):

let extenderArreglo = [...arreglo1, ...arreglo2];
console.log(extenderArreglo);