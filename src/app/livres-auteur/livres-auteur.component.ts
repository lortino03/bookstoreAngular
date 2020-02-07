import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livres-auteur',
  templateUrl: './livres-auteur.component.html',
  styleUrls: ['./livres-auteur.component.css']
})
export class LivresAuteurComponent implements OnInit {
  idAuteur:number;
  listLivresAuteur: Livres[]=[];
  constructor(private LivresService:LivresService, private route:ActivatedRoute ) { 
    this.idAuteur=parseInt(this.route.snapshot.paramMap.get('idAuteurs'))
  }

  ngOnInit() {
    this.LivresService.getByAuteurs(this.idAuteur).subscribe(
      data=>{
        this.listLivresAuteur=data;   
      }
    );
  }

}
