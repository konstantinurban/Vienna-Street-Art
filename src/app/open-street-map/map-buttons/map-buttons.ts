declare let L; //this is the leaflet variable!

export class MapButtonsComponent {

  //center map
  public static renderCompass(map: object) {
    return L.easyButton('fa fa-compass fa-2x', function(btn, map) {
      map.setView([48.208, 16.373], 13);
    }, { position: 'topright' }).addTo(map);
  }


  //get location
  public static renderLocation(map: object) {
    let personIcon = L.icon({
      iconUrl: 'assets/icons/person_icon.png',
      iconAnchor: [13, 16] // point of the icon which will correspond to marker's location
    });
    return L.easyButton('<span class="myLocationIcon"><i class="myLocationIcon fa fa-map-marker fa-2x"></i></i></span>', function(btn, map) {
      map.locate({ setView: true, watch: false, enableHighAccuracy: true }) // set watch "true", to get realtime location, if im not mistaken
        .on('locationfound', function(e) {
          L.marker([e.latitude, e.longitude], { icon: personIcon }).addTo(map);
          L.circle([e.latitude, e.longitude], {
            weight: 1,
            color: 'blue',
            fillColor: '#cacaca',
            fillOpacity: 0.2
          }).addTo(map);
        }).on('locationerror', function(e) {
          alert('Cannot access your location!');
        });
    },
      {
        position: 'topright'
      }).addTo(map);
  }

//zoom functionalities
  public static renderZoom(map: object) {
    return L.control.zoom({
        position: 'topright',
      }).addTo(map);
  }

}
