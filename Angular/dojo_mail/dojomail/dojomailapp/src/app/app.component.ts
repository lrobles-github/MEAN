import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arr = EmailArray;
}




class DojoMail {

  address: string;
  importance: boolean;
  subject: string;
  content: string;

  constructor(address: string, importance: boolean, subject: string, content: string) {
    this.address = address;
    this.importance = importance;
    this.subject = subject;
    this.content = content;
  }

}


var a = new DojoMail('Luis@microsoft.com', true, 'Hey, Microsoft', 'This is the email content');
var b = new DojoMail('luis@Google.com', true, 'Hey, Google', 'This is the email content');
var c = new DojoMail('luiS@facebook.com', false, 'Hey, Facebook', 'This is the email content');
var d = new DojoMail('luis@amazoN.com', false, 'Hey, Amazon', 'This is the email content');

var EmailArray = [a, b, c, d];

console.log(EmailArray);
