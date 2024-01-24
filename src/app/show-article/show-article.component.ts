import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { ArticleGComponent } from '../article-g/article-g.component';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent {

  article!: Article;
  articleModified!: Article | null;

  codigo!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.codigo = this.activeRoute.snapshot.params['codigo'];
    this.article = this.articleService.getArticulo(this.codigo);
    this.articleModified = this.article;

    this.codigo = this.article.codigo
    this.nombre = this.article.nombre
    this.descripcion = this.article.descripcion
    this.precio = this.article.precio
  }

  modifyArticle() {
    if (this.articleModified != null) {
      this.articleModified = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      }
      this.articleService.putArticulo(this.articleModified);
    }
    this.navigateTo("/article5")
  }

  deleteArticle(codigo: string) {
    this.articleService.deleteArticulo(codigo);
    this.navigateTo("/article5")
  }

  cancel() {
    this.articleModified = null;
    this.navigateTo("/article5")
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
