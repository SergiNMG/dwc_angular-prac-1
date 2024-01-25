import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';

@Component({
  selector: 'app-filtred-article',
  templateUrl: './filtred-article.component.html',
  styleUrls: ['./filtred-article.component.css']
})
export class FiltredArticleComponent {
  articles !: Article[];

  constructor(private articleService: ArticleService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let precio: number;
    let orden: string;
    this.activeRoute.queryParams.subscribe(params => {
      precio = params["precio"];
      orden = params["orden"];
      this.articles = this.articleService.fiterArticles(precio, orden);

      console.log(precio);
      console.log(orden);
    })
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticulo(id);
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }
}
