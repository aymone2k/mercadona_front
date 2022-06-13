export class Cart {
  user: User = new User();
  liste: Array<Line>=new Array<Line>();


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
  }

}
