import { NgModule } from '@angular/core';
import { CommonModule } from 'angular-miniprogram/common';
import { FormsModule, ReactiveFormsModule } from 'angular-miniprogram/forms';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
