import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit { 
  placeholderText:string;
  inputType:string;
  cores:string[];
     
  constructor(private cursos_services : CursosService) { 
    this.placeholderText = this.cursos_services.placeholderText;
    this.inputType = this.cursos_services.inputType; 
    this.cores = this.cursos_services.Cores;  
  }
 
  

  ngOnInit() {
  }
   
}
 