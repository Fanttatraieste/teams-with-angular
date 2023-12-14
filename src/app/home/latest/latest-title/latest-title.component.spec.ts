import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTitleComponent } from './latest-title.component';

describe('LatestTitleComponent', () => {
  let component: LatestTitleComponent;
  let fixture: ComponentFixture<LatestTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestTitleComponent]
    });
    fixture = TestBed.createComponent(LatestTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
