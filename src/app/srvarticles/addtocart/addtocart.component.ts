import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  ligne:string;
  ligne2:string;
    constructor() { }

    ngOnInit(): void {
     this.ligne = sessionStorage.getItem("ligne");
    this.ligne2 =  localStorage.getItem("ligne");

    console.log(this.ligne)
    console.log(this.ligne2)
    }

}
