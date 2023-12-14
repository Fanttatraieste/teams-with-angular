import { Component } from '@angular/core';
import { QuoteService } from 'src/app/_services/quote.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private quote: string;
  private author: string;

  constructor(private quoteSer: QuoteService) {
    let q = quoteSer.getQuote();
    this.quote = q.quote;
    this.author = q.author;
  }

  getQuote() {
    return this.quote;
  }

  getAuthor() {
    return this.author;
  }
}
