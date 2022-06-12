import { Component, OnInit } from '@angular/core';

// import * as variable from 'maVariable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  infoconnexion: string;

  constructor() { }

  ngOnInit(): void {
   
this.init();
  }

  init()
  {
    if (sessionStorage.getItem("client") != null) {
      this.infoconnexion = sessionStorage.getItem("client");
    }
  }
  deconnex() {
    // this.init();
    sessionStorage.removeItem("client");
  }

}




