import { Component, OnInit } from '@angular/core';
import { Etagere } from '../models/Etagere';
import { EtagereService } from '../services/etagere.service';
declare var $:any;

@Component({
  selector: 'app-liste-etagere-utilisateur',
  templateUrl: './liste-etagere-utilisateur.component.html',
  styleUrls: ['./liste-etagere-utilisateur.component.css']
})
export class ListeEtagereUtilisateurComponent implements OnInit {

  listEtagere: Etagere[] = [];


  constructor(private EtagereService: EtagereService) { }

  ngOnInit() {
    this.EtagereService.getAll().subscribe(
      data => {
        this.listEtagere = data;
      }
    );
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
  }
  
}
