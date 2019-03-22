import { Component, OnInit, Input } from '@angular/core';
import { BlogCard } from './../blog-card/BlogCard';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {
  @Input() blogCard: BlogCard;
  blogContent: string;



  constructor() { }

  getBlogContent(): string {
    const blogId = this.blogCard.id;
    // BlogPicker service 
    return '';
  }

  ngOnInit() {
  }

}
