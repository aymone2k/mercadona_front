import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  findusers : boolean=false;
  deleteuser : boolean=false;
  createarticle : boolean=false;
  updatearticle: boolean=false;
  findarticles : boolean=false;
admin:{nom:string, prenom:string}

  constructor() { }

  ngOnInit(): void {
   this.admin= JSON.parse(sessionStorage.getItem("admin"));
  }

  OnModif1(){
    this.findusers = true;
    this.deleteuser = false;
    this.createarticle = false;
    this. updatearticle = false;
    this.findarticles = false;
  }
  OnModif2(){
    this.deleteuser = true;
    this.findusers = false;
    this.deleteuser = false;
    this.createarticle = false;

    this.findarticles = false;
  }
  OnModif3(){
    this.createarticle = true;
    this.findusers = false;
    this.deleteuser = false;

    this. updatearticle = false;
    this.findarticles = false;
  }
  OnModif4(){
    this. updatearticle = true;
    this.findusers = false;
    this.deleteuser = false;
    this.createarticle = false;

    this.findarticles = false;
  }
  OnModif5(){
    this.findarticles = true
    this.findusers = false;
    this.deleteuser = false;
    this.createarticle = false;
    this. updatearticle = false;

  }
}
