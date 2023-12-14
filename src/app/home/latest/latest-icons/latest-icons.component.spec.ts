import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestIconsComponent } from './latest-icons.component';

describe('LatestIconsComponent', () => {
  let component: LatestIconsComponent;
  let fixture: ComponentFixture<LatestIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestIconsComponent]
    });
    fixture = TestBed.createComponent(LatestIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
