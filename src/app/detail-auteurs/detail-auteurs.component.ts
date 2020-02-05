import { Component, OnInit } from '@angular/core';
import { Auteurs } from '../models/Auteurs';
import { AuteursService } from '../services/auteurs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-auteurs',
  templateUrl: './detail-auteurs.component.html',
  styleUrls: ['./detail-auteurs.component.css']
})
export class DetailAuteursComponent implements OnInit {
  idAuteur: number;
  auteurs: Auteurs=new Auteurs();
  constructor(private auteursService:AuteursService, private route: ActivatedRoute) { 
    this.idAuteur=parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.auteursService.getOne(this.idAuteur).subscribe(
      data=>{
        this.auteurs=data;
      }
    );
  }

}
