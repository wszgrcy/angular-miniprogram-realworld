import {
  Component,
  Input,
  ChangeDetectionStrategy,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

import { Article } from '../../models';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent {
  static mpComponentOptions: WechatMiniprogram.Component.Options<{}, {}, {}> = {
    options: {
      styleIsolation: 'shared',
    },
  };
  @Input() article!: Article;
  constructor(private cd: ChangeDetectorRef) {}
  trackByFn(index, item) {
    return index;
  }

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  openArticle() {
    wx.navigateTo({
      url: `/pages/article/article-entry?slug=${this.article.slug}`,
    });
  }
}
