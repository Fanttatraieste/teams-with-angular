import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFormComponent } from './icon-form.component';

describe('IconFormComponent', () => {
  let component: IconFormComponent;
  let fixture: ComponentFixture<IconFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconFormComponent]
    });
    fixture = TestBed.createComponent(IconFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
