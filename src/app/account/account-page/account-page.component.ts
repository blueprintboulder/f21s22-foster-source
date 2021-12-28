import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service/account.service';
import { ToastService } from '../../services/toast-service/toast.service';
import { accountServiceProvider } from '../../services/account-service/account.service.provider';
import { Account } from '../../models/account.model';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
  providers: [accountServiceProvider],
})
export class AccountPageComponent implements OnInit {
  public currentAccount: Account;
  public isUser = true;

  constructor(
    private accountService: AccountService,
    private toastService: ToastService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.accountService.getCurrentAccount().subscribe(
      (acc: Account) => {
        this.currentAccount = acc;
        this.isUser = this.authService.getToken()?.privilegeLevel === 1;
      },
      (err) => {
        this.toastService.httpError(err);
      }
    );
  }
}
