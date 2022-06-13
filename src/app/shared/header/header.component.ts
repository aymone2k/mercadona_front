import { Component, OnInit } from '@angular/core';
import { ServicearticleService } from 'src/app/srvarticles/servicearticle.service';
import { Router } from '@angular/router';

// import * as variable from 'maVariable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoconnexion: string;
  str: string;

  constructor(private srv: ServicearticleService, private router: Router) { }

  ngOnInit(): void {

    this.init();
  }

  init() {
    if (sessionStorage.getItem("client") != null) {
      this.infoconnexion = sessionStorage.getItem("client");
    }
  }
  deconnex() {
    // this.init();
    sessionStorage.removeItem("client");
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




