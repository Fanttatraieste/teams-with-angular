import { Component, Input } from '@angular/core';
import { APIService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent {

  private latestIcons: any[] = [];
  private numOfIcons = 3;

  constructor(private apiSvr: APIService) {
    this.setLatest(apiSvr);
  }

  async setLatest(apiSvr: APIService) {
    this.latestIcons = await apiSvr.getLatestIcons(this.numOfIcons);
  }

  getLatest() {
    console.log(this.latestIcons);
    return this.latestIcons;
  }
}
