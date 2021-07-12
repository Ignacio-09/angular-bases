import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';

//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';

//Tarea: Crear un module llamado ContadorModule
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    //Aqui importar el module
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
