import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../model/etudiant.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [
  ]
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private etudiantService : EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params.id).
 subscribe( etd =>{ this.currentEtudiant = etd; } ) ;
  }
  updateEtudiant(){
    this.etudiantService.updateEtudiant(this.currentEtudiant).subscribe(etd => {
      this.router.navigate(['etudiants']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
  }

}
