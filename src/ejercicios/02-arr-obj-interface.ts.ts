
/*
    ===== Código de TypeScript =====
*/


/* En TP es bueno utilizar las interfaces para definir objetos,
en ellas puedes predefinir las propiedades de los  objetos y incluso definir que propiedad
es opcional, por  ejemplo como signo de *?* es muy util para establecer parametros y limites  */
let habilidades: string[] = ['Bash','Counter', 'Healing']; 

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter','Healing']
}


personaje.puebloNatal = 'San pedro de macoris';

console.table( personaje);


