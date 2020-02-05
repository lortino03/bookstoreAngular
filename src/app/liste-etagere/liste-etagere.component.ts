import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/Etagere';
import { EtagereService } from '../services/etagere.service';

@Component({
  selector: 'app-liste-etagere',
  templateUrl: './liste-etagere.component.html',
  styleUrls: ['./liste-etagere.component.css']
})
export class ListeEtagereComponent implements OnInit {
  listEtagere: Etagere[]=[];


  constructor(private EtagereService: EtagereService) { }

  ngOnInit() {
    this.EtagereService.getAll().subscribe(
      data=>{
        this.listEtagere=data;
      }
    );
  }
SupprimerEtagere(id:number){
  this.EtagereService.deleteOne(id).subscribe(
    data=>{
      this.ngOnInit();
    }
  )
}
}
