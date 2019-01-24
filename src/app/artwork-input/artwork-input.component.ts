import { Artwork, ArtworkService } from './../_services/artwork.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-artwork-input',
  templateUrl: './artwork-input.component.html',
  styleUrls: ['./artwork-input.component.css']
})
export class ArtworkInputComponent implements OnInit {
  @Output() ok = new EventEmitter<Artwork>();
  @Output() cancel = new EventEmitter();
  artwork: Artwork;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
  }

  startAddingArtwork() {
    console.log('start adding artwork');
    this.artwork = new Artwork();
  }

  startEditingArtwork(id: number) {
    console.log('start editing artwork ' + id);

    this.artworkService.retrieve(id).then(
      artwork => this.artwork = artwork
    );
  }

  finishWithOk() {
    console.log('Input OK');

    this.createOrUpdate().then(
      () => {
        this.ok.emit(this.artwork);
        this.artwork = null;
      }
    );
  }

  finishWithCancel() {
    console.log('Input Cancel');

    this.cancel.emit();
    this.artwork = null;
  }

  createOrUpdate() {
    if (this.artwork.id) {
      return this.artworkService.update(this.artwork);
    } else {
      return this.artworkService.create(this.artwork);
    }
  }

  imageUploadCompleted(imageAsBase64: string) {
    console.log('imageUploadCompleted: ' + imageAsBase64);
    this.artwork.imageBase64 = imageAsBase64;
  }

}
