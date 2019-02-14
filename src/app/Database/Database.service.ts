import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseService {
  valor:number = 0;
 getCursos(){
  return  ['Java','Delphi','Asp.Net','Angular','Jquery','SQL SERVER','Oracle'];
  }
  getClientes(){
    return  ['Cadastro','Help','informações'];
  }


}
