import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id:string;
  user: User = new User();
  message: string;
  upvalid: boolean =false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private srv: SrvcrudusersService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.init();
  }

  init()
  {
    this.http.get<User>("http://localhost:8080/exo/personne/" + this.id).subscribe(
      response => {
        console.log("********Utilisateur trouvé!********")
        this.user = response;
        console.log(this.user)
      }
      ,
      err => {
        console.log("********KO********")
      }
    )
  }


  update(){
    this.srv.update(this.user);
    this.message = "Mise à jour réussie!"
    this.init();
    this.upvalid=true;

  }
}
