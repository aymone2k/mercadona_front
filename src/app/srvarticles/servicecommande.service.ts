import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { Commande } from '../model/commande';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServicecommandeService {


  url: string = "http://localhost:8080/exo/commandRest"
  constructor(private http: HttpClient) { }

  findAll(): Observable<Array<Commande>> {
    return this.http.get<Array<Commande>>(this.url)
  }

  findbyidco(id: number): Observable<Commande>{
    return this.http.get<Commande>(this.url+"/"+id)
  }

  getUserLastCommande(id: string): Observable<string>{
    return this.http.get(this.url+"/getUserLastCartString/"+id, {responseType : 'text'})
  }

  findUserCommande(id: string): Observable<Array<User>>{
    return this.http.get<Array<User>>(this.url+"/getCoByUserId/"+id)
  }

  updateCommande(com: Commande): Observable<any>{
    return this.http.put<any>(this.url, com)
  }

  createCommande(com: Commande): Observable<any>{
    return this.http.post<any>(this.url, com)
  }

}
