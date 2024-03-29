import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [
    {
      'codigo': 'm1',
      'nombre': 'Galaxy A32',
      'descripcion': '4GB + 128GB libre',
      'precio': 229
    },
    {
      'codigo': 'm2',
      'nombre': 'Oppo A94',
      'descripcion': '8GB + 128GB libre',
      'precio': 269,
    },
    {
      'codigo': 'm3',
      'nombre': 'Galaxy S22',
      'descripcion': '5G Amoled libre',
      'precio': 859
    },
    {
      'codigo': 'm4',
      'nombre': 'Apple iPhone',
      'descripcion': '14 Pro móvil libre',
      'precio': 339
    },
    {
      'codigo': 'm5',
      'nombre': 'Galaxy Z Flip4',
      'descripcion': '5G móvil libre',
      'precio': 1990
    },
    {
      'codigo': 'm6',
      'nombre': 'Note 11',
      'descripcion': '6GB + 128GB',
      'precio': 300
    },
    {
      'codigo': 'm7',
      'nombre': 'Realme 9',
      'descripcion': '8GB + 128GB',
      'precio': 300
    },
    {
      'codigo': 'p1',
      'nombre': 'Asus Zen',
      'descripcion': 'i5 16Gb SSD',
      'precio': 900
    },
    {
      'codigo': 'p2',
      'nombre': 'HP Pavillion',
      'descripcion': 'SSD Windows 11',
      'precio': 750
    },
    {
      'codigo': 'p3',
      'nombre': 'MacBook',
      'descripcion': 'MacOs 13,3"',
      'precio': 1115
    },
    {
      'codigo': 't1',
      'nombre': 'Xiaomi P1E',
      'descripcion': 'Android 9 HDR10',
      'precio': 300
    },
    {
      'codigo': 't2',
      'nombre': 'Toshiba 55UAG',
      'descripcion': 'Android UHD 4K',
      'precio': 450
    },
    {
      'codigo': 't3',
      'nombre': 'Samsung UE305',
      'descripcion': 'Full HD, HDR',
      'precio': 350
    }
  ];

  getArticulos() {
    return this.articles;
  }

  getArticulo(id: string) {
    //return this.articles.find(a => a.codigo == id) || undefined;
    let position = this.articles.findIndex(a => a.codigo == id);
    return this.articles[position];
  }

  putArticulo(articleModified: Article) {
    let position = this.articles.findIndex(a => a.codigo == articleModified.codigo);
    return this.articles[position] = articleModified;
  }

  addArticulo(articleNew: Article) {
    this.articles.push(articleNew);
    alert("Articulo añadido")
  }

  deleteArticulo(id: string) {
    let position = this.articles.findIndex(a => a.codigo == id);
    return this.articles.splice(position, 1);
  }

  fiterArticles(precio: number, orden: string) {
    let filtredArticles = this.articles.filter(a => a.precio >= precio).sort((a, b) => a.precio - b.precio);
    return (orden == "asc") ? filtredArticles : filtredArticles.reverse();
  }
}
