import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAndroidComponent } from './layout-android.component';

describe('LayoutAndroidComponent', () => {
  let component: LayoutAndroidComponent;
  let fixture: ComponentFixture<LayoutAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
