import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNavSidebarComponent } from './blog-nav-sidebar.component';

describe('BlogNavSidebarComponent', () => {
  let component: BlogNavSidebarComponent;
  let fixture: ComponentFixture<BlogNavSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogNavSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNavSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
