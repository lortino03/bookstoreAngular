import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { LivresService } from '../services/livres.service';
import { Livres } from '../models/Livres';
declare var $:any;

@Component({
  selector: 'app-liste-livres-utilisateurs',
  templateUrl: './liste-livres-utilisateurs.component.html',
  styleUrls: ['./liste-livres-utilisateurs.component.css']
})
export class ListeLivresUtilisateursComponent implements OnInit {
  idLivre: Livres;
  listLivres: Livres[] = [];

  constructor(private LivresService: LivresService) { }

  ngOnInit() {
    this.LivresService.getAll().subscribe(
      data => {
        this.listLivres = data;
        console.log(data);
      }
    );

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }
  SupprimerLivre(id: number) {
    this.LivresService.deleteOne(id).subscribe(
      data => {
        if (data = false) {
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
    )
  }


}
