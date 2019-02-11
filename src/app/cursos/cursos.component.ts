import { CursosService } from './cursos.service';
import { Component, AfterViewInit } from '@angular/core';
import 'expose?jQuery!jquery';
import 'bootstrap';
import * as $ from 'jquery';
import { CursosModule } from './cursos.module';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements AfterViewInit {


   ngAfterViewInit() {
    $('h1').tooltip();
    }


  constructor(private cursos_services : CursosService) {
  }




}
