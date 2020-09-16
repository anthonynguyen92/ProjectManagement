import { Injectable } from "@angular/core";
import { RestService, PagedResultDto } from '@abp/ng.core';
import { CreateOrUpdateProjectDto, GetProjectDto, GetProjectForEditDto, GetProjectForInputDto } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  apiName = 'Default';

  constructor(private readonly restService: RestService) { }

  getbyId(id: string): Observable<GetProjectForEditDto> {
    return this.restService.request({ url: `/api/projectmanagement/project/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }

  deleteByid(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/project/${id}]`, method: 'DELETE' },
      { apiName: this.apiName });
  }

  saveById(body: CreateOrUpdateProjectDto): Observable<string> {
    return this.restService.request({ url: '/api/projectmanagement/project/save', body, method: 'POST' },
      { apiName: this.apiName });
  }

  getListByPage(params = {} as GetProjectForInputDto): Observable<PagedResultDto<GetProjectDto>> {
    return this.restService.request({ url: '/api/projectmanagement/project/paged', params, method: 'GET' },
      { apiName: this.apiName });
  }

  getAll(): Observable<GetProjectDto[]> {
    return this.restService.request({ url: '/api/projectmanagement/project', method: 'GET' },
      { apiName: this.apiName });
  }

  toogletStatus(id: string): Observable<void> {
    return this.restService.request({ url: `/api/projectmanagement/project/${id}/toggleStatus`, method: 'POST' },
      { apiName: this.apiName });
  }

  getAllByStudentId(id: string): Observable<PagedResultDto<GetProjectDto>> {
    return this.restService.request({ url: `/api/projectmanagement/project/getAllByStudentId/${id}`, method: 'GET' },
      { apiName: this.apiName });
  }
}

