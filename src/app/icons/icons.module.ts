import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { IconsComponent } from './icons.component';
import { IconsHeroComponent } from './icons-hero/icons-hero.component';
import { FantasListComponent } from './fantas-list/fantas-list.component';
import { PageNumberComponent } from './page-number/page-number.component';
import { IconFormComponent } from './icon-form/icon-form.component';

@NgModule({
  declarations: [
    IconsComponent,
    IconsHeroComponent,
    FantasListComponent,
    PageNumberComponent,
    IconFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  exports: [IconsComponent],
  providers: [],
  bootstrap: [IconsModule],
})
export class IconsModule {}
