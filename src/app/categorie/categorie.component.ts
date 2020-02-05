import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  newCategorie: Categorie = new Categorie();

  constructor(private CategorieService: CategorieService, private Route: Router) { }
  ngOnInit() {
  }

  ajouterCategorie() {
    console.log(this.newCategorie)
    this.CategorieService.addnew(this.newCategorie).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categorie ajoutée avec succès',
          showConfirmButton: false,
          timer: 1500
        })
      }
    );

  }
}
