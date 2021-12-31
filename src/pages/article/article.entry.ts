import { pageStartup } from 'angular-miniprogram';
import { ArticleComponent } from './article.component';
import { ArticleModule } from './article.module';

pageStartup(ArticleModule, ArticleComponent);
