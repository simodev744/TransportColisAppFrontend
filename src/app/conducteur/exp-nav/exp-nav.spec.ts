import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpNav } from './exp-nav';

describe('ExpNav', () => {
  let component: ExpNav;
  let fixture: ComponentFixture<ExpNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
