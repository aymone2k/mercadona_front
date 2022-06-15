import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { Line } from 'src/app/model/line';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';
import { ServicearticleService } from '../servicearticle.service';
import { SrvcartService } from '../srvcart.service';

@Component({
  selector: 'app-findallarticles',
  templateUrl: './findallarticles.component.html',
  styleUrls: ['./findallarticles.component.css']
})
export class FindallarticlesComponent implements OnInit {

  message: string;
  MyList: any;
  article: Article = new Article();
  stock: boolean = true;
  nbre: number = 1;
  lignes: Array<Line> = new Array<Line>();
  id: number;
  infoconnexion: string;
  min: number;
  max: number;
  chaine: string;

  // pour gérer la promo
  ispromo: boolean = false;
  prixpromo: string;

  constructor(private http: HttpClient, private router: Router, private srvart: ServicearticleService, private srvUser: SrvcrudusersService, private srvCart: SrvcartService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("Mylist") == null) {
      this.srvart.findAll().subscribe({
        next: (data) => { this.MyList = data },
        error: (err) => { console.log(err) },
        complete: () => { console.log(this.MyList) }
      })
    } else {
      this.MyList = JSON.parse(sessionStorage.getItem("Mylist"))
      sessionStorage.removeItem("Mylist")
    }

    // Application de la promotion sur la marque Good Goût -15%
    if (this.article.marque === "Good Goût") {
      this.ispromo = true;
      //this.prixpromo = (this.article.prix * 0.85).toFixed(2);
    }

  }

  calculPromo(prix)
  {
    return (prix * 0.85).toFixed(2);
console.log((this.article.prix * 0.85).toFixed(2));
  }

  desc() {
    this.srvart.findByPrixDesc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  asc() {
    this.srvart.findByPrixAsc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  prixbetween() {
    this.srvart.findByPrixEntre(this.min, this.max).subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  masc() {
    this.srvart.findbyMarAsc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  deconnex() {
    sessionStorage.removeItem("client");
  }

  findArticle(id) {
    let art: Article = new Article();


    this.srvart.findById(id).subscribe({
      next: (data) => { this.article = data },
      error: (err) => { console.log(err) },
      complete: () => {
        art.id = this.article.id;
        art.marque = this.article.marque;
        art.description = this.article.description;
        art.prix = this.article.prix;
        art.url = this.article.url;
        art.stock = this.article.stock;
        art.version = this.article.version;
        let str: string = JSON.stringify(art);
        sessionStorage.setItem("article", str)
        this.router.navigate(['/findbyidarticle/' + id]);
      }
    })
  }

  addCart(article) {

    this.srvCart.addArticleToCart(article, this.nbre);

    console.log(this.srvCart.cart)


  }
  // plus(id){
  //   this.nbre+=1;
  //   }
  //   moins(id){
  //     if(this.nbre>1){
  //       this.nbre-=1;
  //     }
  //   }
}
