import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Cart } from '../model/cart';
import { Line } from '../model/line';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SrvcartService {
  cart: Cart = new Cart();
  article: Article;
  constructor() { }

  addArticleToCart(article, nbre) {

    this.cart = this.getCart();
    //si on veut ajouter une liste dans le panier plutot que d'ajouter on va juste modifier la qté
    //1- verif si liste est déjà dans le panier
    const line = this.cart.liste.find(line => line.article.id === article.id);
    console.log("quantité ajoutée" + nbre);

    if (line) {
      //line.article.prix = Number(line.article.prix.toFixed(2));
      line.quantite = line.quantite + nbre;
      this.cart.totalcost = Number((this.cart.totalcost + line.article.prix * nbre).toFixed(2));
      this.cart.totalquantity += nbre;
    } else {
      const line = new Line();
      line.article = article;
      line.quantite = nbre;
      this.cart.totalcost = Number((this.cart.totalcost + line.article.prix * nbre).toFixed(2));
      this.cart.totalquantity += nbre;
      this.cart.liste.push(line);
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));

  }

  addQuantity(ligne, nbre) {

    this.cart = this.getCart();
    //si on veut ajouter une liste dans le panier plutot que d'ajouter on va juste modifier la qté
    //1- verif si liste est déjà dans le panier
    console.log("quantité ajoutée " + nbre);

    //ligne.quantite = ligne.quantite + nbre;
    let prix = this.cart.liste[ligne].article.prix
    this.cart.totalcost += prix * nbre;
    this.cart.totalquantity += nbre;
    this.cart.liste[ligne].quantite += nbre;
    console.log(this.cart.liste[ligne].article)

    localStorage.setItem("cart", JSON.stringify(this.cart));

  }



  getCart() {
    if (localStorage.getItem("cart") != null) {
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }
    else {
      this.cart = new Cart();
    }

    return this.cart;
  }

  removeOneQteArticle(article) {

  }
  removeManyQteArticle(article) {

  }

  addUserToCart(user) {
    this.cart.user.mail = user.mail;
    this.cart.user.nom = user.nom;
    this.cart.user.prenom = user.prenom;


  }

}
