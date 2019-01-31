import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit { 
     portal : string;
     cursos: any
  constructor(private cursos_services:CursosService) {    
      this.portal = this.cursos_services.getTitulo();
      this.cursos = this.cursos_services.getCursos(); 
  }
  ngOnInit() {
  }

}
