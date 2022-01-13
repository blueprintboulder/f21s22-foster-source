import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availability, SimpleAvailability } from '../../models/availability.model';

@Injectable({
  providedIn: 'root',
})
export abstract class AvailabilityService {
  public abstract getAvailabilityByProfileId(id: number): Observable<Availability>;
  public abstract deleteAvailability(id: number): Observable<Availability>;
  public abstract createAvailability(availability: Availability): Observable<Availability>;
  public abstract updateAvailability(availability: Availability): Observable<Availability>;

  public abstract removeTemporaryAvailability(): Observable<any>;
  public abstract addTemporaryAvailability(req: SimpleAvailability): Observable<SimpleAvailability>;
}
