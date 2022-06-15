import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvcrudusersService {
  isAuth$ = new BehaviorSubject<boolean>(false);//observable qui nous permet de savoir si utilisateur est connecté ou pas
  user: User = new User();
  message: string;
  infoUser: string;

  constructor(private http: HttpClient, private router: Router) {

    console.log(sessionStorage.getItem('user'));
    //const data = JSON.parse(sessionStorage.getItem('user'));

    if (sessionStorage.getItem('user')!=null) {
      this.isAuth$.next(true);
    }
  }

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

  }///////UPDATE//////
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


  findbyId(mail, mdp): Observable<User> {
    return this.http.get<User>("http://localhost:8080/exo/personne/" + mail + "/" + mdp)
  }



  //connection d'un user: signin

  getUserToServer(mail, mdp) {
    return new Promise((resolve, reject) => {
      this.http.get("http://localhost:8080/exo/personne/" + mail + "/" + mdp).subscribe(
        (authData: User) => {
          this.user = authData;
          console.log(this.user)
          if (this.user !== null) {
            this.isAuth$.next(true);
            this.infoUser = this.user.prenom + " " + this.user.nom;
              sessionStorage.setItem('user', this.infoUser);
            this.router.navigate(['/findallarticles']);
          } else {
            this.message = "erreur de mail ou de mot de passe"
            this.router.navigate(['/login'])
          }
          resolve(true);
        },
        (error) => {
          console.log(error)
          reject(error)
        })
    })

  }

}