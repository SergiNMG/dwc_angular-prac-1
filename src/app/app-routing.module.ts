import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article2Component } from './article2/article2.component';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { Article5Component } from './article5/article5.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { filter } from 'rxjs';
import { FilterComponent } from './filter/filter.component';
import { FiltredArticleComponent } from './filtred-article/filtred-article.component';
import { Guard1Guard } from './guards/guard1.guard';
import { ClientsComponent } from './clients/clients.component';
import { ShowClientComponent } from './show-client/show-client.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filtredArticles', component: FiltredArticleComponent },
  { path: 'index', component: IndexComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article2', component: Article2Component },
  { path: 'article3', component: Article3Component },
  { path: 'article4', component: Article4Component },
  { path: 'article5', component: Article5Component },
  { path: 'addarticle', component: AddArticleComponent },
  { path: 'showarticle/:codigo', component: ShowArticleComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ShowClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
