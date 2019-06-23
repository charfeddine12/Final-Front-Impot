import { Component, OnInit, TemplateRef } from '@angular/core';
import { ImpotsSociete } from 'src/app/models/impotsSociete';
import {  BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ImpotsSocietesService } from 'src/app/services/impots-societes.service';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-impots-societe',
  templateUrl: './impots-societe.component.html',
  styleUrls: ['./impots-societe.component.css']
})
export class ImpotsSocieteComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  impotsSocietes;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;

impotDeleted = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  employeToupdate;
  selectedEmployee;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  newImpotsSociete = new ImpotsSociete();
  constructor(private modalService: BsModalService, 
    // tslint:disable-next-line:align
    private router: Router,
    // tslint:disable-next-line:align
    private impotsSocietesService: ImpotsSocietesService,

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
        console.log('emddployee',employee);
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
        this.impotsSocietesService.getAllImpotsSocietes().subscribe(result => {
          this.impotsSocietes = result;
          console.log('this.result', result);

          if (this.impotsSocietes.length > 0) {
            this.noData = false;
          }
        });
      }
      addEmployee() {
        this.impotsSocietesService.addImpotsSociete(this.newImpotsSociete).subscribe(result => {
          console.log('this.newImpotsSociete', this.newImpotsSociete);

          this.employeAdded = true;
          this.impotsSocietes.push(this.newImpotsSociete);
          this.getAll();
        }, error => {
          this.employeAdded = false;
          this.addingError = true;
        });
        this.modalRef.hide();
  
      }
      updateEmployee() {
        this.impotsSocietesService.updateImpotsSociete(this.employeToupdate).subscribe(result => {
          this.employeUpdated = true;
        }, error => {
          this.employeUpdated = false;
          this.updatingError = true;
        });
        this.modalRef.hide();
        location.reload();
      }
      ConifrmerDeclaration(impotsSociete){
        this.impotsSocietesService.changeStatus(ImpotsSociete,'true').subscribe(result => {})
        this.modalRef.hide();
        location.reload();
  
      }

      confirm() {
        console.log('this.newImpotsSociete.ImpotsSocieteId',this.emplyeToDelete.impotsSocieteId)

        this.delete(this.emplyeToDelete.impotsSocieteId);
        this.modalRef.hide();
        this.impotsSocietes.slice(this.indexTodelete, 1);
      }
    
      delete(id_cat) {
        console.log('id_cat',id_cat)

        this.impotsSocietesService.deleteImpotsSociete(id_cat).subscribe(res => {
          this.getAll();
          this.impotDeleted = true;
          if (this.impotsSocietes.length > 0) {
            this.noData = false;
          }
        }, error => {
          this.deleteError = true;
        });
      }
}
