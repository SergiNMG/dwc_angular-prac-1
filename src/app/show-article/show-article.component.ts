import { Component } from '@angular/core';
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

  codigo!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.codigo = this.activeRoute.snapshot.params['codigo']
    this.article = this.articleService.getArticulo(this.codigo);
  }

  modifyArticle() {
    if (this.article != null) {
      let articleModified: Article = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      }
      this.articleService.putArticulo(articleModified);
    }
    this.navigateTo("/article5")
  }

  deleteArticle(codigo: string) {
    this.articleService.deleteArticulo(codigo);
    this.navigateTo("/article5")
  }

  cancel() {
    this.navigateTo("/article5")
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
