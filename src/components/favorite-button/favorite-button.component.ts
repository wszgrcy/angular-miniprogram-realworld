import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges,
} from '@angular/core';

import { Article } from '../../models';
import { ArticlesService, UserService } from '../../service';
import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  constructor(
    private articlesService: ArticlesService,
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  @Input() article!: Article;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;
  ngOnChanges(changes: SimpleChanges): void {
    this.cd.detectChanges();
  }
  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated
      .pipe(
        concatMap((authenticated) => {
          // Not authenticated? Push to login screen
          if (!authenticated) {
            wx.navigateTo({ url: '/pages/login/login-entry' });
            return of(null);
          }

          // Favorite the article if it isn't favorited yet
          if (!this.article.favorited) {
            return this.articlesService.favorite(this.article.slug).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.toggle.emit(true);
                },
                (err) => (this.isSubmitting = false)
              )
            );

            // Otherwise, unfavorite the article
          } else {
            return this.articlesService.unfavorite(this.article.slug).pipe(
              tap(
                (data) => {
                  this.isSubmitting = false;
                  this.toggle.emit(false);
                },
                (err) => (this.isSubmitting = false)
              )
            );
          }
        })
      )
      .subscribe(() => {});
  }
}
