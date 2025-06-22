import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnnoncesCondcuteur } from './liste-annonces-condcuteur';

describe('ListeAnnoncesCondcuteur', () => {
  let component: ListeAnnoncesCondcuteur;
  let fixture: ComponentFixture<ListeAnnoncesCondcuteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAnnoncesCondcuteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAnnoncesCondcuteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
