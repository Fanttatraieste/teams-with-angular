import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-hero',
  templateUrl: './icons-hero.component.html',
  styleUrls: ['./icons-hero.component.css'],
})
export class IconsHeroComponent {
  public imageState = 1;

  constructor() {}

  setImageState(nr: any) {
    this.imageState = nr;
  }

  checkImageActive(nr: any) {
    return this.imageState === nr;
  }
}
