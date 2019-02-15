
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }   from './app.component';
import {AlertModule}      from 'ngx-bootstrap';
import { FormsModule }    from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DatabaseService } from './Database/Database.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule

  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
