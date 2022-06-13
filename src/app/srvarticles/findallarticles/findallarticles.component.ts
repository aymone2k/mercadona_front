import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-findallarticles',
  templateUrl: './findallarticles.component.html',
  styleUrls: ['./findallarticles.component.css']
})
export class FindallarticlesComponent implements OnInit {

  message: string;
  MyList: any;
  id: number;
  infoconnexion: string;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    // let header: HeaderComponent;
    // header.init();

    // if (sessionStorage.getItem("client") == null) {
    //   this.router.navigate(['/login']);
    //   this.message = "Erreur de connexion ! Veuillez vous authentifier !";
    // }

    // else {
    //   this.infoconnexion = sessionStorage.getItem("client");
    //   this.router.navigate(['/findallarticles']);
    // }

    this.http.get("http://localhost:8080/exo/articlerest").subscribe(
      response => {
        this.MyList = response;
        console.log(this.MyList[0]);
      }
      ,
      err => {
        console.log("********KO********");
      }
    )
  }

  deconnex(){
    sessionStorage.removeItem("client");
}



}
