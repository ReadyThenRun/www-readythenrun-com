import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-nav-sidebar',
  templateUrl: './blog-nav-sidebar.component.html',
  styleUrls: ['./blog-nav-sidebar.component.scss']
})
export class BlogNavSidebarComponent implements OnInit {
  @Input() blogId: string;
  constructor() { }

  ngOnInit() {
  }

}
