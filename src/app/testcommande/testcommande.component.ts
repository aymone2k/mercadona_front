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
    sessionStorage.removeItem("commande")

    if (sessionStorage.getItem('usr') != null) {
      this.user = JSON.parse(sessionStorage.getItem('usr'))
    } else {
      console.log("not connected, session Storage only")
    }

  }


  testStringToCart() {
    this.cart = this.srvparse.strToCrt(this.test, this.user)


  }

  testCartToStr() {
    this.strcart = this.srvparse.cartToString(this.cart)
  }

  testcreateCommande() {

    if (sessionStorage.getItem('commande') == null) {
      console.log("SessionStroge is empty")
      this.com = new Commande()

      this.srvco.getUserLastCommande(this.user.mail).subscribe({
        next: (data) => {
          if (data === null) {
            console.log("no command ongoing");
          } else {
            this.com = data
          }
        },
        error: (err) => { console.log(err) },
        complete: () => {
          if (this.com.id != null) {
            sessionStorage.setItem('commande', JSON.stringify(this.com))
          } else {
            if (sessionStorage.getItem('usr')) {
              this.com.idUser = JSON.parse(sessionStorage.getItem('usr'));
            } else {
              this.com.idUser = new User()
            }
            this.com.detailCommande = "";
            this.com.etatCommande = "en cours"
            this.com.version = 0

            this.srvco.createCommande(this.com).subscribe({
              next: (data) => { },
              error: (err) => { console.log(err) },
              complete: () => {
                let str = this.com.idUser.mail
                this.srvco.getUserLastCommande(str).subscribe({
                  next: (data) => { this.com = data },
                  error: (err) => { console.log("aie") },
                  complete: () => { sessionStorage.setItem("commande", JSON.stringify(this.com)) }
                })
              }
            })


          }


        }
      })


    } else {
      console.log("SessionStroge is not empty")
      this.com = JSON.parse(sessionStorage.getItem("commande"))
    }


  }

  testupdate() {

    this.srvco.findbyidco(this.com.id).subscribe({
      next: (data) => { this.com = data },
      error: (err) => { console.log(err) },
      complete: () => {
      

        if (this.com.detailCommande == "") {
          this.com.detailCommande += "12-23"
        } else {
          this.com.detailCommande += ";12-23"
        }
      

        this.srvco.updateCommande(this.com).subscribe({
          next: (data) => { console.log("update") },
          error: (err) => { console.log("Error update : " + err) },
          complete: () => { console.log("finished update") }
        })
      }
    })




  }
}
