import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url:string = "http://www.terra.com.br"
  Curso : boolean = true;
  getValor(){

    return "Teste de Retorno"
  }
   getMostarCurso(){
  return true;

   }

  constructor() { }

  ngOnInit() {
  }

}
