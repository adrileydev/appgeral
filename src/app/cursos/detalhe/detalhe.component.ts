import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  cores:string[];
     
  constructor(private cursos_services : CursosService) {       
    this.cores = this.cursos_services.Cores;  
  }
 

  ngOnInit() {
  }

}
