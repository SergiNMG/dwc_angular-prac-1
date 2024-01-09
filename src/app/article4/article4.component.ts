import { Component, Input } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article4',
  templateUrl: './article4.component.html',
  styleUrls: ['./article4.component.css']
})
export class Article4Component {

  @Input() article!:Article;
  articles = this.articleService.articles;
  articleSelected !:Article;

  constructor(private articleService: ArticleService) { 
    this.showArticle(this.article);
  }
  
  showArticle(article:Article){
    this.articleSelected = article
  }
}
