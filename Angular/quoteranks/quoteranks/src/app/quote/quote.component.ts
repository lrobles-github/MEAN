import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  myQuotes = [
    { id: 1, content: "Quote One", author: "Author One", rating: 0},
    { id: 2, content: "Quote Two", author: "Author Two", rating: 0},
    { id: 3, content: "Quote Three", author: "Author Three", rating: 0}
  ];

  constructor() { }

  ngOnInit() {
  }

  ///===============
  newQuote(quote) {
    console.log(quote);
    this.myQuotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.myQuotes.indexOf(quote);
    this.myQuotes.splice(idx, 1);
  }
  ///===============

}

