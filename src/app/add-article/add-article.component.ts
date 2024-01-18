import { Component } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  articles!: Article[];
  articleNew!: Article;

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticulos();
  }

  codigo!: string
  nombre!: string
  descripcion!: string
  precio!: number

  addArticle() {
    let articleNew: Article = {
      codigo: this.codigo,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    }
    this.articleService.addArticulo(articleNew);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
