import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Router } from '@angular/router';
import { Categorie } from '../models/Categorie';
import { Auteurs } from '../models/Auteurs';
import { Etagere } from '../models/Etagere';
import { CategorieService } from '../services/categorie.service';
import { AuteursService } from '../services/auteurs.service';
import { EtagereService } from '../services/etagere.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  newLivres: Livres=new Livres();
  idCategorie: number;
  idAuteur: number;
  idEtagere: number;
  listCategorie: Categorie[]=[];
  listAuteur: Auteurs[]=[];
  listEtagere: Etagere[]=[];

  constructor(private LivresService:LivresService, private route:Router, private CategorieService:CategorieService,
    private AuteursService: AuteursService, private EtagereService: EtagereService) { }

  ngOnInit() {
    this.CategorieService.getAll().subscribe(
      data=>{
        this.listCategorie=data;
        console.log(data);
      }
    );
 this.AuteursService.getAll().subscribe(
   data=>{
     this.listAuteur=data;
     console.log(data);
   }
 );
 this.EtagereService.getAll().subscribe(
   data=>{
     this.listEtagere=data;
     console.log(data);
       }
 );
  }

  AjouterLivres(){
    console.log(this.newLivres)
    this.LivresService.addnew(this.newLivres).subscribe(
      data=>{

      }
    );

  }
}
