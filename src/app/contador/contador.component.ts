import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template:`<h1>{{title}}</h1>
    <h3>La base es: {{base}}</h3>
    
    <button (click)="mostrarAcomulador(-base)"> -{{base}} </button>
    
    <span>{{numero}}</span>
    
    <button (click)="mostrarAcomulador(+base)"> +{{base}} </button>`
})

export class ContadorComponent{
    title = 'Interno diony';
    numero: number = 10;
    base: number = 40;
    
    mostrarAcomulador(valor:number){    
      this.numero += valor;    
    }
}