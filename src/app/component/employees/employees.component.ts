import { Component, OnInit, TemplateRef } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { PersoneMor } from 'src/app/models/personeMor';
import { Router } from '@angular/router';
import { PersonneMorlsService } from 'src/app/services/personne-morls.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

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
  newEmployee= new Employee();

  constructor(private modalService: BsModalService, 
     private router: Router,
     private emplyeService: EmployeesService,

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
      this.emplyeService.getAllContribuable().subscribe(result => {
        this.employees = result;
        console.log("result",result)

        if (this.employees.length > 0) {
          this.noData = false;
        }
      });
    }
    addEmployee() {
      this.newEmployee.PersonneMorl
      this.emplyeService.addContribuable(this.newEmployee).subscribe(result => {
        this.employeAdded = true;
        this.employees.push(this.newEmployee);
        this.getAll();
      }, error => {
        this.employeAdded = false;
        this.addingError = true;
      });
      this.modalRef.hide();

    }
    updateEmployee() {
      this.emplyeService.updateContribuable(this.employeToupdate).subscribe(result => {
        this.employeUpdated = true;
      }, error => {
        this.employeUpdated = false;
        this.updatingError = true;
      });
      this.modalRef.hide();
      location.reload();
    }
    confirm() {
      this.delete(this.emplyeToDelete.numEmployee);
      this.modalRef.hide();
      this.employees.slice(this.indexTodelete, 1);
    }
  
    delete(id_cat) {
      this.emplyeService.deleteContribuable(id_cat).subscribe(res => {
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
