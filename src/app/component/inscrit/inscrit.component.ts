import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContribuableService } from 'src/app/services/contribuable.service';
import { Contribuable } from 'src/app/models/contribuable';
import { PersonnePhyz } from 'src/app/models/personnePhyz';
import { PersoneMor } from 'src/app/models/personeMor';
import { PersonnePhyzsService } from 'src/app/services/personne-phyzs.service';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent implements OnInit {

  signFailed = false;
  signSuccess = false;
  identite ;
  newPersonePhyz= new PersonnePhyz();
  newPersoneMor= new PersoneMor();
  private subscription: Subscription;
  constructor(private router: Router, 
    private personnePhyzsService: PersonnePhyzsService,
    private personneMorlsService: PersonneMorlsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.identite = params.identite;
      console.log("!!!!",params)
  });
  }
  inscription(){
    console.log("!!!sssss!",this.newPersonePhyz)
    if(this.identite == "phy"){
      this.newPersonePhyz.status= false;
      this.personnePhyzsService.addContribuable(this.newPersonePhyz).subscribe();

    }else{
      this.newPersoneMor.status= false;
      this.personneMorlsService.addContribuable(this.newPersoneMor).subscribe();

    }
  }

}
