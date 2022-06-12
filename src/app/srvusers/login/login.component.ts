import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  str: string;
  myList: Array<User>;
  user: User = new User();
  //Contrôle si personne bien identifiée avec bons identifiants
  bool: String;
  //Message qui affiche erreur si mauvais identifiants
  messageconnexion: string;

  //deuxième version
  mail: string;
  mdp: string;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    

    //Importer la liste des personnes
    this.http.get<Array<User>>("http://localhost:8080/exo/personne").subscribe(
      response => {
        this.myList = response;
      }
      ,
      err => {
        console.log("********KO********");
      }
    )

  }

  login() {
    this.bool = "false";

    let i: number = 0;
    while ((this.bool === "false") && (i < this.myList.length)) {
      if ((this.user.mail === this.myList[i].mail) && (this.user.mdp === this.myList[i].mdp)) {

        this.str = "Bonjour " + this.myList[i].nom + " " + this.myList[i].prenom + "!";
        console.log(this.str);
        sessionStorage.setItem("client", this.str);
        this.router.navigate(['/findallarticles']);
        this.bool = "true";
      }
      i++;
    }

    if (this.bool == "false") {
      this.router.navigate(['/login']);
      this.messageconnexion = "Attention! Identifiant ou mot de passe erronné!"
    }

    let header: HeaderComponent;
    //header.init();
  }

  loginv2() {
    this.http.get<User>("http://localhost:8080/exo/personne/" + this.mail + "/" + this.mdp).subscribe(
      response => {
        this.user = response;
        if (this.user != null) {
          this.str = "Bonjour " + this.user.nom + " " + this.user.prenom + "!";
          sessionStorage.setItem("client", this.str);
          this.router.navigate(['/findallarticles']);
        }
        else
          this.str = "Erreur d'accès";
      },
      err => {
        console.log("KO");
        this.str = "Erreur d'accès";
        this.messageconnexion = "Attention! Identifiant ou mot de passe erronné!"
      }

    )
  }
}

