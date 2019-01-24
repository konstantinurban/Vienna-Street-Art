import { Component, OnInit, Output, EventEmitter } from '@angular/core';

/*When you include the leaflet script inside the Angular project, it gets
loaded and exported into a L variable.*/
declare let L; //this is the leaflet variable!

import { MapButtonsComponent } from './map-buttons/map-buttons';
import { Artwork, ArtworkService } from '../_services/artwork.service';


@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {
  @Output() private add = new EventEmitter();
  @Output() private edit = new EventEmitter<number>();
  artworkList: Artwork[];
  map;

  //markerIcon
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 16],
      iconUrl: 'assets/icons/marker.svg',
      shadowUrl: 'assets/icons/marker-shadow.png'
    })
  };

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.map = L.map('map', {
      center: [48.208, 16.373],
      zoom: 13,
      zoomControl: false,
    });

    this.refresh();

    //base layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 13,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicHcxN2wwMDgiLCJhIjoiY2pua2c2OWxuMGVkOTNxbWh5MWNqajEwdyJ9.X_SuGwNGs12TwCsrsUvBxw'
    }).addTo(this.map);

    MapButtonsComponent.renderZoom(this.map);
    MapButtonsComponent.renderCompass(this.map);
    MapButtonsComponent.renderLocation(this.map);

    // add marker
    const marker = L.marker([48.209, 16.373], this.markerIcon).addTo(this.map);
    marker.bindPopup("City Center");
  }

  refresh() {
    this.artworkService.retrieveAll().then((artworkList) => {
      this.artworkList = artworkList;
      for (let artwork of this.artworkList) {
        const popupOptions = { className: "customPopup" };
        const popupInfo =
          "<span class='customPopup'><b>" +
          artwork.name +
          "</b></span>" +
          "<br/>" +
          artwork.filename +
          "<br/>" +
          artwork.firstname + artwork.lastname +
          "<br/>" +
          artwork.streetname + artwork.streetnumber + ", " + artwork.zipcode;
        console.log(artwork.name);
        L.marker([artwork.latitude, artwork.longitude], this.markerIcon)
          .addTo(this.map)
          .bindPopup(popupInfo, popupOptions);
      }
      });
    }
  }
