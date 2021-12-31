import { NgModule } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticleListModule } from '../../components/article-list/article-list.module';
import { Page1Component } from './page1.component';
@NgModule({
  declarations: [Page1Component],
  imports: [CommonModule,ArticleListModule],
  providers: [],
  bootstrap: [],
  exports: [Page1Component],
})
export class Page1Module {}
