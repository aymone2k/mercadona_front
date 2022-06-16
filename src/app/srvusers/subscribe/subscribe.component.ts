import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { MustMatch } from 'src/app/_helpers/must-match.validators';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  personne: User= new User();
  message: string;
  signUpForm !: FormGroup;

  fieldTextType1:boolean = false;
  fieldTextType2:boolean = false;

  constructor(private http: HttpClient, private formBuilder:FormBuilder,
    private srv: SrvcrudusersService,
    private router: Router) { }

  ngOnInit(): void {
    this.initSignUpForm();
  }
  initSignUpForm(){
    this.signUpForm = this.formBuilder.group({
      nom:[null, [Validators.required, Validators.minLength(2), ]],
      prenom:[null, [Validators.required, Validators.minLength(2), ]],
      mail:[null, [Validators.required, Validators.email]],
      adresse:[null, [Validators.required]],
      telephone:[null, [Validators.required]],

  mdp:[null, [Validators.required, Validators.minLength(3),]],
      confMdp:[null, Validators.required],
    },
    {
      validator: MustMatch('mdp', 'confMdp')
    }) ;


  }


 get controlForm(){
  return this.signUpForm.controls; //reccup les champs saisies du form pour control
}
  create() {
    this.personne.nom = this.signUpForm.value.nom;
    this.personne.prenom = this.signUpForm.value.prenom;
    this.personne.mail = this.signUpForm.value.mail;
    this.personne.mdp = this.signUpForm.value.mdp;
    this.personne.adresse = this.signUpForm.value.adresse;
    this.personne.telephone = this.signUpForm.value.telephone;
    const body = JSON.stringify(this.personne);
    this.http.post<User>("http://localhost:8080/exo/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

      this.message="Votre compte a été crée, veuillez vous connecter pour y acceder!";
      alert(this.message)
    },

      err => {

        this.message="erreur de création de nouveau compte!, veuillez reessayer";
        alert(this.message)
      });

      this.router.navigate(['/login']);
  }
  onResetForm(){

    this.signUpForm.reset();
  }
  toogleFieldText1(){
    this.fieldTextType1 =!this.fieldTextType1;
  }
  toogleFieldText2(){
    this.fieldTextType2 =!this.fieldTextType2;
  }

}
