import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrvcartService } from '../srvcart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

    constructor( private router: Router, private srvCart: SrvcartService) { }

    ngOnInit(): void {


    }

}
