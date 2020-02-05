import { Component, OnInit } from '@angular/core';
import { EtagereService } from '../services/etagere.service';
import { ActivatedRoute } from '@angular/router';
import { Etagere } from '../models/Etagere';

@Component({
  selector: 'app-detail-etagere',
  templateUrl: './detail-etagere.component.html',
  styleUrls: ['./detail-etagere.component.css']
})
export class DetailEtagereComponent implements OnInit {
  idEtagere:number;
  etagere:Etagere=new Etagere();

  constructor(private EtagereService:EtagereService,private route:ActivatedRoute) { 
    this.idEtagere=parseInt(this.route.snapshot.paramMap.get('idEtagere'))
  }

  ngOnInit() {
    this.EtagereService.getOne(this.idEtagere).subscribe(
      data=>{
        this.etagere=data;
      }
    );
  }

}
