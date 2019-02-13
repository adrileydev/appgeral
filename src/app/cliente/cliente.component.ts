import { AdminService } from './../admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: String[] = [];
  constructor(Clientes: AdminService) {
    this.clientes = Clientes.getClientes();
   }

  ngOnInit() {
  }

}
