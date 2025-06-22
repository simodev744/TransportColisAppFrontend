import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Condnav } from './condnav';

describe('Condnav', () => {
  let component: Condnav;
  let fixture: ComponentFixture<Condnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Condnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Condnav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
