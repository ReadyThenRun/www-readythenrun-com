

export class BlogCard {
  title: string;
  publishDate: Date;
  keywords: string[];
  summary: string;
  articleUrl: string;
  const MONTH: string[] = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];

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

  getDateString() {
    // tslint:disable-next-line:max-line-length
    const dtstring = '' + this.MONTH[this.publishDate.getMonth()] + ' ' +
      this.publishDate.getDate() + ', ' + this.publishDate.getFullYear();
    return dtstring;
  }


}


