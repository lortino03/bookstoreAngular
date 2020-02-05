import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auteurs } from '../models/Auteurs';

@Injectable({
  providedIn: 'root'
})
export class AuteursService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Auteurs[]>("http://localhost:8080/auteurs").pipe()
  }
  getOne(id: number) {
    return this.http.get<Auteurs>("http://localhost:8080/auteurs/" + id).pipe()
  }

  addnew(auteur: Auteurs) {
    return this.http.post("http://localhost:8080/auteurs", auteur).pipe()
  }
  updateOne(id: number, auteur: Auteurs) {
    return this.http.put("http://localhost:8080/auteurs/" + id, auteur).pipe();
  }
  deleteOne(id: number) {
    return this.http.delete("http://localhost:8080/auteurs/" + id).pipe();
  }
}
