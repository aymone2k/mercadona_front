import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  personne: User= new User();
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  create() {
    const body = JSON.stringify(this.personne);
    this.http.post<User>("http://localhost:8080/exo/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

      this.message="Personne créée!";

    },

      err => {
       
        this.message="erreur de création de nouveau compte!";
      });
  }

}
