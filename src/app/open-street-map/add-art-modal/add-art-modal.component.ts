import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-add-art-modal',
  templateUrl: './add-art-modal.component.html',
  styleUrls: ['./add-art-modal.component.css']
})
export class AddArtModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
