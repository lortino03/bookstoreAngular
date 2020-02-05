import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-livres',
  templateUrl: './modif-livres.component.html',
  styleUrls: ['./modif-livres.component.css']
})
export class ModifLivresComponent implements OnInit {
  idLivres:number;
  modifLivres:Livres=new Livres();

  constructor(private livresService:LivresService, private route:ActivatedRoute ) { 
    this.idLivres=parseInt(this.route.snapshot.paramMap.get('id_livre'))
  }

  ngOnInit() {
    this.livresService.getOne(this.idLivres).subscribe(
      data=>{
        this.modifLivres=data;
        console.log(data)
      }
    );
  }
ModifierLivre(){
  console.log(this.modifLivres)
  this.livresService.updateOne(this.idLivres,this.modifLivres).subscribe(
    data=>{

    }
  );

}
}
