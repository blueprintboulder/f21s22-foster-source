import { EventEmitter, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Token } from '../../models/account.model';
import jwtDecode, { JwtDecodeOptions } from 'jwt-decode';
import * as moment from 'moment';

export enum Privilege {
  NONE,
  USER,
  MOD,
  ADMIN,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedInEvent: EventEmitter<void> = new EventEmitter<void>();
  public loggedOutEvent: EventEmitter<void> = new EventEmitter<void>();

  private privilegeLevel = Privilege.NONE;
  private expiresAt = moment();

  constructor(private cookieService: CookieService) {
    this.init();
  }

  init(): void {
    const token = this.getToken();
    console.log('init');
    console.log(token);
    if (token) {
      this.expiresAt = moment().add(token.exp, 'second');
      this.privilegeLevel = token.privilegeLevel;
      this.emitLoggedIn();
    } else {
      this.privilegeLevel = Privilege.NONE;
    }
  }

  getToken(): Token | undefined {
    try {
      const token = this.cookieService.get('access-token');
      console.log('About to decode');
      console.log(jwtDecode(token));
      return jwtDecode(token);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  validTime(): boolean {
    const valid = moment().isBefore(this.expiresAt);
    if (!valid) {
      this.emitLoggedOut();
      return false;
    }
    return true;
  }

  isUser(): boolean {
    return this.privilegeLevel === Privilege.USER && this.validTime();
  }

  isAtLeastUser(): boolean {
    return this.privilegeLevel >= Privilege.USER && this.validTime();
  }

  isMod(): boolean {
    return this.privilegeLevel === Privilege.MOD && this.validTime();
  }

  isAtLeastMod(): boolean {
    return this.privilegeLevel >= Privilege.MOD && this.validTime();
  }

  isAdmin(): boolean {
    return this.privilegeLevel === Privilege.ADMIN && this.validTime();
  }

  isAtLeastAdmin(): boolean {
    return this.privilegeLevel >= Privilege.ADMIN && this.validTime();
  }

  logout(): void {
    this.cookieService.delete('access-token');
    this.emitLoggedOut();
  }

  emitLoggedIn(): void {
    this.loggedInEvent.emit();
  }

  emitLoggedOut(): void {
    this.loggedOutEvent.emit();
  }
}
