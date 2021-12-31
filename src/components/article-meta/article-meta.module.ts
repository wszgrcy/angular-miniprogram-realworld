import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticleMetaComponent } from './article-meta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleMetaComponent],
  exports:[ArticleMetaComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ArticleMetaModule { }
