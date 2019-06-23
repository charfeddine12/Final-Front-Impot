import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ChartModule } from 'angular-highcharts';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './component/body/body.component';
import { AsideComponent } from './component/aside/aside.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './authentication/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { MonProfilComponent } from './component/mon-profil/mon-profil.component';
import { ExerciceComponent } from './component/exercice/exercice.component';
import { DeclarationExistencesComponent } from './component/declaration-existences/declaration-existences.component';
import { DeclarationImpotssComponent } from './component/declaration-impotss/declaration-impotss.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { ImpotsRPPsComponent } from './component/impots-rpps/impots-rpps.component';
import { LoyersComponent } from './component/loyers/loyers.component';
import { ContribuablesComponent } from './component/contribuables/contribuables.component';
import { PersonnePhyzComponent } from './component/personne-phyz/personne-phyz.component';
import { PersonneMorlComponent } from './component/personne-morl/personne-morl.component';
import { ImpotsSocieteComponent } from './component/impots-societe/impots-societe.component';
import { InscritComponent } from './component/inscrit/inscrit.component';
import { ContribuableService } from './services/contribuable.service';
import { ImpotsRPPsService } from './services/impots-rpps.service';
import { AdministrateursService } from './services/administrateurs.service';
import { PersonnePhyzsService } from './services/personne-phyzs.service';
import { PersonneMorlsService } from './services/personne-morls.service';
import { LoyersService } from './services/loyers.service';
import { ExercicesService } from './services/exercices.service';
import { EmployeesService } from './services/employees.service';
import { DeclarationImpotssService } from './services/declaration-impotss.service';
import { DeclarationExistencesService } from './services/declaration-existences.service';
import { XhrInterceptor } from './authentication/xhr.interceptor';
import { principalReducer } from './authentication/shared/principal.reducer';
import { AuthenticationModule } from './authentication/authentication.module';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    BodyComponent,
    LoginComponent,
    PrincipalComponent,
    MonProfilComponent,
    ExerciceComponent,
    DeclarationExistencesComponent,
    DeclarationImpotssComponent,
    EmployeesComponent,
    ImpotsRPPsComponent,
    LoyersComponent,
    ContribuablesComponent,
    PersonnePhyzComponent,
    PersonneMorlComponent,
    ImpotsSocieteComponent,
    InscritComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ChartModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationModule,
    StoreModule.forRoot({principal: principalReducer}),
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),

  ],
  providers: [ContribuableService,ImpotsRPPsService,AdministrateursService,PersonnePhyzsService,
    PersonneMorlsService,LoyersService,ExercicesService,EmployeesService,DeclarationImpotssService,
    DeclarationExistencesService,CookieService,,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
