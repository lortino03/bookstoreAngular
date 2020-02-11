import { Component, OnInit, ViewChild } from '@angular/core';
// import angu mater

import { Sort } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { from } from 'rxjs';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-test-tuto',
  templateUrl: './test-tuto.component.html',
  styleUrls: ['./test-tuto.component.css']
})
export class TestTutoComponent implements OnInit {
  ListeLivres: Livres[] = [];

  // initialisation de la liste des colonnes

  displayedColumns: String[] = ['titre', 'isbn', 'dateDeParution', 'auteur', 'categorie', 'etagere'];

  // initialise la source de données
  dataSource = new MatTableDataSource<Livres>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;      // matsor module de tri

  constructor(private LivresService: LivresService) {
    this.getAll()               // appelle a la finctons 
  }

  ngOnInit() {
  }
  getAll() {
    this.LivresService.getAll().subscribe(          // on peut faire notre propre fonction de tri 
      data => {
        this.ListeLivres = data;
        this.dataSource = new MatTableDataSource(this.ListeLivres); // datasource prend les valeur de liste
        this.dataSource.sort = this.sort;         // pour trier les donnees 
      }
    )
  }
}
