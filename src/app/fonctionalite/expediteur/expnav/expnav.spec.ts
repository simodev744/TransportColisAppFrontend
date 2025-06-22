import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Expnav } from './expnav';

describe('Expnav', () => {
  let component: Expnav;
  let fixture: ComponentFixture<Expnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Expnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Expnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
