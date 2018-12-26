import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AddArtModalComponent } from '../add-art-modal/add-art-modal.component';


@Component({
  selector: 'app-add-art-button',
  templateUrl: './add-art-button.component.html',
  styleUrls: ['./add-art-button.component.css']
})
export class AddArtButtonComponent implements OnInit {

  constructor(
    private modalService: NgbModal

  ) { }

  ngOnInit() {
  }

  // opens the modal to add a new art work
  addNew() {
    const modalRef = this.modalService.open(AddArtModalComponent, { size: 'lg' });
  }

}
