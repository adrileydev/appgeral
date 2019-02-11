import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Livros : string[] = ['Java','Delphi','Asp.Net','Angular','Jquery','SQL SERVER','Oracle'];

  ver(){
    $(alert("ass"));
  }

  constructor() { }
}
