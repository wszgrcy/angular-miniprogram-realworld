import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { TabBarComponent } from './tab-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabBarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabBarModule {}
