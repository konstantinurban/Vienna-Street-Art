import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Artwork, ArtworkService } from '../../../_services/artwork.service';

@Component({
  selector: 'app-add-art-modal',
  templateUrl: './add-art-modal.component.html',
  styleUrls: ['./add-art-modal.component.css']
})
export class AddArtModalComponent implements OnInit {
  @Output() ok = new EventEmitter<Artwork>();
  @Output() cancel = new EventEmitter();
  artwork: Artwork;

  constructor(
    public activeModal: NgbActiveModal,
    private artworkService: ArtworkService
  ) { }

  ngOnInit() {
    this.startAddingArtwork();
  }

  startAddingArtwork() {
    console.log('start adding artwork');
    this.artwork = new Artwork();
    console.log("hello");
  }

  startEditingArtwork(id: number) {
    console.log('start editing artwork ' + id);
    this.artworkService.retrieve(id).then(
      artwork => {
        this.artwork = artwork;
        console.log('edit Artwork = artwork');
      }
    );
  }

  finishWithOk() {
    console.log('Input OK');
    this.activeModal.dismiss('Cross click');
    console.log('finishWithOK ' + this.artwork);
    console.log('finishWithOK ' + this.artwork.imageBase64);
    this.createOrUpdate().then(
      () => {
        this.ok.emit(this.artwork);
        console.log('ok Artwork = null');
        this.artwork = null;
      }
    );
  }

  finishWithCancel() {
    console.log('Input Cancel');

    this.cancel.emit();
    console.log('cancel Artwork = null');
    this.artwork = null;
  }

  createOrUpdate() {
    if (this.artwork.id) {
      return this.artworkService.update(this.artwork);
    } else {
      console.log('createOrUpdate ' + this.artwork);
      console.log('createOrUpdate ' + this.artwork.imageBase64);
      return this.artworkService.create(this.artwork);
    }
  }

  imageUploadCompleted(imageAsBase64: string) {
    console.log('imageUploadCompleted: ' + imageAsBase64);
    this.artwork.imageBase64 = imageAsBase64;
  }

}
