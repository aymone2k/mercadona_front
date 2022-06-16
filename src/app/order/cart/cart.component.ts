import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Line } from 'src/app/model/line';
import { User } from 'src/app/model/user';
import { SrvcartService } from 'src/app/srvarticles/srvcart.service';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  client: string;
  MyList: Array<Line>=[];
  panier: Cart = new Cart();
  total: string;
  isAuth: boolean;

  constructor(private router: Router, private srvCart: SrvcartService, private srvUser: SrvcrudusersService) { }

  ngOnInit(): void {
    this.srvUser.isAuth$.subscribe(
      (bool: boolean)=>{
        this.isAuth = bool
      } )

    this.client = sessionStorage.getItem("user");
    this.MyList = this.srvCart.getCart().liste;
    this.panier = this.srvCart.getCart();
   this.total = this.panier.totalcost.toFixed(2);
  }


  deconnex() {
    this.srvUser.isAuth$.next(false);
    sessionStorage.removeItem("user");
    localStorage.removeItem("cart");
    this.router.navigate(['/login'])
  }
}
