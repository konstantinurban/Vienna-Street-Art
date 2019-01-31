import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';

/*When you include the leaflet script inside the Angular project, it gets
loaded and exported into a L variable.*/
declare let L; //this is the leaflet variable!

import { MapButtonsComponent } from './map-buttons/map-buttons';
import { Artwork, ArtworkService } from '../_services/artwork.service';
import { FilterMapComponent } from './filter-map/filter-map.component';



@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {
  @Output() private delete = new EventEmitter();
  @Output() private edit = new EventEmitter<number>();
  artworkList: Artwork[];
  map;

  // markerIcon
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 16],
      iconUrl: 'assets/icons/marker.svg',
      shadowUrl: 'assets/icons/marker-shadow.png'
    })
  };

  constructor(
    private artworkService: ArtworkService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.map = L.map('map', {
      center: [48.208, 16.373],
      zoom: 13,
      zoomControl: false,
    });

    this.refresh();

    // base layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      // minZoom: 13,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicHcxN2wwMDgiLCJhIjoiY2pua2c2OWxuMGVkOTNxbWh5MWNqajEwdyJ9.X_SuGwNGs12TwCsrsUvBxw'
    }).addTo(this.map);

    MapButtonsComponent.renderZoom(this.map);
    MapButtonsComponent.renderCompass(this.map);
    MapButtonsComponent.renderLocation(this.map);

  const marker = L.marker([48.209, 16.373], this.markerIcon).addTo(this.map);
  marker.bindPopup('City Center');
}

  buildMarkers(artworkList) {
   for (let artwork of artworkList) {
    const marker = this.buildPopup(artwork);
    }
  }

  buildPopup(object) {
    const _this = this;
    const popupOptions = { className: "customPopup test2" };
    const popupInfo = `
         <b> Title:</b>${object.name}<br/>
        <b>Artist name: </b> ${object.firstname}
        ${object.lastname} <br/>
        <img src="${object.imageBase64}" alt="base64"> <br>
        <b>Address:</b> ${object.streetname} ${object.streetnumber}, ${object.zipcode}
        <br><i class="fa fa-edit edit popupBtn"></i> <i class="fa fa-trash delete popupBtn"></i>`;
    L.marker([object.latitude, object.longitude], this.markerIcon)
      .addTo(this.map)
      .bindPopup(popupInfo, popupOptions)
      .on("popupopen", () => {
        _this.elementRef.nativeElement
          .querySelector(".edit")
          .addEventListener("click", e => {
            _this.editArtwork(object);
          });
      }).on("popupopen", () => {
        _this.elementRef.nativeElement
          .querySelector(".delete")
          .addEventListener("click", e => {
            _this.deleteArtwork(object);
          });
      });
  }

  editArtwork(artwork) {
    alert("editing");
    this.edit.emit(artwork.id);
  }

  deleteArtwork(artwork) {
    alert("deleting", artwork);
    this.delete.emit(artwork).then(
      () => this.refresh();
    );
  }

  refresh() {
    this.artworkService.retrieveAll().then((artworkList) => {
      this.artworkList = artworkList;
      console.log(this.artworkList);
      this.buildMarkers(this.artworkList);
    });
  }

  filterForZipcode(zipcode) {
    console.log("filering for:", zipcode);
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    if (zipcode === "-All-") {
      this.buildMarkers(this.artworkList);
    } else {
      const currentArtworklist = this.artworkList.filter(
        list => list.zipcode == zipcode
      );
      this.buildMarkers(currentArtworklist);
    }
  }

  previewArtwork(artwork) {
    const popupOptions = { className: "customPopup test2" };
    const popupInfo = `
         <b> Title:</b>${artwork.name}<br/>
        <b>Artist name: </b> ${artwork.firstname}
        ${artwork.lastname} <br/>
        <img src="${artwork.imageBase64}" alt="base64"> <br>
        <b>Address:</b> ${artwork.streetname} ${artwork.streetnumber}, ${artwork.zipcode}`;
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
    let previewedMarker = L.marker([artwork.latitude, artwork.longitude], this.markerIcon)
      .addTo(this.map);
      previewedMarker.bindPopup(popupInfo, popupOptions).openPopup();
    }

  fullView() {
    console.log("mouse out")
    this.refresh();
  }
}
