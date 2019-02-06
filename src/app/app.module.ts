import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap';

import { CursosComponent } from './cursos/cursos.component';
import { DetalheComponent } from './cursos/detalhe/detalhe.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ProangulaComponent } from './proangula/proangula.component';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,DetalheComponent, DataBindingComponent,CursosModule, ProangulaComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
