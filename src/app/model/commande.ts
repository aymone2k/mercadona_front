import { User } from './user';

export class Commande {
    id: number;
    detailCommande: string;
    etatCommande: string;
    idUser: User;
    version: number;

}
