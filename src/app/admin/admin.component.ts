import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

   Livros :string[];
  constructor(servicos_admin : AdminService) {
      this.Livros = servicos_admin.Livros;
  }
  ngOnInit() {
  }

}
