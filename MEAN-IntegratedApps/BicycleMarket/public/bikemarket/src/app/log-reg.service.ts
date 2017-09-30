import { Injectable } from '@angular/core';
import { User } from './log-reg/user';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import 'rxjs/add/operator/map';



@Injectable()
export class LogRegService {

  users = [
    new User('test1', 'test1','test1@live.com', 'thisisanangularapplication'),
    new User('test2', 'test2','test2@live.com', 'thisisanangularapplication'),
    new User('test3', 'test3','test3@live.com', 'thisisanangularapplication'),
  ];
  
  constructor(private _http: Http) { }
  
  createNewUser(user) {

    console.log('client | log-reg service | createNewUser()');
    this._http.post('http://localhost:1337/users', user).subscribe(
      (response) => {
        this.users = response.json();
        user(this.users);
      },
      (err) => {
        console.log(err);
      });
    }

}
