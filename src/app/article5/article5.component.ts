import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';


@Component({
  selector: 'app-article5',
  templateUrl: './article5.component.html',
  styleUrls: ['./article5.component.css']
})
export class Article5Component {
  constructor(private articleService: ArticleService) { }

  articles: Article[] = this.articleService.getArticulos();

  showArticle(id: string) {

  }

  deleteArticle(id: string) {

  }



}
