import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Route } from '@angular/compiler/src/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {
  idLivre:Livres;
  listLivres: Livres[]=[];

  constructor(private LivresService:LivresService) { }

  ngOnInit() {
    this.LivresService.getAll().subscribe(
      data=>{
        this.listLivres=data;
      }
    );
  }
SupprimerLivre(id:number){
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
      this.LivresService.deleteOne(id).subscribe(
        data => {
          Swal.fire(
            'Supprimé!',
            'Le livre a été supprimé.',
            'success'
          )
          this.ngOnInit();
        }
      );

    }
  })
}
}
