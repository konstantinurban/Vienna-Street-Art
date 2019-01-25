import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-artwork-list-view',
  templateUrl: './artwork-list-view.component.html',
  styleUrls: ['./artwork-list-view.component.css']
})
export class ArtworkListViewComponent implements OnInit {

  @ViewChild('list') listElement;
  @ViewChild('map') mapElement;

  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log('update');
    this.listElement.refresh();
    this.mapElement.refresh();
  }

}
