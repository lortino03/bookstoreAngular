import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Categorie[]>("http://localhost:8080/categorie").pipe()
  }
  getOne(id:number){
    return this.http.get<Categorie>("http://localhost:8080/categorie/" + id).pipe()
  }

  addnew(categorie: Categorie) {
    return this.http.post("http://localhost:8080/categorie", categorie).pipe()
}
updateOne(id:number, categorie:Categorie){
  return this.http.put ("http://localhost:8080/categorie/"+id,categorie).pipe();
}
deleteOne(id:number){
  return this.http.delete("http://localhost:8080/categorie/"+id).pipe();
}
}
