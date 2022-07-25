import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

   heroes: string[] = ['pepe','Diony','diye','denisse'];
   heroeBorrado:any = '';

   borrarHeroe():void{
    console.log("Borrando...")
    this.heroeBorrado = this.heroes.shift() || ''
   }
}
