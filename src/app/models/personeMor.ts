import { validateConfig } from '@angular/router/src/config';
import { ImpotsSociete } from './impotsSociete';
import { Employee } from './employee';
import { Contribuable } from './contribuable';

export class PersoneMor extends Contribuable{
     RaisonSocial;
     DateDebutActivite;
     SecteurActivite;
     Activite;
     ChiffreDaffaire;
     regime_impot;
     code_tva;
     assujettissement_tva;
     assujettissement_impots;
     generator_tva;
     periodicite_acitivte;
     periodicite_impots;
     ImpotsSociete : ImpotsSociete;
     Employee : Employee;
}
