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

const { volumen, segundo, cancion} = reproductor;

console.log('El volumen actual es de: ',  volumen );
console.log('El segundo actual es: ', segundo );
console.log('El nombre de la cancion es: ', cancion);
console.log('El autor es: ', reproductor.detalles.autor);

