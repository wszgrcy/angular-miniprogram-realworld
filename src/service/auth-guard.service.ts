import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from './user.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
