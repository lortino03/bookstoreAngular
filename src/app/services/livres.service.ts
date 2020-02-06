import { Injectable } from '@angular/core';
import { Livres } from '../models/Livres';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Livres[]>("http://localhost:8080/livres").pipe()
  }
  getOne(id: number) {
    return this.http.get<Livres>("http://localhost:8080/livres/" + id).pipe()
  }

  addnew(livre: Livres) {
    return this.http.post("http://localhost:8080/livres", livre).pipe()
  }
  updateOne(id: number, livre: Livres) {
    return this.http.put("http://localhost:8080/livres/"+id, livre).pipe();
  }
  deleteOne(id:number){
    return this.http.delete("http://localhost:8080/livres/" +id).pipe();
  }
  
  getByAuteurs(id: number) {
    return this.http.get<Livres[]>("http://localhost:8080/livres/byauteur/"+id).pipe()
  }
}
