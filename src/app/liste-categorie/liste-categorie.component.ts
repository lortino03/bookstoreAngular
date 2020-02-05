import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';
import Swal from 'sweetalert2'

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
    Swal.fire({
      icon: 'error',
      title: 'Desolé...',
      text: 'Cet auteur ne peux etre supprimé!',
      footer: '<a href>Why do I have this issue?</a>'
    })
    Swal.fire({
      title: 'Etes vous sûr?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, continuer!'
    }).then((result) => {
      if (result.value) {
        this.CategorieService.deleteOne(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'Le fichier a été supprimé.',
              'success'
            )
            this.ngOnInit();
          }
        );

      }
    })
   
  }
}
