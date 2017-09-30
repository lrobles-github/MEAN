import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikelist',
  templateUrl: './bikelist.component.html',
  styleUrls: ['./bikelist.component.css']
})
export class BikelistComponent implements OnInit {

  bikes = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  search() {
    // matches title of listing
    // bonus if this is real-time filtering
  }

  updateBike() {
    // update bike-list
  }

  deleteBike() {
    // update bike-list
  }

}
