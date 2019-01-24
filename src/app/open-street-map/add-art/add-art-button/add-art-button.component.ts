import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Artwork, ArtworkService } from '../../../_services/artwork.service';
import { AddArtModalComponent } from '../add-art-modal/add-art-modal.component';


@Component({
  selector: 'app-add-art-button',
  templateUrl: './add-art-button.component.html',
  styleUrls: ['./add-art-button.component.css']
})
export class AddArtButtonComponent implements OnInit {
  @Output() private add = new EventEmitter();
  @Output() private edit = new EventEmitter<number>();
  artworkList: Artwork[];


  constructor(
    private addModalService: NgbModal

  ) { }

  ngOnInit() {
  }

  addArtwork() {
  //  this.add.emit();
    const modalRef = this.addModalService.open(AddArtModalComponent, { size: 'lg' });
  }

}
