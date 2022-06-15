import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Line } from '../model/line';
import { ServicearticleService } from './servicearticle.service';
import { SrvcartService } from './srvcart.service';
import { Observable } from "rxjs";
import { User } from '../model/user';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class ParseCommandeService {

  constructor(private srv: ServicearticleService) { }

  strToCrt(str: string, user: User){
    let x: Array<Line> = [];
    let split = str.split(";");
    let l: Line = new Line();
    let y: any;
    for(var line of split){
      y = line.split("-")
      this.srv.findById(+y[0]).subscribe({
        next: (data) => {
          l.article = data
          l.quantite = +y[1]
          x.push(l)
        },
        error: (err) => { console.log(err) },
        complete: () => { console.log("line parsed :" + x) }
      })
    }

    let z: Cart = new Cart();
    z.liste = x;
    z.user = user;
    return z;
  }


  cartToString(cart: Cart) {
    let str: string = "";
    let first = true
    cart.liste.forEach(function (line) {
      if (first) {
        str += line.article.id.toString() + "-" + line.quantite.toString()
        first = false
      } else {
        str += ";"+ line.article.id.toString() + "-" + line.quantite.toString()
      }
    })
    return str;
  }
}
