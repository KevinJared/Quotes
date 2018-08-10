import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'I think being in love with life is a key to eternal youth.'),
    new Quote(2, 'You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.'),
    new Quote(3, 'A man who dares to waste one hour of time has not discovered the value of life.'),
    new Quote(4, 'If life were predictable it would cease to be life, and be without flavor.'),
    new Quote(5, 'All life is an experiment. The more experiments you make the better.'),
    new Quote(6, 'All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
