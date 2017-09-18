import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registered: boolean = false;
  user = new User();
  users = [];
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }
}
