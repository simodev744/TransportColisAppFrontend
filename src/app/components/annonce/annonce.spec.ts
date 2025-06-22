import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annonce } from './annonce';

describe('Annonce', () => {
  let component: Annonce;
  let fixture: ComponentFixture<Annonce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annonce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annonce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
