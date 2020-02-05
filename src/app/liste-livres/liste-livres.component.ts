import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {

  listLivres: Livres[]=[];

  constructor(private LivresService:LivresService) { }

  ngOnInit() {
    this.LivresService.getAll().subscribe(
      data=>{
        this.listLivres=data;
      }
    );
  }
supprimerLivre(id:number){
  this.LivresService.deleteOne(id).subscribe(
    data=>{
      this.ngOnInit()
    }
  )
}
}
