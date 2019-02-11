import { Title } from '@angular/platform-browser';

import { stringify } from 'querystring';
import { Component, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs:['title']
})
export class AppComponent implements AfterViewInit{
  info: {};
  Primeiro: string;
  segundo: string;
  N: boolean;
  cores: string[] = ['red', 'gree', 'blue', 'pink'];
  private placeholder:string;
  private inputType:string;
  private inputClass:string;
  private isDisable: boolean;
  private title  : string;

  private user={
    username:'',
    password:''
  }
  clickHandler(){
    console.log("clique Me")
  }
  constructor() {
    this.N = false;
    this.info = { title: "App work ", Descricao: "Desenvolvimento de Sistemas Angular" };
    this.Primeiro    = " Adriley ";
    this.segundo     = "Francisco Almeida Pereira";
    this.isDisable   = false;
    this.placeholder = "Digite o seu Password";
    this.inputType   = "Senha";

  }
  ngAfterViewInit() {
    $('h1').tooltip();

    }
  getFullName() {
    return `${this.Primeiro} ${this.segundo}`;
  }
  getClass() {
    return ['info', 'italic'];
  }
  sendUser(){
    console.log(this.user);
  }

}
