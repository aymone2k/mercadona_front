import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Line } from 'src/app/model/line';
import { User } from 'src/app/model/user';
import { SrvcartService } from '../srvcart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  cart: Cart;
  user: User = new User();
  liste: Array<Line> = new Array<Line>();
  totalquantity: number;
  totalcost: number;
  totalcoststr: string;
  nbre: number;
  nbarticles: number;
  fraisLivraison: number;
  cartIsValid: boolean = false;
  mttotal: number;
  ispositive: boolean = true;
  totalLigneStr: string;

  constructor(private router: Router, private srvCart: SrvcartService) { }


  ngOnInit(): void {

    this.cart = this.srvCart.getCart();
    this.liste = this.cart.liste;
    this.totalquantity = this.cart.totalquantity;
    this.totalcost = this.cart.totalcost;
    this.totalcoststr = this.cart.totalcost.toFixed(2);

    if (sessionStorage.getItem("user") != null) {
      console.log(sessionStorage.getItem("user"));
      // this.user = JSON.parse(sessionStorage.getItem("user"));
      //this.srvCart.addUserToCart(this.user);

      this.cartIsValid = true;

    } else {
      //obliger le user à se connecter
      this.cartIsValid = false;// à voir peut etre pas utile?
    }


    //Calcul du frais de livraison (gratuite dès 49€)
    if (this.totalcost < 49) {
      this.fraisLivraison = 3;
    }
    else {
      this.fraisLivraison = 0;
    }

    this.mttotal = this.totalcost + this.fraisLivraison;
  }

  clearPanier() {
    localStorage.removeItem("cart");
  }

  supprimer() {

  }

  plus(ligne) {
    this.nbre = 1;
    this.srvCart.addQuantity(ligne, this.nbre);
    this.totalcost = this.srvCart.getCart().totalcost;
    this.mttotal = this.totalcost + this.fraisLivraison;
  }

  moins(ligne) {
    //if quantiteLigne>1 , appuyer
    if (ligne.quantite < 1) {
      this.ispositive = false;
    }
    else {
      this.nbre = -1;
      this.srvCart.addQuantity(ligne, this.nbre);
      this.totalcost = this.srvCart.getCart().totalcost;
      this.ispositive = true;
    }
    this.ispositive = true;
    this.mttotal = this.totalcost + this.fraisLivraison;
  }

  commande() { }

}




