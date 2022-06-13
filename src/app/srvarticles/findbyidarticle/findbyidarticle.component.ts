import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { Article } from 'src/app/model/article';
import { Line } from 'src/app/model/line';

@Component({
  selector: 'app-findbyidarticle',
  templateUrl: './findbyidarticle.component.html',
  styleUrls: ['./findbyidarticle.component.css']
})
export class FindbyidarticleComponent implements OnInit {

  article: Article= new Article();
  stock:boolean = true;
  nbre: number =1;
  lignes: Array<Line> = new Array<Line>();

  constructor( private router: Router) {}

  ngOnInit(): void {
    sessionStorage.getItem("article");
  this.article= JSON.parse(sessionStorage.getItem("article"))
if(this.article.stock<=0){
  this.stock=false;
}
  }

addCart(){
  let line: Line = new Line();
  line.quantite = this.nbre;
  line.article = this.article;
  line.getPrix();
   this.lignes.push(line);
  console.log(this.lignes)
  if(sessionStorage.getItem("user") === null){
    localStorage.setItem("ligne",JSON.stringify(this.lignes));
  }else{
  sessionStorage.setItem("ligne",JSON.stringify(this.lignes));}

this.router.navigate(['/addtocart'])
  //ajouter au panier;

}
plus(){
this.nbre+=1;
}
moins(){
  if(this.nbre>1){
    this.nbre-=1;
  }
}

}
