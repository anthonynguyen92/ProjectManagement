import { RestService, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetSystemSettingForEditDto, CreateUpdateSystemSettingDto, GetSystemSettingInput, GetSystemSettingDto } from '../models';

@Injectable({ providedIn: 'root' })
export class SystemSettingService {
  apiName = 'Default';

  constructor(private restService: RestService) { }

  getById(id: string): Observable<GetSystemSettingForEditDto> {
    return this.restService.request({ url: `/api/systemconfiguration/systemsetting/${id}`, method: 'GET' }, { apiName: this.apiName });
  }
  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/systemconfiguration/systemsetting/${id}`, method: 'DELETE' }, { apiName: this.apiName });
  }
  saveByInput(body: CreateUpdateSystemSettingDto): Observable<string> {
    return this.restService.request({ url: '/api/systemconfiguration/systemSetting/save', method: 'POST', body }, { apiName: this.apiName });
  }
  getListPagedByInput(params = {} as GetSystemSettingInput): Observable<PagedResultDto<GetSystemSettingDto>> {
    return this.restService.request({ url: '/api/systemconfiguration/systemsetting/paged', method: 'GET', params }, { apiName: this.apiName });
  }
  getAll(): Observable<GetSystemSettingDto[]> {
    return this.restService.request({ url: '/api/systemconfiguration/systemsetting', method: 'GET' }, { apiName: this.apiName });
  }
  toggleStatus(id: string): Observable<void> {
    return this.restService.request({ url: `/api/systemconfiguration/systemsetting/${id}/toggleStatus`, method: 'POST' }, { apiName: this.apiName });
  }
}
