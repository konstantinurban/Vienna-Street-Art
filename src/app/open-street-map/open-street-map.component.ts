import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

/*When you include the leaflet script inside the Angular project, it gets
loaded and exported into a L variable.*/
declare let L; //this is the leaflet variable!

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css']
})
export class OpenStreetMapComponent implements OnInit {

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
  ) { }

  ngOnInit() {

    const map = L.map('map', {
      center: [48.208, 16.373],
      zoom: 13,
      zoomControl: false,
    });

    // positioning the zoom button
    L.control.zoom({
      position: 'topright',
    }).addTo(map);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoicHcxN2wwMDgiLCJhIjoiY2pua2c2OWxuMGVkOTNxbWh5MWNqajEwdyJ9.X_SuGwNGs12TwCsrsUvBxw'
    }).addTo(map);

    // map to center
    L.easyButton('<span><i class="fa fa-compass fa-2x"></i></span>', function(btn, map) {
      map.setView([48.208, 16.373], 13);
    },
      {
        position: 'topright'
      }).addTo(map);


    //person icon
    var personIcon = L.icon({
      iconUrl: 'src/assets/personIcon.png',
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
          alert("Cannot access your location");
        })
    },
      {
        position: 'topright'
      }).addTo(map);

    //add new button
    // L.easyButton('<i class="fa fa-plus-square fa-2x"></i>', function(btn, map) {
    //   alert("add new entry");
    // },
    //   {
    //     position: 'bottomleft'
    //   }).addTo(map);



    // add marker
    L.marker([48.208, 16.373]).addTo(map);

  }


  // addNew() {
  //   // alert("Modal to add a new entry comes here!");
  // }

}
