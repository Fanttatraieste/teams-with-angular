import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CirclesComponent } from './circles/circles.component';
import { HeroComponent } from './hero/hero.component';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home.component';
import { LatestModule } from './latest/latest.module';

@NgModule({
  declarations: [
    CirclesComponent,
    HeroComponent,
    MissionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LatestModule
  ],
  exports:[HomeComponent],
  providers: [],
  bootstrap: [HomeModule]
})
export class HomeModule { }
