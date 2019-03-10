import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWebappComponent } from './layout-webapp.component';

describe('LayoutWebappComponent', () => {
  let component: LayoutWebappComponent;
  let fixture: ComponentFixture<LayoutWebappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWebappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWebappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
