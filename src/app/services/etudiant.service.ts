import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8080/Etudiants/api';
  etudiants : Etudiant[]; 
  etudiant : Etudiant;
  
  constructor(private http : HttpClient) { 
    /* this.etudiants = [
    {idetudiant : 1, nom : "wejdene bedoui123", moyenne : 19.99, dateInscrip : new Date("01/14/2021")},
    {idetudiant : 2, nom : "aymen bedoui", moyenne : 19.98, dateInscrip : new Date("12/17/2021")},
    {idetudiant : 3, nom :"ines ben abdalah", moyenne : 19.97, dateInscrip : new Date("02/20/2021")}
  ];*/
}

listeEtudiants(): Observable<Etudiant[]>{
  return this.http.get<Etudiant[]>(this.apiURL);
  }

ajouterEtudiant( etd: Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.apiURL, etd, httpOptions);
    }

supprimerEtudiant(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
    
consulterEtudiant(id: number): Observable<Etudiant> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Etudiant>(url);
        }
trierEtudiants(){
        this.etudiants = this.etudiants.sort((n1,n2) => {
        if (n1.idetudiant > n2.idetudiant) {
        return 1;
        }
        if (n1.idetudiant < n2.idetudiant) {
        return -1;
        }
        return 0;
        });
        }
        
  updateEtudiant(etd :Etudiant) : Observable<Etudiant>
        {
        return this.http.put<Etudiant>(this.apiURL, etd, httpOptions);
        }
      
      
}