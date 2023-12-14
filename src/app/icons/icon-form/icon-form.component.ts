import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/_services/formOptions.service';

@Component({
  selector: 'app-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrls: ['./icon-form.component.css'],
})
export class IconFormComponent {
  countryFilter: any[];
  sortFilter: any[];
  positionFilter: any[];
  trophyFilter: any[];
  queryForm: FormGroup;

  @Output() newQueryEvent = new EventEmitter<any>();

  constructor(filterSvr: FilterService) {
    this.countryFilter = filterSvr.getCountryFilter();
    this.sortFilter = filterSvr.getSortFilter();
    this.positionFilter = filterSvr.getPositionFilter();
    this.trophyFilter = filterSvr.getTrophyFilter();

    this.queryForm = new FormGroup({
      trophy: new FormControl(''),
      country: new FormControl(''),
      position: new FormControl(''),
      sort: new FormControl(''),
    });
  }

  ngOnInit() {
    this.queryForm.setValue({
      trophy: 'all',
      country: 'all',
      position: 'all',
      sort: 'fantascore',
    });

    this.createQueryString({
      trophy: 'all',
      country: 'all',
      position: 'all',
      sort: 'fantascore',
    });
  }

  queryIcons() {
    const trophy = this.queryForm.controls['trophy'].value;
    const country = this.queryForm.controls['country'].value;
    const position = this.queryForm.controls['position'].value;
    const sort = this.queryForm.controls['sort'].value;

    const queryObj = {
      trophy,
      country,
      position,
      sort,
    };

    console.log(queryObj);
    this.createQueryString(queryObj);
  }

  createQueryString(queryObj: any) {
    let query = '';

    let filterBy = [];
    if (queryObj.trophy !== 'all') filterBy.push(queryObj.trophy);
    if (queryObj.position !== 'all') filterBy.push(queryObj.position);

    if (filterBy) query += `filterBy=${filterBy.join(',')}&`;
    if (queryObj.country !== 'all') query += `country=${queryObj.country}&`;
    query += `sortBy=${queryObj.sort}`;

    this.newQueryEvent.emit({ query, queryObj });
  }
}
