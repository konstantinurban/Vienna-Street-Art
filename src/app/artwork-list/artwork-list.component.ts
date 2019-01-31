import { Artwork, ArtworkService } from './../_services/artwork.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {
  @Output() private add = new EventEmitter();
  @Output() private edit = new EventEmitter<number>();
  @Output() private preview = new EventEmitter();
  @Output() private normal = new EventEmitter();
  artworkList: Artwork[];

  constructor(
    private artworkService: ArtworkService,
  ) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.artworkService.retrieveAll().then(
      artworkList => this.artworkList = artworkList
    );
  }

  addArtwork() {
    console.log('add artwork');
    this.add.emit();
  }

  editArtwork(artwork: Artwork) {
    console.log('edit artwork ' + artwork.name + ' ' + artwork.id);
    this.edit.emit(artwork.id);
  }

  deleteArtwork(artwork: Artwork) {
    if (confirm("Are you sure you want to delete the Artwork?")) {
      console.log('delete artwork ' + artwork.name + ' ' + artwork.id);
      this.artworkService.delete(artwork.id).then(
        () => this.refresh()
      );
    }
  }

  previewPopup(artwork) {
    this.preview.emit(artwork);
  }

  allMarkers() {
    console.log("out 1");
    this.normal.emit();
  }

}
