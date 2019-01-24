import { Component, OnInit } from '@angular/core';
import { Artwork, ArtworkService } from '../../_services/artwork.service';


@Component({
  selector: 'app-filter-map',
  templateUrl: './filter-map.component.html',
  styleUrls: ['./filter-map.component.css']
})
export class FilterMapComponent implements OnInit {
  artworkList: Artwork[];
  zipcode: string;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.refresh();
    console.log(this.zipcode);
  }

  refresh() {
    this.artworkService.retrieveAll().then((artworkList) => {
      this.artworkList = artworkList;
    })
  }
}