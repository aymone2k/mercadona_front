import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fieldTextType1: boolean = false;
  errorMessage: string;
  signInForm !: FormGroup;
  isAuth: boolean;
  str: string;
  //myList: Array<User>;
  user: User = new User();
  // //Contrôle si personne bien identifiée avec bons identifiants
  // bool: String;
  // //Message qui affiche erreur si mauvais identifiants
  // messageconnexion: string;

  // //deuxième version
  // mail: string;
  // mdp: string;


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private srv: SrvcrudusersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //sessionStorage.removeItem("user");
    this.initSignInForm();
  }

  initSignInForm() {
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],//6min
    })
  }

  get controlForm() {
    return this.signInForm.controls; //reccup les champs saisies du form pour control
  }



  /*  loginv2() {
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
   } */
  loginv3() {
    const email = this.signInForm.value.email;
    const mdp = this.signInForm.value.password;
    this.srv.findbyId(email, mdp).subscribe({
      next: (data) => {
        this.user = data
        this.srv.isAuth$.next(true);
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['/findallarticles']);
      },
      error: (err) => {
        console.log(err)
        this.str = err;
        this.router.navigate(['/login']);
        this.errorMessage = "Attention! Identifiant ou mot de passe erronné!"
      },
      complete: () => {
        this.srv.isAuth$.next(true);

      }


    });
  }
  
  loginv4() {
    const email = this.signInForm.value.email;
    const mdp = this.signInForm.value.password;
    this.srv.getUserToServer(email, mdp).then(
      () => {
        this.errorMessage = this.srv.message
      }
    ).catch(
      (error) => {
        console.log(error)
        this.errorMessage = error.message;
      }
    )
   // this.user = this.srv.findbyId(email, mdp)
  }

  toogleFieldText1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }

}

