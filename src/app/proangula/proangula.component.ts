import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-proangula',
  templateUrl: './proangula.component.html',
  styleUrls: ['./proangula.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ProangulaComponent implements OnInit {

    Nome :string;
  constructor() {
     this.Nome = "Patricia Bizerra Siqueira ";
   }

  ngOnInit() {
  }
  getNome(){
    return `${this.Nome }`;
 }
}
