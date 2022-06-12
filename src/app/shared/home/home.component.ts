import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liste: Array<Article> = new Array<Article>();
  infoconnexion: string;
  MyList: any;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    

    this.http.get("http://localhost:8080/exo/articlerest").subscribe(
      response => {
        this.MyList = response;
      }
      ,
      err => {
        console.log("********KO********");
      }
    )

  
 
    }
    

}

