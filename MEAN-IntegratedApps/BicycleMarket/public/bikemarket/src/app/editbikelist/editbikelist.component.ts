import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editbikelist',
  templateUrl: './editbikelist.component.html',
  styleUrls: ['./editbikelist.component.css']
})
export class EditbikelistComponent implements OnInit {

  bikes = [1,2,3,4,5];
  
  constructor() { }

  ngOnInit() {
  }

}
