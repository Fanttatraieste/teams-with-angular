import { Component, Output, EventEmitter, Input } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.css'],
})
export class PageNumberComponent {
  @Output() changePaginationEvent = new EventEmitter<number>();
  @Input() formInputs: any = {};

  private currentPage: number;
  private firstPage: number;
  private lastPage: number;
  private pageList: any[] = [];
  results: number;

  constructor() {
    this.results = this.formInputs.results;
    this.currentPage = this.formInputs.page;
    this.firstPage = 1;
    this.lastPage =
      this.results % this.formInputs.limit === 0
        ? this.results / this.formInputs.limit
        : Math.floor(this.results / this.formInputs.limit + 1);

    this.createPageList();
  }

  // ngOnInit() {
  //   this.changePaginationEvent.emit(1);
  // }

  setPageList(pageList: any[]) {
    this.pageList = pageList;
  }

  getPageList() {
    return this.pageList;
  }

  createPageList() {
    this.setPageList([]);

    if (this.firstPage === this.lastPage) {
      this.setPageList([`${this.firstPage}`]);
      return;
    }

    let pg = [];
    pg.push('<');
    pg.push(`${this.firstPage}`);

    if (this.lastPage <= 5) {
      for (let i = 2; i < this.lastPage; i++) pg.push(`${i}`);
    } else if (this.currentPage <= 4) {
      for (let i = 2; i <= 4; i++) pg.push(`${i}`);
      pg.push('...');
    } else if (this.currentPage >= this.lastPage - 3) {
      pg.push('...');
      for (
        let i =
          this.currentPage === this.lastPage - 3
            ? this.currentPage
            : this.lastPage - 3;
        i < this.lastPage;
        i++
      )
        pg.push(`${i}`);
    } else {
      pg.push('...');
      pg.push(`${this.currentPage - 1}`);
      pg.push(`${this.currentPage}`);
      pg.push(`${this.currentPage + 1}`);
      pg.push('...');
    }

    pg.push(`${this.lastPage}`);
    pg.push('>');

    console.log(pg);
    this.setPageList(pg);
  }

  changePage(page: number) {
    this.changePaginationEvent.emit(page);
  }
}
