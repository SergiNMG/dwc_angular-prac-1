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

  constructor(private activeRoute: ActivatedRoute,
    private route: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.codigo = this.activeRoute.snapshot.params['codigo']
    this.article = this.articleService.getArticulo(this.codigo);
  }


}
