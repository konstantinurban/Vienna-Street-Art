import { Artwork, ArtworkService } from './../_services/artwork.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artwork-dashboard',
  templateUrl: './artwork-dashboard.component.html',
  styleUrls: ['./artwork-dashboard.component.css']
})
export class ArtworkDashboardComponent implements OnInit {

  @Output() private add = new EventEmitter();
  @Output() private edit = new EventEmitter<number>();
  artworkList: Artwork[];

  constructor(private artworkService: ArtworkService) { }

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
    console.log('edit artwork ' + artwork.name + ' ' + artwork.id );
    this.edit.emit(artwork.id);
  }

  deleteArtwork(artwork: Artwork) {
    console.log('delete artwork ' + artwork.name + ' ' + artwork.id );
    this.artworkService.delete(artwork.id).then(
      () => this.refresh()
    );
  }
}
