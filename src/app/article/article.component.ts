import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  //article: Article = this.articles[4];
  articles: Article[] = [];
  constructor(private articleService: ArticleService) { }

  botonComprar: boolean = true;
  ngOnInit(): void {
    this.articles = this.articleService.articles;

    setTimeout(() => {
      alert("Activando botón..")
      this.botonComprar = false
    }, 5000)
  }
}
