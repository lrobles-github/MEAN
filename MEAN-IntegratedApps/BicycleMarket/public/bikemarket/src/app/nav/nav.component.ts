import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logged out');
    this.router.navigateByUrl("");
  }
}
