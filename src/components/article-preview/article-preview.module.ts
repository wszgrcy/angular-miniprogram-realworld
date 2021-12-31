import { NgModule } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticleMetaModule } from '../article-meta/article-meta.module';
import { FavoriteButtonModule } from '../favorite-button/favorite-button.module';
import { ArticlePreviewComponent } from './article-preview.component';

@NgModule({
  imports: [CommonModule, ArticleMetaModule, FavoriteButtonModule],
  declarations: [ArticlePreviewComponent],
  exports: [ArticlePreviewComponent],
})
export class ArticlePreviewModule {}
