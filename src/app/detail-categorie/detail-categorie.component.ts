import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/Categorie';
import { CategorieService } from '../services/categorie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {
  idCategorie: number;
  categorie: Categorie = new Categorie();
  constructor(private CategorieService: CategorieService, private route: ActivatedRoute) {   
    this.idCategorie=parseInt(this.route.snapshot.paramMap.get('idCategorie'))
  }

  ngOnInit() {
    this.CategorieService.getOne(this.idCategorie).subscribe(
      data => {
        this.categorie = data;
      }
    )
  }

}
