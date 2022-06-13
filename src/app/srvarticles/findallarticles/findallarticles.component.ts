import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicearticleService } from '../servicearticle.service';

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
  min: number;
  max: number;
  chaine: string;


  constructor(private http: HttpClient, private router: Router, private srvart: ServicearticleService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem("Mylist") == null) {
      this.srvart.findAll().subscribe({
        next: (data) => { this.MyList = data },
        error: (err) => { console.log(err) },
        complete: () => { console.log(this.MyList) }
      })
    } else {
      this.MyList = JSON.parse(sessionStorage.getItem("Mylist"))
      sessionStorage.removeItem("Mylist")
    }

  }

  desc() {
    this.srvart.findByPrixDesc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  asc() {
    this.srvart.findByPrixAsc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  prixbetween() {
    this.srvart.findByPrixEntre(this.min, this.max).subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  masc() {
    this.srvart.findbyMarAsc().subscribe({
      next: (data) => { this.MyList = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.MyList) }
    })
  }

  deconnex() {
    sessionStorage.removeItem("client");
  }



}
