import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Afspraak } from './afspraak';

describe('Afspraak', () => {
  let component: Afspraak;
  let fixture: ComponentFixture<Afspraak>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Afspraak]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Afspraak);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
