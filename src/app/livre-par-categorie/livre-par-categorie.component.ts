import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre-par-categorie',
  templateUrl: './livre-par-categorie.component.html',
  styleUrls: ['./livre-par-categorie.component.css']
})
export class LivreParCategorieComponent implements OnInit {
  Categorie :Categorie=new Categorie();
  idCategorie: number;
  listLivreCategorie: Categorie[]=[];

  constructor(private CategorieService: CategorieService, private route: Router) { }

  ngOnInit() {
    this.CategorieService.getAll().subscribe(
      data=>{
        this.listLivreCategorie=data;
        console.log(data);
      }
    );
  }
}
