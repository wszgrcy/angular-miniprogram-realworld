import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InfoComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InfoModule {}
