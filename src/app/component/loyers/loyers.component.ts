import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { PersoneMor } from 'src/app/models/personeMor';
import { Router } from '@angular/router';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { Exercice } from 'src/app/models/exercice';
import { ExercicesService } from 'src/app/services/exercices.service';
import { Loyer } from 'src/app/models/loyer';
import { LoyersService } from 'src/app/services/loyers.service';
import { ImpotsSocietesService } from 'src/app/services/impots-societes.service';
@Component({
  selector: 'app-loyers',
  templateUrl: './loyers.component.html',
  styleUrls: ['./loyers.component.css']
})
export class LoyersComponent implements OnInit {


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
  employees;
  indexTodelete;
  employeToupdate;
  selectedEmployee;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newExercice= new Loyer();
  impotsSocietes;

  constructor(private modalService: BsModalService, 
     private router: Router,
     private loyerService: LoyersService,
     private impotsSocietesService: ImpotsSocietesService,
     ) { }

     ngOnInit() {
      this.getAll();
      this.dataLoaded = true;
      this.getAllImpotSociete() ;
    }
    getAllImpotSociete() {
      this.impotsSocietesService.getAllImpotsSocietes().subscribe(result => {
        this.impotsSocietes = result;
        console.log('this.result', result);

        if (this.impotsSocietes.length > 0) {
          this.noData = false;
        }
      });
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
      this.loyerService.getAllContribuable().subscribe(result => {
        this.employees = result;
        console.log("this.resultresultresult",result)

        if (this.employees.length > 0) {
          this.noData = false;
        }
      });
    }
    addEmployee() {

      this.loyerService.addContribuable(this.newExercice).subscribe(result => {
        this.employeAdded = true;
        this.employees.push(this.newExercice);
        this.getAll();
      }, error => {
        this.employeAdded = false;
        this.addingError = true;
      });
      this.modalRef.hide();

    }
    updateEmployee() {
      this.loyerService.updateContribuable(this.employeToupdate).subscribe(result => {
        this.employeUpdated = true;
      }, error => {
        this.employeUpdated = false;
        this.updatingError = true;
      });
      this.modalRef.hide();
      location.reload();
    }

    confirm() {
      this.delete(this.emplyeToDelete.numLoyer);
      this.modalRef.hide();
      this.employees.slice(this.indexTodelete, 1);
    }
  
    delete(id_cat) {
      this.loyerService.deleteContribuable(id_cat).subscribe(res => {
        this.getAll();
        this.emplyeToDelete = true;
        if (this.employees.length > 0) {
          this.noData = false;
        }
      }, error => {
        this.deleteError = true;
      });
    }
}
