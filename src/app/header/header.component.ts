import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { Utilisateurs } from '../models/utilisateurs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  newUtilisateurs: Utilisateurs = new Utilisateurs();
  vartoken;
  Helper = new JwtHelperService();
  condition: boolean;
  decodeToken;

  constructor(private router: Router) {

    router.events.forEach(
      event => {
        if (event instanceof NavigationStart) {
          console.log(event['url'])

          if (localStorage.getItem("token")) {
            this.condition = true;
          } else {
            this.condition = false;
          }
        }
      }
    )



  }

  ngOnInit() {

    this.vartoken = localStorage.getItem("token")
    //  Decode ces données et je les mets dans mon new utilisateur
    this.newUtilisateurs = this.Helper.decodeToken(this.vartoken);
    console.log(this.newUtilisateurs);
  }

  logout() {
    localStorage.removeItem("token");
    window.location.href="/connexion"
  }

}
