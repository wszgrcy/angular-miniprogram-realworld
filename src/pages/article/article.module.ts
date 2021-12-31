import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { ArticleComponent } from './article.component';
import { FormsModule, ReactiveFormsModule } from 'angular-miniprogram/forms';
import { ArticleMetaModule } from 'src/components/article-meta/article-meta.module';
import { FavoriteButtonModule } from 'src/components/favorite-button/favorite-button.module';
import { ArticleCommentModule } from 'src/components/article-comment/article-comment.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ArticleMetaModule,
    FavoriteButtonModule,
    ArticleCommentModule
  ],
  declarations: [ArticleComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class ArticleModule {}
