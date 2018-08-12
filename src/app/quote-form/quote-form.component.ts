import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quoteDetails: string;
  newQuote: any;
  @Output() emitQuote = new EventEmitter();

  submitQuote() {
    this.newQuote = new Quote(this.quoteDetails);
    this.emitQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
