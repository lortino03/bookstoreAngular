import { Component, OnInit } from '@angular/core';
import { AuteursService } from '../services/auteurs.service';
import { Router } from '@angular/router';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Auteurs } from '../models/Auteurs';


@Component({
  selector: 'app-livre-par-auteur',
  templateUrl: './livre-par-auteur.component.html',
  styleUrls: ['./livre-par-auteur.component.css']
})
export class LivreParAuteurComponent implements OnInit {
  idAuteur: number;
  listAuteursLivres:Auteurs[]=[];

  constructor(private AuteursService: AuteursService,private LivresService:LivresService,private route
  : Router) {
   }
  ngOnInit() { 
    this.AuteursService.getAll().subscribe(
      data=>{
        this.listAuteursLivres=data;
        console.log(this.idAuteur)
      }
    );
  }
}

