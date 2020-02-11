import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from '../models/utilisateurs'
import { Router } from '@angular/router';
import { UtilisateursService } from '../services/utilisateurs.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  newUtilisateur: Utilisateurs = new Utilisateurs();

  constructor(private UtilisateursService: UtilisateursService, private route: Router) { }

  ngOnInit() {
  }
  AjouterUtilisateurs() {
    console.log(this.newUtilisateur)
    this.UtilisateursService.addnewUtilisateur(this.newUtilisateur).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Utilisateur ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
      }

    );

  }
}
