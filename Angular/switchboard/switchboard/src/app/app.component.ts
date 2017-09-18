
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  board: number[] = [0,0,0,0,0,0,0,0,0,0];

  toggle(i) {

    console.log('clicked on ' + i);

    if (this.board[i] == 1) { 
      this.board[i] = 0 ;
    }
    else {
      this.board[i] = 1;
    }

    for (var x = 0; x < this.board.length; x++) {
      console.log(this.board[x]);
    }

  }

}
