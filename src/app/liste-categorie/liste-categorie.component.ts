import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.css']
})
export class ListeCategorieComponent implements OnInit {
listCategorie: Categorie[]=[];

  constructor(private CategorieService:CategorieService) { }

  ngOnInit() {
  this.CategorieService.getAll().subscribe(
    data=>{
      this.listCategorie=data
    }
  );
  }
  SupprimerCategorie(id:number){
   this.CategorieService.deleteOne(id).subscribe(
     data=>{
       this.ngOnInit();

     }
   );
  }
}
