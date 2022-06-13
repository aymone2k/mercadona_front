import { Component, OnInit } from '@angular/core';
import { ServicearticleService } from 'src/app/srvarticles/servicearticle.service';
import { Router } from '@angular/router';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';

// import * as variable from 'maVariable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAuth:boolean;
  infoconnexion: string;
  str: string;

  constructor(private srv: ServicearticleService, private router: Router, private srvUser: SrvcrudusersService) { }

  ngOnInit(): void {

    this.srvUser.isAuth$.subscribe(
      (bool: boolean)=>{
        this.isAuth = bool
      } )
  }


  deconnex() {

    this.srvUser.isAuth$.next(false);
    sessionStorage.removeItem("user")

  this.router.navigate(['/login'])

  }

  search() {
    this.srv.findByStr(this.str).subscribe({
      next: (data) => { sessionStorage.setItem("Mylist", JSON.stringify(data)) },
      error: (err) => { console.log(err) },
      complete: () => {
        this.router.navigate(['/findallarticles'])
      }
    })
  }

}




