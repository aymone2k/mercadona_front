import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  fieldTextType1: boolean = false;
  errorMessage: string;
  signInForm !: FormGroup;
  isAuth: boolean;
  str: string;
  //myList: Array<User>;
  user: User = new User();

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private srv: SrvcrudusersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
  loginv3() {
    const email = this.signInForm.value.email;
    const mdp = this.signInForm.value.password;
    this.srv.findbyId(email, mdp).subscribe({
      next: (data) => {
        this.user = data;
        if(this.user.role == "admin"){
        this.srv.isAuth$.next(true);
        sessionStorage.setItem("admin", JSON.stringify(this.user));
        this.router.navigate(['/pageAdmin']);}
        else{
          this.errorMessage = "Acces refusé; vous n'avez pas le role administrateur!";
        };

      },
      error: (err) => {
        console.log(err)
        this.str = err;
        this.router.navigate(['/admin']);
        this.errorMessage = "Attention! Identifiant ou mot de passe erronné!";
      },
      complete: () => {
        this.srv.isAuth$.next(true);

      }


    });
  }

  toogleFieldText1() {
    this.fieldTextType1 = !this.fieldTextType1;
  }

}
