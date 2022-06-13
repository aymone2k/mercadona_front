import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-updatepass',
  templateUrl: './updatepass.component.html',
  styleUrls: ['./updatepass.component.css']
})
export class UpdatepassComponent implements OnInit {

  id: string;
  user: User = new User();
  message: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private srv: SrvcrudusersService, private router: Router) { }

  ngOnInit(): void {


  }

  // init() {



  //   this.http.get<User>("http://localhost:8080/exo/personne/" + this.user.mail).subscribe(
  //     response => {
  //       console.log("********Utilisateur trouvé!********")
  //       this.user = response;
  //     }
  //     ,
  //     err => {
  //       console.log("********KO********")

  //     }
  //   )
  // }

  confirm() {
    sessionStorage.removeItem("usr");

    this.srv.getUser(this.user.mail).subscribe({
      next: (data) => {
        this.user = data;
        sessionStorage.setItem("usr", JSON.stringify(data));

      },
      error: (err) => { console.log(err) },
      complete: () => {
      
        this.router.navigate(['/updateuserpass/', this.user.mail]);
      }
    });




  }


}
