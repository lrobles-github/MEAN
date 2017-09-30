import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newbike',
  templateUrl: './newbike.component.html',
  styleUrls: ['./newbike.component.css']
})
export class NewbikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  post() {
    // posting a bike listing should update the bike-list and clear the form
  }
}
