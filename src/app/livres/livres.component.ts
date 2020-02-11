import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from '../models/Categorie';
import { Auteurs } from '../models/Auteurs';
import { Etagere } from '../models/Etagere';
import { CategorieService } from '../services/categorie.service';
import { AuteursService } from '../services/auteurs.service';
import { EtagereService } from '../services/etagere.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
  newLivres: Livres = new Livres();
  Categorie: Categorie = new Categorie();
  Auteur: Auteurs = new Auteurs();
  Etagere: Etagere = new Etagere();
  idCategorie: number;
  idAuteur: number;
  idEtagere: number;
  listCategorie: Categorie[] = [];
  listAuteur: Auteurs[] = [];
  listEtagere: Etagere[] = [];

  constructor(private LivresService: LivresService, private route: ActivatedRoute, private CategorieService: CategorieService,
    private AuteursService: AuteursService, private EtagereService: EtagereService) {
      this.idAuteur=parseInt(this.route.snapshot.paramMap.get('idAuteurs'))

     }

  ngOnInit() {
    this.CategorieService.getAll().subscribe(
      data => {
        this.listCategorie = data;
        console.log(data);
      }
    );
    this.AuteursService.getAll().subscribe(
      data => {
        this.listAuteur = data;
        console.log(data);
      }
    );
    this.EtagereService.getAll().subscribe(
      data => {
        this.listEtagere = data;
        console.log(data);
      }
    );
  }

  AjouterLivres() {
    console.log(this.newLivres)
    this.AuteursService.addnew(this.Auteur).subscribe(
      data => {
        
        console.log(this.Auteur)
        this.newLivres.Auteurs=this.Auteur;
        this.EtagereService.getOne(this.idEtagere).subscribe(
          data=>{
            this.Etagere=data;
            console.log(this.Etagere)
            this.newLivres.Etagere=this.Etagere
            this.CategorieService.getOne(this.idCategorie).subscribe(
              data=>{
                this.Categorie=data;
                console.log(this.Categorie)
                this.newLivres.Categorie=this.Categorie
                this.LivresService.addnew(this.newLivres).subscribe(
                  data => {
                    console.log(data)
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Etagere ajoutée avec succès',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                );
              }
            );
          }
        );
      }
    );

  }
}
