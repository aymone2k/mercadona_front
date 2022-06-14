import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { Article } from 'src/app/model/article';
import { Line } from 'src/app/model/line';
import { SrvcartService } from '../srvcart.service';

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

  constructor( private router: Router, private srvCart: SrvcartService) {}

  ngOnInit(): void {
    sessionStorage.getItem("article");
this.article= JSON.parse(sessionStorage.getItem("article"))
if(this.article.stock<=0){
  this.stock=false;
}
  }

addCart(article){
//   let line: Line = new Line();
//   line.quantite = this.nbre;
//   line.article = this.article;
//   line.getPrix();
//    this.lignes.push(line);

//   if(sessionStorage.getItem("user") === null){
//     localStorage.setItem("ligne",JSON.stringify(this.lignes));
//   }else{
//   sessionStorage.setItem("ligne",JSON.stringify(this.lignes));}

// this.router.navigate(['/addtocart'])
console.log(this.nbre)
this.srvCart.addArticleToCart(article, this.nbre);
this.router.navigate(['/addtocart'])
console.log(this.srvCart.cart)


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
