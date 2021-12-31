import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../../service';
import { ArticleListConfig } from '../../models/article-list-config.model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component {
  isAuthenticated!: boolean;
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {},
  };
  loadingDone=false
  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.userService.isAuthenticated.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;      
      // set the article list accordingly
      if (authenticated) {
        this.setListTo('feed');
      } else {
        this.setListTo('all');
      }
      this.loadingDone=true
    });

    // this.tagsService.getAll()
    // .subscribe(tags => {
    //   this.tags = tags;
    //   this.tagsLoaded = true;
    //   this.cd.markForCheck();
    // });
  }
  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'feed' && !this.isAuthenticated) {
      return;
    }

    // Otherwise, set the list object
    this.listConfig = { type: type, filters: filters };
  }
}
