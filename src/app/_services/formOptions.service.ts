import { Injectable } from '@angular/core';
import { countryFilter } from '../_utils/countryFilter';
import { sortFilter } from '../_utils/sortFilter';
import { positionFilter } from '../_utils/positionFilter';
import { trophyFilter } from '../_utils/trophyFilter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private countryFilter: any[];
  private sortFilter: any[];
  private positionFilter: any[];
  private trophyFilter: any[];

  constructor() {
    this.countryFilter = countryFilter;
    this.sortFilter = sortFilter;
    this.positionFilter = positionFilter;
    this.trophyFilter = trophyFilter;
  }

  getCountryFilter() {
    return this.countryFilter;
  }

  getSortFilter() {
    return this.sortFilter;
  }

  getPositionFilter() {
    return this.positionFilter;
  }

  getTrophyFilter() {
    return this.trophyFilter;
  }
}
