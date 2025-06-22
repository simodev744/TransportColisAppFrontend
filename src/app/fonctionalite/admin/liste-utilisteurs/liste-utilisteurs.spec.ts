import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUtilisteurs } from './liste-utilisteurs';

describe('ListeUtilisteurs', () => {
  let component: ListeUtilisteurs;
  let fixture: ComponentFixture<ListeUtilisteurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeUtilisteurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeUtilisteurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
