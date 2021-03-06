import { PhoneNumbersRes, PhoneNumbersUpdateReq } from '../../models/phonenumber.model';
import { environment } from '../../../environments/environment';
import { PhoneNumberService } from './phone-number.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class PhoneNumberImplService implements PhoneNumberService {
  constructor(private http: HttpClient) {}

  getPhoneNumbers(): Observable<PhoneNumbersRes> {
    return this.http.get<PhoneNumbersRes>(`${environment.backendHost}/api/db/accounts/phone-numbers`, {
      withCredentials: true,
    });
  }

  updatePhoneNumber(req: PhoneNumbersUpdateReq): Observable<PhoneNumbersRes> {
    return this.http.put<PhoneNumbersRes>(`${environment.backendHost}/api/db/accounts/phone-numbers`, req, {
      withCredentials: true,
    });
  }
}
