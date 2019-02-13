import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

 getCursos(){
  return  ['Java','Delphi','Asp.Net','Angular','Jquery','SQL SERVER','Oracle'];
  }
  getClientes(){

    return  ['INTECH', 'PREVDATA', 'SABESPREV', 'METRUS', 'FAELCE', 'FAPERS', 'CELPUS'];
  }

}
