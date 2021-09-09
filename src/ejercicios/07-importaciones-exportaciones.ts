/* Importaciones e exportaciones */

import { calculaISV, Producto } from "./desestructuracion-argumentos";



const carritoCompras: Producto[] = [

    {
        desc:'Celular 1',
        precio: 100
    },
    {
        desc: 'Celular 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(  carritoCompras );

//const[ total, isv ] =calculaISV(articulos);


console.log('Total: ', total);
console.log('ISV: ',  isv);