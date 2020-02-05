import { Component, OnInit } from '@angular/core';
import { Livres } from '../models/Livres';
import { LivresService } from '../services/livres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-livres',
  templateUrl: './detail-livres.component.html',
  styleUrls: ['./detail-livres.component.css']
})
export class DetailLivresComponent implements OnInit {
  idLivre:number;
  livres:Livres=new Livres();
  constructor(private LivresService:LivresService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.LivresService.getOne(this.idLivre).subscribe(
      data=>{
        this.livres=data;
      }
    )
    
  }

}
