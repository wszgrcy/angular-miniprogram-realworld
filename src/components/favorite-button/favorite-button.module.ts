import { NgModule } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { FavoriteButtonComponent } from './favorite-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FavoriteButtonComponent],
  exports:[FavoriteButtonComponent]
})
export class FavoriteButtonModule {}
