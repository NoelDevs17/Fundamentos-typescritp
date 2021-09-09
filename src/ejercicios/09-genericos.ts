/* Genericos: Los genéricos son plantillas de código que puede definir y reutilizar en todo el código base. 
Proporcionan una manera de indicar a las funciones, 
clases o interfaces qué tipo quiere usar al llamarlas */  

/* Los genéricos pueden:

Proporcionar más flexibilidad a la hora de trabajar con tipos.
Permitir la reutilización de código.
Reducir la necesidad de usar el tipo any. */

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString =  queTipoSoy('Hola Noel');
let soyNumber =  queTipoSoy(100);
let soyBoleam =  queTipoSoy(true);
let  soyArray =  queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

console.log(soyString);
console.log(soyNumber);
console.log(soyBoleam);
console.log(soyArray);
