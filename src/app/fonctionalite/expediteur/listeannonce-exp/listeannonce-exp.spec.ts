import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeannonceExp } from './listeannonce-exp';

describe('ListeannonceExp', () => {
  let component: ListeannonceExp;
  let fixture: ComponentFixture<ListeannonceExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeannonceExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeannonceExp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
