import { Component, OnInit } from '@angular/core';
import { ServicecommandeService } from '../srvarticles/servicecommande.service';
import { ParseCommandeService } from '../srvarticles/parse-commande.service';
import { User } from '../model/user';
import { Cart } from '../model/cart';
import { Commande } from '../model/commande';

@Component({
  selector: 'app-testcommande',
  templateUrl: './testcommande.component.html',
  styleUrls: ['./testcommande.component.css']
})
export class TestcommandeComponent implements OnInit {

  constructor(private srvco: ServicecommandeService, private srvparse: ParseCommandeService) { }

  test: any;
  com: Commande;
  oui: any;
  user: User = new User()
  cart: Cart = new Cart()
  strcart: string;


  ngOnInit(): void {
    this.user.mail = "a";
    this.user.mdp = "a";
    this.user.nom = "a";
    this.user.prenom = "a";
    this.user.role = "client";
    this.user.version = 0;

    this.com = new Commande()
    this.com.detailCommande += "23-1"
    this.com.etatCommande = "en cours"
    this.com.id = 1
    this.com.idUser = this.user



    this.srvco.getUserLastCommande("a").subscribe({
      next: (data) => { this.test = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.test) }
    })

    this.srvco.findUserCommande("a").subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.test) }
    })
  }


  testStringToCart() {
    this.cart = this.srvparse.strToCrt(this.test, this.user)

  }

  testCartToStr() {
    this.strcart = this.srvparse.cartToString(this.cart)
  }

  testcreateCommande() {
    this.com.detailCommande += "23-1"
    this.com.etatCommande = "en cours"
    this.com.id = 1
    this.com.idUser = this.user

    this.srvco.createCommande(this.com).subscribe({
      next: (data) => { console.log("create") },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.test) }
    })


  }

  testupdate() {
    console.log(this.com.id)
    this.srvco.findbyidco(this.com.id).subscribe({
      next: (data) => { this.com = data },
      error: (err) => { console.log("Error findbyId : " + err) },
      complete: () => {
        console.log("Finished to findbyId :" + this.com.version)

        this.com.detailCommande += ";12-23"
        console.log(this.com.version)

        this.srvco.updateCommande(this.com).subscribe({
          next: (data) => { console.log("update") },
          error: (err) => { console.log("Error update : " + err) },
          complete: () => { console.log("finished update") }
        })
      }
    })




  }
}
