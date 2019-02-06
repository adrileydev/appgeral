import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  Cores:string[] = ['Red','green','blue'];
    inputType : string ; 
    placeholderText:string;
    inputClass : string;

  constructor() { 
    this.placeholderText = "Type your password"
    this.inputType = 'password'   
      


  }
  getCursos(){     
     return ['Java','delphi','aspnet','angular']
 
  }
  getTitulo(){

    return "TABAJARA CORPORATE LTDA "

  }
}
