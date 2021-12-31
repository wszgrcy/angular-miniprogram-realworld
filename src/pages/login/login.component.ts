import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from 'angular-miniprogram/forms';
import { Errors } from '../../models';
import { UserService } from '../../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authType: string = '';
  title: string = '';
  errors: Errors = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.changeType('login');
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const credentials = this.authForm.value;

    this.userService.attemptAuth(this.authType, credentials).subscribe(
      (data) => {
        wx.navigateBack()
        // wx.navigateTo({ url: '/pages/page1/page1-entry' });
      },
      (err) => {        
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }
  changeType(type: string) {
    this.authType = type;
    if (this.authType === 'register') {
      this.authForm.addControl('username', new FormControl());
      this.title = 'Sign up';
    } else {
      this.authForm.removeControl('username');
      this.title = 'Sign in';
    }
  }
}
