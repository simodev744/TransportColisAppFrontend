import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConducteur } from './dashboard-conducteur';

describe('DashboardConducteur', () => {
  let component: DashboardConducteur;
  let fixture: ComponentFixture<DashboardConducteur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardConducteur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConducteur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
