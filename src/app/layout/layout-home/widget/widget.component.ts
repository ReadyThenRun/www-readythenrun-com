import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  relatedPosts: String[];
  recentPosts: String[];

  constructor() {
    this.recentPosts = [
      'Tamarind Group\'s CEO was aboard fatal flight',
      'Soccer player attacked by fan mid-game',
      'Mysterious prospect may be the next NBA star',
      'Opinion: Trump takes a moment to gloat',
      'Justin Amash is the loneliest Republican in Congress'
    ];
  }

  ngOnInit() {
  }

}
