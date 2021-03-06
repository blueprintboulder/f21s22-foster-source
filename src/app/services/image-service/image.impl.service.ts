import { ImageService, ImgKey } from './image.service';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ImagePostRes } from '../../models/image.model';

export class ImageImplService implements ImageService {
  constructor(private http: HttpClient) {}

  public uploadImage(image: File): Observable<ImagePostRes> {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post<ImagePostRes>(`${environment.backendHost}/api/utils/images`, formData, {
      withCredentials: true,
    });
  }

  public deleteImage(key: string): Observable<any> {
    return this.http.delete<any>(`${environment.backendHost}/api/utils/images/${encodeURIComponent(key)}`, {
      withCredentials: true,
    });
  }
}
