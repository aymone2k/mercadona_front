import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-updatearticle',
  templateUrl: './updatearticle.component.html',
  styleUrls: ['./updatearticle.component.css']
})
export class UpdatearticleComponent implements OnInit {

  id:number;
  article: Article = new Article();
  art: Article = new Article();
  message: string;
  valide: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {



   // this.init();
  }
find(id){
  this.id = id;
  this.init();
}
  init()
  {
    this.http.get<Article>("http://localhost:8080/exo/articlerest/" + this.id).subscribe(
      response => {
        console.log("********Article trouvé!********")
        this.article = response;
      }
      ,
      err => {
        console.log("********KO********")
      }
    )
  }

  update()
  {
    const body = JSON.stringify(this.article);

    this.http.put("http://localhost:8080/exo/articlerest/", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      response => {
        this.message = "Succes! Mise à jour réussie!";
        this.valide =true;
        this.init();

      },
      err => {
        this.message= "Erreur";
      }
    )
  }

}
