import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';
import { Categorie } from '../models/Categorie';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-liste-categorie-utilisateurs',
  templateUrl: './liste-categorie-utilisateurs.component.html',
  styleUrls: ['./liste-categorie-utilisateurs.component.css']
})
export class ListeCategorieUtilisateursComponent implements OnInit {
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
