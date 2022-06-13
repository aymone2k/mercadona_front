import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class SrvcrudusersService {



  constructor(private http: HttpClient) {


   }

  ///////NEW USER////////

  create(data)
  {
    const body = JSON.stringify(data);

    this.http.post("http://localhost:8080/exo/personne", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      console.log("crud service post OK!");
    },
    err => {
      console.log("crud service post KO!")
    })
  }


//////////FIND ALL////////

getInfos() {
  this.http.get<Array<User>>("http://localhost:8080/exo/personne").subscribe(
    response => {


      sessionStorage.setItem("lst", JSON.stringify(response));
    }
    ,
    err => {
      console.log("*************KO")

    }


  );

}

///////UPDATE//////
update(data)
{
  const body = JSON.stringify(data);
let message: string;
  this.http.put("http://localhost:8080/exo/personne/", body, {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }).subscribe(
    response => {
      console.log("crud service put OK!");
      sessionStorage.setItem("msg", "Mise à jour réussie!");
    },
    err => {
      console.log("crud service put KO!")
    }
  )
}

//////FINDBY ID/////////

findbyId(mail, mdp): Observable<User>{
  return this.http.get<User>("http://localhost:8080/exo/personne/"+mail +"/"+mdp)}


}
