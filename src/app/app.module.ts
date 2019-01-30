import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
 
import { CursosComponent } from './cursos/cursos.component';
import { DetalheComponent } from './cursos/detalhe/detalhe.component';
 

@NgModule({
  declarations: [
    AppComponent,    
    CursosComponent,DetalheComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
