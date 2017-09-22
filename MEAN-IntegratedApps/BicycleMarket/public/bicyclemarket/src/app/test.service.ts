import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestService {

  constructor(private _http: Http) { }

  myMethod() {
    console.log('test.service ==> worked');
    this._http.get('/test');
  }

}
