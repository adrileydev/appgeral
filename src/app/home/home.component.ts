import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cursos: string[] = [];


  constructor( private CursosServices_: AdminService) {
 ///  this.CursosServices  = new  AdminService();
         }

  ngOnInit() {
   /// this.cursos = this.CursosServices.getCursos();
   this.cursos = this.CursosServices_.getCursos();


  }

}
