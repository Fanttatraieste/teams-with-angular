import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasListComponent } from './fantas-list.component';

describe('FantasListComponent', () => {
  let component: FantasListComponent;
  let fixture: ComponentFixture<FantasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasListComponent]
    });
    fixture = TestBed.createComponent(FantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
