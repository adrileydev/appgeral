import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  portal :string
  cursos: string[] = ['Java','delphi','aspnet','angular']
  Teste : number[] = [1,2,4,5,6,7,8,9,10] 

  constructor() {    
    this.portal = "TBAJARA CORPORATE LTDA "
   }
  ngOnInit() {
  }

}
