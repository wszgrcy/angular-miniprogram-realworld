import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormControl } from 'angular-miniprogram/forms';
import { BehaviorSubject } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { Article, User, Comment } from '../../models';
import { ArticlesService, CommentsService, UserService } from '../../service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  static mpPageOptions: WechatMiniprogram.Page.Options<{}, {}> = {
    onLoad(this: ArticleComponent, query) {
      this.ngZone.run(() => {
        this.slug$.next(query.slug!);
      });
    },
  };
  slug$ = new BehaviorSubject<string | undefined>(undefined);
  article!: Article;
  currentUser!: User;
  canModify!: boolean;
  comments!: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;
  loadingDone = false;
  isAuthenticated = false;
  constructor(
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.slug$
      .pipe(
        filter((item) => !!item),
        switchMap((slug) => this.articlesService.get(slug!))
      )
      .subscribe(
        (data) => {
          this.article = data;
          this.populateComments();
          this.loadingDone = true;
          this.userService.currentUser.subscribe((userData: User) => {
            this.currentUser = userData;
            this.canModify =
              this.currentUser.username === this.article.author.username;
            this.cd.detectChanges();
          });
        },
        () => {
          // todo 返回首页
        }
      );
    this.userService.isAuthenticated.subscribe((item) => {
      this.isAuthenticated = item;
    });
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  trackByFn(index, item) {
    return index;
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug).subscribe((success) => {
      // todo 重定向回去
      // this.router.navigateByUrl('/');
    });
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug).subscribe((comments) => {
      this.comments = comments;
      this.cd.detectChanges();
    });
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService.add(this.article.slug, commentBody).subscribe(
      (comment) => {
        this.comments.unshift(comment);
        this.commentControl.reset('');
        this.isSubmitting = false;
        this.cd.detectChanges();
      },
      (errors) => {
        this.isSubmitting = false;
        this.commentFormErrors = errors;
        this.cd.detectChanges();
      }
    );
  }

  onDeleteComment(comment) {
    this.commentsService
      .destroy(comment.id, this.article.slug)
      .subscribe((success) => {
        this.comments = this.comments.filter((item) => item !== comment);
        this.cd.markForCheck();
      });
  }
}
