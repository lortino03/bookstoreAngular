import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateurs } from '../models/utilisateurs';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Utilisateurs[]>("http://localhost:8080/utilisateurs").pipe()
  }
  getOne(id: number) {
    return this.http.get<Utilisateurs>("http://localhost:8080/utilisateurs/" + id).pipe()
  }

  addnewUtilisateur(utilisateurs: Utilisateurs) {
    return this.http.post("http://localhost:8080/utilisateurs", utilisateurs).pipe()
  }
  updateOne(id: number, utilisateurs: Utilisateurs) {
    return this.http.put("http://localhost:8080/utilisateurs/"+id, utilisateurs).pipe();
  }
  deleteOne(id:number){
    return this.http.delete("http://localhost:8080/utilisateurs/" +id).pipe();
  }
  getByLogin(utilisateurs: Utilisateurs) {
    return this.http.post<boolean>("http://localhost:8080/utilisateurs/connexbool",utilisateurs ).pipe()
  }
  getByLoginAndPwd(utilisateurs: Utilisateurs) {
    return this.http.post <Utilisateurs>("http://localhost:8080/utilisateurs/authentification",utilisateurs ).pipe()
  }
  getByLoginToken(utilisateurs: Utilisateurs) {
    return this.http.post<Utilisateurs>("http://localhost:8080/utilisateurs/token",utilisateurs ).pipe()
  }

 
}
