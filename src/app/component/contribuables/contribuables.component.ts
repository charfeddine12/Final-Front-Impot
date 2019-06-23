import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contribuable } from 'src/app/models/contribuable';
import { Router } from '@angular/router';
import { ContribuableService } from 'src/app/services/contribuable.service';

@Component({
  selector: 'app-contribuables',
  templateUrl: './contribuables.component.html',
  styleUrls: ['./contribuables.component.css']
})
export class ContribuablesComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  url: any;
  private file: File = null;
  contribuales;
  newContribuale = new Contribuable();
  contribualeToupdate;

  noData = true;
  dataLoaded = false;
  contribualeAdded = false;
  addingError = false;
  contribualeUpdated = false;
  updatingError = false;
  contribualeToDelete;
  indexTodelete;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;
  adress_field;
  nom_field;
  prenom_field;
  date_naiss_field;
  email_field;
  tel_field;
  role_field;
  sexe_field;
  selectedContribuale;
  constructor(private modalService: BsModalService, 
    private contribualeService: ContribuableService, 
    private router: Router) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.contribualeService.getByLogin(login).subscribe(data => {
      if (data == null) {
        this.router.navigate(['/login']);
      }
      this.loggedUser = data;
    }, error => {
      this.router.navigate(['/login']);
    });
    this.getAll();
    this.dataLoaded = true;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.file = null;
    this.url = null;
  }
  openDetailsModal(template: TemplateRef<any>, contribuale) {
    this.openModal(template);
    this.selectedContribuale = contribuale;
  }
  openUpdateModal(template: TemplateRef<any>, contribuale) {
    this.openModal(template);
    this.contribualeToupdate = contribuale;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, contribuale, index) {
    this.contribualeToupdate = contribuale;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  showFilter() {
    this.filter = !this.filter;
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    this.file = files[0];

    if (files && this.file) {
      const reader = new FileReader();

      reader.onload = this
        .handleReaderLoaded
        .bind(this);
      this.newContribuale.file = reader.readAsBinaryString(this.file);
      const reader2 = new FileReader();
      const file2 = <File>evt.target.files[0];
      reader2.readAsDataURL(file2); // read file as data url
      reader2.onload = () => { // called once readAsDataURL is completed
        this.url = reader2.result;
      };
    }
  }

  handleFileSelectUpdate(evt) {
    const files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      const reader = new FileReader();
      reader.onload = this
        .handleReaderLoadedForUpdate
        .bind(this);
      this.contribualeToupdate.file = reader.readAsBinaryString(this.file);
      const reader2 = new FileReader();
      const file2 = <File>evt.target.files[0];
      reader2.readAsDataURL(file2); // read file as data url
      reader2.onload = () => { // called once readAsDataURL is completed
        this.url = reader2.result;
      };
    }
  }

  handleReaderLoadedForUpdate(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.contribualeToupdate.file = btoa(binaryString);
  }
  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.newContribuale.file = btoa(binaryString);
  }
  getAll() {
    this.contribualeService.getAllContribuable().subscribe(result => {
      this.contribuales = result;
      if (this.contribuales.length > 0) {
        this.noData = false;
      }
    });
  }

  addContribuale() {
    this.contribualeService.addContribuable(this.newContribuale).subscribe(result => {
      this.contribualeAdded = true;
      this.contribuales.push(this.newContribuale);
      this.getAll();
    }, error => {
      this.contribualeAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();
    this.file = null;
    this.url = null;
  }

  updateEmployee() {
    this.contribualeService.updateContribuable(this.contribualeToupdate).subscribe(result => {
      this.contribualeUpdated = true;
    }, error => {
      this.contribualeUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    this.file = null;
    this.url = null;
    location.reload();
  }

  confirm() {
    this.delete(this.contribualeToDelete.id_emp);
    this.modalRef.hide();
    this.contribuales.slice(this.indexTodelete, 1);
  }

  delete(idEmploye) {
    this.contribualeService.deleteContribuable(idEmploye).subscribe(res => {
      this.getAll();
      this.deleted = true;
      if (this.contribuales.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }

}

