import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticleCommentComponent } from './article-comment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleCommentComponent],
  exports: [ArticleCommentComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ArticleCommentModule {}
