import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { heroeComponent } from './heroe/heroe.component';


@NgModule({
  declarations: [
    heroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    heroeComponent,
    ListadoComponent
  ]
})
export class HeroesModule { }
