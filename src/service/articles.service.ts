import { Injectable } from '@angular/core';
import { HttpParams } from 'angular-miniprogram/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private apiService: ApiService) {}

  query(
    config: ArticleListConfig
  ): Observable<{ articles: Article[]; articlesCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    const params: Record<string, any> = {};

    Object.keys(config.filters).forEach((key) => {
      params[key] = (config.filters as any)[key];
    });

    return this.apiService.get(
      '/articles' + (config.type === 'feed' ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(slug: string): Observable<Article> {
    return this.apiService
      .get('/articles/' + slug)
      .pipe(map((data) => data.article));
  }

  destroy(slug: string) {
    return this.apiService.delete('/articles/' + slug);
  }

  save(article: any): Observable<Article> {
    // If we're updating an existing article
    if (article.slug) {
      return this.apiService
        .put('/articles/' + article.slug, { article: article })
        .pipe(map((data) => data.article));

      // Otherwise, create a new article
    } else {
      return this.apiService
        .post('/articles/', { article: article })
        .pipe(map((data) => data.article));
    }
  }

  favorite(slug: string): Observable<Article> {
    return this.apiService.post('/articles/' + slug + '/favorite');
  }

  unfavorite(slug: string): Observable<Article> {
    return this.apiService.delete('/articles/' + slug + '/favorite');
  }
}
