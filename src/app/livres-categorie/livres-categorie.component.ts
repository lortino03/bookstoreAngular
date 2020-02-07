import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livres-categorie',
  templateUrl: './livres-categorie.component.html',
  styleUrls: ['./livres-categorie.component.css']
})
export class LivresCategorieComponent implements OnInit {
  idCategorie:number;
  listLivresCategorie: Livres[]=[];
  constructor(private LivresService:LivresService, private route:ActivatedRoute ) { 
    this.idCategorie=parseInt(this.route.snapshot.paramMap.get('idCategorie'))
  }

  ngOnInit() {
    this.LivresService.getByCategorie(this.idCategorie).subscribe(
      data=>{
        this.listLivresCategorie=data;
      }
    );
  }

}
