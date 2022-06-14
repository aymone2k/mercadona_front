import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Cart } from '../model/cart';
import { Line } from '../model/line';

@Injectable({
  providedIn: 'root'
})
export class SrvcartService {
cart:Cart = new Cart();
article:Article;
  constructor() { }

  addArticleToCart(article, nbre){
    //si on veut ajouter une liste dans le panier plutot que d'ajouter on va juste modifier la qté
    //1- verif si liste est déjà dans le panier
    const line = this.cart.liste.find(line =>line.article.id === article.id);
console.log("quantité ajoutée" + nbre);

    if(line){
      line.quantite = line.quantite + nbre;
    }else{
      const line = new Line();
      line.article = article;
      line.quantite =nbre;
      this.cart.liste.push(line);
    }
    this.updateCart();
  }
  updateCart(){// mise à jour du panier
    this.cart.total = {quantity:0, cost: 0}
    this.cart.liste.forEach(line =>{
      this.cart.total.quantity += line.quantite;
      line.getPrix();
      this.cart.total.cost += line.prixLigne;
    })
  }
  removeOneQteArticle(article){

  }
  removeManyQteArticle(article){

  }

}
