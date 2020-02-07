import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livres-etagere',
  templateUrl: './livres-etagere.component.html',
  styleUrls: ['./livres-etagere.component.css']
})
export class LivresEtagereComponent implements OnInit {
  idEtagere:number;
  listLivresEtagere: Livres[]=[];
  constructor(private LivresService:LivresService, private route:ActivatedRoute ) { 
    this.idEtagere=parseInt(this.route.snapshot.paramMap.get('idEtagere'))
  }

  ngOnInit() {
    this.LivresService.getByEtagere(this.idEtagere).subscribe(
      data=>{
        this.listLivresEtagere=data;
      }
    );
  }

}
