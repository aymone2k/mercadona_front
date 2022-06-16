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
  mttotal: string;
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

    this.mttotal = (this.totalcost + this.fraisLivraison).toFixed(2);
  }

  clearPanier() {
    localStorage.removeItem("cart");
    this.cart = new Cart()
    this.updateaffichage()
  }

  updateaffichage() {
    this.liste = this.cart.liste;
    this.totalquantity = this.cart.totalquantity;
    this.totalcost = this.cart.totalcost;
    this.totalcoststr = this.cart.totalcost.toFixed(2);
    this.mttotal = (this.totalcost + this.fraisLivraison).toFixed(2);
    if (this.totalcost < 49) {
      this.fraisLivraison = 3;
    }
    else {
      this.fraisLivraison = 0;
    }

  }

  supprimer(line, index) {    
    let x = this.cart.liste.splice(index, 1); 
    console.log(x)
    this.cart.totalcost = Number((this.cart.totalcost - line.article.prix * line.quantite).toFixed(2));
    this.cart.totalquantity -= line.quantite;
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.updateaffichage();
  }

  plus(indexListe) {
    this.nbre = 1;
    this.srvCart.addQuantity(indexListe, this.nbre);
    this.cart = this.srvCart.getCart();
    this.updateaffichage();
    
  }

  moins(indexListe) {
    //if quantiteLigne>1 , appuyer
    if (this.cart.liste[indexListe].quantite < 1) {
      //this.ispositive = false;
    }
    else {
      this.nbre = -1;
      this.srvCart.addQuantity(indexListe, this.nbre);
      
      //this.ispositive = true;
    }

    this.cart = this.srvCart.getCart();
    this.updateaffichage();
  }


}




