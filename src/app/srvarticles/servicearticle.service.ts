import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../model/article';
import { Observable } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class ServicearticleService {

  url: string = "http://localhost:8080/exo/articlerest/";
  constructor(private http: HttpClient) { }
  observe: IntersectionObserver

  findAll(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.url)
  }

  findByPrixAsc(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.url+"prixasc")
  }

  findByPrixDesc(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.url+"prixdesc")
  }

  findById(id:number): Observable<Article> {
    return this.http.get<Article>(this.url+id)
  }

  findByPrixEntre(min: number,max:number){
    return this.http.get<Array<Article>>(this.url+"findbyprix/"+min+"/"+max)
  }

  findByStr(chaine: string){
    return this.http.get<Array<Article>>(this.url+"findbydesc/"+chaine)
  }

  findbyMarAsc(){
    return this.http.get<Array<Article>>(this.url+"findallmarque")
  }

  findByMarque(str: string){
    return this.http.get<Article>(this.url+"findallmarque")
  }
}
