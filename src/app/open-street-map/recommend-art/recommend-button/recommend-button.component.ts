import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RecommendModalComponent } from '../recommend-modal/recommend-modal.component';


@Component({
  selector: 'app-recommend-button',
  templateUrl: './recommend-button.component.html',
  styleUrls: ['./recommend-button.component.css']
})
export class RecommendButtonComponent implements OnInit {

  constructor(
    private recommendModalService: NgbModal
  ) {}

  ngOnInit() {
  }

  recommendArt() {
    alert("recommend");
    const modalRef = this.recommendModalService.open(RecommendModalComponent, { size: 'lg' });
  }

}
