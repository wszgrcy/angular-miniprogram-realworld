import { NgModule } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticlePreviewModule } from '../article-preview/article-preview.module';
import { ArticleListComponent } from './article-list.component';

@NgModule({
  imports: [CommonModule,ArticlePreviewModule],
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
})
export class ArticleListModule {}
