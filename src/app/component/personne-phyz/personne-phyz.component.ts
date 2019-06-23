import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PersonnePhyz } from 'src/app/models/personnePhyz';
import { PersoneMor } from 'src/app/models/personeMor';
import { PersonnePhyzsService } from 'src/app/services/personne-phyzs.service';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';

@Component({
  selector: 'app-personne-phyz',
  templateUrl: './personne-phyz.component.html',
  styleUrls: ['./personne-phyz.component.css']
})
export class PersonnePhyzComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  personePhyzs;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  personnePhyzsToupdate;
  selectedEmployee;
  indexTodelete;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newPersonePhyz = new PersonnePhyz();
  constructor(private modalService: BsModalService, 
     private router: Router,
     private personnePhyzsService: PersonnePhyzsService
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
    this.selectedEmployee = employee;
  }
  openUpdateModal(template: TemplateRef<any>, employee) {
    this.openModal(template);
    this.personnePhyzsToupdate = employee;
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
    this.personnePhyzsService.getAllContribuable().subscribe(result => {
      this.personePhyzs = result;
      console.log('re', result)
      if (this.personePhyzs.length > 0) {
        this.noData = false;
      }
    });
  }
  updateEmployee() {
    this.personnePhyzsService.updateContribuable(this.personnePhyzsToupdate).subscribe(result => {
      this.employeUpdated = true;
    }, error => {
      this.employeUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    location.reload();
  }
  ConifrmerInscriMoral(personnePhyz){
    console.log('2222personnePhyz', personnePhyz)
    this.personnePhyzsService.changeStatus(PersonnePhyz,'true').subscribe(result => {})
  }
  confirm() {
    this.delete(this.emplyeToDelete.nif);
    this.modalRef.hide();
    this.personePhyzs.slice(this.indexTodelete, 1);
  }

  delete(id_cat) {
    this.personnePhyzsService.deleteContribuable(id_cat).subscribe(res => {
      this.getAll();
      this.emplyeToDelete = true;
      if (this.personePhyzs.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }
}
