import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { MustMatch } from 'src/app/_helpers/must-match.validators';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-updateuserpass',
  templateUrl: './updateuserpass.component.html',
  styleUrls: ['./updateuserpass.component.css']
})
export class UpdateuserpassComponent implements OnInit {

  user: User = new User();
  message: string;
  messageup: string;
  id: string;
  signUpForm !: FormGroup;
  isactive: boolean = false;

  fieldTextType1:boolean = false;
  fieldTextType2:boolean = false;

  constructor(private srv: SrvcrudusersService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private formBuilder:FormBuilder) { }

  ngOnInit(): void {


    this.initSignUpForm();
    this.route.params.subscribe(params => {
      this.id = params['id']
    });
    console.log(this.id);


    if (sessionStorage.getItem("usr") == null) {
      this.router.navigate(['/subscribe']);
      this.message = sessionStorage.getItem("msgnewuser");
    }
    else {
      this.user = JSON.parse(sessionStorage.getItem("usr"));
      console.log("**** Update en cours du mot de passe *****");
    }

  }
  initSignUpForm(){
    this.signUpForm = this.formBuilder.group({


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
  updatepass() {
    this.user.nom = this.signUpForm.value.nom;
    this.user.prenom = this.signUpForm.value.prenom;
    this.user.mail = this.signUpForm.value.mail;
this.user.mdp = this.signUpForm.value.mdp;
    this.srv.update(this.user);
  this.message = "Mot de passe modifié"
   this.messageup = sessionStorage.getItem("msgupdate");
    this.router.navigate(['/findbyiduser/', this.user.mail]);
    //sessionStorage.removeItem("usr");
    this.isactive = true;

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
