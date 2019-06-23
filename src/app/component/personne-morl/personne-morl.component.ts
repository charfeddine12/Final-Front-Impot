import { Component, OnInit, TemplateRef } from '@angular/core';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { PersoneMor } from 'src/app/models/personeMor';
import { Router } from '@angular/router';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-personne-morl',
  templateUrl: './personne-morl.component.html',
  styleUrls: ['./personne-morl.component.css']
})
export class PersonneMorlComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  personeMorls;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  employeToupdate;
  selectedEmployee;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newPersoneMorl= new PersoneMor();

  constructor(private modalService: BsModalService, 
     private router: Router,
     private personneMorlsService: PersonneMorlsService,

     ) { }

     ngOnInit() {
      this.getAll();
      this.dataLoaded = true;
    }
  
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  
    }
    openDetailsModal(template: TemplateRef<any>, employee) {
      this.openModal(template);
      console.log("emddployee",employee)

      this.selectedEmployee = employee;

    }
    openUpdateModal(template: TemplateRef<any>, employee) {
      this.openModal(template);
      this.employeToupdate = employee;

    }
    openDeleteModal(confirmDelete:  TemplateRef<any>, employee, index) {
      this.emplyeToDelete = employee;
      this.openModal(confirmDelete);
      this.indexTodelete = index;
    }
  
    showFilter() {
      this.filter = !this.filter;
    }
  
    getAll() {
      this.personneMorlsService.getAllContribuable().subscribe(result => {
        this.personeMorls = result;
        if (this.personeMorls.length > 0) {
          this.noData = false;
        }
      });
    }
    updateEmployee() {
      this.personneMorlsService.updateContribuable(this.employeToupdate).subscribe(result => {
        this.employeUpdated = true;
      }, error => {
        this.employeUpdated = false;
        this.updatingError = true;
      });
      this.modalRef.hide();
      location.reload();
    }
    ConifrmerInscriMoral(personeMor){
      console.log("2222personeMor",personeMor)
      this.personneMorlsService.changeStatus(personeMor,"true").subscribe(result => {})
      this.modalRef.hide();
      location.reload();

    }
    confirm() {
      console.log("emplyeToDelete",this.emplyeToDelete)

      this.delete(this.emplyeToDelete.nif);
      this.modalRef.hide();
      this.personeMorls.slice(this.indexTodelete, 1);
    }
  
    delete(id_cat) {
      this.personneMorlsService.deleteContribuable(id_cat).subscribe(res => {
        this.getAll();
        this.emplyeToDelete = true;
        if (this.personeMorls.length > 0) {
          this.noData = false;
        }
      }, error => {
        this.deleteError = true;
      });
    }
}
