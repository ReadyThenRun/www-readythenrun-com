import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComputerversionComponent } from './layout-computerversion.component';

describe('LayoutComputerversionComponent', () => {
  let component: LayoutComputerversionComponent;
  let fixture: ComponentFixture<LayoutComputerversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComputerversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComputerversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
