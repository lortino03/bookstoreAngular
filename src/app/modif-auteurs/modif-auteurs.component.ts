import { Component, OnInit } from '@angular/core';
import { Auteurs } from '../models/Auteurs';
import { ActivatedRoute } from '@angular/router';
import { AuteursService } from '../services/auteurs.service';


@Component({
  selector: 'app-modif-auteurs',
  templateUrl: './modif-auteurs.component.html',
  styleUrls: ['./modif-auteurs.component.css']
})
export class ModifAuteursComponent implements OnInit {
  idAuteurs: number;
  modifAuteur: Auteurs = new Auteurs();
  constructor(private AuteursService: AuteursService, private route: ActivatedRoute) {

    this.idAuteurs = parseInt(this.route.snapshot.paramMap.get('id_auteur'))
  }

  ngOnInit() {
    this.AuteursService.getOne(this.idAuteurs).subscribe(
      data => {
        this.modifAuteur = data;
        console.log(data);
      }
    );
  }
  ModifierAuteur() {
    console.log(this.modifAuteur)
    this.AuteursService.updateOne(this.idAuteurs, this.modifAuteur).subscribe(
      data => {
      }
    );
  }
}
