import { AddressRes, SimpleAddressReq } from '../../models/adress.model';
import { environment } from '../../../environments/environment';
import { AddressService } from './address.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AddressImplService implements AddressService {
  constructor(private http: HttpClient) {}

  getCurrentAddress(): Observable<AddressRes> {
    return this.http.get<AddressRes>(`${environment.backendHost}/api/db/accounts/address`, {
      withCredentials: true,
    });
  }

  updateAddress(address: SimpleAddressReq): Observable<AddressRes> {
    return this.http.put<AddressRes>(`${environment.backendHost}/api/db/accounts/address`, address, {
      withCredentials: true,
    });
  }
}
