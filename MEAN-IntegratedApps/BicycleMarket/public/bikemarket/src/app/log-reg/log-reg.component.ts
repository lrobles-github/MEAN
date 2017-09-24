import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogRegService } from '../log-reg.service';


@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  bikeofday = true;
  
  user = new User();
  
  constructor(private _LogRegService: LogRegService, private router: Router) { }
  
  ngOnInit() {
  }

  onLogSubmit(formData) {
    console.log('here is the form data:', formData);
    // this._LogRegService.method();
    this.router.navigateByUrl("dashboard");
  }

  onRegSubmit(formData) {
    console.log('here is the form data:', formData);
    // this._LogRegService.method();
    this.router.navigateByUrl("dashboard");
  }

}



