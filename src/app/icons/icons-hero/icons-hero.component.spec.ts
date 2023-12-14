import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsHeroComponent } from './icons-hero.component';

describe('IconsHeroComponent', () => {
  let component: IconsHeroComponent;
  let fixture: ComponentFixture<IconsHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsHeroComponent]
    });
    fixture = TestBed.createComponent(IconsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
