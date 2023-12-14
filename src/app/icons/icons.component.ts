import { Component } from '@angular/core';
import { APIService } from '../_services/api.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
})
export class IconsComponent {
  private pageNo = 1;
  private limit = 9;
  private query: string = '';
  private api: APIService;
  iconList = [];
  formInputs: any = {};

  constructor(private apiSvr: APIService) {
    this.api = apiSvr;
  }

  async paginationEvent(event: number) {
    this.pageNo = event;

    this.iconList = await this.api.getIconsWithQuery(
      this.query + `&limit=${this.getLimit()}&page=${this.getPageNo()}`
    );
    this.formInputs.page = this.pageNo;
    this.formInputs.limit = this.limit;
    this.formInputs.results = this.api.getResults();

    console.log(this.iconList);
  }

  async queryIcons(event: any) {
    this.query = event.query;

    this.iconList = await this.api.getIconsWithQuery(
      event.query + `&limit=${this.getLimit()}&page=${this.getPageNo()}`
    );
    this.formInputs = event.queryObj;
    this.formInputs.page = this.pageNo;
    this.formInputs.limit = this.limit;
    this.formInputs.results = this.api.getResults();

    console.log(this.iconList);
  }

  setPageNo(page: number) {
    this.pageNo = page;
  }

  getPageNo() {
    return this.getPageNo;
  }

  setLimit(limit: number) {
    this.limit = limit;
  }

  getLimit() {
    return this.limit;
  }
}
