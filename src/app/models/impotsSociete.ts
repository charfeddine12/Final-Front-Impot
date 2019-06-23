import { validateConfig } from '@angular/router/src/config';
import { Loyer } from './loyer';
import { PersoneMor } from './personeMor';

export class ImpotsSociete {

     ImpotsSocieteId;
	 StockInitial;
	 StockFinEx;
	 ValAchatEx;
	 CAExportation;
	 CAglobalTTC;
	 CAglobalHTnonCommercial;
	 CAglobalHTConsSurPlace;
	 MontantPrime;
	 ResultatComptable;
	 ResultatFiscal;
	 BenificesDeduits;
	 BeneficesNonImposables;
	 ImpotsDu;
	 MinImpots;
	 AccomptesProvisionnels;
	 Penalites;
	 TaxeVisite;
	 PrelevementSurFonds;
     TVA;
     Loyer : Loyer;
     PersonneMorl : PersoneMor;
}
