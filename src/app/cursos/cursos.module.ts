import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { DetalheComponent } from './detalhe/detalhe.component';
 

@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule  
     
  ],
  exports:[CursosComponent],
  providers:[CursosService]
})
export class CursosModule { }
