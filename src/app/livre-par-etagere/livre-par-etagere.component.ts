import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/Etagere';
import { EtagereService } from '../services/etagere.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Auteurs } from '../models/Auteurs';

@Component({
  selector: 'app-livre-par-etagere',
  templateUrl: './livre-par-etagere.component.html',
  styleUrls: ['./livre-par-etagere.component.css']
})
export class LivreParEtagereComponent implements OnInit {
  Etagere :Etagere= new Etagere();
  idEtagere:number;
  listEtagereLivre: Etagere[]=[];

  constructor(private EtagereService: EtagereService, private route:ActivatedRoute) {
    this.idEtagere=parseInt(this.route.snapshot.paramMap.get('idEtagere'))
  }

  ngOnInit() {
    this.EtagereService.getAll().subscribe(
      data=>{
        this.listEtagereLivre=data;
       
      }
    )
  }

}
