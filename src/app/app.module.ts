import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { Article2Component } from './article2/article2.component';
import { FormsModule } from '@angular/forms';
import { Article3Component } from './article3/article3.component';
import { Article4Component } from './article4/article4.component';
import { ArticleGComponent } from './article-g/article-g.component';
import { Article5Component } from './article5/article5.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ShowArticleComponent } from './show-article/show-article.component';
import { FilterComponent } from './filter/filter.component';
import { FiltredArticleComponent } from './filtred-article/filtred-article.component';

import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { ShowClientComponent } from './show-client/show-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    Article2Component,
    Article3Component,
    Article4Component,
    ArticleGComponent,
    Article5Component,
    IndexComponent,
    HeaderComponent,
    HomeComponent,
    AddArticleComponent,
    ShowArticleComponent,
    FilterComponent,
    FiltredArticleComponent,
    ClientsComponent,
    ShowClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
