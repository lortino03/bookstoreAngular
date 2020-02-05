import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/Categorie';

@Component({
  selector: 'app-modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})
export class ModifCategorieComponent implements OnInit {
idCategorie:number;
modifCategorie: Categorie=new Categorie();
  constructor(private CategorieService:CategorieService, private route:ActivatedRoute) { 
    this.idCategorie=parseInt(this.route.snapshot.paramMap.get('id_categorie'))
  }

  ngOnInit() {
    this.CategorieService.getOne(this.idCategorie).subscribe(
      data=>{
        this.modifCategorie=data;
      }
    );
  }
ModifierCategorie(){
  console.log(this.modifCategorie)
  this.CategorieService.updateOne(this.idCategorie,this.modifCategorie).subscribe(
    data=>{
    }
  );
}
}
