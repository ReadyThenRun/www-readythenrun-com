import { Component, OnInit } from '@angular/core';
import { BlogCard } from './../blog-card/BlogCard';

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.scss']
})
export class BlogContainerComponent implements OnInit {

  blogHeaders: BlogCard[];

  constructor() {
    let blogCard: BlogCard;
    blogCard = this.getInstance();
    this.blogHeaders = [
      blogCard, blogCard, blogCard, blogCard, blogCard, blogCard
    ];
  }

  ngOnInit() {
  }

  getInstance(): BlogCard {
    const bc = new BlogCard();
    bc.setTitle('This is a title');
    bc.setKeyWords(['java', 'javascript']);
    const article = 'As we can see, helper classes are now a \
    left to right fashion. We start by setting display none \
    for the extra small screens and override it by setting it \
    to block on small screens and larger… ';
    bc.setSummary(article);
    bc.setArticleUrl('https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b');
    return bc;
  }
}

