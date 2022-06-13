import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private http: HttpClient, private route: ActivatedRoute, private srv: SrvcrudusersService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.user.mail = params['id'];
    })

    this.init();
  }

  init() {
    this.http.get<User>("http://localhost:8080/exo/personne/" + this.user.mail).subscribe(
      response => {
        console.log("********Utilisateur trouvé!********")
        this.user = response;
      }
      ,
      err => {
        console.log("********KO********")
      }
    )
  }

  confirm() {
    this.id = JSON.stringify(this.user.mail);
    sessionStorage.setItem("mel", this.user.mail);
  }

}
