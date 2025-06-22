import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listedemandes } from './listedemandes';

describe('Listedemandes', () => {
  let component: Listedemandes;
  let fixture: ComponentFixture<Listedemandes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listedemandes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listedemandes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
