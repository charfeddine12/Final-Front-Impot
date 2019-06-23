import { validateConfig } from '@angular/router/src/config';
import { Contribuable } from './contribuable';
import { Exercice } from './exercice';

export class DeclarationImpots {
    IdDeclarationImpots: number;
    TypeDeclarationImpots: string;
    Obligation: string;
    DateDeclarationImpots: Date;
    Contribuable : Contribuable;
    Exercice : Exercice ;

}
