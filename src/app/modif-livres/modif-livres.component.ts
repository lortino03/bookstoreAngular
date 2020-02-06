import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/Categorie';
import { Auteurs } from '../models/Auteurs';
import { Etagere } from '../models/Etagere';
import { AuteursService } from '../services/auteurs.service';
import { CategorieService } from '../services/categorie.service';
import { EtagereService } from '../services/etagere.service';

@Component({
  selector: 'app-modif-livres',
  templateUrl: './modif-livres.component.html',
  styleUrls: ['./modif-livres.component.css']
})
export class ModifLivresComponent implements OnInit {
  idLivres: number;
  modifLivres: Livres = new Livres();
  modifEtagere: Etagere = new Etagere();
  modifCategorie: Categorie = new Categorie();
  modifAuteur: Auteurs = new Auteurs();
  Categorie: Categorie = new Categorie();
  Auteur: Auteurs = new Auteurs();
  Etagere: Etagere = new Etagere();
  idCategorie: number;
  idAuteur: number;
  idEtagere: number;


  constructor(private livresService: LivresService, private AuteursService: AuteursService
    , private CategorieService: CategorieService, private EtagereService: EtagereService, private route: ActivatedRoute) {

    this.idLivres = parseInt(this.route.snapshot.paramMap.get('idLivre'))
    this.idAuteur = parseInt(this.route.snapshot.paramMap.get('idAuteurs'))
    this.idCategorie = parseInt(this.route.snapshot.paramMap.get('idCategorie'))
    this.idEtagere = parseInt(this.route.snapshot.paramMap.get('idEtagere'))

  }

  ngOnInit() {
    this.livresService.getOne(this.idLivres).subscribe(
      data => {
        this.modifLivres = data;
        console.log(data)
      }
    );
    this.EtagereService.getOne(this.idEtagere).subscribe(
      data => {
        this.modifEtagere = data;
        console.log(data)
      }
    );
    this.AuteursService.getOne(this.idAuteur).subscribe(
      data => {
        this.modifAuteur = data;
        console.log(data);
      }
    );
    this.CategorieService.getOne(this.idCategorie).subscribe(
      data => {
        this.modifCategorie = data;

      }
    )
  }
  ModifierLivre() {
    this.AuteursService.getOne(this.idAuteur).subscribe(
      data => {
        this.Auteur = data;
        console.log(data);
        this.modifLivres.Auteurs = this.Auteur;
        console.log(this.modifLivres)
        this.CategorieService.getOne(this.idCategorie).subscribe(
          data => {
            this.Categorie = data;
            console.log(data);
            this.modifLivres.Categorie = this.Categorie;
            console.log(this.modifLivres)
            this.EtagereService.getOne(this.idEtagere).subscribe(
              data => {
                this.Etagere = data;
                console.log(data)
                this.modifLivres.Etagere = this.Etagere;
                console.log(this.modifLivres)
                this.livresService.updateOne(this.idLivres, this.modifLivres).subscribe(
                  data => {
                    console.log(data);
                  }
                );
              }
            )
          }
        )

      }
    );
  }
}
