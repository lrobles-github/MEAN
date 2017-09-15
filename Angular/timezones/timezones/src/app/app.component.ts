import { Component } from '@angular/core';
import {MdButtonToggleModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  time: string = '';
  selected: string = '';

  getTime(zone) {
    
      var date = new Date;

      if (zone == 'PST') {
        var options = { timeZone: 'America/Los_Angeles' };
        this.time = date.toLocaleString('en-US', options );
        this.selected = zone;
      }
      
      else if (zone == 'MST') {
        var options = { timeZone: 'America/Boise' };
        this.time = date.toLocaleString('en-US', options );
        this.selected = zone;
      }

      else if (zone == 'CST') {
        var options = { timeZone: 'America/Chicago' };
        this.time = date.toLocaleString('en-US', options );
        this.selected = zone;
      }

      else if (zone == 'EST') {
        var options = { timeZone: 'America/New_York' };
        this.time = date.toLocaleString('en-US', options );
        this.selected = zone;
      }
    
  }


  clear() {

    this.selected = '';
    this.time = '';
 
  }

}


