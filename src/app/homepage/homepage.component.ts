import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginModalComponent } from './login-modal/login-modal.component';


@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {

  }

  login() {
    const modalRef = this.modalService.open(LoginModalComponent, { size: 'sm' });
  }

}
