import { Injectable } from "@angular/core";
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { GetProjectForEditDto } from '../../project/models';
import { CreateUpdateProjectInformationDto, GetProjectInformationDto, GetProjectInformationForEditDto, GetProjectInformationForinputDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectInformationService {
  apiName = "Default";

  constructor(private readonly restService: RestService) { }

  toggleStatus(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/projectInformation/${id}/toggleStatus`, method: 'POST' },
      { apiName: this.apiName });
  }

  getById(id: string): Observable<GetProjectInformationForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/projectInformation/${id}`, method: 'GEt' },
      { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/projectInformation/${id}`, method: 'DELETE' },
      { apiName: this.apiName });
  }

  saveByInput(body: CreateUpdateProjectInformationDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/projectInformation/save', body: body, method: 'POST' },
      { apiName: this.apiName });
  }

  getListBypaged(params = {} as GetProjectInformationForinputDto): Observable<PagedResultDto<GetProjectInformationDto>> {
    return this.restService.request({ url: '/api/projectmanagement/projectInformation/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetProjectInformationDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/projectInformation', method: 'GET' },
      { apiName: this.apiName });
  }
}
