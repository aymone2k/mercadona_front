import { Line } from "./line";
import { User } from "./user";

export class Cart {
  user: User = new User();
  liste: Array<Line> = [];
  totalquantity:number=0;
  totalcost: number=0;
  // total: {totalquantity:number, totalcost: number}

  constructor(){

  }

/*
  getTotal()
  {
      let somme = 0;
      for (let i = 0; i < this.liste.length; i++ )
      {
          somme += this.liste[i].prixLigne;
      }
     return somme;

    }

  getInfos()
  {
      return "Commande de "+ this.user.nom + " || Montant total à payer: "+ this.getTotal() + "€";
  } */


}
