import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Utilisateurs } from '../models/utilisateurs';
import * as jwt_decode from "jwt-decode";
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

  constructor(private utilisateursService: UtilisateursService, private route: Router) {
   
   }

  ngOnInit() {
    this.utilisateursService.getAll().subscribe(
    data=>{   
    }
    )
  }

  Seconnecter() {
 
    this.utilisateursService.getByLogin(this.newUtilisateur).subscribe(
      data => {
        this.newUtilisateur.login=data;
        this.newUtilisateur.pwd=data;
        if (data == true) {
          localStorage.setItem("login",data["login"])
          localStorage.setItem("pwd",data["pwd"])
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion reussie!',
          
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
  SeconnectToken() {
    
    this.utilisateursService.getByLoginToken(this.newUtilisateur).subscribe(
      data => {
        this.newUtilisateur.login=data;
        this.newUtilisateur.pwd=data;
        if (data != null) {
          localStorage.setItem("token",data["token"])
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Connexion reussie!',
            timer: 1500
          }).then (function(){
            window.location.href="/home";
            console.log("token")
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
