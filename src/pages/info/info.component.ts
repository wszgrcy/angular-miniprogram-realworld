import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Profile, User } from '../../models';
import { ProfilesService, UserService } from '../../service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  isAuthenticated = false;
  profile!: Profile;
  currentUser!: User;
  isUser!: boolean;
  loadingDone: boolean = false;
  constructor(
    private userService: UserService,
    private profilesService: ProfilesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated.subscribe((result) => {
      this.isAuthenticated = result;
      if (!result) {
        return wx.navigateTo({ url: '/pages/login/login-entry' });
      }
      return this.userService.currentUser.subscribe((userData) => {
        this.currentUser = userData;
        this.profilesService.get(userData.username).subscribe((profile) => {
          this.profile = profile;
          this.loadingDone = true;
        });
      });
    });
  }
}
