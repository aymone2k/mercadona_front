import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Line } from 'src/app/model/line';
import { User } from 'src/app/model/user';
import { SrvcartService } from 'src/app/srvarticles/srvcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: Cart;
  user: User = new User();
  liste: Array<Line> = new Array<Line>();
  totalquantity: number;
  totalcost: number;

  constructor(private router: Router, private srvCart: SrvcartService) { }

  ngOnInit(): void {
    
    this.cart = this.srvCart.getCart();
    this.liste = this.srvCart.cart.liste;
    this.totalquantity = this.srvCart.cart.totalquantity;
    this.totalcost = this.srvCart.cart.totalcost;

  }

}