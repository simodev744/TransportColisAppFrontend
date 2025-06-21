import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpediteur } from './dashboard-expediteur';

describe('DashboardExpediteur', () => {
  let component: DashboardExpediteur;
  let fixture: ComponentFixture<DashboardExpediteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardExpediteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExpediteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
