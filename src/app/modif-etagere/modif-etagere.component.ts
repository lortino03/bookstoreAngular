import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/Etagere';
import { EtagereService } from '../services/etagere.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modif-etagere',
  templateUrl: './modif-etagere.component.html',
  styleUrls: ['./modif-etagere.component.css']
})
export class ModifEtagereComponent implements OnInit {
  idEtagere: number;
  modifEtagere: Etagere = new Etagere();


  constructor(private EtagereService: EtagereService, private route: ActivatedRoute) {

    this.idEtagere = parseInt(this.route.snapshot.paramMap.get('idEtagere'))
  }

  ngOnInit() {
    this.EtagereService.getOne(this.idEtagere).subscribe(
      data => {
        this.modifEtagere = data;
        console.log(data)

      }
    );
  }
  ModifierEtagere() {
    console.log(this.modifEtagere)
    this.EtagereService.updateOne(this.idEtagere, this.modifEtagere).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Etagere modifiée avec succès',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit();

      }
    );
  }
}
