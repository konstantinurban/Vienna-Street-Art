import { Component, OnInit } from '@angular/core';

/*When you include the leaflet script inside the Angular project, it gets
loaded and exported into a L variable.*/
declare let L; //this is the leaflet variable!

import { MapButtonsComponent } from './map-buttons/map-buttons';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

  //markerIcon
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [13, 16],
      iconUrl: 'assets/icons/marker.svg',
      shadowUrl: 'assets/icons/marker-shadow.png'
    })
  };

  constructor() { }

  ngOnInit() {
    const map = L.map('map', {
      center: [48.208, 16.373],
      zoom: 13,
      zoomControl: false,
    });

    //base layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      minZoom: 13,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicHcxN2wwMDgiLCJhIjoiY2pua2c2OWxuMGVkOTNxbWh5MWNqajEwdyJ9.X_SuGwNGs12TwCsrsUvBxw'
    }).addTo(map);

    MapButtonsComponent.renderZoom(map);
    MapButtonsComponent.renderCompass(map);
    MapButtonsComponent.renderLocation(map);

    // add marker

    var customOptions =
    {
      'className': 'customPopup'
    }

    const marker = L.marker([48.209, 16.373], this.markerIcon).addTo(map);
    marker.bindPopup("hello", customOptions);

    //search
    var searchLayer = new L.LayerGroup();
    map.addLayer(searchLayer);

    var controlSearch = new L.Control.Search({
      position: 'topleft',
      layer: searchLayer,
      initial: false,
      zoom: 12,
      marker: false
    });

    map.addControl(controlSearch);

  }
}
