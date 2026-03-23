import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articol3 } from './articol-3';

describe('Articol3', () => {
  let component: Articol3;
  let fixture: ComponentFixture<Articol3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articol3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articol3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
