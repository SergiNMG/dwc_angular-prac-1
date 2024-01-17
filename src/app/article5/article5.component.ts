import { Component, Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';


@Component({
  selector: 'app-article5',
  templateUrl: './article5.component.html',
  styleUrls: ['./article5.component.css']
})
export class Article5Component {

  articles!: Article[];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticulos()
  }

  articleSelected!: Article | null;
  articleNew!: Article;

  codigo!: string
  nombre!: string
  descripcion!: string
  precio!: number

  showArticle(id: string) {
    this.articleSelected = this.articleService.getArticulo(id);

    /*this.codigo = this.articleSelected.codigo;
    this.nombre = this.articleSelected?.nombre;
    this.descripcion = this.articleSelected?.descripcion;
    this.precio = this.articleSelected?.precio;*/

    this.codigo == this.articleSelected.codigo;
    this.nombre == this.articleSelected.nombre;
    this.descripcion == this.articleSelected.descripcion;
    this.precio == this.articleSelected.precio;
  }

  modifyArticle() {
    if (this.articleSelected != null) {
      let articleModified: Article = {
        codigo: this.codigo,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      }
      this.articleService.putArticulo(articleModified);
    }
    this.cancel()
  }

  addArticle() {
    let articleNew: Article = {
      codigo: this.codigo,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    }
    this.articleService.addArticulo(articleNew);
  }

  deleteArticle(id: string) {
    this.articleService.deleteArticulo(id);
  }

  cancel() {
    this.articleSelected = null;
  }

}
