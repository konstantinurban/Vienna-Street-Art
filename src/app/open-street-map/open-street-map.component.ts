import { Component, OnInit } from '@angular/core';

/*When you include the leaflet script inside the Angular project, it gets
loaded and exported into a L variable.*/
declare let L; //this is the leaflet variable!


@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

  constructor( ) { }

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
      // minZoom: 13,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicHcxN2wwMDgiLCJhIjoiY2pua2c2OWxuMGVkOTNxbWh5MWNqajEwdyJ9.X_SuGwNGs12TwCsrsUvBxw'
    }).addTo(map);

    // zoom button
    L.control.zoom({
      position: 'topright',
    }).addTo(map);

    // button to center map
    L.easyButton('<span><i class="fa fa-compass fa-2x"></i></span>', function(btn, map) {
      map.setView([48.208, 16.373], 13);
    },
      {
        position: 'topright'
      }).addTo(map);

    //person icon
    let personIcon = L.icon({
      iconUrl: 'src/assets/icons/person_icon.png',
      iconAnchor: [13, 16], // point of the icon which will correspond to marker's location
    });

    // get current location
    L.easyButton('<span class="myLocationIcon"><i class="myLocationIcon fa fa-map-marker fa-2x"></i></i></span>', function(btn, map) {
      map.locate({ setView: true, watch: false, enableHighAccuracy: true }) // set watch "true", to get realtime location, if im not mistaken
        .on('locationfound', function(e) {
          L.marker([e.latitude, e.longitude], { icon: personIcon }).addTo(map);
          L.circle([e.latitude, e.longitude], {
            weight: 1,
            color: 'blue',
            fillColor: '#cacaca',
            fillOpacity: 0.2
          }).addTo(map);
        })
        .on('locationerror', function(e) {
          alert("Cannot access your location!");
        })
    },
      {
        position: 'topright'
      }).addTo(map);

    // add marker
    let markerIcon = L.icon({ iconUrl: 'src/assests/icons/marker.svg'});
    L.marker([48.208, 16.373], {
                icon: markerIcon, //can read the png for some reason...
                riseOnHover: true
              }).addTo(map);

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
