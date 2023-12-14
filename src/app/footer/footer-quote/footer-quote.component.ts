import { Component } from '@angular/core';
import { QuoteService } from 'src/app/_services/quote.service';

@Component({
  selector: 'app-footer-quote',
  templateUrl: './footer-quote.component.html',
  styleUrls: ['./footer-quote.component.css']
})
export class FooterQuoteComponent {
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
