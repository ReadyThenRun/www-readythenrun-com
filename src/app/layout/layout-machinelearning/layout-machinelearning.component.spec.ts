import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMachinelearningComponent } from './layout-machinelearning.component';

describe('LayoutMachinelearningComponent', () => {
  let component: LayoutMachinelearningComponent;
  let fixture: ComponentFixture<LayoutMachinelearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMachinelearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMachinelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
