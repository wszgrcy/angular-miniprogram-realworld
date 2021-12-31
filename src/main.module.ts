import { NgModule } from '@angular/core';
import { DoBootstrap } from '@angular/core';
import { HttpClientModule, MiniProgramModule } from 'angular-miniprogram';
import { HTTP_INTERCEPTORS } from 'angular-miniprogram/common/http';
import { HttpTokenInterceptor, UserService } from './service';
@NgModule({
  declarations: [],
  imports: [MiniProgramModule, HttpClientModule],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
})
export class MainModule implements DoBootstrap {
  constructor(private userService: UserService) {
    this.userService.populate();
  }
  ngDoBootstrap() {}
}
