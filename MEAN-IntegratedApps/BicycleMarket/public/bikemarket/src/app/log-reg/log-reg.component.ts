import { LogRegService } from '../log-reg.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  bikeofday = true;
  
  newUser = {
    first_name : '',
    last_name : '',
    email : '',
    password : ''
  };
  
  
  constructor(private _LogRegService: LogRegService, private router: Router) { }
  
  ngOnInit() {
  }

  onLogSubmit(formData) {
    // validation: only check for invalid credentials
    // after 5th attempt incorrect, block user for 1 hour
    console.log('here is the form data:', formData);
    // this._LogRegService.method();
    this.router.navigateByUrl("dashboard");
  }

  onRegSubmit(formData) {
    // errors show under each input
    // Register button should be disabled until all data is valid
    console.log('client | log-reg component | onRegSubmit()');    
    console.log('here is the form data:', formData);
    console.log('and the new user data:', this.newUser.first_name);
    this._LogRegService.createNewUser(this.newUser);
    this.newUser = {
    first_name : '',
      last_name : '',
      email : '',
      password : ''
    };
    this.router.navigateByUrl("dashboard");
  }

}



