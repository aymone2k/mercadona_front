import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  
  article: Article = new Article();
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  create() {
    const body = JSON.stringify(this.article);
    this.http.post<Article>("http://localhost:8080/exo/articlerest", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

     
      this.message="article créé";

    },

      err => {
       
        this.message="erreur de creation article";
      });
  }

}
