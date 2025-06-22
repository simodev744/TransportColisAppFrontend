import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnnonces } from './liste-annonces';

describe('ListeAnnonces', () => {
  let component: ListeAnnonces;
  let fixture: ComponentFixture<ListeAnnonces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAnnonces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAnnonces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
