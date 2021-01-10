import { Component, OnInit } from '@angular/core';
import { Etudiant} from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
 })
export class EtudiantsComponent implements OnInit {

  etudiants : Etudiant[]; 
  constructor(private etudiantService: EtudiantService,
              private router :Router)
   {
    //this.etudiants = etudiantService.listeEtudiants();
  
  }

  ngOnInit(): void {
    this.etudiantService.listeEtudiants().subscribe(etd=> {
      console.log(etd);
      this.etudiants = etd;
      });
  }
  supprimerEtudiant(e:Etudiant)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.etudiantService.supprimerEtudiant(e.idetudiant).subscribe(() => {
console.log("etudiant supprimé");
this.SuprimerEtudiantDuTableau(e);
});
}
SuprimerEtudiantDuTableau(etd : Etudiant) {
  this.etudiants.forEach((cur, index) => {
  if(etd.idetudiant=== cur.idetudiant) {
  this.etudiants.splice(index, 1);
  }
  });
  }
}
