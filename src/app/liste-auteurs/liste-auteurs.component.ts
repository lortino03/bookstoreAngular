import { Component, OnInit } from '@angular/core';
import { AuteursService } from '../services/auteurs.service';
import { Auteurs } from '../models/Auteurs';
import Swal from 'sweetalert2'
declare var $:any;

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: ['./liste-auteurs.component.css']
})
export class ListeAuteursComponent implements OnInit {
  listAuteurs: Auteurs[] = [];

  constructor(private AuteursService: AuteursService) { }

  ngOnInit() {
    this.AuteursService.getAll().subscribe(
      data => {
        console.log(this.listAuteurs)
        this.listAuteurs = data;
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
  supprimerAuteurs(id: number) {
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
        this.AuteursService.deleteOne(id).subscribe(
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
