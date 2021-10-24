import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mydec1Component } from './mydec1.component';

describe('Mydec1Component', () => {
  let component: Mydec1Component;
  let fixture: ComponentFixture<Mydec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mydec1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mydec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
