import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikeinfo',
  templateUrl: './bikeinfo.component.html',
  styleUrls: ['./bikeinfo.component.css']
})
export class BikeinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  delete() {
    // allow delete when listing was posted by current user
    // update bike-list
  }

  contact() {
    // only shows button when user is loggedin (i.e. not in landing page)
    // alert shows name and email of seller
    // bonus if use a modal... what the heck is a modal?
  }

}
