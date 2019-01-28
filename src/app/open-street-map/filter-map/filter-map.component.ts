import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Artwork, ArtworkService } from '../../_services/artwork.service';
import { OpenStreetMapComponent } from '../open-street-map.component';
declare let L;


@Component({
  selector: 'app-filter-map',
  templateUrl: './filter-map.component.html',
  styleUrls: ['./filter-map.component.css']
})
export class FilterMapComponent implements OnInit {
  @Output() private sendZipcode = new EventEmitter<string>();

  artworkList: Artwork[];
  zipcode: string;
  map;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.refresh();
    }

  refresh() {
    this.artworkService.retrieveAll().then((artworkList) => {
      this.artworkList = artworkList;
    });
  }

  selectedZipcode() {
        this.sendZipcode.emit(this.zipcode);
    }




}
