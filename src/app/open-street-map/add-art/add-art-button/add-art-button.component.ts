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
    private artworkService: ArtworkService,
    private addModalService: NgbModal

  ) { }

  ngOnInit() {
    // this.refresh();
  }

  // refresh() {
  //   this.artworkService.retrieveAll().then(
  //     artworkList => this.artworkList = artworkList
  //   );
  // }

  addArtwork() {
  //  this.add.emit();
    const modalRef = this.addModalService.open(AddArtModalComponent, { size: 'lg' });
  }

  // editArtwork(artwork: Artwork) {
  //   console.log('edit artwork ' + artwork.name + ' ' + artwork.id );
  //   this.edit.emit(artwork.id);
  // }

  // deleteArtwork(artwork: Artwork) {
  //   console.log('delete artwork ' + artwork.name + ' ' + artwork.id );
  //   this.artworkService.delete(artwork.id).then(
  //     () => this.refresh()
  //   );
  // }

}
