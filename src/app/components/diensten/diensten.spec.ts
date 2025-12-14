import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diensten } from './diensten';

describe('Diensten', () => {
  let component: Diensten;
  let fixture: ComponentFixture<Diensten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diensten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diensten);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
