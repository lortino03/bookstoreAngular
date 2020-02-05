import { Component, OnInit } from '@angular/core';
import { Auteurs } from '../models/Auteurs';
import { AuteursService } from '../services/auteurs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {
  
newAuteurs:Auteurs=new Auteurs();
  constructor(private auteursService:AuteursService, private route:Router) { }

  ngOnInit() {
  }

  ajouterAuteur(){
    console.log(this.newAuteurs)
    this.auteursService.addnew(this.newAuteurs).subscribe(
      data=>{

      }
    );
  }

}
