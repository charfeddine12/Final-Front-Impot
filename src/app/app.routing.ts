import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './authentication/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { ContribuablesComponent } from './component/contribuables/contribuables.component';
import { PersonneMorlComponent } from './component/personne-morl/personne-morl.component';
import { PersonnePhyzComponent } from './component/personne-phyz/personne-phyz.component';
import { ImpotsRPPsComponent } from './component/impots-rpps/impots-rpps.component';
import { ExerciceComponent } from './component/exercice/exercice.component';
import { DeclarationExistencesComponent } from './component/declaration-existences/declaration-existences.component';
import { DeclarationImpotssComponent } from './component/declaration-impotss/declaration-impotss.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { LoyersComponent } from './component/loyers/loyers.component';
import { MonProfilComponent } from './component/mon-profil/mon-profil.component';
import { ImpotsSocieteComponent } from './component/impots-societe/impots-societe.component';
import { InscritComponent } from './component/inscrit/inscrit.component';





const appRoutes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{ path: 'inscrit/:identite', component: InscritComponent },
{path: 'principal', component: PrincipalComponent, children: [
    { path: 'contribuale', component: ContribuablesComponent, outlet: 'child1' },
    { path: 'personneMorl', component: PersonneMorlComponent, outlet: 'child1' },
    { path: 'personnePhyz', component: PersonnePhyzComponent, outlet: 'child1' },
    { path: 'importsRpps', component: ImpotsRPPsComponent, outlet: 'child1' },
    { path: 'exercice', component: ExerciceComponent, outlet: 'child1' },
    { path: 'impotsSociete', component: ImpotsSocieteComponent, outlet: 'child1' },
    { path: 'declarationExistences', component: DeclarationExistencesComponent, outlet: 'child1' },
    { path: 'declarationImpotss', component: DeclarationImpotssComponent, outlet: 'child1' },
    { path: 'employees', component: EmployeesComponent, outlet: 'child1'},
    { path: 'loyers', component: LoyersComponent, outlet: 'child1'},
    { path: 'profil', component: MonProfilComponent, outlet: 'child1'},

]}
] ;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
