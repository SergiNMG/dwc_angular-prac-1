import { Component, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article5',
  templateUrl: './article5.component.html',
  styleUrls: ['./article5.component.css']
})
export class Article5Component {

  articles!: Article[];

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
    this.articles = this.articleService.getArticulos();
  }

  articleSelected!: Article | null;

  codigo!: string
  nombre!: string
  descripcion!: string
  precio!: number


  deleteArticle(id: string) {
    this.articleService.deleteArticulo(id);
  }

  cancel() {
    this.articleSelected = null;
  }

  navigateTo(route: string) {
    this.router.navigate([route])
  }

  // showArticle(id: string) {
  //   this.articleSelected = this.articleService.getArticulo(id);

  //   this.codigo == this.articleSelected.codigo;
  //   this.nombre == this.articleSelected.nombre;
  //   this.descripcion == this.articleSelected.descripcion;
  //   this.precio == this.articleSelected.precio;
  // }

  // modifyArticle() {
  //   if (this.articleSelected != null) {
  //     let articleModified: Article = {
  //       codigo: this.articleSelected.codigo,
  //       nombre: this.nombre,
  //       descripcion: this.descripcion,
  //       precio: this.precio
  //     }
  //     console.log(articleModified);
  //     this.articleService.putArticulo(articleModified);
  //     this.navigateTo("/article5")
  //   }
  //   this.articleSelected = null;
  // }

}
