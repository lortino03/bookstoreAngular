import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/Etagere';
import { EtagereService } from '../services/etagere.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-liste-etagere',
  templateUrl: './liste-etagere.component.html',
  styleUrls: ['./liste-etagere.component.css']
})
export class ListeEtagereComponent implements OnInit {

  listEtagere: Etagere[] = [];


  constructor(private EtagereService: EtagereService) { }

  ngOnInit() {
    this.EtagereService.getAll().subscribe(
      data => {
        this.listEtagere = data;
      }
    );
  }
  SupprimerEtagere(id: number) {
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
        this.EtagereService.deleteOne(id).subscribe(
          data => {
            Swal.fire(
              'Supprimé!',
              'Etagere supprimée.',
              'success'
            )
            this.ngOnInit();
          }
        )
        }
    });
  }
}
