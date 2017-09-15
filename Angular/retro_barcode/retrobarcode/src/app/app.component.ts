import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = colorArray;
}


var colorArray = [];

for (let index = 0; index < 30; index++) {
  colorArray[index] = getColor();
  console.log(colorArray[index]);
}

function getColor() { 
  var colorString = '#' + Math.floor(Math.random()*16777215).toString(16);
  return colorString;
};
