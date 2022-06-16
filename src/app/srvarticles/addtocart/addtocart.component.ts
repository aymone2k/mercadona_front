import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Line } from 'src/app/model/line';
import { User } from 'src/app/model/user';
import { SrvcrudusersService } from 'src/app/srvusers/srvcrudusers.service';
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
  isAuth: boolean;

  constructor(private router: Router, private srvCart: SrvcartService, private srvUser: SrvcrudusersService) { }


  ngOnInit(): void {
    this.srvUser.isAuth$.subscribe(
      (bool: boolean)=>{
        this.isAuth = bool
      } )

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

  supprimer(line,index) {
     console.log("avant " + localStorage.getItem("cart"));
    // console.log("position :" + index)
    this.cart.liste = this.cart.liste.splice(index, 1);
    this.cart.totalcost = Number((this.cart.totalcost - line.article.prix * line.quantite).toFixed(2));
    this.cart.totalquantity -= line.quantite;
    this.totalcost = this.cart.totalcost;
    localStorage.setItem("cart", JSON.stringify(this.cart));
    console.log("après " + localStorage.getItem("cart"));
    this.mttotal = this.totalcost + this.fraisLivraison;

  }

  plus(ligne) {
    this.nbre = 1;
    this.srvCart.addQuantity(ligne, this.nbre);
    this.totalcost = this.srvCart.getCart().totalcost;
    this.mttotal = this.totalcost + this.fraisLivraison;
    this.totalquantity = this.srvCart.getCart().totalquantity;
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
    this.totalquantity = this.srvCart.getCart().totalquantity;
  }


}




