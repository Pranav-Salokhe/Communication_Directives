import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obj2Component } from './obj2.component';

describe('Obj2Component', () => {
  let component: Obj2Component;
  let fixture: ComponentFixture<Obj2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Obj2Component]
    });
    fixture = TestBed.createComponent(Obj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
