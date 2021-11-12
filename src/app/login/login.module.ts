import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { CreateAccountModalComponent } from './create-account-modal/create-account-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FinishAccountPageComponent } from './finish-account-page/finish-account-page.component';
import { FinishAccountModalComponent } from './finish-account-modal/finish-account-modal.component';
import { DayAvailabilityInputComponent } from './day-availability-input/day-availability-input.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountPageComponent,
  },
  {
    path: 'create-account/verify/:email',
    component: VerifyEmailComponent,
  },
  {
    path: 'complete-profile',
    component: FinishAccountPageComponent,
  },
];

export const loginRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginModalComponent,
    CreateAccountPageComponent,
    CreateAccountModalComponent,
    VerifyEmailComponent,
    FinishAccountPageComponent,
    FinishAccountModalComponent,
    DayAvailabilityInputComponent,
  ],
  imports: [CommonModule, loginRouting, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [],
})
export class LoginModule {}
