/* la desestructuracion simplemente es extraer directamente ciertas propiedades de un objeto y crear variables*/


interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    
        calle: string;
        pais: string;
        ciudad: string;
    
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ',  ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion)

 