/* DESTRUCTURACIONDE OBJETOS: la desestructuracion simplemente es extraer directamente ciertas propiedades de un objeto y crear variables*/
 

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor  =  {
    volumen:90,
    segundo: 40,
    cancion: 'Mes',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }

}

const { volumen, segundo, cancion, detalles } = reproductor;

 const { autor }  = detalles;  


/* console.log('El volumen actual es de: ',  volumen );
console.log('El segundo actual es: ', segundo );
console.log('El nombre de la cancion es: ', cancion);
console.log('El autor es: ', autor); */



/* Desestructuracion de arreglos */ 

const dbz: string[] = ['Goku', 'Vegetta', 'Trunks'];
const [ p1, p2, p3] = dbz;


console.log('El primer jugador es: ', p1);
