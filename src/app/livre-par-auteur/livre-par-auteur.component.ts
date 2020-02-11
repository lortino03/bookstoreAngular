import { Component, OnInit } from '@angular/core';
import { AuteursService } from '../services/auteurs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Auteurs } from '../models/Auteurs';


@Component({
  selector: 'app-livre-par-auteur',
  templateUrl: './livre-par-auteur.component.html',
  styleUrls: ['./livre-par-auteur.component.css']
})
export class LivreParAuteurComponent implements OnInit {
  Auteurs :Auteurs=new Auteurs();
  idAuteur: number;
  listAuteursLivres:Auteurs[]=[];
  listDeLivres: Livres[]=[];

  constructor(private AuteursService: AuteursService,private LivresService: LivresService, private route
  : ActivatedRoute) {this.idAuteur=parseInt(this.route.snapshot.paramMap.get("idAuteurs"))
  
   }
  ngOnInit() { 
    this.AuteursService.getAll().subscribe(
      data=>{
        this.listAuteursLivres=data;
        console.log(data);
      }
    );  
    this.LivresService.getByAuteurs(this.idAuteur).subscribe(
      data=>{
        this.listDeLivres=data;
      }
    )
  }
}

