import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Article } from '../../models';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls:['./article-meta.component.scss']
})
export class ArticleMetaComponent {
  static mpComponentOptions: WechatMiniprogram.Component.Options<{}, {}, {}> = {
    options: {
      styleIsolation: 'shared',
    },
  };
  @Input() article!: Article;
}
