import { Component, OnInit } from '@angular/core';
import { EtagereService } from '../services/etagere.service';
import { Router } from '@angular/router';
import { Etagere } from '../models/Etagere';

@Component({
  selector: 'app-etagere',
  templateUrl: './etagere.component.html',
  styleUrls: ['./etagere.component.css']
})
export class EtagereComponent implements OnInit {
  newEtagere: Etagere = new Etagere();

  constructor(private EtagereService: EtagereService, private route: Router) { }

  ngOnInit() {
  }
  ajouterEtagere() {
    console.log(this.newEtagere)
    this.EtagereService.addnew(this.newEtagere).subscribe(
      data => {

      }
    );
  }

}
