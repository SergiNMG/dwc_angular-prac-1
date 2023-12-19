import { Component } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.css']
})
export class Article2Component {

  article!: Article;

  constructor(private articleService: ArticleService) {
    this.introducirPosicion;
  }

  introducirPosicion() {
    const pos: string | null = prompt("Introduce la posición: ")

    if (pos == null) {
      return alert("Operación cancelada")
    }
    else if (isNaN(parseInt(pos))) {
      return alert("No es una posición")
    }

    const position = Number(pos);
    const articles = this.articleService.articles;

    if (position < 0 || position > articles.length) {
      return alert("Posición no válida")
    }
    else {
      this.article = articles[position]
    }
  }
}
