import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etagere } from '../models/Etagere';

@Injectable({
  providedIn: 'root'
})
export class EtagereService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Etagere[]>("http://localhost:8080/etagere").pipe()
  }
  getOne(id:number){
    return this.http.get<Etagere>("http://localhost:8080/etagere/" + id).pipe()
  }

  addnew(etagere: Etagere) {
    return this.http.post("http://localhost:8080/etagere", etagere).pipe()
}
updateOne(id:number, etagere:Etagere){
  return this.http.put ("http://localhost:8080/etagere/"+id,etagere).pipe();
}

deleteOne(id:number){
  return this.http.delete('http://localhost:8080/etagere/'+id).pipe();
}
}
