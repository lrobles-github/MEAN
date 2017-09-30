import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikeofday',
  templateUrl: './bikeofday.component.html',
  styleUrls: ['./bikeofday.component.css']
})
export class BikeofdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getBikeofDay() {
    // pick random bike-of-the-day to display
  }
}
