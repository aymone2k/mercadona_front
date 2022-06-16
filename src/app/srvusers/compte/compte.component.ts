import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from '../srvcrudusers.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  id:string;
  user: User = new User();


  constructor(private http: HttpClient,private srv: SrvcrudusersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  //  this.route.params.subscribe(params => { this.id = params['id'];})

if(sessionStorage.getItem('usr') != null){
this.user = JSON.parse(sessionStorage.getItem('usr'));



      }else{
        this.router.navigate(['/login']);
      }

  }
  OnModif(){
    this.router.navigate(['/updateuser/'+this.user.mail]);
  }

}
