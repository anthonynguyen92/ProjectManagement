import { RestService , PagedResultDto} from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChangePasswordService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 updatePassword(body:{currentPassword:string,newPassword:string}): Observable<void> {
   return this.restService.request({ url: `/api/identity/my-profile/change-password`, method: 'POST',body },{ apiName: this.apiName });
 }
 
}
