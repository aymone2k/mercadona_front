import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';
import { ServicearticleService } from '../servicearticle.service';

@Component({
  selector: 'app-findallarticles',
  templateUrl: './findallarticles.component.html',
  styleUrls: ['./findallarticles.component.css']
})
export class FindallarticlesComponent implements OnInit {
  user:User = new User();
  message: string;
  MyList: any;
  article:Article = new Article();
  id: number;
  infoconnexion: string;
  min: number;
  max: number;
  chaine: string;
  isAuth:boolean;


  constructor(private http: HttpClient, private router: Router, private srvart: ServicearticleService, private srvUser:  SrvcrudusersService) { }

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

    if(sessionStorage.getItem('user') == null ){
    this.isAuth = false;
}else{this.user =JSON.parse(sessionStorage.getItem('user'));
        this.isAuth = true;
      }
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
            art.prix= this.article.prix;
            art.url = this.article.url;
            art.stock = this.article.stock;
            art.version = this.article.version;
            let str : string = JSON.stringify(art);
            sessionStorage.setItem("article", str)
            this.router.navigate(['/findbyidarticle/'+id]); }
        })
      }


}
