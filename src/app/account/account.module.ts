import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountPageComponent } from './account-page/account-page.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
import { UpdateCaseWorkerComponent } from './update-case-worker/update-case-worker.component';

@NgModule({
  declarations: [
    AccountPageComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    UpdateAddressComponent,
    UpdatePhoneComponent,
    UpdateCaseWorkerComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}