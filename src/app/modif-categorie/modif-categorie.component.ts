import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/Categorie';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modif-categorie',
  templateUrl: './modif-categorie.component.html',
  styleUrls: ['./modif-categorie.component.css']
})
export class ModifCategorieComponent implements OnInit {
idCategorie:number;
modifCategorie: Categorie=new Categorie();
  constructor(private CategorieService:CategorieService, private route:ActivatedRoute) { 
    this.idCategorie=parseInt(this.route.snapshot.paramMap.get('idCategorie'))
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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Categorie modifiée avec succès',
        showConfirmButton: false,
        timer: 1500
      })
      this.ngOnInit();
    }
  );
}
}
