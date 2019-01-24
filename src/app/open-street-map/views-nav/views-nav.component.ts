import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-nav',
  templateUrl: './views-nav.component.html',
  styleUrls: ['./views-nav.component.css']
})
export class ViewsNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blah() {
    alert("bal");
  }
}
