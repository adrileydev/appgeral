import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap';
 
import { CursosComponent } from './cursos/cursos.component';
import { DetalheComponent } from './cursos/detalhe/detalhe.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
 
 

@NgModule({
  declarations: [
    AppComponent,    
    CursosComponent,DetalheComponent, DataBindingComponent 
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
