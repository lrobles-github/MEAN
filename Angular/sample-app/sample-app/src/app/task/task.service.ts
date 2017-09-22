import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  tasks = ['task one', 'task two'];

  constructor(private _http: Http) { }

  retrieveTasks(callback) {
    this._http.get('http://59c2c5fc88c2c400118df07e.mockapi.io/tasks').subscribe(
      (response) => {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  createTask(task) {
    this.tasks.push(task);
  }

}
