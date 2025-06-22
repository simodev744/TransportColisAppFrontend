import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemande } from './create-demande';

describe('CreateDemande', () => {
  let component: CreateDemande;
  let fixture: ComponentFixture<CreateDemande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDemande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDemande);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
