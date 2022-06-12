import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-deloreditarticles',
  templateUrl: './deloreditarticles.component.html',
  styleUrls: ['./deloreditarticles.component.css']
})
export class DeloreditarticlesComponent implements OnInit {
  message: string;
  messagedel: string;
  MyList: Array<Article>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("client") == null) {
      this.router.navigate(['/login']);
      this.message = "Erreur de connexion ! Veuillez vous authentifier !";

    }

    this.init();

  }

  init()
  {
    this.http.get<Array<Article>>("http://localhost:8080/exo/articlerest").subscribe(
      response => {
        this.MyList = response;
      }
      ,
      err => {
        console.log("********KO********");
      }
    )
  }

  //id récupéré à partir de html
  delete(a: Article) {
    
    this.http.delete("http://localhost:8080/exo/articlerest/" + a.id).subscribe(
      response => {
        this.messagedel = "Article supprimé";
        this.init();
      },
      err => {
        this.messagedel= "Erreur dans la suppression";
      }
    )
  }
}
