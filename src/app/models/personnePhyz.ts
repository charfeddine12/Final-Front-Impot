import { validateConfig } from '@angular/router/src/config';
import { ImportRPP } from './impotsRPP';
import { Contribuable } from './contribuable';

export class PersonnePhyz extends Contribuable{

	Nom;
	Prenom;
	DateNaissance;
	Profession;
	EtatCivil;
	NbrEnfHandicapeEncharge;
	NbreAutreEnf;
	ImpotsRPP: ImportRPP;
}
