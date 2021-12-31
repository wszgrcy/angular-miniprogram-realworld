import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { User,Comment } from '../../models';
import { UserService } from '../../service';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss'],
})
export class ArticleCommentComponent implements OnInit {
  static mpComponentOptions: WechatMiniprogram.Component.Options<{}, {}, {}> = {
    options: {
      styleIsolation: 'shared',
    },
  };
  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  private subscription!: Subscription;

  @Input() comment!: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify!: boolean;

  ngOnInit() {
    // Load the current user's data
    this.subscription = this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = userData.username === this.comment.author.username;
        this.cd.markForCheck();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }
}
