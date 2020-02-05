import { Component, OnInit } from '@angular/core';
import { AuteursService } from '../services/auteurs.service';
import { Auteurs } from '../models/Auteurs';

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: ['./liste-auteurs.component.css']
})
export class ListeAuteursComponent implements OnInit {
  listAuteurs: Auteurs[]=[];

  constructor(private AuteursService:AuteursService) { }

  ngOnInit() {
    this.AuteursService.getAll().subscribe(
      data=>{
        console.log(this.listAuteurs)
        this.listAuteurs=data;
      }
    );
  }
supprimerAuteurs(id:number){
  this.AuteursService.deleteOne(id).subscribe(
    data=>{
      this.ngOnInit();
    }
  )
}
}
