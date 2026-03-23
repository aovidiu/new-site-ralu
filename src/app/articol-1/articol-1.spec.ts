import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Articol1 } from './articol-1';

describe('Articol1', () => {
  let component: Articol1;
  let fixture: ComponentFixture<Articol1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Articol1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Articol1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
