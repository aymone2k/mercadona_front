import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
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

  constructor(private srv: SrvcrudusersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    

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

  updatepass() {

    this.srv.update(this.user);
    this.messageup = sessionStorage.getItem("msgupdate");
    this.router.navigate(['/findbyiduser/', this.user.mail]);
    //sessionStorage.removeItem("usr");

  }

}
