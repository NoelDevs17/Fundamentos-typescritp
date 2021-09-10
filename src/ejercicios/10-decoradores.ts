/*  decoradores */

/* en el contexto del framework, un decorador le dice a Angular cómo interpretar ciertas clases, métodos, propiedades, etc. (lista completa aquí), de manera que a su vez le agrega ciertos comportamientos y funcionalidades que permiten diferenciarlos de los demás objetos. De esta manera, Angular sabe que tiene un componente cuando a una clase le añades el decorador @component.

 import { Component } from ’@angular/core’;     
@Component({  
 selector: ‘app-mi-clase’,  
 template: ‘<h1>Mi Clase</h1>’  
});  
export class MiClase{ }
Como puedes observar en el ejemplo, MiClase es una clase común y corriente de TypeScript que al agregarle el decorador y ciertas propiedades, la convierten en un componente que Angular conoce y sabe como trabajarlo.

Otro detalle importante es que no te quedes con el conocimiento del curso, en la documentación de TS y en Google estoy seguro encontrarás información más clara y muchos ejemplos que te ayudarán a entender el tema.

  */

interface Pasajero {
    nombre: string;
    hijos?: string[]
  }
  
  const pasajero1: Pasajero = {
    nombre: 'Fernando'
  }
  
  const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
  }
  
  
  function imprimeHijos( pasajero: Pasajero ): void {
  
    const cuantosHijos = pasajero.hijos?.length || 0;
    
    console.log( cuantosHijos );
  
  }
  
  
  imprimeHijos( pasajero1 );