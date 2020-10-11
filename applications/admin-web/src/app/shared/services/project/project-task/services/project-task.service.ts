import { Injectable } from '@angular/core';
import { RestService, PagedResultDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import { CreateUpdateProjectTaskDto, GetProjectTaskDto, GetProjectTaskForInputDto } from '../models';
import { MethodCall } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskService {
  apiName = "Default";

  constructor(private readonly restService: RestService) {

  }

  getById(id: string): Observable<GetProjectTaskDto> {
    return this.restService.request({ url: `/api/projectmanagement/projectTask/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  deleteById(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/projectTask/${id}`, method: 'DELETE' },
      { apiName: this.apiName });
  }

  saveByInput(body: CreateUpdateProjectTaskDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/projectTask/save', body, method: 'POST' },
      { apiName: this.apiName });
  }

  getListByPaged(params = {} as GetProjectTaskForInputDto): Observable<PagedResultDto<GetProjectTaskDto[]>> {
    return this.restService.request({ url: '/api/projectmanagement/projectTask/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetProjectTaskDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/projetTask', method: 'GET' },
      { apiName: this.apiName });
  }
}
