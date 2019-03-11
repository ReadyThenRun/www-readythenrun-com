

export class BlogCard {
  title: string;
  publishDate: Date;
  keywords: string[];
  summary: string;
  articleUrl: string;

  constructor() {
    this.title = '';
    this.publishDate = new Date();
    this.keywords = [];
    this.summary = '';
    this.articleUrl = '';
  }

  // constructor(title: string, publishDate: Date, keywords: string[], summary: string[], artileUrl: string) {
  //   this.title = title;
  //   this.publishDate = publishDate;
  //   this.keywords = keywords;
  //   this.summary = summary;
  //   this.articleUrl = artileUrl;
  // }
  setTitle(title: string) {
    this.title = title;
  }
  setDate() {
    this.publishDate = new Date();
  }

  setKeyWords(kws: string[]) {
    this.keywords = kws;
  };
  setSummary(summary: string) {
    this.summary = summary;
  }
  setArticleUrl(url: string) {
    this.articleUrl = url;
  }


}


