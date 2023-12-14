import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LatestIconsComponent } from './latest-icons/latest-icons.component';
import { LatestTitleComponent } from './latest-title/latest-title.component';
import { LatestComponent } from './latest.component';

@NgModule({
  declarations: [LatestIconsComponent, LatestTitleComponent, LatestComponent],
  imports: [BrowserModule],
  exports: [LatestComponent],
  providers: [],
  bootstrap: [LatestModule],
})
export class LatestModule {}
