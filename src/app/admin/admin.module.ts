import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';

import { AdminService } from './admin.service';
import { AdministradorComponent } from '../administrador/administrador.component';



@NgModule({
  declarations: [AdministradorComponent,HomeComponent],
  imports: [
    CommonModule
  ],
  providers:[AdminService]
})
export class AdminModule { }
