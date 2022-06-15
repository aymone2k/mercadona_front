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

  article: Article = new Article();
  stock: boolean = true;
  nbre: number = 1;
  lignes: Array<Line> = new Array<Line>();

  // pour gérer la promo
  ispromo: boolean = false;
  prixpromo: string;

  constructor(private router: Router, private srvCart: SrvcartService) { }

  ngOnInit(): void {
    this.srvCart.getCart();
 
    this.article = JSON.parse(sessionStorage.getItem("article"))
    if (this.article.stock <= 0) {
      this.stock = false;
    }

    // Application de la promotion sur la marque Good Goût -15%
    if (this.article.marque === "Good Goût") {
      this.ispromo = true;
      this.prixpromo = (this.article.prix * 0.85).toFixed(2);
    }
    
  }

  addCart(article) {
    
    console.log(this.nbre)
    this.srvCart.addArticleToCart(article, this.nbre);
 
    console.log(this.srvCart.cart);

  }

  plus() {
    this.nbre += 1;
  }

  moins() {
    if (this.nbre > 1) {
      this.nbre -= 1;
    }
  }

}
