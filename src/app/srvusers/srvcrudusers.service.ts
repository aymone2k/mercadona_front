import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvcrudusersService {

  constructor(private http: HttpClient, private router: Router) { }

  ///////NEW USER////////

  create(data) {
    const body = JSON.stringify(data);

    this.http.post("http://localhost:8080/exo/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log("crud service post OK!");
    },
      err => {
        console.log("crud service post KO!")
      })
  }


  //////////FIND ALL////////

  getInfos() {
    this.http.get<Array<User>>("http://localhost:8080/exo/personne").subscribe(
      response => {
        sessionStorage.setItem("lst", JSON.stringify(response));
      }
      ,
      err => {
        console.log("*************KO")

      }


    );

  }

  ///////UPDATE//////
  update(data) {
    const body = JSON.stringify(data);
    let message: string;
    this.http.put("http://localhost:8080/exo/personne/", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      response => {
        console.log("crud service put OK!");
        sessionStorage.setItem("msgupdate", "Mise à jour réussie!");
      },
      err => {
        console.log("crud service put KO!")
      }
    )
  }

  //////FINDBYID///////

  getUser(id): Observable<User> {


    return this.http.get<User>("http://localhost:8080/exo/personne/" + id)
  }

  

  // .subscribe(
  //   response => {
  //     console.log("********Utilisateur trouvé!********")
  //     sessionStorage.setItem("usr", JSON.stringify(response));
  //   }

  //   ,
  //   err => {
  //     console.log("***********Nouvel utilisateur!**********");
  //     // this.router.navigate((['/subscribe']));
  //     // sessionStorage.setItem("msgnewuser", "Adresse mail non trouvée, veuillez créer un compte!");
  //   }
  // )

}
