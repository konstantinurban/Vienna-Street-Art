import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-recommend-modal',
  templateUrl: './recommend-modal.component.html',
  styleUrls: ['./recommend-modal.component.css']
})
export class RecommendModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}
