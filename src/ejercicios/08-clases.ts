/* clases en typescript  */

class PersonNormal {
   constructor ( public nombre: string,  public direccion: string ) {}

}

 class Heroe extends PersonNormal{
    
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'Republica Dominicana, SPM' );
    }

 }

 const cap = new Heroe('Capitan america', 45, 'Noel Ortiz');

 console.log(cap);