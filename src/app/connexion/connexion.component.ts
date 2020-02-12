import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router } from '@angular/router';
import { Utilisateurs } from '../models/utilisateurs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  newUtilisateur: Utilisateurs = new Utilisateurs();
  login: String;
  pwd: String;

  constructor(private utilisateursService: UtilisateursService, private route: Router) { }

  ngOnInit() {
    this.utilisateursService.getAll().subscribe(
    data=>{
      
    }
    )
  }

  Seconnecter() {
    this.newUtilisateur.login = this.login;
    this.newUtilisateur.pwd = this.pwd;
    this.utilisateursService.getByLogin(this.newUtilisateur).subscribe(
      data => {
        if (this.newUtilisateur != null) {
          localStorage.setItem("login",data["login"])
          localStorage.setItem("pwd",data["pwd"])
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'bievenue sur la page',
            showConfirmButton: false,
            showCloseButton:true,
            timer: 1500
          }).then (function(){
            window.location.href="/home";
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'pwd ou login incorrect!',
            footer: '<a href>Why do I have this issue?</a>'
          }).then (function(){
            window.location.href="/utilisateurs";
          })
        }
      }
    );
  }
}
