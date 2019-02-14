
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Database/Database.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

   valor :number = 0;
  valor2 :number = 0;

  clientes: String[] = [];
  constructor(Clientes: DatabaseService) {
    this.clientes = Clientes.getClientes();
   }
   adicao(){
     this.valor++;
   }
   subtracao(){
     this.valor--;
       if(this.valor < 0 ){
         this.valor = 0;
       }

   }

  ngOnInit() {
  }

}
