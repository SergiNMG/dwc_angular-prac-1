import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article3',
  templateUrl: './article3.component.html',
  styleUrls: ['./article3.component.css']
})
export class Article3Component {

  articles: Article[] = [];
  //selectedArticle!:Article | null
  selectedArticle:string = this.articleService.articles[0].nombre;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.articles;
  }
}
