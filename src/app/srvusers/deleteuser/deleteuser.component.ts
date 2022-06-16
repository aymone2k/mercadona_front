import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  mail : string;
  user:User = new User();
  usr:User = new User();
  message: string;
  valide: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  find(mail){
    this.mail = mail;
    this.init();
  }
  init()
  {
    this.http.get<User>("http://localhost:8080/exo/personne/" + this.mail).subscribe(
      response => {

        this.user = response;

      }
      ,
      err => {
        console.log("********KO********")
      }
    )
  }
  delete()
  {


    this.http.delete("http://localhost:8080/exo/personne/" +this.mail).subscribe(
      response => {
        this.message = "utilisateur supprimé!";
        this.valide =true;


      },
      err => {
        this.message= "Erreur";
      }
    )
  }

}
