
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }   from './app.component';
import {AlertModule}      from 'ngx-bootstrap';
import { FormsModule }    from '@angular/forms';

<<<<<<< Updated upstream
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DatabaseService } from './Database/Database.service';
=======
>>>>>>> Stashed changes



@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    HomeComponent,
    ClienteComponent
=======

>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule


  ],
<<<<<<< Updated upstream
  providers: [DatabaseService],
=======
  providers: [],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
