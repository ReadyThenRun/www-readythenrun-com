import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutResumeComponent } from './layout-resume.component';

describe('LayoutResumeComponent', () => {
  let component: LayoutResumeComponent;
  let fixture: ComponentFixture<LayoutResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
