import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  @Input() quotes;
  @Output() newQuoteEvent = new EventEmitter();

  newQuote = { 
    content: '', 
    author: '', 
    rating: 0
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
    console.log(formData)
    console.log(this.newQuote);
    this.newQuoteEvent.emit(this.newQuote);
    this.newQuote = { content: '', author: '', rating: 0};
    // console.log(this.newQuote.content);
  }
  
}
