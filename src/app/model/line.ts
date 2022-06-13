import { Article } from "./article";

export class Line {
  quantite: number;
    article: Article;
    prixLigne: number;

    getPrix()
    {
        this.prixLigne = this.quantite*this.article.prix;
    }
}
